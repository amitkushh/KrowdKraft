"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import Navigation from "@/components/navigation"
import Footer from "@/components/sections/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, MapPin, Phone, CheckCircle } from "lucide-react"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  company: z.string().optional(),
  service: z.string().min(1, "Please select a service"),
  budget: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormData = z.infer<typeof contactSchema>

const services = [
  "Community Design", 
  "Event Activations",
  "Campus Waves",
  "Custom Project"
]

const budgetRanges = [
  "Under $5K",
  "$5K - $15K",
  "$15K - $50K", 
  "$50K - $100K",
  "$100K+"
]

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log("Form submitted:", data)
    setIsSubmitted(true)
    reset()
  }

  if (isSubmitted) {
    return (
      <>
        <Navigation />
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="container mx-auto max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="glass-card p-12"
            >
              <CheckCircle className="h-16 w-16 text-neon mx-auto mb-6" />
              <h1 className="text-3xl font-bold mb-4">
                Message Sent Successfully!
              </h1>
              <p className="text-muted-foreground mb-8">
                Thanks for reaching out! We've received your message and will get back to you 
                within 24 hours. In the meantime, check out our latest case studies or upcoming events.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  variant="neon"
                >
                  Send Another Message
                </Button>
                <Button variant="outline" asChild>
                  <a href="/work">View Our Work</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
        <Footer />
      </>
    )
  }

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
              Let's Build Something{" "}
              <span className="neon-text">Epic</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-balance">
              Ready to connect your brand with Gen Z culture? Tell us about your project 
              and we'll craft a strategy that feels authentic and drives results.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-neon" />
                    <span>krowdkraft.official@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-neon" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-neon" />
                    <span>San Francisco, CA</span>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6">
                <h3 className="font-semibold mb-4">Typical Response Time</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>New inquiries</span>
                    <span className="text-neon">Within 24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Project proposals</span>
                    <span className="text-neon">3-5 business days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Event partnerships</span>
                    <span className="text-neon">1-2 business days</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit(onSubmit)} className="glass-card p-8 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <Input
                      {...register("name")}
                      placeholder="Your name"
                      className={errors.name ? "border-red-500" : ""}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      {...register("email")}
                      type="email"
                      placeholder="your@email.com"
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Company
                    </label>
                    <Input
                      {...register("company")}
                      placeholder="Your company"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Service *
                    </label>
                    <select
                      {...register("service")}
                      className="w-full h-10 px-3 rounded-2xl border border-input bg-background text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="text-red-500 text-xs mt-1">{errors.service.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Budget Range
                  </label>
                  <select
                    {...register("budget")}
                    className="w-full h-10 px-3 rounded-2xl border border-input bg-background text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    {...register("message")}
                    placeholder="Tell us about your project, goals, and timeline..."
                    rows={6}
                    className={`w-full px-3 py-2 rounded-2xl border border-input bg-background text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                      errors.message ? "border-red-500" : ""
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  variant="neon"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

