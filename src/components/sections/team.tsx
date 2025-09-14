"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Linkedin, Instagram, ChevronLeft, ChevronRight } from "lucide-react"

// Custom Medium Logo Component
const MediumIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
  </svg>
)

// Custom X Logo Component
const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)
import { useState, useEffect } from "react"

export default function Team() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const teamMembers = [
    {
      name: "Darshan Krishna",
      role: "Founder & CEO",
      bio: "Passionate community contributor who aims to spread importance of community & build a strong community culture",
      image: "/api/placeholder/300/300",
      social: {
        linkedin: "https://www.linkedin.com/in/darshan-krishna-dk/",
        twitter: "https://x.com/CrypTech_DK",
        instagram: "https://www.instagram.com/cryptech_dk/",
        medium: "https://medium.com/@cryptech_dk"
      }
    },
    {
      name: "Deepak N",
      role: "Co-Founder",
      bio: "Focused on growing the developer ecosystem by guiding young talent and sharing experience through community events.",
      image: "/api/placeholder/300/300",
      social: {
        linkedin: "https://www.linkedin.com/in/deepak--n/",
        twitter: null,
        instagram: null,
        medium: null
      }
    },
    {
      name: "Amrutha Druthi",
      role: "Community Manager",
      bio: "A detail-oriented planner who thrives on smart strategies",
      image: "/api/placeholder/300/300",
      social: {
        linkedin: "https://www.linkedin.com/in/amrutha-druthi-8421a8225/",
        twitter: null,
        instagram: null,
        medium: null
      }
    },
    {
      name: "Tharun Kumar",
      role: "Community Moderator",
      bio: "Focused on growing vibrant communities by providing engaging content and utilizing platform features to streamline management and boost engagement.",
      image: "/api/placeholder/300/300",
      social: {
        linkedin: "https://www.linkedin.com/in/tharun-kumar-96ba22283/",
        twitter: null,
        instagram: null,
        medium: null
      }
    },
    {
      name: "Gautham Krishna",
      role: "Media Lead",
      bio: "Loves photography and is always ready to capture moments that tell a story.",
      image: "/api/placeholder/300/300",
      social: {
        linkedin: "https://www.linkedin.com/in/gautham-krishna-3243161a0/",
        twitter: "https://x.com/gkrishnak01",
        instagram: null,
        medium: null
      }
    },
    {
      name: "Viha Shomikha",
      role: "Community Manager",
      bio: "Experienced brand ambassador passionate about creating genuine connections and growing communities.",
      image: "/api/placeholder/300/300",
      social: {
        linkedin: "https://www.linkedin.com/in/vihashomikhaas/",
        twitter: "https://x.com/VihaTacklesBugs",
        instagram: null,
        medium: null
      }
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % teamMembers.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length)
  }

  // Keyboard navigation for team slider
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        prevSlide()
      } else if (event.key === 'ArrowRight') {
        nextSlide()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [nextSlide, prevSlide])

  // Calculate card positions and transforms for horizontal carousel layout
  const getTransform = (index: number) => {
    const totalMembers = teamMembers.length
    const relativeIndex = (index - currentIndex + totalMembers) % totalMembers
    
    // Position cards horizontally with center focus
    let x = 0
    let scale = 1
    let opacity = 1
    let zIndex = 0
    
    if (relativeIndex === 0) {
      // Center card
      x = 0
      scale = 1.1
      opacity = 1
      zIndex = 10
    } else if (relativeIndex === 1 || relativeIndex === totalMembers - 1) {
      // Adjacent cards
      x = relativeIndex === 1 ? 320 : -320
      scale = 0.9
      opacity = 0.7
      zIndex = 5
    } else if (relativeIndex === 2 || relativeIndex === totalMembers - 2) {
      // Second level cards
      x = relativeIndex === 2 ? 580 : -580
      scale = 0.7
      opacity = 0.4
      zIndex = 3
    } else {
      // Hidden cards
      x = relativeIndex < totalMembers / 2 ? 800 : -800
      scale = 0.5
      opacity = 0.2
      zIndex = 1
    }
    
    return {
      x: x,
      scale: scale,
      opacity: opacity,
      zIndex: zIndex
    }
  }

  return (
    <section className="py-24 bg-secondary/20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Meet The{" "}
            <span className="neon-text">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-5xl mx-auto text-balance">
            Our diverse team of creatives, strategists, and cultural experts 
            who understand modern audience behavior and trends.
          </p>
        </motion.div>

        {/* Circular Slider Container */}
        <div className="relative mb-12">
          {/* Navigation Buttons */}
          <motion.button
            onClick={prevSlide}
            whileHover={{ 
              scale: 1.1, 
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              boxShadow: "0 0 20px rgba(168, 85, 247, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className="absolute left-4 z-20 w-14 h-14 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:border-neon/30"
            style={{ 
              top: "50%", 
              marginTop: "-28px" // Half of height (56px / 2)
            }}
            aria-label="Previous team member"
          >
            <ChevronLeft className="w-7 h-7 text-white" />
          </motion.button>
          
          <motion.button
            onClick={nextSlide}
            whileHover={{ 
              scale: 1.1, 
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              boxShadow: "0 0 20px rgba(168, 85, 247, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className="absolute right-4 z-20 w-14 h-14 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:border-neon/30"
            style={{ 
              top: "50%", 
              marginTop: "-28px" // Half of height (56px / 2)
            }}
            aria-label="Next team member"
          >
            <ChevronRight className="w-7 h-7 text-white" />
          </motion.button>

          {/* Horizontal Slider */}
          <div className="relative h-[32rem] flex items-center justify-center overflow-hidden">
            <div className="relative w-full h-full flex items-center justify-center">
              {teamMembers.map((member, index) => {
                const transform = getTransform(index)
                const relativeIndex = (index - currentIndex + teamMembers.length) % teamMembers.length
                
                return (
                  <motion.div
                    key={member.name}
                    className="absolute"
                    initial={false}
                    animate={{
                      x: transform.x,
                      scale: transform.scale,
                      opacity: transform.opacity,
                      zIndex: transform.zIndex
                    }}
                    transition={{ 
                      duration: 0.5, 
                      ease: "easeInOut",
                      type: "spring",
                      stiffness: 300,
                      damping: 30
                    }}
                    whileHover={relativeIndex === 0 ? { 
                      scale: 1.15,
                      rotateY: 5
                    } : {}}
                    onClick={() => setCurrentIndex(index)}
                  >
                    <div className={`glass-card p-6 text-center transform-gpu cursor-pointer w-72 transition-all duration-300 ${
                      relativeIndex === 0 ? 'border-2 border-neon/30 shadow-lg shadow-neon/20' : 'border border-white/10'
                    }`}>
                      {/* Avatar placeholder */}
                      <div className={`w-24 h-24 bg-gradient-to-br from-neon/20 to-purple-500/20 rounded-full mx-auto mb-4 flex items-center justify-center transition-all duration-300 ${
                        relativeIndex === 0 ? 'ring-2 ring-neon/40 shadow-lg shadow-neon/30' : ''
                      }`}>
                        <div className="w-16 h-16 bg-neon/30 rounded-full flex items-center justify-center">
                          <span className="text-xl font-bold text-white">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      </div>

                      <h3 className={`text-xl font-semibold mb-1 transition-colors duration-300 ${
                        relativeIndex === 0 ? 'text-white' : 'text-muted-foreground'
                      }`}>{member.name}</h3>
                      <p className="text-neon text-sm font-medium mb-3">{member.role}</p>
                      <p className={`text-sm leading-relaxed mb-4 transition-colors duration-300 ${
                        relativeIndex === 0 ? 'text-white/80' : 'text-muted-foreground'
                      }`}>
                        {member.bio}
                      </p>

                      {/* Social links */}
                      <div className="flex justify-center space-x-3">
                        {member.social.linkedin && (
                          <a 
                            href={member.social.linkedin} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`transition-all duration-300 hover:scale-110 ${
                              relativeIndex === 0 ? 'text-white hover:text-neon' : 'text-muted-foreground hover:text-neon'
                            }`}
                          >
                            <Linkedin className="h-5 w-5" />
                          </a>
                        )}
                        {member.social.twitter && (
                          <a 
                            href={member.social.twitter} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`transition-all duration-300 hover:scale-110 ${
                              relativeIndex === 0 ? 'text-white hover:text-neon' : 'text-muted-foreground hover:text-neon'
                            }`}
                          >
                            <XIcon className="h-5 w-5" />
                          </a>
                        )}
                        {member.social.instagram && (
                          <a 
                            href={member.social.instagram} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`transition-all duration-300 hover:scale-110 ${
                              relativeIndex === 0 ? 'text-white hover:text-neon' : 'text-muted-foreground hover:text-neon'
                            }`}
                          >
                            <Instagram className="h-5 w-5" />
                          </a>
                        )}
                        {member.social.medium && (
                          <a 
                            href={member.social.medium} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`transition-all duration-300 hover:scale-110 ${
                              relativeIndex === 0 ? 'text-white hover:text-neon' : 'text-muted-foreground hover:text-neon'
                            }`}
                          >
                            <MediumIcon className="h-5 w-5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {teamMembers.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-neon scale-125' 
                    : 'bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to team member ${index + 1}`}
              />
            ))}
          </div>
        </div>


      </div>
    </section>
  )
}
