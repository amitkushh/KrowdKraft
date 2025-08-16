"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import Footer from "@/components/sections/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Play, Filter } from "lucide-react"
import { caseStudies } from "@/data/case-studies"
import { ServiceCategory } from "@/types"

export default function WorkPage() {
  const [filter, setFilter] = useState<ServiceCategory | "all">("all")
  
  const categories: (ServiceCategory | "all")[] = [
    "all",
    "creator-collabs",
    "community-design", 
    "event-activations",
    "social-content",
    "campus-waves",
    "research-sprints"
  ]

  const filteredCaseStudies = filter === "all" 
    ? caseStudies 
    : caseStudies.filter(cs => cs.category === filter)

  const categoryLabels = {
    "all": "All Work",
    "creator-collabs": "Creator Collabs",
    "community-design": "Community Design",
    "event-activations": "Event Activations", 
    "social-content": "Social & Content",
    "campus-waves": "Campus Waves",
    "research-sprints": "Research Sprints"
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
              Work That{" "}
              <span className="neon-text">Moves Culture</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              Real campaigns, real results. See how we've helped brands create 
              authentic connections with Gen Z through strategic creativity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="container mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={filter === category ? "default" : "outline"}
                className="cursor-pointer hover:bg-neon/20 transition-colors"
                onClick={() => setFilter(category)}
              >
                {categoryLabels[category]}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCaseStudies.map((caseStudy, index) => (
              <motion.article
                key={caseStudy.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card overflow-hidden group hover-lift"
              >
                {/* Case Study Image */}
                <div className="relative h-64 bg-gradient-to-br from-neon/20 to-purple-500/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ExternalLink className="h-12 w-12 text-white/50" />
                  </div>
                  
                  {caseStudy.featured && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-neon text-black">
                        Featured
                      </Badge>
                    </div>
                  )}
                  
                  {caseStudy.video && (
                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 bg-black/50 rounded-full flex items-center justify-center">
                        <Play className="h-4 w-4 text-white ml-0.5" />
                      </div>
                    </div>
                  )}
                  
                  <div className="absolute bottom-4 left-4">
                    <Badge variant="outline" className="bg-black/50 border-white/20 capitalize">
                      {caseStudy.category.replace("-", " ")}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  {/* Client and Title */}
                  <div className="mb-4">
                    <p className="text-sm text-neon font-medium mb-1">
                      {caseStudy.client}
                    </p>
                    <h3 className="text-xl font-bold group-hover:text-neon transition-colors">
                      {caseStudy.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {caseStudy.description}
                  </p>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {caseStudy.metrics.slice(0, 4).map((metric, idx) => (
                      <div key={idx} className="text-center p-3 bg-white/5 rounded-xl">
                        <div className="text-lg font-bold neon-text">
                          {metric.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-6">
                    {caseStudy.tags.slice(0, 4).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button className="w-full group" variant="outline">
                    View Case Study
                    <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>

          {filteredCaseStudies.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <Filter className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No case studies found</h3>
              <p className="text-muted-foreground mb-6">
                Try selecting a different category to see our work.
              </p>
              <Button variant="outline" onClick={() => setFilter("all")}>
                Show All Work
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready for Your{" "}
              <span className="neon-text">Success Story</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's create a campaign that doesn't just reach Gen Z—it resonates with them. 
              Every project starts with understanding your unique goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="neon" size="lg" className="group">
                <a href="/contact">
                  Start Your Project
                  <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="/services">
                  View Services
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}

