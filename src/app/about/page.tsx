"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import Footer from "@/components/sections/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Zap, Users, Target } from "lucide-react"
import Link from "next/link"

const values = [
  {
    icon: Heart,
    title: "Play",
    description: "We believe work should be fun. We inject playfulness into everything we do, from our creative process to our brand activations."
  },
  {
    icon: Zap,
    title: "Liberation",
    description: "We free brands from outdated marketing approaches, empowering authentic connections with the next generation."
  },
  {
    icon: Users,
    title: "Community", 
    description: "Everything we do is rooted in community. We build bridges between brands and cultures, creators and audiences."
  },
  {
    icon: Target,
    title: "Craft",
    description: "We're obsessed with quality. Every campaign, event, and partnership is crafted with meticulous attention to detail."
  }
]

const team = [
  {
    name: "Alex Chen",
    role: "Founder & Creative Director",
    bio: "Former TikTok strategist who saw the gap between brands and Gen Z culture.",
    image: "/images/team/alex-chen.jpg"
  },
  {
    name: "Morgan Rodriguez",
    role: "Head of Community",
    bio: "Community builder with 10+ years connecting creators and brands authentically.",
    image: "/images/team/morgan-rodriguez.jpg"
  },
  {
    name: "Jordan Kim",
    role: "Events Director",
    bio: "Event designer who's created experiences for 500K+ young people worldwide.",
    image: "/images/team/jordan-kim.jpg"
  },
  {
    name: "Casey Thompson",
    role: "Strategy Lead",
    bio: "Data-driven strategist who turns cultural insights into campaign gold.",
    image: "/images/team/casey-thompson.jpg"
  }
]

export default function AboutPage() {
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
              We Bridge{" "}
              <span className="neon-text">Culture</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              Born from the realization that most marketing to Gen Z feels forced and inauthentic. 
              We exist to change that.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 lg:p-12"
          >
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                KrowdKraft was born in 2022 when our founder, Alex Chen, was working at TikTok 
                and noticed a massive disconnect. Brands were spending millions trying to reach 
                Gen Z, but their efforts felt forced, inauthentic, and out of touch.
              </p>
              <p>
                We started with a simple belief: authentic connections can't be manufactured, 
                but they can be facilitated. We began by hosting small creator meetups, 
                bringing together brands and content creators in casual, pressure-free environments.
              </p>
              <p>
                Today, we've evolved into a full-service agency and events platform, but our 
                core mission remains the same: create genuine bridges between brands and the 
                cultural movements that define Gen Z.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Our{" "}
              <span className="neon-text">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 text-center group hover-lift"
              >
                <div className="w-16 h-16 bg-neon/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-neon/20 transition-colors">
                  <value.icon className="h-8 w-8 text-neon" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Meet the{" "}
              <span className="neon-text">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The culture builders, trend spotters, and connection makers behind KrowdKraft
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-48 h-48 bg-gradient-to-br from-neon/20 to-purple-500/20 rounded-3xl mx-auto flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Users className="h-16 w-16 text-white/50" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-neon text-sm mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.bio}
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
              Want to Join the{" "}
              <span className="neon-text">Movement</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Whether you're a brand looking to connect authentically or a creator 
              ready to collaborate, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="neon" size="lg" className="group">
                <Link href="/contact">
                  Work with Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/events">
                  Join Our Events
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

