"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import Footer from "@/components/sections/footer"

export default function TermsPage() {
  return (
    <>
      <Navigation />
      
      <main className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-center">
              Terms of{" "}
              <span className="neon-text">Service</span>
            </h1>
            <p className="text-xl text-muted-foreground text-center mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 lg:p-12 space-y-8"
          >
            <section>
              <h2 className="text-2xl font-bold mb-4 text-neon">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using KrowdKraft's services, you accept and agree to be bound by 
                these Terms of Service. If you do not agree to these terms, you may not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-neon">2. Description of Service</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                KrowdKraft provides marketing and community engagement services, including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Creator collaboration and partnership management</li>
                <li>Community design and engagement strategies</li>
                <li>Event planning and activation services</li>
                <li>Social media and content creation</li>
                <li>Campus and institutional outreach programs</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-neon">3. User Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As a user of our services, you agree to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of your account</li>
                <li>Use our services in compliance with applicable laws</li>
                <li>Respect intellectual property rights</li>
                <li>Not engage in harmful or disruptive activities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-neon">4. Payment Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                Payment terms are specified in individual service agreements. All fees are 
                non-refundable unless otherwise stated in writing. We reserve the right to 
                modify our pricing with appropriate notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-neon">5. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content, trademarks, and intellectual property on our platform remain 
                the property of KrowdKraft or our licensors. You may not use our intellectual 
                property without explicit written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-neon">6. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                KrowdKraft shall not be liable for any indirect, incidental, special, or 
                consequential damages arising from the use of our services. Our total liability 
                shall not exceed the amount paid for our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-neon">7. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may terminate or suspend your access to our services at any time, with or 
                without cause, with appropriate notice as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-neon">8. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions regarding these Terms of Service, please contact us at:
                <br />
                <span className="text-neon">legal@krowdkraft.com</span>
              </p>
            </section>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  )
}






