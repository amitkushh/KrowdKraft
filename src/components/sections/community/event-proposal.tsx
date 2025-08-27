"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Lightbulb, Send, ChevronDown, CheckCircle, X } from "lucide-react"
import { useState } from "react"

export default function EventProposal() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    eventTitle: "",
    eventType: "",
    tentativeDates: "",
    description: "",
    targetAudience: ""
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<{[key: string]: string}>({})

  // Validation functions
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateMobile = (mobile: string) => {
    // Check if all characters are numeric (allow spaces, dashes, parentheses, and plus)
    const numericRegex = /^[\d\s\-\(\)\+]*$/
    return numericRegex.test(mobile) && mobile.replace(/[\s\-\(\)\+]/g, '').length > 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate form
    const newErrors: {[key: string]: string} = {}
    
    if (!formData.email || !validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    if (formData.mobile && !validateMobile(formData.mobile)) {
      newErrors.mobile = 'Please enter numbers only'
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'event-proposal',
          data: formData
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        // Reset form
        setFormData({
          name: "",
          email: "",
          mobile: "",
          eventTitle: "",
          eventType: "",
          tentativeDates: "",
          description: "",
          targetAudience: ""
        })
        // Auto close after 4 seconds
        setTimeout(() => {
          setIsSubmitted(false)
        }, 4000)
      } else {
        throw new Error('Failed to send email')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert("There was an error submitting your proposal. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }

    // Real-time validation
    if (name === 'email' && value) {
      if (!validateEmail(value)) {
        setErrors(prev => ({ ...prev, email: 'Please enter a valid email address' }))
      }
    }
    
    if (name === 'mobile' && value) {
      if (!validateMobile(value)) {
        setErrors(prev => ({ ...prev, mobile: 'Please enter numbers only' }))
      }
    }
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
            className="glass-card p-8"
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
                    className={`bg-background/50 ${errors.email ? 'border-red-500 focus:ring-red-500/50' : ''}`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Mobile Number</label>
                  <Input
                    name="mobile"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    className={`bg-background/50 ${errors.mobile ? 'border-red-500 focus:ring-red-500/50' : ''}`}
                  />
                  {errors.mobile && (
                    <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Tentative Dates</label>
                  <Input
                    name="tentativeDates"
                    type="text"
                    placeholder="e.g., March 15-16, 2024"
                    value={formData.tentativeDates}
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
                  <div className="relative">
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 pr-10 bg-background/50 border border-input rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-neon/50 text-foreground appearance-none"
                    >
                      <option value="" className="bg-background text-muted-foreground">Select event type</option>
                      <option value="workshop" className="bg-background text-foreground">Workshop</option>
                      <option value="seminar" className="bg-background text-foreground">Seminar</option>
                      <option value="hackathon" className="bg-background text-foreground">Hackathon</option>
                      <option value="competition" className="bg-background text-foreground">Competition</option>
                      <option value="networking" className="bg-background text-foreground">Networking Event</option>
                      <option value="other" className="bg-background text-foreground">Other</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
                  </div>
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
              
              <Button type="submit" variant="neon" size="lg" className="w-full group" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Proposal"}
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Success Popup */}
      <AnimatePresence>
        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="glass-card w-full max-w-md p-8 text-center"
            >
              <button
                onClick={() => setIsSubmitted(false)}
                className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-lg transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
              
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 300 }}
                className="w-16 h-16 bg-neon/20 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <CheckCircle className="h-8 w-8 text-neon" />
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-2xl font-bold mb-4"
              >
                Thank You!
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-3"
              >
                <p className="text-muted-foreground">
                  Your event proposal has been submitted successfully!
                </p>
                <p className="text-sm text-neon">
                  <strong>We'll review it and get back to you soon.</strong>
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
