"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, Home } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

const communityNavItems = [
  { href: "#about", label: "About" },
  { href: "#past-events", label: "Past Events" },
  { href: "#upcoming-events", label: "Upcoming" },
  { href: "#event-proposal", label: "Submit Proposal" },
  { href: "#collaborations", label: "Collaborations" },
]

export default function CommunityNavigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false) // Close mobile menu after clicking
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
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div 
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="w-12 h-12 relative"
            >
              <Image
                src="/logo.png"
                alt="KrowdKraft Logo"
                width={48}
                height={48}
                className="object-contain"
              />
            </motion.div>
            <span className="font-bold text-2xl neon-text group-hover:text-neon transition-colors">
              KrowdKraft
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {communityNavItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-foreground transition-colors relative group cursor-pointer"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon transition-all group-hover:w-full" />
              </button>
            ))}
            
            {/* Home Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Button asChild variant="outline" size="sm" className="ml-4 border-neon/30 hover:bg-neon/10">
                <Link href="/">
                  <Home className="mr-2 h-4 w-4 pointer-events-none" />
                  Home
                </Link>
              </Button>
            </motion.div>
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
              {communityNavItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="block text-muted-foreground hover:text-foreground transition-colors py-2 w-full text-left"
                  >
                    {item.label}
                  </button>
                </motion.div>
              ))}
              
              {/* Mobile Home Button */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: communityNavItems.length * 0.1 }}
                className="pt-4 border-t border-white/10"
              >
                <Button asChild variant="outline" size="sm" className="w-full border-neon/30 hover:bg-neon/10">
                  <Link href="/" onClick={() => setIsOpen(false)}>
                    <Home className="mr-2 h-4 w-4 pointer-events-none" />
                    Home
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
