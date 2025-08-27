"use client"

import { motion } from "framer-motion"
import Navigation from "@/components/navigation"
import Footer from "@/components/sections/footer"

export default function CookiesPage() {
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
              Cookie{" "}
              <span className="neon-text">Policy</span>
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
              <h2 className="text-2xl font-bold mb-4 text-neon">What Are Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences and 
                analyzing how you use our site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-neon">Types of Cookies We Use</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Essential Cookies</h3>
                  <p className="text-muted-foreground">
                    These cookies are necessary for the website to function properly. They enable 
                    basic features like page navigation and access to secure areas.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Analytics Cookies</h3>
                  <p className="text-muted-foreground">
                    We use analytics cookies to understand how visitors interact with our website, 
                    helping us improve our services and user experience.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Functional Cookies</h3>
                  <p className="text-muted-foreground">
                    These cookies enable enhanced functionality and personalization, such as 
                    remembering your preferences and settings.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Marketing Cookies</h3>
                  <p className="text-muted-foreground">
                    With your consent, we may use marketing cookies to deliver relevant 
                    advertisements and measure their effectiveness.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-neon">Third-Party Cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may use third-party services that place cookies on your device:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Google Analytics for website analytics</li>
                <li>Social media platforms for content sharing</li>
                <li>Marketing platforms for advertising campaigns</li>
                <li>Performance monitoring tools</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-neon">Managing Your Cookie Preferences</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You can control and manage cookies in several ways:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Use our cookie consent banner when you first visit our site</li>
                <li>Adjust your browser settings to block or delete cookies</li>
                <li>Use browser extensions to manage cookie preferences</li>
                <li>Contact us to request cookie preference changes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-neon">Cookie Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                Different cookies have different retention periods:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-4">
                <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Persistent cookies:</strong> Remain until they expire or are deleted</li>
                <li><strong>Analytics cookies:</strong> Typically retained for 2 years</li>
                <li><strong>Marketing cookies:</strong> Usually expire after 30-90 days</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-neon">Updates to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Cookie Policy from time to time. We will notify you of any 
                significant changes by posting the new policy on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-neon">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about our use of cookies, please contact us at:
                <br />
                <span className="text-neon">cookies@krowdkraft.com</span>
              </p>
            </section>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  )
}






