"use client"

import { use } from "react"
import { motion } from "framer-motion"
import { notFound } from "next/navigation"
import Navigation from "@/components/navigation"
import Footer from "@/components/sections/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Clock, DollarSign, Share2, Heart } from "lucide-react"
import { useEventsStore } from "@/store/events-store"
import { formatDate, formatTime } from "@/lib/utils"

interface EventDetailPageProps {
  params: Promise<{ id: string }>
}

export default function EventDetailPage({ params }: EventDetailPageProps) {
  const { id } = use(params)
  const { getEventById } = useEventsStore()
  const event = getEventById(id)

  if (!event) {
    notFound()
  }

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Event Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="lg:col-span-2"
            >
              <div className="relative aspect-video bg-gradient-to-br from-neon/20 to-purple-500/20 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Calendar className="h-24 w-24 text-white/50" />
                </div>
                {event.featured && (
                  <div className="absolute top-6 left-6">
                    <Badge className="bg-neon text-black text-sm px-3 py-1">
                      Featured Event
                    </Badge>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Event Info Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card p-6 h-fit"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="capitalize">
                    {event.category}
                  </Badge>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon">
                      <Share2 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-2 text-neon" />
                    <span>{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 mr-2 text-neon" />
                    <span>{formatTime(event.date + 'T' + event.time)}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 mr-2 text-neon" />
                    <span>{event.venue}, {event.location}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Users className="h-4 w-4 mr-2 text-neon" />
                    <span>{event.currentAttendees}/{event.maxAttendees} attending</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <DollarSign className="h-4 w-4 mr-2 text-neon" />
                    <span>{event.price === 0 ? 'Free' : `$${event.price}`}</span>
                  </div>
                </div>

                <div className="pt-4 space-y-3">
                  <Button className="w-full" variant="neon" size="lg">
                    Register Now
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">
                    Secure your spot • Instant confirmation
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Title and Description */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h1 className="text-3xl sm:text-4xl font-bold mb-4">
                  {event.title}
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {event.description}
                </p>
              </motion.div>

              {/* Tags */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {event.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    #{tag}
                  </Badge>
                ))}
              </motion.div>

              {/* Speakers Section */}
              {event.speakers.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="glass-card p-6"
                >
                  <h2 className="text-2xl font-bold mb-6">Speakers</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {event.speakers.map((speaker) => (
                      <div key={speaker.id} className="flex space-x-4">
                        <div className="w-16 h-16 bg-neon/10 rounded-2xl flex items-center justify-center">
                          <Users className="h-6 w-6 text-neon" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{speaker.name}</h3>
                          <p className="text-sm text-neon">{speaker.title}</p>
                          <p className="text-sm text-muted-foreground">{speaker.company}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Tickets Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-6"
              >
                <h2 className="text-2xl font-bold mb-6">Tickets</h2>
                <div className="space-y-4">
                  {event.tickets.map((ticket) => (
                    <div key={ticket.id} className="flex items-center justify-between p-4 border border-white/10 rounded-xl">
                      <div>
                        <h3 className="font-semibold">{ticket.name}</h3>
                        <p className="text-sm text-muted-foreground">{ticket.description}</p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          {ticket.features.slice(0, 3).map((feature, idx) => (
                            <span key={idx} className="text-xs text-muted-foreground">
                              • {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold">
                          {ticket.price === 0 ? 'Free' : `$${ticket.price}`}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {ticket.currentSold}/{ticket.maxQuantity} sold
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Organizer */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="glass-card p-6"
              >
                <h3 className="font-semibold mb-4">Organizer</h3>
                <div className="flex items-start space-x-3">
                  <div className="w-12 h-12 bg-neon/10 rounded-xl flex items-center justify-center">
                    <Users className="h-5 w-5 text-neon" />
                  </div>
                  <div>
                    <div className="flex items-center">
                      <h4 className="font-medium">{event.organizer.name}</h4>
                      {event.organizer.verified && (
                        <Badge variant="neon" className="ml-2 text-xs">
                          Verified
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {event.organizer.bio}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Map Placeholder */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass-card p-6"
              >
                <h3 className="font-semibold mb-4">Location</h3>
                <div className="aspect-square bg-muted rounded-xl flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-muted-foreground" />
                </div>
                <div className="mt-4 text-sm">
                  <p className="font-medium">{event.venue}</p>
                  <p className="text-muted-foreground">{event.location}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

