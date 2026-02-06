'use client'

import { useEffect, useRef, useState, ReactNode } from 'react'

interface ViewportLazyProps {
    children: ReactNode
    minHeight?: string
    rootMargin?: string
}

export function ViewportLazy({
    children,
    minHeight = '50vh',
    rootMargin = '200px'
}: ViewportLazyProps) {
    const [isVisible, setIsVisible] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        // If IntersectionObserver is not supported, render immediately (SSR/fallback)
        if (!('IntersectionObserver' in window)) {
            setIsVisible(true)
            return
        }

        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    // Once visible, we don't need to observe anymore
                    observer.disconnect()
                }
            },
            {
                rootMargin,
                threshold: 0.01
            }
        )

        if (containerRef.current) {
            observer.observe(containerRef.current)
        }

        return () => {
            observer.disconnect()
        }
    }, [rootMargin])

    return (
        <div ref={containerRef} style={{ minHeight }} className="w-full">
            {isVisible ? children : null}
        </div>
    )
}
