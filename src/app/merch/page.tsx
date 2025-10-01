import type { Metadata } from "next"
import Link from "next/link"
import SubscribeForm from "../../components/sections/subscribe-form"

export const metadata: Metadata = {
  title: "Merch — KrowdKraft",
  description: "Merch dropping soon. Join the waitlist for early access.",
}

export default function MerchPage() {
  return (
    <main className="min-h-[calc(100dvh-4rem)] w-full bg-gradient-to-b from-black via-[#0a0a12] to-black px-6 py-20 md:py-28">
      <div className="mx-auto max-w-5xl">
        {/* Hero */}
        <div className="relative mb-12 text-center md:mb-14">
          <div
            className="pointer-events-none absolute inset-0 -z-10 blur-3xl opacity-50"
            aria-hidden
            style={{
              background:
                "radial-gradient(60% 60% at 50% 40%, rgba(56,189,248,.25) 0%, rgba(192,132,252,.2) 35%, rgba(0,0,0,0) 70%)",
            }}
          />
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
            <span className="bg-clip-text text-transparent bg-[linear-gradient(90deg,#22d3ee,45%,#a78bfa)] drop-shadow-[0_0_12px_rgba(167,139,250,0.35)]">
              Merch Dropping Soon
            </span>
          </h1>
          <p className="mt-4 text-base md:text-lg text-zinc-300">
            Limited Runs • Neon Aesthetic • Early Access for Subscribers
          </p>
        </div>

        {/* Glass Card */}
        <section className="mx-auto max-w-2xl rounded-2xl border border-white/10 bg-white/[.045] backdrop-blur-xl shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset,0_8px_30px_rgba(2,8,23,0.45)] p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-medium text-white">Get Notified</h2>
          <p className="mt-2 text-sm text-zinc-400">
            Join the waitlist to receive sizes, drop dates, and early access.
          </p>

          <SubscribeForm />

          <p className="mt-3 text-xs text-zinc-400">No spam — unsubscribe anytime.</p>
        </section>

        <div className="mt-10 text-center">
          <Link href="/" className="text-sm text-zinc-400 hover:text-white transition">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
