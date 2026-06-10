'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ScreenLoaderProps {
  onComplete: () => void
}

export default function ScreenLoader({ onComplete }: ScreenLoaderProps) {
  const [isExiting, setIsExiting] = useState(false)

  useEffect(() => {
    // Lock body scroll during transition
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    // Show monogram and pulse for 1.8 seconds, then trigger exit transition
    const exitTimer = setTimeout(() => {
      setIsExiting(true)
    }, 1800)

    // Complete the loading process after exit animation finishes (total 2.8 seconds)
    const completeTimer = setTimeout(() => {
      onComplete()
      document.body.style.overflow = originalOverflow
    }, 2800)

    return () => {
      clearTimeout(exitTimer)
      clearTimeout(completeTimer)
      document.body.style.overflow = originalOverflow
    }
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden pointer-events-none">
      {/* Top Half Curtain */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isExiting ? '-100%' : 0 }}
        transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
        className="absolute top-0 left-0 w-full h-1/2 bg-black pointer-events-auto border-b border-white/[0.03]"
      />

      {/* Bottom Half Curtain */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isExiting ? '100%' : 0 }}
        transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] }}
        className="absolute bottom-0 left-0 w-full h-1/2 bg-black pointer-events-auto border-t border-white/[0.03]"
      />

      {/* Center Dividing Line */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ 
          scaleX: isExiting ? 0 : 1, 
          opacity: isExiting ? 0 : [0, 1, 1] 
        }}
        transition={{ 
          scaleX: { duration: 0.8, delay: 0.2, ease: "easeOut" },
          opacity: { duration: 0.6, delay: 0.2 }
        }}
        className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-purple to-transparent z-50 transform -translate-y-1/2"
      />

      {/* Monogram / Logo Content */}
      <AnimatePresence>
        {!isExiting && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: 'blur(8px)' }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="z-50 text-center flex flex-col items-center gap-4"
          >
            {/* Elegant glowing icon */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-neon-purple to-neon-pink flex items-center justify-center shadow-[0_0_40px_rgba(155,92,255,0.3)] animate-pulse">
              <span className="text-white font-bold text-2xl tracking-tighter">V</span>
            </div>
            
            <h2 className="text-white tracking-[0.3em] font-light text-sm uppercase mt-2">
              Vikashini
            </h2>
            <p className="text-[10px] text-muted-foreground tracking-[0.15em] uppercase font-light">
              Portfolio
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
