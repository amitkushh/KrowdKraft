"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, Users } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#community", label: "Community" },
  { href: "#team", label: "Team" },
  { href: "#faq", label: "FAQ" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const scrollToSection = (href: string) => {
    setIsOpen(false) // Close mobile menu after clicking
    
    // If we're not on the home page, navigate to home page first
    if (pathname !== '/') {
      window.location.href = `/${href}`
      return
    }
    
    // If we're on home page, scroll to section
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link 
            href="/"
            className="flex items-center space-x-2 group cursor-pointer"
          >
            <motion.div 
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
              className="w-12 h-12 relative"
            >
              <Image
                src="/KrowdKraft_Logo.png"
                alt="KrowdKraft Logo"
                width={48}
                height={48}
                className="object-contain"
              />
            </motion.div>
            <span className="font-bold text-2xl neon-text group-hover:text-neon transition-colors duration-300">
              KrowdKraft
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 relative group cursor-pointer"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon transition-all duration-200 group-hover:w-full" />
              </button>
            ))}
            
            {/* Join Community Button */}
            {(
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 600, damping: 25, duration: 0.2 }}
              >
                <Button asChild variant="neon" size="sm" className="ml-4">
                  <Link href="/join-community">
                    <Users className="mr-2 h-4 w-4 pointer-events-none" />
                    Join Our Community
                  </Link>
                </Button>
              </motion.div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              {isOpen ? <X className="h-6 w-6 pointer-events-none" /> : <Menu className="h-6 w-6 pointer-events-none" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t border-white/10"
          >
            <div className="px-4 py-4 space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="block text-muted-foreground hover:text-foreground transition-colors duration-200 py-2 w-full text-left"
                  >
                    {item.label}
                  </button>
                </motion.div>
              ))}
              
              {/* Mobile Join Community Button */}
              {(
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="pt-4 border-t border-white/10"
                >
                  <Button asChild variant="neon" size="sm" className="w-full">
                    <Link href="/join-community" onClick={() => setIsOpen(false)}>
                      <Users className="mr-2 h-4 w-4 pointer-events-none" />
                      Join Our Community
                    </Link>
                  </Button>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

