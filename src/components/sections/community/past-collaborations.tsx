"use client"

import { motion } from "framer-motion"
import { Building, Users, Handshake } from "lucide-react"

export default function PastCollaborations() {
  const collaborations = [
    { name: "TechCorp", category: "Technology", logo: "TC" },
    { name: "InnovateLab", category: "Innovation Hub", logo: "IL" },
    { name: "CreativeStudio", category: "Design Agency", logo: "CS" },
    { name: "FutureMinds", category: "EdTech", logo: "FM" },
    { name: "NextGen Solutions", category: "Consulting", logo: "NGS" },
    { name: "Digital Pioneers", category: "Marketing", logo: "DP" },
    { name: "Youth Network", category: "Community", logo: "YN" },
    { name: "Innovation Hub", category: "Startup Incubator", logo: "IH" }
  ]

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
            Our{" "}
            <span className="neon-text">Collaborations</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            We're proud to have partnered with amazing organizations and brands 
            that share our vision of community-driven innovation.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {[
            {
              icon: Building,
              number: "15+",
              label: "Partner Organizations",
              description: "Companies and institutions we've collaborated with"
            },
            {
              icon: Users,
              number: "50+",
              label: "Joint Events",
              description: "Successful collaborations and co-hosted events"
            },
            {
              icon: Handshake,
              number: "25+",
              label: "Active Partnerships",
              description: "Ongoing relationships and future collaborations"
            }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                rotateX: 5,
                rotateY: 5,
                z: 10
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="glass-card p-8 text-center transform-gpu cursor-pointer"
            >
              <div className="w-16 h-16 bg-neon/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-neon" />
              </div>
              <div className="text-3xl font-bold neon-text mb-2">{stat.number}</div>
              <h3 className="text-lg font-semibold mb-2">{stat.label}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Partners Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-center mb-8">Trusted Partners</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {collaborations.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ 
                  scale: 1.1,
                  rotateY: 5
                }}
                className="glass-card p-6 text-center transform-gpu cursor-pointer group"
              >
                {/* Logo placeholder */}
                <div className="w-16 h-16 bg-gradient-to-br from-neon/20 to-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:from-neon/30 group-hover:to-purple-500/30 transition-all">
                  <span className="text-lg font-bold text-neon">{partner.logo}</span>
                </div>
                <h4 className="font-semibold text-sm mb-1 group-hover:text-neon transition-colors">
                  {partner.name}
                </h4>
                <p className="text-xs text-muted-foreground">{partner.category}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <Handshake className="h-12 w-12 text-neon mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-4">Want to Collaborate?</h3>
            <p className="text-muted-foreground mb-6">
              We're always looking for new partners to create amazing experiences together. 
              Reach out to explore collaboration opportunities.
            </p>
            <motion.div
              whileHover={{ 
                scale: 1.05,
                rotateX: 3,
                rotateY: 3
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <button className="px-6 py-3 bg-neon/10 hover:bg-neon/20 text-neon border border-neon/30 rounded-xl transition-all font-medium">
                Partner With Us
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
