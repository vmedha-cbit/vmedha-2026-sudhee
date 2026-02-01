'use client'

import { HudBadge } from '@/components/ui/hud-frame'

const footerLinks = {
  products: [
    { label: 'OpenCore Platform', href: '#' },
    { label: 'SysFlow Analytics', href: '#' },
    { label: 'DevConnect Suite', href: '#' },
    { label: 'API Documentation', href: '#' },
  ],
  company: [
    { label: 'About Us', href: '#' },
    { label: 'Careers', href: '#careers' },
    { label: 'Blog', href: '#' },
    { label: 'Press Kit', href: '#' },
  ],
  resources: [
    { label: 'Documentation', href: '#' },
    { label: 'Community', href: '#' },
    { label: 'Support', href: '#' },
    { label: 'Status', href: '#' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
}

export function Footer() {
  return (
    <footer id="contact" className="relative pt-20 pb-8 px-6 border-t border-[#3A3F7A]/30">
      {/* Atmospheric background with Deep Space Blue */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#080B1F] via-[#1A1C3D]/30 to-transparent pointer-events-none" />
      
      {/* Subtle glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-[#00D2C8]/10 to-transparent blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top section */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-16">
          {/* Brand */}
          <div className="lg:max-w-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 border-2 border-[#00F2FF] rotate-45 animate-pulse-glow" />
                <div className="absolute inset-2 bg-gradient-to-br from-[#00F2FF]/30 to-[#00D2C8]/20 rotate-45" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[#00F2FF] font-bold text-sm" style={{ textShadow: '0 0 10px rgba(0, 242, 255, 0.5)' }}>V</span>
                </div>
              </div>
              <span className="font-display text-2xl tracking-wider bg-gradient-to-r from-[#00F2FF] to-[#00D2C8] bg-clip-text text-transparent">
                Vive-Le-Tech
              </span>
            </div>
            <p className="text-[#7D7DBE] mb-6 leading-relaxed">
              Exploring the cosmos of technology. Where innovation meets infinity. 🚀
            </p>
            <div className="flex gap-2">
              <HudBadge variant="accent" className="animate-pulse-glow">
                <span className="text-[#E6E9FF]">{"We're Building"}</span>
              </HudBadge>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-display text-sm tracking-wider text-[#E6E9FF] mb-4 uppercase flex items-center gap-2">
                <span className="w-2 h-2 bg-[#00D2C8] rounded-full animate-pulse-glow" />
                Explore
              </h4>
              <ul className="space-y-3">
                {footerLinks.products.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-[#7D7DBE] hover:text-[#00F2FF] transition-colors duration-300 text-sm hover:translate-x-1 inline-block">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-display text-sm tracking-wider text-[#E6E9FF] mb-4 uppercase flex items-center gap-2">
                <span className="w-2 h-2 bg-[#00D2C8] rounded-full animate-pulse-glow" />
                Connect
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-[#7D7DBE] hover:text-[#00F2FF] transition-colors duration-300 text-sm hover:translate-x-1 inline-block">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-display text-sm tracking-wider text-[#E6E9FF] mb-4 uppercase flex items-center gap-2">
                <span className="w-2 h-2 bg-[#00D2C8] rounded-full animate-pulse-glow" />
                Learn
              </h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-[#7D7DBE] hover:text-[#00F2FF] transition-colors duration-300 text-sm hover:translate-x-1 inline-block">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-display text-sm tracking-wider text-[#E6E9FF] mb-4 uppercase flex items-center gap-2">
                <span className="w-2 h-2 bg-[#00D2C8] rounded-full animate-pulse-glow" />
                Legal
              </h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-[#7D7DBE] hover:text-[#00F2FF] transition-colors duration-300 text-sm hover:translate-x-1 inline-block">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Divider with Electric Cyan gradient */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#00F2FF]/40 to-transparent mb-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00D2C8]/40 to-transparent animate-pulse" />
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[#7D7DBE] text-sm flex items-center gap-2">
            <span className="text-[#E6E9FF]">©</span> {new Date().getFullYear()} Vive-Le-Tech. 
            <span className="hidden sm:inline">Crafted with</span> 
            <span className="text-[#00D2C8] animate-pulse">✨</span>
            <span className="hidden sm:inline">in the cosmos</span>
          </div>

          {/* Connect button with Neon Teal accent */}
          <a
            href="#"
            className="group flex items-center gap-3 px-6 py-2 rounded-lg border border-[#3A3F7A] hover:border-[#00D2C8] bg-[#1A1C3D]/30 hover:bg-[#00D2C8]/10 transition-all duration-300"
          >
            <span className="text-sm tracking-wider uppercase text-[#7D7DBE] group-hover:text-[#00F2FF] transition-colors">
              {"Let's Connect"}
            </span>
            <span className="w-8 h-[2px] bg-gradient-to-r from-[#00F2FF] to-[#00D2C8] group-hover:w-12 transition-all duration-300" />
          </a>
        </div>
        
        {/* Celestial decoration at bottom */}
        <div className="mt-8 flex justify-center gap-2 opacity-30">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className="w-1 h-1 rounded-full bg-[#E6E9FF]"
              style={{
                opacity: 0.3 + Math.random() * 0.5,
                animation: `twinkle ${2 + Math.random() * 2}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  )
}
