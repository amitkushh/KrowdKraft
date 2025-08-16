"use client"

import { useEffect, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { motion } from "framer-motion"
import GatheringCircle from "./gathering-circle"

export default function Hero3D() {
  const [isReduced, setIsReduced] = useState(false)

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setIsReduced(mediaQuery.matches)

    const handleChange = () => setIsReduced(mediaQuery.matches)
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  if (isReduced) {
    // Static fallback for users who prefer reduced motion - completed circle
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          {/* Central community circle */}
          <div className="relative w-40 h-40 flex items-center justify-center">
            {/* Central glowing point */}
            <div className="w-4 h-4 bg-neon rounded-full opacity-80 absolute" />
            
            {/* Static community circle - always present */}
            {Array.from({ length: 12 }, (_, i) => {
              const angle = (i / 12) * Math.PI * 2
              const radius = 60
              const x = Math.cos(angle) * radius
              const y = Math.sin(angle) * radius
              
              return (
                <div
                  key={i}
                  className="absolute w-2 h-5 bg-neon rounded-full opacity-90"
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                    left: '50%',
                    top: '50%',
                    marginLeft: '-4px',
                    marginTop: '-10px',
                  }}
                />
              )
            })}
            
            {/* Additional incoming figures positioned around the edges */}
            {Array.from({ length: 4 }, (_, i) => {
              const positions = [
                { x: 0, y: -90 }, // North
                { x: 90, y: 0 },  // East
                { x: 0, y: 90 },  // South
                { x: -90, y: 0 }  // West
              ]
              const pos = positions[i]
              
              return (
                <div
                  key={`incoming-${i}`}
                  className="absolute w-2 h-5 bg-pink-400 rounded-full opacity-70"
                  style={{
                    transform: `translate(${pos.x}px, ${pos.y}px)`,
                    left: '50%',
                    top: '50%',
                    marginLeft: '-4px',
                    marginTop: '-10px',
                  }}
                />
              )
            })}
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="absolute inset-0 opacity-40">
      <Canvas
        camera={{ position: [0, 4, 8], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
      >
        <GatheringCircle />
      </Canvas>
    </div>
  )
}
