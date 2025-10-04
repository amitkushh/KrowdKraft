"use client"

import { motion } from "framer-motion"
import Head from "next/head"
import Link from "next/link"
import Image from "next/image"
import { Instagram, Twitter, Linkedin, MessageCircle, Users, ExternalLink } from "lucide-react"

const socialLinks = [
  {
    name: "Instagram",
    description: "Follow our latest updates and behind-the-scenes content",
    url: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://www.instagram.com/krowdkraft/",
    icon: Instagram,
    color: "from-pink-500 to-purple-500",
    bgColor: "bg-gradient-to-r from-pink-500/10 to-purple-500/10",
    hoverColor: "hover:from-pink-500/20 hover:to-purple-500/20"
  },
  {
    name: "X (Twitter)",
    description: "Join the conversation and get real-time updates",
    url: process.env.NEXT_PUBLIC_TWITTER_URL || "https://x.com/KrowdKraft_",
    icon: Twitter,
    color: "from-slate-400 to-slate-600",
    bgColor: "bg-gradient-to-r from-slate-400/10 to-slate-600/10",
    hoverColor: "hover:from-slate-400/20 hover:to-slate-600/20"
  },
  {
    name: "LinkedIn",
    description: "Connect with us professionally and see our latest work",
    url: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/company/krowdkraft/",
    icon: Linkedin,
    color: "from-blue-500 to-blue-700",
    bgColor: "bg-gradient-to-r from-blue-500/10 to-blue-700/10",
    hoverColor: "hover:from-blue-500/20 hover:to-blue-700/20"
  }
  // {
  //   name: "WhatsApp Community",
  //   description: "Join our exclusive WhatsApp community for insider updates",
  //   url: process.env.NEXT_PUBLIC_WHATSAPP_COMMUNITY_URL || "https://chat.whatsapp.com/Ko9hqFs7hhtLJY1nePhkNO",
  //   icon: MessageCircle,
  //   color: "from-green-500 to-green-600",
  //   bgColor: "bg-gradient-to-r from-green-500/10 to-green-600/10",
  //   hoverColor: "hover:from-green-500/20 hover:to-green-600/20",
  //   comingSoon: false
  // }
]

export default function JoinCommunityPage() {
  return (
    <>
      <Head>
        <title>Join Our Community - KrowdKraft</title>
        <meta name="description" content="Connect with KrowdKraft across all social platforms. Join our community of innovators, creators, and culture enthusiasts." />
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 60 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="w-full max-w-md mx-auto relative z-10">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="w-24 h-24 mx-auto mb-6 relative"
          >
            <div className="w-full h-full bg-gradient-to-br from-neon/20 to-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/20 p-4">
              <Image
                src="/KrowdKraft_Logo.png"
                alt="KrowdKraft Logo"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-3xl font-bold mb-3"
          >
            <span className="neon-text">KrowdKraft</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-muted-foreground mb-6 text-lg"
          >
            Culture Moves Fast. We Move Faster.
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-sm text-muted-foreground leading-relaxed"
          >
            Join our community of innovators, creators, and culture enthusiasts. 
            Connect with us across all platforms and stay updated on the latest trends, 
            events, and collaborations.
          </motion.p>
        </motion.div>

        {/* Social Links */}
        <div className="space-y-4">
          {socialLinks.map((link, index) => {
            const IconComponent = link.icon
            
            return (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              >
                <Link
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <motion.div
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className={`${link.bgColor} ${link.hoverColor} p-4 rounded-2xl border border-white/10 backdrop-blur-sm transition-all duration-300 group-hover:border-white/20 group-hover:shadow-lg group-hover:shadow-black/20`}
                  >
                    <div className="flex items-center">
                      <div className={`w-12 h-12 bg-gradient-to-r ${link.color} rounded-xl flex items-center justify-center mr-4`}>
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-white mb-1 group-hover:text-neon transition-colors">
                          {link.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">{link.description}</p>
                      </div>
                      <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-white transition-colors" />
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          className="text-center mt-8"
        >
          <p className="text-xs text-muted-foreground mb-4">
            Ready to collaborate? Let's create something amazing together.
          </p>
          
          <Link
            href="/"
            className="inline-flex items-center text-sm text-neon hover:text-white transition-colors"
          >
            ← Back to Website
          </Link>
        </motion.div>
      </div>

      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neon/10 rounded-full blur-3xl"></div>
    </main>
    </>
  )
}
