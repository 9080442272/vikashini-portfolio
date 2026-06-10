'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

// Create a soft bokeh orb texture
function createBokehTexture() {
  const size = 128
  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = size
  const ctx = canvas.getContext('2d')
  if (!ctx) return null

  const r = size / 2
  const g = ctx.createRadialGradient(r, r, 0, r, r, r)
  g.addColorStop(0, 'rgba(255, 255, 255, 1)')
  g.addColorStop(0.25, 'rgba(255, 255, 255, 0.4)')
  g.addColorStop(0.65, 'rgba(255, 255, 255, 0.08)')
  g.addColorStop(1, 'rgba(255, 255, 255, 0)')

  ctx.fillStyle = g
  ctx.fillRect(0, 0, size, size)
  return new THREE.CanvasTexture(canvas)
}

// Neon color palette
const PALETTE = [
  0xa855f7, // purple
  0xec4899, // pink
  0x6366f1, // indigo
  0x8b5cf6, // violet
  0xfff4e0, // warm glow
]

interface BokehOrb {
  mesh: THREE.Mesh
  ox: number
  oy: number
  ax: number
  ay: number
  phase: number
  wx: number
  wy: number
}

export default function CinematicLayer() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Setup Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: false, // Turn off for performance & soft look
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    // Scene & Camera
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      50
    )
    camera.position.z = 7

    // Texture & Material Setup
    const texture = createBokehTexture()
    if (!texture) return

    const orbs: BokehOrb[] = []
    const orbCount = 18

    // Generate drift settings and meshes for glowing bokeh
    for (let i = 0; i < orbCount; i++) {
      const color = PALETTE[Math.floor(Math.random() * PALETTE.length)]
      const size = Math.random() * 2.2 + 1.2

      const geometry = new THREE.PlaneGeometry(size, size)
      const material = new THREE.MeshBasicMaterial({
        color,
        map: texture,
        transparent: true,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        opacity: Math.random() * 0.2 + 0.1, // Subtle overlay
      })

      const mesh = new THREE.Mesh(geometry, material)

      // Random starting coordinates inside perspective boundaries
      const ox = (Math.random() - 0.5) * 10
      const oy = (Math.random() - 0.5) * 6
      const oz = (Math.random() - 0.5) * 4

      mesh.position.set(ox, oy, oz)
      scene.add(mesh)

      orbs.push({
        mesh,
        ox,
        oy,
        ax: Math.random() * 0.6 + 0.2, // Amplitude X
        ay: Math.random() * 0.6 + 0.2, // Amplitude Y
        phase: Math.random() * Math.PI * 2,
        wx: Math.random() * 0.0008 + 0.0004, // Frequency X
        wy: Math.random() * 0.0008 + 0.0004, // Frequency Y
      })
    }

    // Parallax tracking
    const mouse = { x: 0, y: 0 }
    const camPos = { x: 0, y: 0 }

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth - 0.5)
      mouse.y = (e.clientY / window.innerHeight - 0.5)
    }

    const onResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight)
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('resize', onResize)

    // Animation Loop
    let animId: number
    const clock = new THREE.Clock()

    const animate = () => {
      animId = requestAnimationFrame(animate)
      const elapsed = clock.getElapsedTime() * 1000 // In milliseconds

      // Gently drift orbs using sine/cosine paths
      orbs.forEach((o) => {
        o.mesh.position.x = o.ox + Math.sin(elapsed * o.wx + o.phase) * o.ax
        o.mesh.position.y = o.oy + Math.cos(elapsed * o.wy + o.phase * 0.8) * o.ay
      })

      // Interpolate camera positioning for smooth mouse parallax tilt
      camPos.x += (mouse.x * 1.5 - camPos.x) * 0.05
      camPos.y += (-mouse.y * 1.0 - camPos.y) * 0.05
      camera.position.x = camPos.x
      camera.position.y = camPos.y
      camera.lookAt(0, 0, 0)

      renderer.render(scene, camera)
    }

    animate()

    // Clean up Three.js objects
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      
      orbs.forEach((o) => {
        o.mesh.geometry.dispose()
        if (Array.isArray(o.mesh.material)) {
          o.mesh.material.forEach((m) => m.dispose())
        } else {
          o.mesh.material.dispose()
        }
      })
      texture.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        zIndex: 2,
        pointerEvents: 'none',
      }}
    />
  )
}
