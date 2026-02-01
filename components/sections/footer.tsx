'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { Instagram, Linkedin, Globe, MapPin, Mail, Phone } from 'lucide-react'

const footerStats = [
  { icon: <Instagram size={24} />, link: "https://www.instagram.com/cbit.vmedha/#", label: "Instagram" },
  { icon: <Linkedin size={24} />, link: "https://in.linkedin.com/company/vmedha-cbit", label: "LinkedIn" },
  { icon: <Globe size={24} />, link: "https://vmedha-cbit.org/", label: "Website" }
]

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "#about" },
  { name: "Events", path: "#events" },
  { name: "Contact Us", path: "#contact" }
]

export function Footer() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const quickLinksAligned = [
    { name: "Home", path: "/" },
    { name: "Vision", path: "#vision" },
    { name: "Products", path: "#products" },
    { name: "Team", path: "#team" },
    { name: "Contact Us", path: "#contact" }
  ]

  return (
    <footer id="contact" className="relative py-16 px-[5%] bg-transparent overflow-hidden mt-auto">
      {/* Glassmorphism Background Layer */}
      <div className="absolute inset-0 bg-[#080B1F]/20 backdrop-blur-[30px] border-t border-primary/10 shadow-[0_-10px_40px_rgba(0,0,0,0.2)] z-[1]" />

      <div className="relative z-10 max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Branding */}
          <div className="flex flex-col gap-6">
            <div>
              <div className="flex items-center gap-4 mb-2">
                <Image
                  src="/vmedha-logo.png"
                  alt="VMedha Logo"
                  width={50}
                  height={50}
                  className="object-contain"
                />
                <h2 className="text-3xl font-extrabold tracking-[2px] bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                  VMEDHA
                </h2>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                Fostering innovation and technical excellence at CBIT. Join us in exploring the frontiers of technology.
              </p>
            </div>

            <div className="flex gap-4">
              {footerStats.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground p-2.5 bg-white/5 rounded-full flex items-center justify-center transition-all duration-300 border border-white/10 hover:bg-primary hover:text-background hover:-translate-y-[3px] hover:shadow-[0_0_15px_#00F2FF] cursor-pointer"
                  aria-label={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-semibold text-primary uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="list-none p-0 flex flex-col gap-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className="text-foreground/80 no-underline transition-all duration-300 inline-block hover:text-primary hover:translate-x-[5px] cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-semibold text-primary uppercase tracking-wider">
              Contact Us
            </h3>
            <div className="flex flex-col gap-5">
              <div className="flex gap-4 items-start">
                <MapPin size={20} className="text-primary shrink-0 mt-1" />
                <span className="text-foreground/80 leading-relaxed">
                  Chaitanya Bharathi Institute of Technology (CBIT), Hyderabad
                </span>
              </div>
              <div className="flex gap-4 items-center">
                <Mail size={20} className="text-primary shrink-0" />
                <a
                  href="mailto:vmedhaofficial@gmail.com"
                  className="text-foreground/80 no-underline transition-colors duration-300 hover:text-primary cursor-pointer"
                >
                  vmedhaofficial@gmail.com
                </a>
              </div>

              <div className="mt-4">
                <h4 className="text-[12px] font-bold text-primary uppercase tracking-[2px] mb-4 flex items-center gap-2">
                  <Phone size={14} className="text-primary" /> Contacts
                </h4>
                {/* Individual Contacts - Side by Side */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                  <div className="group transition-all duration-300 border border-white/10 rounded-xl p-3 hover:border-primary/40 bg-white/5">
                    <p className="text-foreground font-bold text-sm leading-tight mb-0.5 group-hover:text-primary transition-colors">Sai Prakash</p>
                    <p className="text-foreground/50 text-[9px] uppercase tracking-wider mb-2">General Secretary</p>
                    <a
                      href="tel:8341264462"
                      className="text-[#00F2FF] font-mono text-[11px] tracking-tight no-underline hover:text-primary transition-colors block"
                    >
                      +91 83412 64462
                    </a>
                  </div>

                  <div className="group transition-all duration-300 border border-white/10 rounded-xl p-3 hover:border-primary/40 bg-white/5">
                    <p className="text-foreground font-bold text-sm leading-tight mb-0.5 group-hover:text-primary transition-colors">Sai Manoj</p>
                    <p className="text-foreground/50 text-[9px] uppercase tracking-wider mb-2">Tech Team Head</p>
                    <a
                      href="tel:8919312156"
                      className="text-[#00F2FF] font-mono text-[11px] tracking-tight no-underline hover:text-primary transition-colors block"
                    >
                      +91 89193 12156
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Divider & Copyright */}

        <div className="border-t border-white/10 pt-8 text-center text-foreground/50 text-sm">
          <p>&copy; {mounted ? new Date().getFullYear() : '2026'} Vive-Le-Tech | VMedha Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
