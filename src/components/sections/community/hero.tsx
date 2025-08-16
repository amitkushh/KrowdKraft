"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Users, PlusCircle } from "lucide-react"

export default function CommunityHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black to-gray-900">
      {/* Background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 80 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >

          {/* Main Heading */}
          <motion.h1 
            className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance"
            style={{ 
              background: "linear-gradient(135deg, #ffffff 0%, #a855f7 50%, #ec4899 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))"
            }}
          >
            Welcome to Our{" "}
            <span className="neon-text">Community</span>
          </motion.h1>

                     {/* Tagline */}
           <motion.p 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-balance"
           >
             A vibrant space where creativity meets innovation. 
           </motion.p>

           {/* CTA Buttons */}
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.5 }}
             className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
           >
             <motion.div
               whileHover={{ 
                 scale: 1.05,
                 rotateX: 3,
                 rotateY: 3,
                 z: 10
               }}
               whileTap={{ scale: 0.95 }}
               transition={{ type: "spring", stiffness: 300, damping: 20 }}
               style={{ transformStyle: "preserve-3d" }}
             >
               <Button 
                 onClick={() => document.querySelector('#event-proposal')?.scrollIntoView({ behavior: 'smooth' })}
                 variant="neon" 
                 size="lg" 
                 className="group transform-gpu"
               >
                 <PlusCircle className="mr-2 h-4 w-4" />
                 Submit Event Proposal
               </Button>
             </motion.div>

             <motion.div
               whileHover={{ 
                 scale: 1.05,
                 rotateX: 3,
                 rotateY: 3,
                 z: 10
               }}
               whileTap={{ scale: 0.95 }}
               transition={{ type: "spring", stiffness: 300, damping: 20 }}
               style={{ transformStyle: "preserve-3d" }}
             >
               <Button 
                 variant="outline" 
                 size="lg" 
                 className="group transform-gpu border-neon/30 hover:bg-neon/10"
               >
                 <Users className="mr-2 h-4 w-4" />
                 Join Our Community
               </Button>
             </motion.div>
           </motion.div>

          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-2xl mx-auto"
          >
            {[
              { number: "900+", label: "Members" },
              { number: "7", label: "Events" },
              { number: "15+", label: "Workshops" },
              { number: "3", label: "Hackathons" },
            ].map((stat, index) => (
              <motion.div 
                key={stat.label}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-bold neon-text">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
