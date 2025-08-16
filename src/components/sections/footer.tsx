"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram, Twitter, Linkedin, Mail, ArrowRight } from "lucide-react"

const footerLinks = {
  "Services": [
    { label: "Creator Collabs", href: "/services#creator-collabs" },
    { label: "Community Design", href: "/services#community-design" },
    { label: "Event Activations", href: "/services#event-activations" },
    { label: "Social & Content", href: "/services#social-content" },
  ],
  "Events": [
    { label: "Browse Events", href: "/events" },
    { label: "Host an Event", href: "/events/create" },
    { label: "Event Guidelines", href: "/events/guidelines" },
    { label: "Organizer Hub", href: "/events/organizers" },
  ],
  "Company": [
    { label: "About", href: "/about" },
    { label: "Work", href: "/work" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "/careers" },
  ],
  "Resources": [
    { label: "Blog", href: "/blog" },
    { label: "Case Studies", href: "/work" },
    { label: "Gen Z Insights", href: "/insights" },
    { label: "Brand Guidelines", href: "/brand" },
  ]
}

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/krowdkraft", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com/krowdkraft", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/company/krowdkraft", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hello@krowdkraft.com", label: "Email" },
]

export default function Footer() {
  return (
    <footer className="relative bg-black/50 border-t border-white/10">
      {/* Newsletter Section */}
      <section className="py-16 border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Stay in the{" "}
              <span className="neon-text">Loop</span>
            </h3>
            <p className="text-muted-foreground mb-8">
              Get the latest insights on Gen Z culture, marketing trends, and exclusive 
              event invites delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-neon focus:border-transparent"
              />
              <Button variant="neon" className="group">
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Link href="/" className="flex items-center space-x-2 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-br from-neon to-purple-500 rounded-xl" />
                  <span className="font-bold text-xl neon-text">KrowdKraft</span>
                </Link>
                
                <div className="mb-6 max-w-sm">
                  <p className="text-muted-foreground text-sm mb-2">
                    Culture Moves Fast. We Move Faster.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Bridging brands to Gen Z culture through authentic connections, 
                    creative collaborations, and unforgettable experiences.
                  </p>
                </div>

                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <Link
                      key={social.label}
                      href={social.href}
                      className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center hover:bg-neon/20 transition-colors group"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-neon transition-colors" />
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([category, links], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h4 className="font-semibold mb-4">{category}</h4>
                <ul className="space-y-2">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-8 border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm text-muted-foreground"
            >
              © 2025 KrowdKraft. All rights reserved.
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex space-x-6 text-sm"
            >
              <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-muted-foreground hover:text-foreground transition-colors">
                Cookie Policy
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}
