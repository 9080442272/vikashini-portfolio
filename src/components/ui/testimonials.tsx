"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface Testimonial {
  image: string
  name: string
  username: string
  text: string
}

interface TestimonialsProps {
  testimonials: Testimonial[]
  className?: string
  title?: string
  description?: string
  maxDisplayed?: number
}

export function Testimonials({
  testimonials,
  className,
  title = "Read what people are saying",
  description = "Dummy feedback from virtual customers using our component library.",
  maxDisplayed = 6,
}: TestimonialsProps) {
  const [showAll, setShowAll] = useState(false)

  const openInNewTab = (url: string) => {
    window.open(url, "_blank")?.focus()
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
      },
    }),
  }

  return (
    <div className={className}>
      <div className="flex flex-col items-center justify-center pt-5">
        <div className="flex flex-col gap-5 mb-8">
          <h2 className="text-center text-3xl md:text-4xl font-semibold text-foreground">{title}</h2>
          {description && (
            <p className="text-center text-muted-foreground">
              {description.split("<br />").map((line, i) => (
                <span key={i}>
                  {line}
                  {i !== description.split("<br />").length - 1 && <br />}
                </span>
              ))}
            </p>
          )}
        </div>
      </div>

      <div className="relative">
        <div
          className={cn(
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
            !showAll &&
              testimonials.length > maxDisplayed &&
              "max-h-[720px] overflow-hidden",
          )}
        >
          {testimonials
            .slice(0, showAll ? undefined : maxDisplayed)
            .map((testimonial, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                className={cn(
                  "p-6 relative rounded-xl",
                  "bg-card/50 backdrop-blur-sm",
                  "border border-white/10",
                  "hover:border-primary/30",
                  "transition-all duration-300 ease-out",
                  "group"
                )}
              >
                {/* Glow effect overlay */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 via-transparent to-neon-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                <div className="relative z-10">
                  <div className="flex items-center">
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="rounded-full object-cover w-[50px] h-[50px] border-2 border-primary/30 group-hover:border-primary/60 transition-colors duration-300"
                      />
                      <div className="absolute inset-0 rounded-full shadow-[0_0_10px_rgba(155,92,255,0.3)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="flex flex-col pl-4">
                      <span className="font-semibold text-base text-foreground">
                        {testimonial.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {testimonial.username}
                      </span>
                    </div>
                  </div>
                  <div className="mt-5 mb-2">
                    <p className="text-foreground/80 group-hover:text-foreground leading-relaxed transition-colors duration-300">
                      {testimonial.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {testimonials.length > maxDisplayed && !showAll && (
          <>
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent" />
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20">
              <Button 
                variant="secondary" 
                onClick={() => setShowAll(true)}
                className="border border-primary/30 hover:border-primary/60 hover:shadow-[0_0_15px_rgba(155,92,255,0.3)] transition-all duration-300"
              >
                Load More
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export type { Testimonial }
