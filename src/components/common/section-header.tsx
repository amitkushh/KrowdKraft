"use client"

import { motion } from "framer-motion"

interface SectionHeaderProps {
  title: string
  highlightText?: string
  subtitle?: string
  description?: string
  className?: string
  animated?: boolean
}

export default function SectionHeader({
  title,
  highlightText,
  subtitle,
  description,
  className = "",
  animated = true
}: SectionHeaderProps) {
  const content = (
    <div className={`text-center mb-16 ${className}`}>
      {subtitle && (
        <p className="text-neon text-sm sm:text-base font-semibold tracking-wider uppercase mb-4">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
        {title}{" "}
        {highlightText && (
          <span className="neon-text">{highlightText}</span>
        )}
      </h2>
      {description && (
        <p className="text-xl text-muted-foreground max-w-5xl mx-auto text-balance">
          {description}
        </p>
      )}
    </div>
  )

  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {content}
      </motion.div>
    )
  }

  return content
}
