"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Linkedin, Twitter, Instagram } from "lucide-react"

export default function Team() {
  const teamMembers = [
    {
      name: "Alex Chen",
      role: "Founder & CEO",
      bio: "Gen Z marketing expert with 8+ years building viral campaigns",
      image: "/api/placeholder/300/300",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      name: "Maya Rodriguez",
      role: "Creative Director",
      bio: "Award-winning creative with a passion for authentic storytelling",
      image: "/api/placeholder/300/300",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      name: "Jordan Kim",
      role: "Strategy Lead",
      bio: "Data-driven strategist specializing in community growth",
      image: "/api/placeholder/300/300",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      name: "Sam Taylor",
      role: "Content Creator",
      bio: "Millennial influencer turned brand content specialist",
      image: "/api/placeholder/300/300",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    }
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
            Meet The{" "}
            <span className="neon-text">Team</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Our diverse team of creatives, strategists, and cultural experts 
            who understand what makes Gen Z and Millennials tick.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
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
              className="glass-card p-6 text-center transform-gpu cursor-pointer"
            >
              {/* Avatar placeholder */}
              <div className="w-24 h-24 bg-gradient-to-br from-neon/20 to-purple-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                <div className="w-16 h-16 bg-neon/30 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-neon text-sm font-medium mb-3">{member.role}</p>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {member.bio}
              </p>

              {/* Social links */}
              <div className="flex justify-center space-x-3">
                <a href={member.social.linkedin} className="text-muted-foreground hover:text-neon transition-colors">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href={member.social.twitter} className="text-muted-foreground hover:text-neon transition-colors">
                  <Twitter className="h-4 w-4" />
                </a>
                <a href={member.social.instagram} className="text-muted-foreground hover:text-neon transition-colors">
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
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
            <Button variant="neon" size="lg" className="group transform-gpu">
              Join Our Team
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
