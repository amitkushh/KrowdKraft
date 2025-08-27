"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Phone, Globe, MessageCircle } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

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
            Let's{" "}
            <span className="neon-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-5xl mx-auto text-balance">
            Ready to bridge your brand to the next generation? 
            Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 h-full"
          >
            <div className="glass-card p-8 h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background/50"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background/50"
                    />
                  </div>
                </div>
                
                <Input
                  name="company"
                  placeholder="Company Name"
                  value={formData.company}
                  onChange={handleChange}
                  className="bg-background/50"
                />
                
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 bg-background/50 border border-input rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-neon/50 resize-none"
                />
                
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
                  <Button type="submit" variant="neon" size="lg" className="w-full transform-gpu">
                    Send Message
                    <MessageCircle className="ml-2 h-4 w-4" />
                  </Button>
                </motion.div>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 h-full flex flex-col"
          >

            <div className="flex-1 flex flex-col justify-between space-y-4">
              {[
                {
                  icon: Mail,
                  title: "Email Us",
                  content: "krowdkraft.official@gmail.com",
                  link: "mailto:krowdkraft.official@gmail.com"
                },
                {
                  icon: Phone,
                  title: "Call Us",
                  content: "+1 (555) 123-4567",
                  link: "tel:+15551234567"
                },
                {
                  icon: Globe,
                  title: "Visit Us",
                  content: "www.krowdkraft.com",
                  link: "https://www.krowdkraft.com"
                }
              ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  rotateX: 2,
                  rotateY: 2
                }}
                style={{ transformStyle: "preserve-3d" }}
                className="glass-card p-6 transform-gpu cursor-pointer"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-neon/10 rounded-xl flex items-center justify-center">
                    <item.icon className="h-6 w-6 text-neon" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">{item.title}</h4>
                    <a 
                      href={item.link}
                      className="text-muted-foreground hover:text-neon transition-colors"
                    >
                      {item.content}
                    </a>
                  </div>
                </div>
              </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
