"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ReactNode } from "react"

interface AnimatedButtonProps {
  href?: string
  onClick?: () => void
  children: ReactNode
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "neon"
  size?: "default" | "sm" | "lg" | "icon"
  className?: string
  disabled?: boolean
  type?: "button" | "submit" | "reset"
  external?: boolean
  animation?: "3d" | "scale" | "none"
}

export default function AnimatedButton({
  href,
  onClick,
  children,
  variant = "default",
  size = "default",
  className = "",
  disabled = false,
  type = "button",
  external = false,
  animation = "3d"
}: AnimatedButtonProps) {
  const animationProps = animation === "3d" ? {
    whileHover: { 
      scale: 1.05,
      rotateX: 3,
      rotateY: 3,
      z: 10
    },
    whileTap: { scale: 0.95 },
    transition: { type: "spring" as const, stiffness: 300, damping: 20 },
    style: { transformStyle: "preserve-3d" as const }
  } : animation === "scale" ? {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.95 },
    transition: { type: "spring" as const, stiffness: 300, damping: 20 }
  } : {}

  const buttonElement = (
    <Button
      variant={variant}
      size={size}
      className={`transform-gpu ${className}`}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </Button>
  )

  if (href) {
    return (
      <motion.div {...animationProps} className="inline-block">
        <Button
          asChild
          variant={variant}
          size={size}
          className={`transform-gpu ${className}`}
          disabled={disabled}
        >
          {external ? (
            <a href={href} target="_blank" rel="noopener noreferrer">
              {children}
            </a>
          ) : (
            <Link href={href}>
              {children}
            </Link>
          )}
        </Button>
      </motion.div>
    )
  }

  return (
    <motion.div {...animationProps} className="inline-block">
      {buttonElement}
    </motion.div>
  )
}
