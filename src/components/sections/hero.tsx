"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import SimpleGlobe3D from "@/components/simple-globe"
import SocialSidebar from "@/components/social-sidebar"
import { Suspense } from "react"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Globe Background */}
      <Suspense fallback={null}>
        <SimpleGlobe3D />
      </Suspense>

      {/* Particle Background */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 120 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
              boxShadow: '0 0 4px rgba(168, 85, 247, 0.5)'
            }}
          />
        ))}
      </div>

      {/* Social Media Icons */}
      <SocialSidebar />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center flex items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mt-16"
        >
          {/* Main Heading */}
          <motion.h1 
            className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance text-center"
            style={{ 
              background: "linear-gradient(135deg, #ffffff 0%, #a855f7 50%, #ec4899 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))"
            }}
          >
            Bridge Your Brand to{" "}
            <span className="neon-text">Gen Z & Millennials</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto text-balance text-center"
          >
            Modern marketing agency. We create cultural moments 
            that connect brands with the next generation.
          </motion.p>

          {/* CTA Button */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center items-center mb-12 text-center"
          >
            <motion.div
              whileHover={{ 
                scale: 1.05,
                rotateX: 5,
                rotateY: 5,
                z: 10
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Button variant="neon" size="lg" className="group relative transform-gpu">
                Book a Call
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>


        </motion.div>
      </div>
    </section>
  )
}

