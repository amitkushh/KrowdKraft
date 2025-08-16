"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Users, Trophy, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

export default function PastEvents() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const events = [
    {
      title: "GenZ Marketing Mastery Workshop",
      date: "March 15, 2024",
      location: "San Francisco, CA",
      attendees: "120+",
      type: "Workshop",
      description: "Deep dive into modern marketing strategies that resonate with Gen Z audiences.",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Brand Innovation Hackathon",
      date: "February 8-9, 2024",
      location: "Virtual Event",
      attendees: "200+",
      type: "Hackathon",
      description: "48-hour intensive hackathon focused on creating innovative brand solutions.",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Future of Community Building",
      date: "January 20, 2024",
      location: "Los Angeles, CA",
      attendees: "80+",
      type: "Seminar",
      description: "Expert panel discussion on the evolution of community engagement.",
      image: "/api/placeholder/400/250"
    },
    {
      title: "Creative Campaign Competition",
      date: "December 12, 2023",
      location: "New York, NY",
      attendees: "150+",
      type: "Competition",
      description: "Showcase of the most creative marketing campaigns by community members.",
      image: "/api/placeholder/400/250"
    }
  ]

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(events.length / 2))
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(events.length / 2)) % Math.ceil(events.length / 2))
  }

  const getVisibleEvents = () => {
    const eventsPerSlide = 2
    const startIndex = currentIndex * eventsPerSlide
    return events.slice(startIndex, startIndex + eventsPerSlide)
  }

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Our Past{" "}
            <span className="neon-text">Events</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Take a look at the amazing events we've hosted and the incredible 
            experiences we've created together.
          </p>
        </motion.div>

        {/* Slider Controls */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <motion.button
            onClick={prevSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="h-6 w-6 text-neon" />
          </motion.button>
          
          <div className="flex space-x-2">
            {Array.from({ length: Math.ceil(events.length / 2) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-neon' : 'bg-white/20'
                }`}
              />
            ))}
          </div>
          
          <motion.button
            onClick={nextSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-12 h-12 bg-white/5 hover:bg-white/10 rounded-full flex items-center justify-center transition-colors"
          >
            <ChevronRight className="h-6 w-6 text-neon" />
          </motion.button>
        </div>

        {/* Events Slider */}
        <div className="relative overflow-hidden">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            {getVisibleEvents().map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.02,
                rotateX: 2,
                rotateY: 2,
                z: 10
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="glass-card overflow-hidden transform-gpu cursor-pointer group"
            >
              {/* Event Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-neon/20 to-purple-500/20 flex items-center justify-center">
                <div className="text-center">
                  <Trophy className="h-12 w-12 text-neon mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">{event.type}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-neon/10 text-neon rounded-full text-xs font-medium">
                    {event.type}
                  </span>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-1" />
                    {event.attendees}
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-neon transition-colors">
                  {event.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {event.description}
                </p>

                <div className="space-y-2">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2 text-neon" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2 text-neon" />
                    {event.location}
                  </div>
                </div>
              </div>
            </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
