import SubscribeForm from "./subscribe-form"
import { ShieldCheck, Users, Zap } from "lucide-react"

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
        {/* Section title — match site style: white + purple with subtle glow */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="text-white">Merch</span>{" "}
            <span className="text-purple-400 drop-shadow-[0_0_18px_rgba(168,85,247,0.45)]">
              Dropping Soon
            </span>
          </h2>

          <p className="mt-4 text-base md:text-lg text-muted-foreground">
            Limited Runs • Neon Aesthetic • Early Access for Subscribers
          </p>
        </div>

        {/* Glass card */}
        <div className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/[.045] backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset,0_8px_30px_rgba(2,8,23,0.45)] p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-semibold text-white text-center">
            Get Notified
          </h3>
          <p className="mt-2 text-sm text-zinc-400 text-center">
            Be the first to rep KrowdKraft merch. Members-only perks, early access drops, and exclusive discounts.
          </p>

          <SubscribeForm />

          {/* Credibility row */}
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
      </div>
    </section>
  )
}
