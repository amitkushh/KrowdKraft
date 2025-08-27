"use client"

import { useState } from "react"
import Head from "next/head"
import { motion } from "framer-motion"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/sections/footer"
import QuoteModal from "@/components/quote-modal"
import { Button } from "@/components/ui/button"
import { services } from "@/data/services"
import { Users, Globe, Flag, GraduationCap, ExternalLink, Calendar, ArrowRight, CheckCircle, Target, Lightbulb, Rocket } from "lucide-react"

const iconMap = {
  Users,
  Globe,
  Flag,
  GraduationCap,
}

export default function ServicesPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)
  const [activeService, setActiveService] = useState(0)

  return (
    <>
      <Head>
        <title>Our Services - KrowdKraft</title>
        <meta name="description" content="Explore KrowdKraft's comprehensive services: Community Design, Event Activations, and Campus Waves. Bridge your brand to Gen Z culture." />
      </Head>
      <Navigation />
      
      {/* Hero Section with Interactive Cards */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-secondary/30 via-secondary/10 to-transparent relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-32 h-32 bg-neon/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-blue-500/10 rounded-full blur-2xl"></div>
        </div>

        <div className="container mx-auto max-w-7xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 leading-tight">
              Transforming Brands Into{" "}
              <span className="neon-text bg-clip-text bg-gradient-to-r from-neon to-purple-400">
                Cultural Icons
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-12 text-balance max-w-4xl mx-auto leading-relaxed">
              We don't just market to Gen Z - we speak their language, understand their culture, 
              and create authentic connections that drive real engagement.
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <Button 
                variant="neon" 
                size="lg"
                className="group text-lg px-8 py-4 h-auto"
                asChild
              >
                <Link href={process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/krowdkraft-official/30min"} target="_blank">
                  <Calendar className="mr-3 h-6 w-6 pointer-events-none" />
                  Book a Call
                  <ExternalLink className="ml-3 h-5 w-5 pointer-events-none" />
              </Link>
            </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="group text-lg px-8 py-4 h-auto border-2"
                onClick={() => setIsQuoteModalOpen(true)}
              >
                Get Custom Quote
                <ArrowRight className="ml-3 h-5 w-5 pointer-events-none" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Services Showcase */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Our{" "}
              <span className="neon-text">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose your service to explore how we can elevate your brand
            </p>
          </motion.div>

          {/* Service Navigation */}
          <div className="flex justify-center mb-12">
            <div className="glass-card p-2 inline-flex rounded-2xl">
              {services.map((service, index) => (
                <button
                  key={service.id}
                  onClick={() => setActiveService(index)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeService === index 
                      ? 'bg-neon text-black shadow-lg shadow-neon/25' 
                      : 'text-muted-foreground hover:text-white hover:bg-white/5'
                  }`}
                >
                  {service.title}
                </button>
              ))}
            </div>
          </div>

          {/* Active Service Display */}
          <motion.div
            key={activeService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Service Content */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 bg-neon/10 rounded-2xl flex items-center justify-center mr-6">
                    {(() => {
                      const IconComponent = iconMap[services[activeService].icon as keyof typeof iconMap] || Users
                      return <IconComponent className="h-10 w-10 text-neon" />
                    })()}
                      </div>
                      <div>
                    <h3 className="text-3xl font-bold mb-2">{services[activeService].title}</h3>
                    <div className="w-16 h-1 bg-neon rounded-full"></div>
                  </div>
                </div>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {services[activeService].description}
                </p>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-xl font-bold mb-6">What You Get:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {services[activeService].features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle className="h-5 w-5 text-neon mt-1 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </motion.div>
                  ))}
                        </div>
                      </div>
                    </div>

            {/* Visual Element */}
            <div className="relative">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="glass-card p-8 text-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-neon/5 to-purple-500/5"></div>
                <div className="relative z-10">
                  <div className="w-24 h-24 bg-neon/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                    {(() => {
                      const IconComponent = iconMap[services[activeService].icon as keyof typeof iconMap] || Users
                      return <IconComponent className="h-12 w-12 text-neon" />
                    })()}
                  </div>
                  <h4 className="text-2xl font-bold mb-4">Ready to Start?</h4>
                  <p className="text-muted-foreground mb-6">
                    Let's discuss how {services[activeService].title.toLowerCase()} can transform your brand
                  </p>
                  <Button 
                    variant="neon" 
                    className="group"
                    asChild
                  >
                    <Link href={process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/krowdkraft-official/30min"} target="_blank">
                      Enquire about {services[activeService].title}
                      <ArrowRight className="ml-2 h-4 w-4 pointer-events-none" />
                    </Link>
                  </Button>
                </div>
                </motion.div>
          </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Process Section */}
      <section className="py-24 bg-secondary/20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-2 h-full bg-gradient-to-b from-neon/50 to-transparent"></div>
          <div className="absolute top-0 right-1/4 w-2 h-full bg-gradient-to-b from-purple-500/50 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Our{" "}
              <span className="neon-text">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A proven methodology that transforms ideas into cultural movements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                step: "01",
                title: "Discovery & Strategy",
                description: "We dive deep into your brand DNA, audience insights, and market positioning to craft a strategy that resonates with authentic cultural relevance.",
                highlight: "Deep Brand Analysis"
              },
              {
                icon: Lightbulb,
                step: "02", 
                title: "Creative Development",
                description: "Our creative team develops compelling narratives, selects perfect collaborators, and designs experiences that spark genuine engagement.",
                highlight: "Creative Innovation"
              },
              {
                icon: Rocket,
                step: "03",
                title: "Launch & Optimize",
                description: "We execute with precision, monitor performance in real-time, and continuously optimize to maximize impact and cultural penetration.",
                highlight: "Data-Driven Results"
              }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="glass-card p-8 text-center h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-neon/5 rounded-full transform translate-x-6 -translate-y-6"></div>
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-neon/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <phase.icon className="h-8 w-8 text-neon" />
                    </div>
                    
                    <div className="text-4xl font-bold text-neon/30 mb-2">{phase.step}</div>
                    <h3 className="text-xl font-bold mb-4">{phase.title}</h3>
                    <div className="text-sm text-neon font-medium mb-3">{phase.highlight}</div>
                    <p className="text-muted-foreground leading-relaxed">{phase.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neon/5 via-purple-500/5 to-neon/5"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-neon/10 to-purple-500/10"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Ready to Join the{" "}
                <span className="neon-text">Cultural Revolution?</span>
            </h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                Don't just market to the next generation - become part of their culture. 
                Let's create something that matters.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  variant="neon" 
                  size="lg"
                  className="group text-lg px-8 py-4 h-auto"
                  asChild
                >
                  <Link href={process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/krowdkraft-official/30min"} target="_blank">
                    <Calendar className="mr-3 h-6 w-6 pointer-events-none" />
                    Book a Call
                    <ExternalLink className="ml-3 h-5 w-5 pointer-events-none" />
                </Link>
              </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="group text-lg px-8 py-4 h-auto border-2"
                  onClick={() => setIsQuoteModalOpen(true)}
                >
                  Get Custom Quote
                  <ArrowRight className="ml-3 h-5 w-5 pointer-events-none" />
              </Button>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-sm text-muted-foreground">
                  Trusted by innovative brands • 100+ successful campaigns • 50M+ Gen Z reached
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      
      <QuoteModal 
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </>
  )
}