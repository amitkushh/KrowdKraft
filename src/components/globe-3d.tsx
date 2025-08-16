"use client"

import { useRef, useMemo, useState, useEffect } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"

import * as THREE from "three"

// Helper function to convert lat/lng to 3D sphere coordinates
function latLngToVector3(lat: number, lng: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lng + 180) * (Math.PI / 180)
  
  return new THREE.Vector3(
    -(radius * Math.sin(phi) * Math.cos(theta)),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  )
}

// Component for the glowing dots on the globe
function GlowingDots({ radius }: { radius: number }) {
  const meshRef = useRef<THREE.InstancedMesh>(null!)
  const [hovered, setHovered] = useState(false)
  const dummy = useMemo(() => new THREE.Object3D(), [])
  
  // Create positions for dots in a lat/lng grid
  const positions = useMemo(() => {
    const positions = []
    const count = 150 // Number of latitude lines
    const step = 180 / count
    
    for (let lat = -90; lat <= 90; lat += step) {
      const circumference = Math.cos((lat * Math.PI) / 180)
      const longitudeStep = circumference > 0.1 ? 360 / Math.max(8, Math.floor(circumference * 50)) : 360
      
      for (let lng = -180; lng < 180; lng += longitudeStep) {
        // Only show hemisphere (top half from bottom view)
        if (lat >= -30) {
          positions.push(latLngToVector3(lat, lng, radius))
        }
      }
    }
    return positions
  }, [radius])

  // Create pulsing hotspots
  const [hotspots, setHotspots] = useState<number[]>([])
  
  useEffect(() => {
    const interval = setInterval(() => {
      // Randomly select 3-5 hotspots
      const newHotspots = []
      const numHotspots = Math.floor(Math.random() * 3) + 3
      for (let i = 0; i < numHotspots; i++) {
        newHotspots.push(Math.floor(Math.random() * positions.length))
      }
      setHotspots(newHotspots)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [positions.length])

  useFrame((state) => {
    if (!meshRef.current) return
    
    const time = state.clock.elapsedTime
    
    positions.forEach((position, i) => {
      dummy.position.copy(position)
      
      // Base scale
      let scale = 0.8
      
      // Hotspot pulsing effect
      if (hotspots.includes(i)) {
        scale += Math.sin(time * 3 + i * 0.1) * 0.4 + 0.3
      }
      
      // Random subtle pulsing for organic feel
      scale += Math.sin(time * 2 + i * 0.5) * 0.1
      
      dummy.scale.setScalar(scale)
      dummy.lookAt(0, 0, 0)
      dummy.updateMatrix()
      
      meshRef.current.setMatrixAt(i, dummy.matrix)
    })
    
    meshRef.current.instanceMatrix.needsUpdate = true
  })

  // Enhanced material with emissive glow
  const material = useMemo(() => {
    return new THREE.MeshBasicMaterial({
      color: new THREE.Color(1.0, 0.4, 0.9), // Neon purple-pink
      transparent: true,
      opacity: 0.95,
    })
  }, [])

  return (
    <instancedMesh
      ref={meshRef}
      args={[undefined, undefined, positions.length]}
      material={material}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[0.02, 8, 8]} />
    </instancedMesh>
  )
}

// Component for flowing connection lines
function FlowingConnections({ radius }: { radius: number }) {
  const lineRefs = useRef<THREE.Line[]>([])
  const [connections, setConnections] = useState<Array<{
    start: THREE.Vector3
    end: THREE.Vector3
    progress: number
    id: number
  }>>([])

  useEffect(() => {
    const interval = setInterval(() => {
      // Create new flowing connection
      const lat1 = Math.random() * 120 - 60 // -60 to 60 degrees
      const lng1 = Math.random() * 360 - 180
      const lat2 = Math.random() * 120 - 60
      const lng2 = Math.random() * 360 - 180
      
      const start = latLngToVector3(lat1, lng1, radius + 0.1)
      const end = latLngToVector3(lat2, lng2, radius + 0.1)
      
      setConnections(prev => [
        ...prev.slice(-4), // Keep only last 4 connections
        {
          start,
          end,
          progress: 0,
          id: Date.now()
        }
      ])
    }, 2000)
    
    return () => clearInterval(interval)
  }, [radius])

  useFrame((state) => {
    const deltaTime = state.clock.getDelta()
    
    setConnections(prev => 
      prev.map(conn => ({
        ...conn,
        progress: Math.min(conn.progress + deltaTime * 0.5, 1)
      })).filter(conn => conn.progress < 1)
    )
  })

  return (
    <group>
      {connections.map((connection) => {
        const curve = new THREE.QuadraticBezierCurve3(
          connection.start,
          connection.start.clone().lerp(connection.end, 0.5).multiplyScalar(1.3),
          connection.end
        )
        
        const points = curve.getPoints(50)
        const visiblePoints = points.slice(0, Math.floor(points.length * connection.progress))
        
        if (visiblePoints.length < 2) return null
        
        return (
          <line key={connection.id}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={visiblePoints.length}
                array={new Float32Array(visiblePoints.flatMap(p => [p.x, p.y, p.z]))}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial
              color={new THREE.Color(1.0, 0.2, 0.6)} // Bright neon pink
              transparent
              opacity={0.9}
              linewidth={3}
            />
          </line>
        )
      })}
    </group>
  )
}

// Main globe component
function Globe() {
  const groupRef = useRef<THREE.Group>(null!)
  const { camera, mouse } = useThree()
  const [hovered, setHovered] = useState(false)
  
  const radius = 4.5

  useFrame((state) => {
    if (!groupRef.current) return
    
    const time = state.clock.elapsedTime
    
    // Continuous slow rotation
    groupRef.current.rotation.y = time * 0.1
    
    // Mouse parallax effect
    if (hovered) {
      const targetRotationX = mouse.y * 0.2
      const targetRotationZ = mouse.x * 0.1
      
      groupRef.current.rotation.x += (targetRotationX - groupRef.current.rotation.x) * 0.05
      groupRef.current.rotation.z += (targetRotationZ - groupRef.current.rotation.z) * 0.05
    } else {
      // Return to neutral position
      groupRef.current.rotation.x += (0 - groupRef.current.rotation.x) * 0.02
      groupRef.current.rotation.z += (0 - groupRef.current.rotation.z) * 0.02
    }
  })

  return (
    <group 
      ref={groupRef}
      position={[0, -2, 0]} // Move globe down to sit at bottom
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <GlowingDots radius={radius} />
      <FlowingConnections radius={radius} />
      
      {/* Ambient lighting for the dots */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#a855f7" />
      <pointLight position={[-10, -10, 10]} intensity={0.3} color="#ec4899" />
    </group>
  )
}

// Main component with Canvas
export default function Globe3D() {
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
    // Static fallback for reduced motion
    return (
      <div className="absolute inset-0 flex items-end justify-center bg-black">
        <div className="relative w-64 h-64 mb-0">
          {/* Static hemisphere made of dots */}
          {Array.from({ length: 300 }, (_, i) => {
            const angle = (i / 300) * Math.PI * 2
            const radius = Math.random() * 150 + 30
            const x = Math.cos(angle) * radius
            const y = Math.sin(angle) * radius * 0.4 // Flatten to hemisphere
            
            return (
              <div
                key={i}
                className="absolute w-1 h-1 rounded-full animate-pulse"
                style={{
                  left: `50%`,
                  top: `85%`,
                  transform: `translate(${x}px, ${y}px)`,
                  background: `linear-gradient(45deg, #a855f7, #ec4899)`,
                  opacity: Math.random() * 0.9 + 0.3,
                  boxShadow: '0 0 8px #a855f7, 0 0 16px #ec4899',
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              />
            )
          })}
        </div>
      </div>
    )
  }

  return (
    <div className="absolute inset-0 bg-black" style={{
      filter: 'drop-shadow(0 0 20px rgba(168, 85, 247, 0.3))',
    }}>
      <Canvas
        camera={{ 
          position: [0, 4, 6], 
          fov: 75,
          near: 0.1,
          far: 100
        }}
        gl={{ 
          alpha: false, 
          antialias: true,
          powerPreference: "high-performance"
        }}
        style={{ 
          background: 'black',
          height: '100vh',
          width: '100vw'
        }}
      >
        <color attach="background" args={['#000000']} />
        
        <Globe />
        

      </Canvas>
    </div>
  )
}
