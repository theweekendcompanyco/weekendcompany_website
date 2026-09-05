import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function Hero3DCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Respect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    // Scene, Camera, Renderer
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      45,
      canvas.clientWidth / canvas.clientHeight,
      0.1,
      1000
    )
    camera.position.z = 7

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    })
    renderer.setSize(canvas.clientWidth, canvas.clientHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // 3D Group Anchor
    const mainGroup = new THREE.Group()
    scene.add(mainGroup)

    // Outer Gold Wireframe Icosahedron
    const outerGeo = new THREE.IcosahedronGeometry(2.2, 1)
    const wireframeGeo = new THREE.WireframeGeometry(outerGeo)
    const wireframeMat = new THREE.LineBasicMaterial({
      color: 0xD4AF37,
      transparent: true,
      opacity: 0.35,
    })
    const outerMesh = new THREE.LineSegments(wireframeGeo, wireframeMat)
    mainGroup.add(outerMesh)

    // Inner Glowing Core Octahedron
    const innerGeo = new THREE.OctahedronGeometry(1.2, 0)
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xE5C158,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    })
    const innerMesh = new THREE.Mesh(innerGeo, innerMat)
    mainGroup.add(innerMesh)

    // Floating 3D Particle Field
    const particleCount = window.innerWidth < 768 ? 150 : 320
    const particleGeo = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)

    const goldColor = new THREE.Color(0xD4AF37)
    const whiteColor = new THREE.Color(0xF5F2EA)

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 16
      positions[i3 + 1] = (Math.random() - 0.5) * 12
      positions[i3 + 2] = (Math.random() - 0.5) * 12

      const mixedColor = Math.random() > 0.4 ? goldColor : whiteColor
      colors[i3] = mixedColor.r
      colors[i3 + 1] = mixedColor.g
      colors[i3 + 2] = mixedColor.b
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const particleMat = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
    })
    const particleSystem = new THREE.Points(particleGeo, particleMat)
    scene.add(particleSystem)

    // Mouse Tracking Target
    let mouseX = 0
    let mouseY = 0
    let targetX = 0
    let targetY = 0

    const handleMouseMove = (event: MouseEvent) => {
      const windowHalfX = window.innerWidth / 2
      const windowHalfY = window.innerHeight / 2
      mouseX = (event.clientX - windowHalfX) / 400
      mouseY = (event.clientY - windowHalfY) / 400
    }

    window.addEventListener('mousemove', handleMouseMove)

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

    // Animation Loop
    let animationFrameId: number

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)

      // Smooth mouse interpolation (lerp)
      targetX += (mouseX - targetX) * 0.05
      targetY += (mouseY - targetY) * 0.05

      // 3D Rotations
      mainGroup.rotation.x += 0.003
      mainGroup.rotation.y += 0.005

      outerMesh.rotation.z -= 0.002
      innerMesh.rotation.y -= 0.008

      particleSystem.rotation.y += 0.0015
      particleSystem.rotation.x -= 0.0008

      mainGroup.rotation.y = targetX * 0.8
      mainGroup.rotation.x = targetY * 0.8

      renderer.render(scene, camera)
    }

    animate()

    // Cleanup on Unmount
    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)

      outerGeo.dispose()
      wireframeGeo.dispose()
      wireframeMat.dispose()
      innerGeo.dispose()
      innerMat.dispose()
      particleGeo.dispose()
      particleMat.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-60 z-0"
    />
  )
}
