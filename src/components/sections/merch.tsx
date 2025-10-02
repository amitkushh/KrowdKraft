import SubscribeForm from "./subscribe-form"
import { ShieldCheck, Users, Zap, ChevronDown } from "lucide-react"

export default function MerchSection() {
  return (
    <section
      id="merch"
      className="
        relative min-h-screen flex flex-col justify-center items-center
        px-6 py-20 md:py-28
        bg-gradient-to-b from-black via-[#0a0a12] to-black
        scroll-mt-24 md:scroll-mt-28
      "
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden />
      <div className="mx-auto max-w-5xl">
        {/* Neon headline */}
        <div className="relative mb-10 text-center">
          <div
            className="pointer-events-none absolute inset-0 -z-10 blur-3xl opacity-50"
            style={{
              background:
                "radial-gradient(60% 60% at 50% 40%, rgba(56,189,248,.25) 0%, rgba(192,132,252,.2) 35%, rgba(0,0,0,0) 70%)",
            }}
            aria-hidden
          />
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight">
            <span className="bg-clip-text text-transparent bg-[linear-gradient(90deg,#22d3ee,45%,#a78bfa)] drop-shadow-[0_0_12px_rgba(167,139,250,0.35)]">
              Merch Dropping Soon
            </span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-zinc-300">
            Limited Runs • Neon Aesthetic • Early Access for Subscribers
          </p>
        </div>

        {/* Glass card */}
        <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/[.045] backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset,0_8px_30px_rgba(2,8,23,0.45)] p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-medium text-white text-center">Get Notified</h3>
          <p className="mt-2 text-sm text-zinc-400 text-center">
            Be the first to rep KrowdKraft merch. Members-only perks, early access drops, and exclusive discounts.
          </p>

          <SubscribeForm />

          {/* Credibility row (no made-up metrics) */}
          <div className="mt-5 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-zinc-400">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-cyan-400" />
              <span>Join the waitlist</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-violet-400" />
              <span>Instant updates</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-green-400" />
              <span>Privacy-first, no spam</span>
            </div>
          </div>
        </div>

        {/* Explore link to next section */}
        <div className="mt-10 text-center">
          <a href="#community" className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition">
            Explore More <ChevronDown className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
