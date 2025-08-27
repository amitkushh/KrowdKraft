"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"

interface DynamicGridProps {
  children: ReactNode
  minItemWidth?: string
  gap?: string
  maxColumns?: number
  className?: string
  animated?: boolean
}

export default function DynamicGrid({
  children,
  minItemWidth = "280px",
  gap = "1.5rem",
  maxColumns = 4,
  className = "",
  animated = true
}: DynamicGridProps) {
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(auto-fit, minmax(${minItemWidth}, 1fr))`,
    gap: gap,
    justifyItems: 'center',
    maxWidth: '100%'
  }

  // Responsive grid classes based on maxColumns
  const getResponsiveClasses = () => {
    switch (maxColumns) {
      case 2:
        return "grid-cols-1 md:grid-cols-2"
      case 3:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
      case 4:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      case 5:
        return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      default:
        return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    }
  }

  if (animated) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`grid ${getResponsiveClasses()} gap-6 justify-items-center ${className}`}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <div className={`grid ${getResponsiveClasses()} gap-6 justify-items-center ${className}`}>
      {children}
    </div>
  )
}
