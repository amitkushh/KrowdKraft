"use client"

import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

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
          source: "merch-section",
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
      {/* Email Input with Gradient Glow */}
      <div className="relative group">
        <label htmlFor="email" className="sr-only">
          Email
        </label>

        {/* Gradient border */}
        <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-400 via-purple-500 to-fuchsia-500 opacity-60 blur group-hover:opacity-100 transition duration-500"></div>

        {/* Input field */}
        <div className="relative flex items-center rounded-2xl bg-black/80 border border-white/10 focus-within:border-cyan-300/50">
          <Mail className="absolute left-3 h-5 w-5 text-cyan-300" />
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            required
            placeholder="you@krowdkraft.com"
            aria-label="Email address"
            className="w-full pl-10 pr-4 py-3 text-sm rounded-2xl bg-transparent text-white placeholder-zinc-400 focus:outline-none"
          />
        </div>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 font-medium 
                   bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 
                   hover:from-purple-400 hover:via-pink-400 hover:to-cyan-300 
                   transition-all duration-300 shadow-lg shadow-purple-500/20"
      >
        <Mail className="h-4 w-4" />
        Notify Me
      </Button>
    </form>
  )
}
