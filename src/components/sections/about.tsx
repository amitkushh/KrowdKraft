"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Target, Lightbulb } from "lucide-react"

export default function About() {
  return (
    <section className="py-24 bg-secondary/20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            About{" "}
            <span className="neon-text">KrowdKraft</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            We are a modern marketing agency that specializes in connecting brands 
            with Gen Z and Millennials through authentic cultural moments and innovative campaigns.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl sm:text-3xl font-bold">
              Culture Moves Fast. We Move Faster.
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              In today's rapidly evolving digital landscape, traditional marketing approaches 
              fall short with younger generations. We understand the cultural nuances, 
              trending platforms, and authentic communication styles that resonate with 
              Gen Z and Millennials.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team combines deep cultural insights with cutting-edge marketing strategies 
              to create campaigns that don't just reach your audience—they genuinely connect 
              with them.
            </p>
            
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
              <Button variant="neon" size="lg" className="group transform-gpu">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              {
                icon: Target,
                title: "Precision Targeting",
                description: "We know exactly how to reach Gen Z and Millennials where they are, with messages that matter to them."
              },
              {
                icon: Users,
                title: "Community First",
                description: "Building authentic communities around your brand, not just customer bases."
              },
              {
                icon: Lightbulb,
                title: "Innovation Driven",
                description: "Always ahead of trends, leveraging the latest platforms and technologies."
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  rotateX: 2,
                  rotateY: 2,
                  z: 5
                }}
                style={{ transformStyle: "preserve-3d" }}
                className="glass-card p-6 transform-gpu cursor-pointer"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-neon/10 rounded-xl flex items-center justify-center">
                    <value.icon className="h-6 w-6 text-neon" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
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
