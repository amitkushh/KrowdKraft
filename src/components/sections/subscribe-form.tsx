"use client"

import { Mail } from "lucide-react"

export default function SubscribeForm() {
  async function action(formData: FormData) {
    const email = String(formData.get("email") || "").trim()
    if (!email) return alert("Please enter a valid email.")

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source: "merch-page",
          tag: "merch_waitlist",
          timestamp: new Date().toISOString(),
        }),
      })
      if (!res.ok) throw new Error("failed")
      alert("You’re in! We’ll email you before the drop.")
    } catch {
      alert("Something went wrong — please try again shortly.")
    }
  }

  return (
    <form action={action} className="mt-6 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-3">
      <label htmlFor="email" className="sr-only">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        inputMode="email"
        autoComplete="email"
        required
        placeholder="you@krowdkraft.com"
        className="w-full rounded-xl border border-white/10 bg-white/[.06] px-4 py-3 text-white placeholder:text-zinc-400 outline-none focus:border-cyan-300/40 focus:ring-2 focus:ring-cyan-300/20"
        aria-label="Email address"
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-medium
                   bg-gradient-to-r from-cyan-400 to-violet-500 text-black
                   shadow-[0_0_0_1px_rgba(255,255,255,0.25)_inset,0_8px_30px_rgba(34,211,238,0.25)]
                   hover:brightness-110 active:scale-[.99] transition"
        aria-label="Subscribe for merch updates"
      >
        <Mail className="h-4 w-4" />
        Notify Me
      </button>
    </form>
  )
}
