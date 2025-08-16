"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import Footer from "@/components/sections/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Heart, Zap, Camera, GraduationCap, Search, Check } from "lucide-react"
import { services } from "@/data/services"
import Link from "next/link"

const iconMap = {
  Users,
  Heart,
  Zap,
  Camera,
  GraduationCap,
  Search,
}

export default function ServicesPage() {
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
              Bridge Your Brand to{" "}
              <span className="neon-text">Gen Z Culture</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              We specialize in authentic connections between brands and the next generation. 
              From creator partnerships to campus activations, we speak their language.
            </p>
            <Button variant="neon" size="lg" className="group">
              <Link href="/contact" className="flex items-center">
                Start Your Project
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon as keyof typeof iconMap] || Users
              
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card p-8 hover-lift group"
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-16 h-16 bg-neon/10 rounded-2xl flex items-center justify-center group-hover:bg-neon/20 transition-colors mr-4">
                        <Icon className="h-8 w-8 text-neon" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1">{service.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          {service.price && <span>{service.price}</span>}
                          {service.duration && <span>• {service.duration}</span>}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <Check className="h-4 w-4 text-neon mt-1 mr-3 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button className="w-full group" variant="outline">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Our{" "}
              <span className="neon-text">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              How we create authentic connections between your brand and Gen Z
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We dive deep into your brand, goals, and target audience to understand the cultural landscape."
              },
              {
                step: "02", 
                title: "Strategy",
                description: "We craft a custom strategy that authentically aligns your brand with Gen Z values and interests."
              },
              {
                step: "03",
                title: "Creation",
                description: "Our team brings the strategy to life through compelling content, experiences, and partnerships."
              },
              {
                step: "04",
                title: "Amplification",
                description: "We activate our community and optimize performance to maximize reach and engagement."
              }
            ].map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-neon/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold neon-text">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Connect with{" "}
              <span className="neon-text">Gen Z</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's create something authentic together. Our team is ready to bridge 
              your brand to the next generation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="neon" size="lg" className="group">
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/work">
                  View Our Work
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  )
}

