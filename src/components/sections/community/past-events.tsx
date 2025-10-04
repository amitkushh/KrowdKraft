"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Users, Trophy } from "lucide-react"
import { past_events as events } from "@/data/past-events"
import { PastEvent } from "@/types"
interface EventCardProps {
  event: PastEvent
  index: number
  isCenter: boolean
}

function EventCard({ event, index, isCenter }: EventCardProps) {
  const cardSize = "w-full sm:w-72" // All cards same size, larger
  const imageHeight = "h-32" // All cards same height, larger
  const iconSize = "h-7 w-7" // All cards same icon size
  const titleSize = "text-lg" // All cards same title size
  const padding = "p-4 sm:p-6" // All cards same padding, larger
  const tapeWidth = "w-12" // All cards same tape width
  
  return (
    <motion.div
      key={event.title}
      initial={{ opacity: 0, y: 30, rotate: Math.random() * 6 - 3 }}
      whileInView={{ opacity: 1, y: 0, rotate: Math.random() * 4 - 2 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.03,
        rotate: 0,
        z: 15,
        boxShadow: "0 15px 30px -8px rgba(0, 0, 0, 0.4)"
      }}
      style={{ 
        transformStyle: "preserve-3d",
        transform: `rotate(${Math.random() * 4 - 2}deg)`,
        backgroundImage: event.backgroundImage ? `url(${event.backgroundImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      className={`${cardSize} backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden transform-gpu cursor-pointer group shadow-xl relative mx-auto`}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" style={{ opacity: event.backgroundImage ? 0.8 : 0 }}></div>
      <div className="absolute inset-0 bg-white/10" style={{ opacity: event.backgroundImage ? 0 : 1 }}></div>
      
      {/* Tape Effect */}
      <div className={`absolute -top-1 left-2 ${tapeWidth} h-4 bg-yellow-200/80 rotate-12 rounded-sm shadow-sm z-10`}></div>
      <div className={`absolute -top-1 right-2 ${isCenter ? 'w-8' : 'w-6'} h-4 bg-yellow-200/80 -rotate-12 rounded-sm shadow-sm z-10`}></div>

      <div className={`${padding} relative z-20`}>
        <div className="flex items-center justify-between mb-3">
          <span className="px-3 py-1 bg-neon/20 text-neon rounded-full text-sm font-semibold shadow-md">
            {event.type}
          </span>
          <div className="flex items-center text-sm text-white font-medium bg-black/50 px-2 py-1 rounded-md">
            <Users className="h-4 w-4 mr-1" />
            {event.attendees}
          </div>
        </div>

        <h3 className={`${titleSize} font-bold mb-3 group-hover:text-neon transition-colors line-clamp-2 text-white drop-shadow-lg`} style={{textShadow: '2px 2px 4px rgba(0,0,0,0.8)'}}>
          {event.title}
        </h3>
        
        <p className="text-gray-200 text-sm mb-4 leading-relaxed line-clamp-2 drop-shadow-md" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.8)'}}>
          {event.description}
        </p>

        <div className="space-y-2">
          <div className="flex items-center text-sm text-white font-medium bg-black/50 px-3 py-2 rounded-lg">
            <Calendar className="h-4 w-4 mr-3 text-neon" />
            <span className="truncate">{event.date}</span>
          </div>
          <div className="flex items-center text-sm text-white font-medium bg-black/50 px-3 py-2 rounded-lg group/location relative">
            <MapPin className="h-4 w-4 mr-3 text-neon" />
            <span className="truncate">{event.location}</span>
            {/* Tooltip for full location */}
            <div className="absolute bottom-full left-0 mb-2 px-3 py-2 bg-black/90 text-white text-xs rounded-lg opacity-0 group-hover/location:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50 pointer-events-none">
              {event.location}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function PastEvents() {

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

        {/* Exhibition Board Background */}
        <div className="relative max-w-6xl mx-auto">
          {/* Cork Board Background */}
          <div className="hidden lg:block absolute inset-0 bg-gradient-to-br from-amber-100/5 to-amber-200/10 rounded-3xl border-4 border-amber-200/20 shadow-2xl"></div>
          
          {/* Push Pins */}
          <div className="hidden lg:block absolute top-6 left-12 w-3 h-3 bg-red-500 rounded-full shadow-lg z-30"></div>
          <div className="hidden lg:block absolute top-6 right-12 w-3 h-3 bg-blue-500 rounded-full shadow-lg z-30"></div>
          <div className="hidden lg:block absolute bottom-6 left-16 w-3 h-3 bg-green-500 rounded-full shadow-lg z-30"></div>
          <div className="hidden lg:block absolute bottom-6 right-16 w-3 h-3 bg-yellow-500 rounded-full shadow-lg z-30"></div>

          {/* Events Gallery */}
          <div className="relative p-6 lg:p-12">
            {/* Center Card */}
            <div className="hidden lg:block relative h-[800px]">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <EventCard event={events[0]} index={0} isCenter={true} />
              </div>

            {/* Top Left Card */}
              <div className="absolute top-16 left-16 z-10">
                <EventCard event={events[1]} index={1} isCenter={false} />
              </div>

            {/* Top Right Card */}
              <div className="absolute top-16 right-16 z-10">
                <EventCard event={events[2]} index={2} isCenter={false} />
              </div>

            {/* Bottom Left Card */}
              <div className="absolute bottom-16 left-16 z-10">
                <EventCard event={events[3]} index={3} isCenter={false} />
              </div>

            {/* Bottom Right Card */}
              <div className="absolute bottom-16 right-16 z-10">
                <EventCard event={events[4]} index={4} isCenter={false} />
              </div>
            </div>

            {/* Mobile Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:hidden">
              {events.map((ev, idx) => (
                <EventCard key={ev.title} event={ev} index={idx} isCenter={idx === 0} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
