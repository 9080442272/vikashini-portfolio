import * as React from "react"
import { motion, PanInfo } from "framer-motion"
import { cn } from "@/lib/utils"

interface Testimonial {
  id: number | string
  name: string
  avatar: string
  description: string
  role?: string
}

interface TestimonialCarouselProps
  extends React.HTMLAttributes<HTMLDivElement> {
  testimonials: Testimonial[]
  showArrows?: boolean
  showDots?: boolean
}

const TestimonialCarousel = React.forwardRef<
  HTMLDivElement,
  TestimonialCarouselProps
>(
  (
    { className, testimonials, showArrows = true, showDots = true, ...props },
    ref,
  ) => {
    const [currentIndex, setCurrentIndex] = React.useState(0)
    const [exitX, setExitX] = React.useState<number>(0)

    const handleDragEnd = (
      event: MouseEvent | TouchEvent | PointerEvent,
      info: PanInfo,
    ) => {
      if (Math.abs(info.offset.x) > 100) {
        setExitX(info.offset.x)
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % testimonials.length)
          setExitX(0)
        }, 200)
      }
    }

    return (
      <div
        ref={ref}
        className={cn(
          "h-80 w-full flex items-center justify-center",
          className
        )}
        {...props}
      >
        <div className="relative w-80 h-72">
          {testimonials.map((testimonial, index) => {
            const isCurrentCard = index === currentIndex
            const isPrevCard =
              index === (currentIndex + 1) % testimonials.length
            const isNextCard =
              index === (currentIndex + 2) % testimonials.length

            if (!isCurrentCard && !isPrevCard && !isNextCard) return null

            return (
              <motion.div
                key={testimonial.id}
                className={cn(
                  "absolute w-full h-full rounded-2xl cursor-grab active:cursor-grabbing",
                  "bg-card border border-white/10 shadow-xl",
                )}
                style={{
                  zIndex: isCurrentCard ? 3 : isPrevCard ? 2 : 1,
                }}
                drag={isCurrentCard ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.7}
                onDragEnd={isCurrentCard ? handleDragEnd : undefined}
                initial={{
                  scale: 0.95,
                  opacity: 0,
                  y: isCurrentCard ? 0 : isPrevCard ? 8 : 16,
                  rotate: isCurrentCard ? 0 : isPrevCard ? -2 : -4,
                }}
                animate={{
                  scale: isCurrentCard ? 1 : 0.95,
                  opacity: isCurrentCard ? 1 : isPrevCard ? 0.6 : 0.3,
                  x: isCurrentCard ? exitX : 0,
                  y: isCurrentCard ? 0 : isPrevCard ? 8 : 16,
                  rotate: isCurrentCard ? exitX / 20 : isPrevCard ? -2 : -4,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                {showArrows && isCurrentCard && (
                  <div className="absolute inset-x-0 top-2 flex justify-between px-4">
                    <span className="text-2xl select-none cursor-pointer text-muted-foreground hover:text-primary">
                      &larr;
                    </span>
                    <span className="text-2xl select-none cursor-pointer text-muted-foreground hover:text-primary">
                      &rarr;
                    </span>
                  </div>
                )}

                <div className="p-6 pt-10 flex flex-col items-center gap-4 h-full">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary/30"
                  />
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-foreground">
                      {testimonial.name}
                    </h3>
                    {testimonial.role && (
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    )}
                  </div>
                  <p className="text-center text-sm text-muted-foreground leading-relaxed line-clamp-4">
                    {testimonial.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
          {showDots && (
            <div className="absolute -bottom-10 left-0 right-0 flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    index === currentIndex
                      ? "bg-primary w-6"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50",
                  )}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    )
  },
)
TestimonialCarousel.displayName = "TestimonialCarousel"

export { TestimonialCarousel, type Testimonial }
