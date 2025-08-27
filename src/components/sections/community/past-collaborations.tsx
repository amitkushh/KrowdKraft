"use client"

import { motion } from "framer-motion"
import { Building, Users, Handshake, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import { useState } from "react"

export default function PastCollaborations() {
  const [showPartnerForm, setShowPartnerForm] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    organizationName: "",
    mobile: "",
    email: ""
  })

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/partner-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: formData
        }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false)
          setShowPartnerForm(false)
          setFormData({
            organizationName: "",
            mobile: "",
            email: ""
          })
        }, 3000)
      } else {
        throw new Error('Failed to send email')
      }
    } catch (error) {
      console.error('Error submitting partnership form:', error)
      alert("There was an error submitting your partnership request. Please try again.")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const collaborations = [
    { name: "REVA University", logo: "RU", logoImage: "/images/partners/reva-university.png" },
    { name: "MS Ramaiah Institute of Technology", logo: "MSRIT", logoImage: "/images/partners/ms-ramaiah.png" },
    { name: "Harsha Institute of Management Studies", logo: "HIMS", logoImage: "/images/partners/harsha-institute.png" },
    { name: "T John Institute of Technology", logo: "TJIT", logoImage: "/images/partners/t-john-institute.png" }
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



        {/* Partners Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center max-w-7xl mx-auto">
            {collaborations.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ 
                  scale: 1.03,
                  rotateY: 2
                }}
                className="glass-card p-8 text-center transform-gpu cursor-pointer group relative overflow-hidden w-full max-w-xs"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 via-purple-400/20 to-purple-400/10 blur-xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-400/5 to-transparent blur-2xl"></div>
                  <div className="absolute inset-0 border border-purple-400/30 rounded-xl"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Logo image or placeholder */}
                  <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 p-2 shadow-md group-hover:shadow-lg transition-all overflow-hidden">
                    {partner.logoImage ? (
                      <Image
                        src={partner.logoImage}
                        alt={`${partner.name} logo`}
                        width={60}
                        height={60}
                        className="object-contain rounded-lg"
                        onError={(e) => {
                          // Fallback to initials if image fails to load
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.parentNode?.querySelector('.fallback-text');
                          if (fallback) fallback.classList.remove('hidden');
                        }}
                      />
                    ) : null}
                    <span className={`text-xl font-bold text-neon ${partner.logoImage ? 'hidden fallback-text' : ''}`}>{partner.logo}</span>
                  </div>
                  <h4 className="font-semibold text-lg group-hover:text-neon transition-colors">
                    {partner.name}
                  </h4>
                </div>
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
              <button 
                onClick={() => setShowPartnerForm(true)}
                className="px-6 py-3 bg-neon/10 hover:bg-neon/20 text-neon border border-neon/30 rounded-xl transition-all font-medium"
              >
                Partner With Us
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Partnership Form Modal */}
      {showPartnerForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-background/95 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-md w-full relative"
          >
            <button
              onClick={() => setShowPartnerForm(false)}
              className="absolute top-4 right-4 w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
            >
              <X className="h-4 w-4" />
            </button>

            {!isSubmitted ? (
              <>
                <div className="text-center mb-6">
                  <Handshake className="h-12 w-12 text-neon mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Partner With Us</h3>
                  <p className="text-muted-foreground text-sm">
                    Let's create something amazing together! Our team will get in touch with you soon.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Community/Organization Name</label>
                    <Input
                      name="organizationName"
                      placeholder="Enter your organization name"
                      value={formData.organizationName}
                      onChange={handleChange}
                      required
                      className="bg-background/50"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Mobile Number</label>
                    <Input
                      name="mobile"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={formData.mobile}
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
                  
                  <Button type="submit" variant="neon" size="lg" className="w-full">
                    Show Interest
                  </Button>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Handshake className="h-8 w-8 text-green-400" />
                </div>
                <h3 className="text-2xl font-bold mb-2 text-green-400">Thank You!</h3>
                <p className="text-muted-foreground">
                  Thank you for showing interest in partnering with us. Our team will get in touch with you soon!
                </p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </section>
  )
}
