'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
  alpha: number
  phase: number
  speed: number
}

const COLORS = [
  'rgba(168, 85, 247, ', // purple
  'rgba(236, 72, 153, ', // pink
  'rgba(99, 102, 241, ', // indigo
  'rgba(139, 92, 246, ', // violet
]

export default function CinematicBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const targetMouseRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []
    const particleCount = 20

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    // Initialize particles
    const initParticles = () => {
      particles = []
      const w = canvas.width
      const h = canvas.height

      for (let i = 0; i < particleCount; i++) {
        const radius = Math.random() * 120 + 80 // Soft large particles
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          radius,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          alpha: Math.random() * 0.04 + 0.02, // ultra subtle, premium
          phase: Math.random() * Math.PI * 2,
          speed: Math.random() * 0.002 + 0.001,
        })
      }
    }

    // Event listeners
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coords around center (-0.5 to 0.5)
      targetMouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 35
      targetMouseRef.current.y = (e.clientY / window.innerHeight - 0.5) * 35
    }

    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('mousemove', handleMouseMove)
    resizeCanvas()

    // Animation loop
    const animate = () => {
      // Lerp mouse coordinates for smooth parallax
      mouseRef.current.x += (targetMouseRef.current.x - mouseRef.current.x) * 0.05
      mouseRef.current.y += (targetMouseRef.current.y - mouseRef.current.y) * 0.05

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.globalCompositeOperation = 'screen' // Additive blending for gorgeous glows

      const w = canvas.width
      const h = canvas.height

      particles.forEach((p) => {
        // Update phase for breathing effect
        p.phase += p.speed
        const pulse = Math.sin(p.phase) * 0.15 + 1.0
        const currentRadius = p.radius * pulse

        // Update particle position (drifting)
        p.x += p.vx
        p.y += p.vy

        // Wrap around boundaries
        if (p.x < -currentRadius) p.x = w + currentRadius
        if (p.x > w + currentRadius) p.x = -currentRadius
        if (p.y < -currentRadius) p.y = h + currentRadius
        if (p.y > h + currentRadius) p.y = -currentRadius

        // Apply mouse parallax offset to draw position
        const drawX = p.x + mouseRef.current.x
        const drawY = p.y + mouseRef.current.y

        // Draw radial gradient for bokeh look
        const gradient = ctx.createRadialGradient(
          drawX,
          drawY,
          0,
          drawX,
          drawY,
          currentRadius
        )

        gradient.addColorStop(0, `${p.color}${p.alpha})`)
        gradient.addColorStop(0.3, `${p.color}${p.alpha * 0.6})`)
        gradient.addColorStop(0.6, `${p.color}${p.alpha * 0.15})`)
        gradient.addColorStop(1, `${p.color}0)`)

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(drawX, drawY, currentRadius, 0, Math.PI * 2)
        ctx.fill()
      })

      // Add a subtle vignette grid/mesh shadow over the background
      ctx.globalCompositeOperation = 'source-over'
      
      // Vignette shadow
      const vigGrad = ctx.createRadialGradient(
        w / 2,
        h / 2,
        Math.min(w, h) * 0.3,
        w / 2,
        h / 2,
        Math.max(w, h) * 0.8
      )
      vigGrad.addColorStop(0, 'rgba(0, 0, 0, 0)')
      vigGrad.addColorStop(1, 'rgba(0, 0, 0, 0.6)')
      ctx.fillStyle = vigGrad
      ctx.fillRect(0, 0, w, h)

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 bg-[#0a0a0d] pointer-events-none"
    />
  )
}
