import { db } from './firebase'
import {
    doc,
    getDoc,
    setDoc,
    updateDoc,
    increment,
    serverTimestamp,
    collection,
    query,
    where,
    getDocs,
    writeBatch
} from 'firebase/firestore'

export interface RegistrationData {
    fullName: string
    rollNumber: string
    college: string
    branch: string
    year: string
    email: string
    phoneNumber: string
    event: 'dsa-master' | 'cipherville' | 'ethitech-mania' | 'all-events'
}

export interface RegistrationResult {
    success: boolean
    message: string
    error?: string
}

/**
 * Checks if a user is already registered in a specific collection
 * Returns error message if duplicate found, null otherwise
 */
async function checkDuplicate(
    collectionName: string,
    email: string,
    phoneNumber: string,
    sanitizedEmail: string
): Promise<string | null> {
    // 1. Check Email (ID based)
    const docRef = doc(db, collectionName, sanitizedEmail)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
        return `Email ${email} is already registered for ${formatEventName(collectionName)}`
    }

    // 2. Check Phone Number (Query based)
    const phoneQuery = query(
        collection(db, collectionName),
        where('phoneNumber', '==', phoneNumber)
    )
    const phoneSnap = await getDocs(phoneQuery)

    if (!phoneSnap.empty) {
        return `Phone number ${phoneNumber} is already registered for ${formatEventName(collectionName)}`
    }

    return null
}

function formatEventName(id: string): string {
    const names: Record<string, string> = {
        'dsa-master': 'DSA MASTER',
        'cipherville': 'Cipherville',
        'ethitech-mania': 'Ethitech Mania'
    }
    return names[id] || id
}

export async function submitRegistration(data: RegistrationData): Promise<RegistrationResult> {
    try {
        const sanitizedEmail = data.email.toLowerCase().trim().replace(/[.#$[\]]/g, '_')

        let targetCollections: string[] = []

        if (data.event === 'all-events') {
            targetCollections = ['dsa-master', 'cipherville', 'ethitech-mania']
        } else {
            targetCollections = [data.event]
        }

        // 1. Pre-check for duplicates in ALL target collections
        // We want to fail fast and atomically (conceptually) - if one fails, don't register for any
        for (const col of targetCollections) {
            const errorMsg = await checkDuplicate(col, data.email, data.phoneNumber, sanitizedEmail)
            if (errorMsg) {
                return {
                    success: false,
                    message: errorMsg,
                    error: 'DUPLICATE_ENTRY'
                }
            }
        }

        // 2. Register in all collections
        // We can use a batch to ensure atomicity
        const batch = writeBatch(db)

        targetCollections.forEach(col => {
            const docRef = doc(db, col, sanitizedEmail)
            const eventData = {
                ...data,
                email: data.email.toLowerCase().trim(),
                registeredAt: serverTimestamp(),
                registrationSource: data.event // Track if they came via combo or direct
            }
            batch.set(docRef, eventData)
        })

        // 3. Update Counters & Unique Tracking
        const statsRef = doc(db, 'counters', 'stats')
        const participantRef = doc(db, 'participants', sanitizedEmail)

        // Check if this human exists globally
        const participantSnap = await getDoc(participantRef)
        const isNewUser = !participantSnap.exists()

        const isCBIT = data.college.toUpperCase() === 'CBIT' || data.college.trim() === ''
        const collegeField = isCBIT ? 'cbitCount' : 'nonCbitCount'
        const uniqueCollegeField = isCBIT ? 'uniqueCbitCount' : 'uniqueNonCbitCount'

        // Base increments (Transaction counts - always increase)
        const increments: any = {
            totalRegistrations: increment(1), // Forms submitted
            [collegeField]: increment(1)
        }

        // Unique increments (Only if new human)
        if (isNewUser) {
            increments.uniqueRegistrations = increment(1)
            increments[uniqueCollegeField] = increment(1)

            // Add to participants collection to mark as "seen"
            batch.set(participantRef, {
                email: data.email,
                isCBIT: isCBIT,
                college: data.college,
                firstRegisteredAt: serverTimestamp()
            })
        }

        targetCollections.forEach(col => {
            increments[`events.${col}`] = increment(1)
        })

        batch.update(statsRef, increments)

        await batch.commit()

        return {
            success: true,
            message: 'Registration successful!'
        }

    } catch (error: any) {
        console.error('Registration error:', error)
        return {
            success: false,
            message: 'Something went wrong. Please try again.',
            error: error.message || 'UNKNOWN_ERROR'
        }
    }
}
