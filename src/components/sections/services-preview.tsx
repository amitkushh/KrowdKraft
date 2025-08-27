"use client"

import { motion } from "framer-motion"
import { ArrowRight, Users, Globe, Flag, Camera, GraduationCap, Search } from "lucide-react"
import { services } from "@/data/services"
import SectionHeader from "@/components/common/section-header"
import DynamicGrid from "@/components/common/dynamic-grid"
import AnimatedButton from "@/components/common/animated-button"

const iconMap = {
  Users,
  Globe,
  Flag,
  Camera,
  GraduationCap,
  Search,
}

export default function ServicesPreview() {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="We Bridge Brands to"
          highlightText="Culture"
          description="From community design to campus activations, we help brands connect authentically with their target audiences."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
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

        <div className="text-center">
          <AnimatedButton
            href="/services"
            variant="neon"
            size="lg"
            animation="scale"
          >
            Explore
            <ArrowRight className="ml-2 h-4 w-4 pointer-events-none" />
          </AnimatedButton>
        </div>

      </div>
    </section>
  )
}

