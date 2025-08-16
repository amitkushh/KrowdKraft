"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Plus, Minus } from "lucide-react"
import { useState } from "react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "What makes KrowdKraft different from other marketing agencies?",
      answer: "We specialize exclusively in Gen Z and Millennial marketing. Our team consists of cultural insiders who understand the nuances, platforms, and communication styles that resonate with these generations. We don't just reach your audience—we genuinely connect with them."
    },
    {
      question: "How do you measure success for campaigns targeting Gen Z and Millennials?",
      answer: "Beyond traditional metrics, we focus on engagement quality, community growth, brand sentiment, and authentic interactions. We track metrics like share-to-impression ratios, comment sentiment analysis, and community retention rates that matter for building lasting relationships."
    },
    {
      question: "What platforms do you typically work with?",
      answer: "We work across all major platforms where Gen Z and Millennials are active: TikTok, Instagram, Twitter, YouTube, Discord, Twitch, and emerging platforms. Our strategy is platform-agnostic—we go where your audience is and adapt our approach accordingly."
    },
    {
      question: "How long does it typically take to see results?",
      answer: "While brand awareness can improve within weeks, building authentic community engagement typically takes 2-3 months. We focus on sustainable, long-term growth rather than quick fixes that don't last."
    },
    {
      question: "Do you work with businesses of all sizes?",
      answer: "Yes! We work with startups looking to build their first community, established brands wanting to connect with younger audiences, and everything in between. Our strategies scale based on your goals and budget."
    },
    {
      question: "What's your approach to working with influencers and creators?",
      answer: "We believe in authentic partnerships, not transactional relationships. We help match brands with creators whose values align, ensuring genuine endorsements that audiences trust. We handle everything from identification to campaign management."
    },
    {
      question: "How do you stay ahead of trends?",
      answer: "Our team lives and breathes digital culture. We're active community members ourselves, have insider connections across platforms, and use advanced social listening tools to spot trends before they go mainstream."
    },
    {
      question: "What's included in your service packages?",
      answer: "Our packages typically include strategy development, content creation, community management, influencer partnerships, performance tracking, and regular optimization. We customize each package based on your specific needs and goals."
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
            Frequently Asked{" "}
            <span className="neon-text">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Got questions? We've got answers. Here's everything you need to know 
            about working with KrowdKraft.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ 
                scale: 1.01,
                rotateX: 1,
                rotateY: 1
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="glass-card transform-gpu"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <span className="text-lg font-semibold pr-4">{faq.question}</span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="h-5 w-5 text-neon" />
                  ) : (
                    <Plus className="h-5 w-5 text-muted-foreground" />
                  )}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Still have questions? We'd love to chat!
          </p>
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
              Book a Call
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
