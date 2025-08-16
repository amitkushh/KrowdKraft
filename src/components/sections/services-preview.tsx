"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Heart, Zap, Camera, GraduationCap, Search } from "lucide-react"
import Link from "next/link"
import { services } from "@/data/services"

const iconMap = {
  Users,
  Heart,
  Zap,
  Camera,
  GraduationCap,
  Search,
}

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            We Bridge Brands to{" "}
            <span className="neon-text">Culture</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            From creator collabs to campus activations, we help brands connect 
            authentically with the next generation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || Users
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  rotateX: 2,
                  rotateY: 2,
                  z: 10,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                style={{ transformStyle: "preserve-3d" }}
                className="glass-card p-6 group transform-gpu cursor-pointer"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-neon/10 rounded-xl flex items-center justify-center group-hover:bg-neon/20 transition-colors">
                    <Icon className="h-6 w-6 text-neon" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                    {service.price && (
                      <p className="text-sm text-muted-foreground">{service.price}</p>
                    )}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center text-xs text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-neon rounded-full mr-2" />
                      {feature}
                    </div>
                  ))}
                  {service.features.length > 3 && (
                    <div className="text-xs text-muted-foreground">
                      +{service.features.length - 3} more features
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>


      </div>
    </section>
  )
}

