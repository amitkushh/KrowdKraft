"use client"

import { motion } from "framer-motion"
import { Twitter, Instagram, Linkedin, MessageCircle } from "lucide-react"
import { usePathname } from "next/navigation"

const socialLinks = [
  {
    icon: Twitter,
    href: "https://twitter.com/krowdkraft",
    label: "Twitter/X",
    color: "#ffffff"
  },
  {
    icon: Instagram,
    href: "https://instagram.com/krowdkraft",
    label: "Instagram",
    color: "#E1306C"
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/company/krowdkraft",
    label: "LinkedIn",
    color: "#0077B5"
  },
  {
    icon: MessageCircle,
    href: "https://discord.gg/krowdkraft",
    label: "Discord",
    color: "#7289DA"
  }
]

export default function SocialSidebar() {
  const pathname = usePathname()
  
  // Only show on homepage
  if (pathname !== '/') {
    return null
  }

  return (
    <div className="absolute right-6 top-1/2 transform -translate-y-1/2 z-30 hidden lg:block">
      <div className="flex flex-col space-y-4">
        {socialLinks.map((social, index) => {
          const Icon = social.icon
          
          return (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + 1 }}
              whileHover={{ 
                scale: 1.2,
                rotateZ: 5,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              whileTap={{ scale: 0.9 }}
              className="group relative"
            >
              {/* Glow background */}
              <div 
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"
                style={{ 
                  background: `radial-gradient(circle, ${social.color}, transparent)`,
                  transform: 'scale(1.5)'
                }}
              />
              
              {/* Icon container */}
              <div className="relative w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                <Icon 
                  className="w-5 h-5 text-white group-hover:text-white transition-colors duration-300"
                  style={{
                    filter: `drop-shadow(0 0 8px ${social.color}40)`
                  }}
                />
              </div>

              {/* Tooltip */}
              <div className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-black/80 text-white text-sm px-3 py-1 rounded-lg whitespace-nowrap backdrop-blur-sm border border-white/10">
                  {social.label}
                  <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-black/80 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                </div>
              </div>
            </motion.a>
          )
        })}
        
        {/* Vertical line */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ delay: socialLinks.length * 0.1 + 1.2, duration: 0.5 }}
          className="w-px h-16 bg-gradient-to-b from-white/40 to-transparent mx-auto"
        />
      </div>
    </div>
  )
}
