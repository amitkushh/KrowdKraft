"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, MessageCircle, Share2, Zap, Users, Calendar } from "lucide-react"

export default function Community() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Our Vibrant{" "}
            <span className="neon-text">Community</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Join KrowdKraft's thriving community where we host seminars, workshops, 
            hackathons, and competitions. Connect with like-minded individuals and grow together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              icon: Users,
              title: "Community Members",
              metric: "900+",
              description: "Active members in our growing community"
            },
            {
              icon: Calendar,
              title: "Events Conducted",
              metric: "7",
              description: "Successful seminars, workshops, and competitions"
            },
            {
              icon: Heart,
              title: "Brand Loyalty",
              metric: "95%",
              description: "Higher retention rates through community engagement"
            },
            {
              icon: Zap,
              title: "Conversion",
              metric: "150%",
              description: "Better conversion from engaged community members"
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
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
              <div className="w-16 h-16 bg-neon/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <item.icon className="h-8 w-8 text-neon" />
              </div>
              <div className="text-3xl font-bold neon-text mb-2">{item.metric}</div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
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
            <Button asChild variant="neon" size="lg" className="group transform-gpu">
              <a href="/community">
                Explore Our Community
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
