"use client"

import { useRef, useMemo, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

// Simple dots component for the globe
function SimpleDots({ radius }: { radius: number }) {
  const meshRef = useRef<THREE.InstancedMesh>(null!)
  const dummy = useMemo(() => new THREE.Object3D(), [])
  
  // Create positions for dots in a grid pattern
  const positions = useMemo(() => {
    const positions = []
    const count = 100 // Reduced for performance
    
    for (let i = 0; i < count; i++) {
      for (let j = 0; j < count; j++) {
        const lat = (i / count) * 180 - 90
        const lng = (j / count) * 360 - 180
        
        // Only show top hemisphere
        if (lat >= -30) {
          const phi = (90 - lat) * (Math.PI / 180)
          const theta = (lng + 180) * (Math.PI / 180)
          
          const x = -(radius * Math.sin(phi) * Math.cos(theta))
          const y = radius * Math.cos(phi)
          const z = radius * Math.sin(phi) * Math.sin(theta)
          
          positions.push(new THREE.Vector3(x, y, z))
        }
      }
    }
    return positions
  }, [radius])

  useFrame((state) => {
    if (!meshRef.current) return
    
    const time = state.clock.elapsedTime
    
    positions.forEach((position, i) => {
      dummy.position.copy(position)
      
      // Simple pulsing animation
      const scale = 0.8 + Math.sin(time * 2 + i * 0.1) * 0.2
      dummy.scale.setScalar(scale)
      dummy.updateMatrix()
      
      meshRef.current.setMatrixAt(i, dummy.matrix)
    })
    
    meshRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh
      ref={meshRef}
      args={[undefined, undefined, positions.length]}
    >
      <sphereGeometry args={[0.02, 6, 6]} />
      <meshBasicMaterial 
        color="#a855f7" 
        transparent 
        opacity={0.8}
      />
    </instancedMesh>
  )
}

// Simple globe component
function SimpleGlobe() {
  const groupRef = useRef<THREE.Group>(null!)
  const radius = 4

  useFrame((state) => {
    if (!groupRef.current) return
    
    // Simple rotation (slower)
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.05
  })

  return (
    <group ref={groupRef} position={[0, -1.5, 0]}>
      <SimpleDots radius={radius} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#a855f7" />
    </group>
  )
}

// Main component
export default function SimpleGlobe3D() {
  const [isReduced, setIsReduced] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setIsReduced(mediaQuery.matches)

    const handleChange = () => setIsReduced(mediaQuery.matches)
    mediaQuery.addEventListener("change", handleChange)
    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  if (isReduced) {
    return (
      <div className="absolute inset-0 flex items-end justify-center bg-black">
        <div className="relative w-64 h-64 mb-0">
          {Array.from({ length: 100 }, (_, i) => {
            const angle = (i / 100) * Math.PI * 2
            const radius = Math.random() * 100 + 20
            const x = Math.cos(angle) * radius
            const y = Math.sin(angle) * radius * 0.3
            
            return (
              <div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-purple-500"
                style={{
                  left: `50%`,
                  top: `80%`,
                  transform: `translate(${x}px, ${y}px)`,
                  opacity: Math.random() * 0.8 + 0.2,
                }}
              />
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className="absolute inset-0 bg-black">
      <Canvas
        camera={{ 
          position: [0, 3, 6], 
          fov: 60
        }}
        gl={{ 
          alpha: false, 
          antialias: true
        }}
      >
        <color attach="background" args={['#000000']} />
        <SimpleGlobe />
      </Canvas>
    </div>
  )
}
