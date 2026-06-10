'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  originalVx: number
  originalVy: number
}

interface WorkExpParticlesProps {
  activeCardIndex: number
}

export default function WorkExpParticles({ activeCardIndex }: WorkExpParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const particlesRef = useRef<Particle[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    const particleCount = 60
    const connectionDistance = 100

    const initParticles = () => {
      particlesRef.current = []
      const w = canvas.width
      const h = canvas.height

      for (let i = 0; i < particleCount; i++) {
        const vx = (Math.random() - 0.5) * 0.4
        const vy = (Math.random() - 0.5) * 0.4
        particlesRef.current.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx,
          vy,
          originalVx: vx,
          originalVy: vy,
          radius: Math.random() * 2 + 1,
        })
      }
    }

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight
      initParticles()
    }

    window.addEventListener('resize', resizeCanvas)
    resizeCanvas()

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const w = canvas.width
      const h = canvas.height

      // Update and draw particles
      particlesRef.current.forEach((p) => {
        // Move particles
        p.x += p.vx
        p.y += p.vy

        // Dampen velocities back to original drift speeds
        p.vx += (p.originalVx - p.vx) * 0.04
        p.vy += (p.originalVy - p.vy) * 0.04

        // Bound checking
        if (p.x < 0 || p.x > w) p.vx *= -1
        if (p.y < 0 || p.y > h) p.vy *= -1

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(168, 85, 247, 0.4)' // Purple-tinted nodes
        ctx.fill()
      })

      // Draw connection lines
      for (let i = 0; i < particlesRef.current.length; i++) {
        const pi = particlesRef.current[i]
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const pj = particlesRef.current[j]
          const dx = pi.x - pj.x
          const dy = pi.y - pj.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.15
            ctx.beginPath()
            ctx.moveTo(pi.x, pi.y)
            ctx.lineTo(pj.x, pj.y)
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})` // Glow purple connections
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  // Trigger burst of speed on activeCardIndex change
  useEffect(() => {
    // Skip initial mount
    if (particlesRef.current.length === 0) return

    console.log(`Triggering speed burst for active card index: ${activeCardIndex}`)
    particlesRef.current.forEach((p) => {
      // Explode particles outwards by adding random high velocity impulse
      p.vx += (Math.random() - 0.5) * 5.5
      p.vy += (Math.random() - 0.5) * 5.5
    })
  }, [activeCardIndex])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full -z-10 pointer-events-none opacity-50"
    />
  )
}
