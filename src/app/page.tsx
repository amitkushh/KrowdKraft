// src/app/page.tsx
import Hero from "@/components/sections/hero"
import Navigation from "@/components/navigation"
import About from "@/components/sections/about"
import ServicesPreview from "@/components/sections/services-preview"
import Community from "@/components/sections/community"
import Merch from "@/components/sections/merch"
import Team from "@/components/sections/team"
import FAQ from "@/components/sections/faq"
import Footer from "@/components/sections/footer"
import ParallaxWrapper from "@/components/parallax-wrapper"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />

      <section id="about">
        <ParallaxWrapper speed={0.3}>
          <About />
        </ParallaxWrapper>
      </section>

      <section id="services">
        <ParallaxWrapper speed={0.25}>
          <ServicesPreview />
        </ParallaxWrapper>
      </section>

      <section id="community">
        <ParallaxWrapper speed={0.2}>
          <Community />
        </ParallaxWrapper>
      </section>

      <section id="merch">
        <ParallaxWrapper speed={0.2}>
          <Merch />
        </ParallaxWrapper>
      </section>

      <section id="team">
        <ParallaxWrapper speed={0.2}>
          <Team />
        </ParallaxWrapper>
      </section>
      <section id="faq">
        <ParallaxWrapper speed={0.2}>
          <FAQ />
        </ParallaxWrapper>
      </section>

      <Footer />
    </main>
  );
}
