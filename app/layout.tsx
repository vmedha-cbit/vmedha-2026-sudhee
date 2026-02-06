import React from "react"
import Script from 'next/script'
import type { Metadata } from 'next'
import { Space_Grotesk, JetBrains_Mono, Orbitron } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: '--font-mono',
  display: 'swap',
});
const orbitron = Orbitron({
  subsets: ["latin"],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Vive-le-tech2026',
  description: 'Long live tech - Building the future with innovation',
  icons: {
    icon: '/VIVE_LE_TECH_logo.png',
    apple: '/VIVE_LE_TECH_logo.png',
  },
  verification: {
    google: '93arf0agxceeWmTot7YmBDY3I4V5LJuUfBDz7-cA6-A',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} ${orbitron.variable}`}>
      <body className="font-sans antialiased bg-[#080B1F] text-[#E6E9FF]">
        {children}
        <Analytics />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-7JP6E896XX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-7JP6E896XX');
          `}
        </Script>
      </body>
    </html>
  )
}
