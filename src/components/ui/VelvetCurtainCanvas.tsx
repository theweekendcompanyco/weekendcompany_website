import { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface VelvetCurtainCanvasProps {
  progress: number // 0 (closed) to 1 (fully open)
}

export default function VelvetCurtainCanvas({ progress }: VelvetCurtainCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const progressRef = useRef(progress)

  useEffect(() => {
    progressRef.current = progress
  }, [progress])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    // Three.js Scene Setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      45,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      100
    )
    camera.position.z = 5.5

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    })
    renderer.setSize(canvas.clientWidth, canvas.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // Group Container
    const curtainGroup = new THREE.Group()
    scene.add(curtainGroup)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4)
    scene.add(ambientLight)

    const goldSpotLight = new THREE.PointLight(0xD4AF37, 2.5, 15)
    goldSpotLight.position.set(0, 0, -1)
    scene.add(goldSpotLight)

    const frontLight = new THREE.DirectionalLight(0xfff5ea, 0.8)
    frontLight.position.set(0, 3, 5)
    scene.add(frontLight)

    // Calculate Aspect / Dimensions
    const aspect = canvas.clientWidth / canvas.clientHeight
    const viewportHeight = 2 * Math.tan((camera.fov * Math.PI) / 360) * camera.position.z
    const viewportWidth = viewportHeight * aspect

    const halfWidth = viewportWidth / 2 + 0.3
    const curtainHeight = viewportHeight + 1

    // Velvet Shader / Custom Deformed Plane
    const createCurtainMesh = (isLeft: boolean) => {
      const geometry = new THREE.PlaneGeometry(halfWidth, curtainHeight, 64, 64)
      const posAttr = geometry.attributes.position

      // Initial vertex fold deformation (realistic vertical velvet pleats)
      for (let i = 0; i < posAttr.count; i++) {
        const x = posAttr.getX(i)
        const y = posAttr.getY(i)
        
        // Vertical ripple folds
        const foldPattern = Math.sin(x * 12.0) * 0.15 + Math.cos(y * 4.0) * 0.05
        posAttr.setZ(i, foldPattern)
      }
      geometry.computeVertexNormals()

      // Deep Burgundy Velvet Material with Gold Trim Accent
      const material = new THREE.MeshStandardMaterial({
        color: 0x4A050F,
        roughness: 0.7,
        metalness: 0.1,
        side: THREE.DoubleSide,
      })

      const mesh = new THREE.Mesh(geometry, material)

      // Gold Trim Mesh along inner edge
      const trimGeo = new THREE.BoxGeometry(0.04, curtainHeight, 0.08)
      const trimMat = new THREE.MeshStandardMaterial({
        color: 0xD4AF37,
        roughness: 0.2,
        metalness: 0.8,
      })
      const trimMesh = new THREE.Mesh(trimGeo, trimMat)
      
      // Position trim on the inner opening edge
      const trimX = isLeft ? halfWidth / 2 - 0.02 : -halfWidth / 2 + 0.02
      trimMesh.position.set(trimX, 0, 0.05)
      mesh.add(trimMesh)

      return { mesh, geometry, material, trimGeo, trimMat }
    }

    const left = createCurtainMesh(true)
    const right = createCurtainMesh(false)

    // Base initial positions
    const leftInitialX = -halfWidth / 2
    const rightInitialX = halfWidth / 2

    left.mesh.position.set(leftInitialX, 0, 0)
    right.mesh.position.set(rightInitialX, 0, 0)

    curtainGroup.add(left.mesh)
    curtainGroup.add(right.mesh)

    // Lerped Progress Tracker
    let currentProgress = 0

    // Animation Loop
    let animationFrameId: number

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)

      // Smooth interpolation for scroll progress
      currentProgress += (progressRef.current - currentProgress) * 0.1

      // Ease out progress function
      const p = Math.min(1, Math.max(0, currentProgress))
      const openOffset = p * (halfWidth + 0.5)

      // Translate curtains outward
      left.mesh.position.x = leftInitialX - openOffset
      right.mesh.position.x = rightInitialX + openOffset

      // Deform vertices dynamically during scroll to simulate fabric gather
      const leftPos = left.geometry.attributes.position
      const rightPos = right.geometry.attributes.position

      for (let i = 0; i < leftPos.count; i++) {
        const x = leftPos.getX(i)
        const y = leftPos.getY(i)
        
        // Fabric gather wave amplitude increases as it pulls open
        const foldAmp = 0.15 + p * 0.25
        const zWave = Math.sin(x * 12.0 + p * 3.0) * foldAmp + Math.cos(y * 4.0) * 0.05
        leftPos.setZ(i, zWave)
        rightPos.setZ(i, zWave)
      }
      left.geometry.computeVertexNormals()
      right.geometry.computeVertexNormals()

      left.geometry.attributes.position.needsUpdate = true
      right.geometry.attributes.position.needsUpdate = true

      // Brighten gold spotlight behind split
      goldSpotLight.intensity = 1.0 + p * 3.5

      renderer.render(scene, camera)
    }

    animate()

    // Resize Handler
    const handleResize = () => {
      if (!canvas) return
      const width = canvas.clientWidth
      const height = canvas.clientHeight
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height)
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)

      left.geometry.dispose()
      left.material.dispose()
      left.trimGeo.dispose()
      left.trimMat.dispose()

      right.geometry.dispose()
      right.material.dispose()
      right.trimGeo.dispose()
      right.trimMat.dispose()

      renderer.dispose()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-30 transition-opacity duration-300"
    />
  )
}
