"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import Footer from "@/components/sections/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Calendar, MapPin, Users, Plus } from "lucide-react"
import { useEventsStore } from "@/store/events-store"
import { formatDate } from "@/lib/utils"
import Link from "next/link"

export default function EventsPage() {
  const { getFilteredEvents, filters, setFilters } = useEventsStore()
  const [searchTerm, setSearchTerm] = useState("")
  
  const events = getFilteredEvents()
  const categories = ["all", "conference", "workshop", "meetup", "festival", "networking"]
  const cities = ["all", ...Array.from(new Set(events.map(e => e.city)))]

  const handleSearch = (value: string) => {
    setSearchTerm(value)
    setFilters({ search: value })
  }

  const handleCategoryFilter = (category: string) => {
    setFilters({ category: category === "all" ? "" : category })
  }

  const handleCityFilter = (city: string) => {
    setFilters({ city: city === "all" ? "" : city })
  }

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Discover Amazing{" "}
              <span className="neon-text">Events</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              From marketing conferences to creator meetups, find events that connect 
              you with the Gen Z community and culture.
            </p>
            <Button asChild variant="neon" size="lg" className="group">
              <Link href="/events/create">
                <Plus className="mr-2 h-4 w-4" />
                Host an Event
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search events..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                className="pl-10 bg-background/50"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={filters.category === (category === "all" ? "" : category) ? "default" : "outline"}
                  className="cursor-pointer hover:bg-neon/20 capitalize"
                  onClick={() => handleCategoryFilter(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>

            {/* City Filter */}
            <div className="flex gap-2 flex-wrap">
              {cities.slice(0, 5).map((city) => (
                <Badge
                  key={city}
                  variant={filters.city === (city === "all" ? "" : city) ? "default" : "outline"}
                  className="cursor-pointer hover:bg-neon/20 capitalize"
                  onClick={() => handleCityFilter(city)}
                >
                  {city}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card overflow-hidden group hover-lift"
              >
                {/* Event Image */}
                <div className="relative h-48 bg-gradient-to-br from-neon/20 to-purple-500/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Calendar className="h-12 w-12 text-white/50" />
                  </div>
                  {event.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-neon text-black">
                        Featured
                      </Badge>
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-black/50 border-white/20">
                      {event.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  {/* Event Details */}
                  <div className="flex items-center text-sm text-muted-foreground mb-3 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {formatDate(event.date)}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {event.city}
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold mb-2 group-hover:text-neon transition-colors">
                    {event.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {event.shortDescription}
                  </p>

                  {/* Event Stats */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-1" />
                      {event.currentAttendees}/{event.maxAttendees}
                    </div>
                    <div className="text-sm font-medium">
                      {event.price === 0 ? 'Free' : `$${event.price}`}
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {event.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        #{tag}
                      </Badge>
                    ))}
                  </div>

                  <Button asChild className="w-full" size="sm">
                    <Link href={`/events/${event.id}`}>
                      View Event
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {events.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No events found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filters to find events.
              </p>
              <Button variant="outline" onClick={() => {
                setSearchTerm("")
                setFilters({ search: "", category: "", city: "" })
              }}>
                Clear Filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </>
  )
}
