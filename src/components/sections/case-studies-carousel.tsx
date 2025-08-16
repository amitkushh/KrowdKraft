"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import { caseStudies } from "@/data/case-studies"
import { useState } from "react"

export default function CaseStudiesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const featuredCases = caseStudies.filter(cs => cs.featured)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredCases.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredCases.length) % featuredCases.length)
  }

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Work That{" "}
            <span className="neon-text">Speaks</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Real campaigns, real results. See how we've helped brands create 
            authentic connections with Gen Z and Millennials.
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          {/* Carousel */}
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {featuredCases.map((caseStudy) => (
                <div key={caseStudy.id} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Content */}
                    <motion.div 
                      className="space-y-6 p-8 lg:pr-16"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      <div>
                        <div className="text-sm text-neon font-medium mb-2">
                          {caseStudy.client}
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                          {caseStudy.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {caseStudy.description}
                        </p>
                      </div>

                      {/* Metrics */}
                      <div className="grid grid-cols-2 gap-4">
                        {caseStudy.metrics.slice(0, 4).map((metric, idx) => (
                          <motion.div 
                            key={idx} 
                            className="text-center p-4 glass rounded-xl transform-gpu cursor-pointer"
                            whileHover={{ 
                              scale: 1.05,
                              rotateX: 5,
                              rotateY: 5,
                              z: 10
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            style={{ transformStyle: "preserve-3d" }}
                          >
                            <div className="text-lg sm:text-xl font-bold neon-text">
                              {metric.value}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {metric.label}
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {caseStudy.tags.map((tag) => (
                          <span 
                            key={tag}
                            className="px-3 py-1 bg-white/5 rounded-full text-xs text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>

                    {/* Image */}
                    <motion.div 
                      className="relative aspect-video lg:aspect-square"
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-neon/20 to-purple-500/20 rounded-2xl" />
                      <div className="absolute inset-4 bg-muted rounded-xl flex items-center justify-center">
                        <div className="text-center">
                          <ExternalLink className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                          <p className="text-sm text-muted-foreground">
                            Case Study Image
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center mt-8 space-x-4">
            <motion.div
              whileHover={{ 
                scale: 1.1,
                rotateX: 5,
                rotateY: 5
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full transform-gpu"
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
              </Button>
            </motion.div>
            
            <div className="flex space-x-2 items-center">
              {featuredCases.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    idx === currentIndex ? 'bg-neon' : 'bg-white/20'
                  }`}
                />
              ))}
            </div>

            <motion.div
              whileHover={{ 
                scale: 1.1,
                rotateX: 5,
                rotateY: 5
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full transform-gpu"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
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
            <Button asChild variant="neon" size="lg" className="group transform-gpu">
              <Link href="/work">
                View All Case Studies
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

