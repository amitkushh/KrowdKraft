"use client"

import { useRef, useMemo, useEffect, useState } from "react"
import { useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"

interface Figure {
  id: number
  type: 'central' | 'incoming' | 'leaving'
  position: THREE.Vector3
  targetPosition: THREE.Vector3
  rotation: number
  targetRotation: number
  speed: number
  scale: number
  emissiveIntensity: number
  walkPhase: number
  isActive: boolean
  slotIndex?: number
  exitTimer?: number
}

const CIRCLE_RADIUS = 2.5
const SPAWN_RADIUS = 7
const CENTRAL_FIGURE_COUNT = 12
const MAX_TOTAL_FIGURES = 24

export default function GatheringCircle() {
  const groupRef = useRef<THREE.Group>(null)
  const centralMeshRef = useRef<THREE.InstancedMesh>(null)
  const incomingMeshRef = useRef<THREE.InstancedMesh>(null)
  const lightRef = useRef<THREE.PointLight>(null)
  const { camera } = useThree()
  
  const [centralFigures, setCentralFigures] = useState<Figure[]>([])
  const [incomingFigures, setIncomingFigures] = useState<Figure[]>([])
  const [availableSlots, setAvailableSlots] = useState<number[]>([])
  const [spawnTimer, setSpawnTimer] = useState(0)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  // Create geometry and materials with useMemo for performance
  const { centralGeometry, centralMaterial, incomingGeometry, incomingMaterial } = useMemo(() => {
    // Simple capsule/pawn shape for figures
    const figureGeometry = new THREE.CapsuleGeometry(0.08, 0.25, 4, 8)
    
    const centralFigureMaterial = new THREE.MeshStandardMaterial({
      color: '#8B5CF6',
      emissive: '#8B5CF6',
      emissiveIntensity: 0.1,
      roughness: 0.6,
      metalness: 0.2,
    })

    const incomingFigureMaterial = new THREE.MeshStandardMaterial({
      color: '#ec4899',
      emissive: '#ec4899',
      emissiveIntensity: 0.05,
      roughness: 0.6,
      metalness: 0.2,
    })

    return {
      centralGeometry: figureGeometry.clone(),
      centralMaterial: centralFigureMaterial,
      incomingGeometry: figureGeometry.clone(),
      incomingMaterial: incomingFigureMaterial,
    }
  }, [])

  // Helper functions
  const getCirclePosition = (slotIndex: number) => {
    const angle = (slotIndex / CENTRAL_FIGURE_COUNT) * Math.PI * 2
    return new THREE.Vector3(
      Math.cos(angle) * CIRCLE_RADIUS,
      0,
      Math.sin(angle) * CIRCLE_RADIUS
    )
  }

  const getRandomSpawnPosition = () => {
    const side = Math.floor(Math.random() * 4) // 0: north, 1: east, 2: south, 3: west
    const offset = (Math.random() - 0.5) * 4
    
    switch (side) {
      case 0: return new THREE.Vector3(offset, 0, SPAWN_RADIUS) // North
      case 1: return new THREE.Vector3(SPAWN_RADIUS, 0, offset) // East
      case 2: return new THREE.Vector3(offset, 0, -SPAWN_RADIUS) // South
      case 3: return new THREE.Vector3(-SPAWN_RADIUS, 0, offset) // West
      default: return new THREE.Vector3(0, 0, SPAWN_RADIUS)
    }
  }

  // Initialize central figures
  useEffect(() => {
    const initCentralFigures: Figure[] = []
    const availableSlotList: number[] = []
    
    for (let i = 0; i < CENTRAL_FIGURE_COUNT; i++) {
      const shouldOccupy = Math.random() > 0.3 // 70% chance of initial occupation
      
      if (shouldOccupy) {
        const position = getCirclePosition(i)
        initCentralFigures.push({
          id: i,
          type: 'central',
          position: position.clone(),
          targetPosition: position.clone(),
          rotation: Math.atan2(position.x, position.z),
          targetRotation: Math.atan2(position.x, position.z),
          speed: 0,
          scale: 1.0,
          emissiveIntensity: 0.1,
          walkPhase: Math.random() * Math.PI * 2,
          isActive: true,
          slotIndex: i,
          exitTimer: 3 + Math.random() * 5, // Exit after 3-8 seconds
        })
      } else {
        availableSlotList.push(i)
      }
    }
    
    setCentralFigures(initCentralFigures)
    setAvailableSlots(availableSlotList)
  }, [])

  // Mouse tracking for camera parallax
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1
      const y = -(event.clientY / window.innerHeight) * 2 + 1
      setMouse({ x: x * 0.05, y: y * 0.05 })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Animation loop
  useFrame((state, delta) => {
    if (!centralMeshRef.current || !incomingMeshRef.current || !lightRef.current) return

    const centralMesh = centralMeshRef.current
    const incomingMesh = incomingMeshRef.current
    const light = lightRef.current
    
    // Update spawn timer
    setSpawnTimer(prev => prev + delta)

    // Camera parallax
    if (camera) {
      camera.position.x += (mouse.x - camera.position.x) * 0.02
      camera.position.y += (mouse.y - camera.position.y) * 0.02
      camera.lookAt(0, 0, 0)
    }

    // Spawn new incoming figures if slots are available
    if (spawnTimer > 1.5 + Math.random() * 2 && availableSlots.length > 0 && incomingFigures.length < 6) {
      const slotIndex = availableSlots[0]
      const spawnPosition = getRandomSpawnPosition()
      const targetPosition = getCirclePosition(slotIndex)
      
      const newFigure: Figure = {
        id: Date.now() + Math.random(),
        type: 'incoming',
        position: spawnPosition.clone(),
        targetPosition: targetPosition.clone(),
        rotation: 0,
        targetRotation: Math.atan2(targetPosition.x, targetPosition.z),
        speed: 0.8 + Math.random() * 0.4,
        scale: 0.8,
        emissiveIntensity: 0.05,
        walkPhase: 0,
        isActive: true,
        slotIndex: slotIndex,
      }
      
      setIncomingFigures(prev => [...prev, newFigure])
      setAvailableSlots(prev => prev.slice(1))
      setSpawnTimer(0)
    }

    // Update central figures
    setCentralFigures(prevFigures => 
      prevFigures.map(figure => {
        const newFigure = { ...figure }
        
        // Idle bounce animation
        newFigure.walkPhase += delta * 2
        const bounceOffset = Math.sin(newFigure.walkPhase) * 0.02
        newFigure.position.y = bounceOffset
        
        // Handle exit timer
        if (newFigure.exitTimer !== undefined) {
          newFigure.exitTimer -= delta
          if (newFigure.exitTimer <= 0) {
            newFigure.type = 'leaving'
            newFigure.emissiveIntensity = 0.02
          }
        }
        
        return newFigure
      }).filter(figure => figure.type !== 'leaving') // Remove leaving figures
    )

    // Update incoming figures
    setIncomingFigures(prevFigures => {
      const updatedFigures = prevFigures.map(figure => {
        const newFigure = { ...figure }
        
        // Walk animation
        newFigure.walkPhase += delta * 4
        const walkBounce = Math.abs(Math.sin(newFigure.walkPhase)) * 0.03
        
        // Move toward target
        const direction = newFigure.targetPosition.clone().sub(newFigure.position)
        const distance = direction.length()
        
        if (distance > 0.15) {
          direction.normalize().multiplyScalar(newFigure.speed * delta)
          newFigure.position.add(direction)
          newFigure.position.y = walkBounce
          
          // Update rotation to face movement direction
          newFigure.rotation = Math.atan2(direction.x, direction.z)
        } else {
          // Arrived at circle - join central group
          newFigure.position.copy(newFigure.targetPosition)
          newFigure.position.y = 0
          newFigure.rotation = newFigure.targetRotation
          newFigure.scale = 1.0
          newFigure.emissiveIntensity = 0.3 // Brief glow effect
          
          // Add to central figures
          const centralFigure: Figure = {
            ...newFigure,
            type: 'central',
            emissiveIntensity: 0.1,
            exitTimer: 4 + Math.random() * 6,
            walkPhase: Math.random() * Math.PI * 2,
          }
          
          setCentralFigures(prev => [...prev, centralFigure])
          
          return null // Mark for removal
        }
        
        return newFigure
      }).filter(Boolean) as Figure[]
      
      return updatedFigures
    })

    // Remove figures that have left and add their slots back
    setCentralFigures(prevFigures => {
      const leavingFigures = prevFigures.filter(f => f.exitTimer !== undefined && f.exitTimer <= 0)
      
      if (leavingFigures.length > 0) {
        const slotsToAdd = leavingFigures.map(f => f.slotIndex!).filter(slot => slot !== undefined)
        setAvailableSlots(prev => [...prev, ...slotsToAdd])
      }
      
      return prevFigures.filter(f => f.exitTimer === undefined || f.exitTimer > 0)
    })

    // Update instance transforms for central figures
    centralFigures.forEach((figure, i) => {
      const matrix = new THREE.Matrix4()
      matrix.setPosition(figure.position)
      matrix.scale(new THREE.Vector3(figure.scale, figure.scale, figure.scale))
      matrix.multiply(new THREE.Matrix4().makeRotationY(figure.rotation))
      centralMesh.setMatrixAt(i, matrix)
    })
    centralMesh.count = centralFigures.length
    centralMesh.instanceMatrix.needsUpdate = true

    // Update instance transforms for incoming figures
    incomingFigures.forEach((figure, i) => {
      const matrix = new THREE.Matrix4()
      matrix.setPosition(figure.position)
      matrix.scale(new THREE.Vector3(figure.scale, figure.scale, figure.scale))
      matrix.multiply(new THREE.Matrix4().makeRotationY(figure.rotation))
      incomingMesh.setMatrixAt(i, matrix)
    })
    incomingMesh.count = incomingFigures.length
    incomingMesh.instanceMatrix.needsUpdate = true
  })

  return (
    <group ref={groupRef}>
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <pointLight 
        ref={lightRef}
        position={[0, 3, 0]} 
        intensity={1.5} 
        color="#8B5CF6"
        distance={12}
        decay={2}
      />
      <pointLight 
        position={[4, 2, 4]} 
        intensity={0.4} 
        color="#ec4899"
      />
      <pointLight 
        position={[-4, 2, -4]} 
        intensity={0.4} 
        color="#06b6d4"
      />

      {/* Central glowing point */}
      <mesh position={[0, 0.1, 0]}>
        <sphereGeometry args={[0.05, 8, 6]} />
        <meshStandardMaterial 
          color="#8B5CF6" 
          emissive="#8B5CF6" 
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Central Figures - Always visible community circle */}
      <instancedMesh
        ref={centralMeshRef}
        args={[centralGeometry, centralMaterial, CENTRAL_FIGURE_COUNT]}
        count={centralFigures.length}
      />

      {/* Incoming Figures - Walking toward the circle */}
      <instancedMesh
        ref={incomingMeshRef}
        args={[incomingGeometry, incomingMaterial, 8]}
        count={incomingFigures.length}
      />
    </group>
  )
}
