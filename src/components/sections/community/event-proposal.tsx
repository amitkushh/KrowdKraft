"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Lightbulb, Send } from "lucide-react"
import { useState } from "react"

export default function EventProposal() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    eventTitle: "",
    eventType: "",
    description: "",
    targetAudience: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission (frontend only for now)
    console.log("Event proposal submitted:", formData)
    alert("Thank you for your event proposal! We'll review it and get back to you soon.")
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      eventTitle: "",
      eventType: "",
      description: "",
      targetAudience: ""
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
            Submit Event{" "}
            <span className="neon-text">Proposal</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Have an idea for an amazing event? We'd love to hear from you! 
            Submit your proposal and help shape our community's future.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.01,
              rotateX: 1,
              rotateY: 1
            }}
            style={{ transformStyle: "preserve-3d" }}
            className="glass-card p-8 transform-gpu"
          >
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-neon/10 rounded-xl flex items-center justify-center mr-4">
                <Lightbulb className="h-6 w-6 text-neon" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Share Your Idea</h3>
                <p className="text-muted-foreground">Help us create something extraordinary together</p>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Your Name</label>
                  <Input
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-background/50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Event Title</label>
                  <Input
                    name="eventTitle"
                    placeholder="Give your event a catchy name"
                    value={formData.eventTitle}
                    onChange={handleChange}
                    required
                    className="bg-background/50"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Event Type</label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-background/50 border border-input rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-neon/50"
                  >
                    <option value="">Select event type</option>
                    <option value="workshop">Workshop</option>
                    <option value="seminar">Seminar</option>
                    <option value="hackathon">Hackathon</option>
                    <option value="competition">Competition</option>
                    <option value="networking">Networking Event</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Target Audience</label>
                <Input
                  name="targetAudience"
                  placeholder="Who is this event for? (e.g., beginners, professionals, students)"
                  value={formData.targetAudience}
                  onChange={handleChange}
                  required
                  className="bg-background/50"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Event Description</label>
                <textarea
                  name="description"
                  placeholder="Describe your event idea, objectives, and what participants will learn or achieve..."
                  value={formData.description}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-3 py-2 bg-background/50 border border-input rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-neon/50 resize-none"
                />
              </div>
              
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  rotateX: 2,
                  rotateY: 2,
                  z: 5
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Button type="submit" variant="neon" size="lg" className="w-full transform-gpu group">
                  Submit Proposal
                  <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
