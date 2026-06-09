'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Menu, X } from 'lucide-react'
import { useIsMobile } from '@/hooks/use-mobile'
import { FlowButton } from '@/components/ui/flow-button'
import { motion, AnimatePresence } from 'framer-motion'

interface NavigationItem {
  name: string
  href: string
}

interface AnnouncementBanner {
  text: string
  linkText: string
  linkHref: string
}

interface CallToAction {
  text: string
  href: string
  variant: 'primary' | 'secondary'
  download?: boolean
  onClick?: () => void
}

interface HeroLandingProps {
  logo?: {
    src?: string
    alt?: string
    companyName: string
    icon?: React.ReactNode
  }
  navigation?: NavigationItem[]
  loginText?: string
  loginHref?: string
  onLoginClick?: () => void
  title: string
  description: string
  announcementBanner?: AnnouncementBanner
  callToActions?: CallToAction[]
  titleSize?: 'small' | 'medium' | 'large'
  gradientColors?: {
    from: string
    to: string
  }
  className?: string
}

const defaultProps: Partial<HeroLandingProps> = {
  titleSize: "large",
  gradientColors: {
    from: "hsl(267, 100%, 55%)",
    to: "hsl(280, 100%, 40%)"
  },
}

export function HeroLanding(props: HeroLandingProps) {
  const {
    logo,
    navigation,
    loginText,
    loginHref,
    onLoginClick,
    title,
    description,
    announcementBanner,
    callToActions,
    titleSize,
    gradientColors,
    className
  } = { ...defaultProps, ...props }

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeTextIndex, setActiveTextIndex] = useState(0)
  const isMobile = useIsMobile()

  const rotatingWords = ["complex workflows", "B2B SaaS products", "fulfillment systems", "e-commerce hubs"]

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTextIndex((prev) => (prev + 1) % rotatingWords.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const renderCallToAction = (cta: CallToAction, index: number) => {
    if (cta.variant === 'primary') {
      if (cta.download) {
        return (
          <a key={index} href={cta.href} download>
            <FlowButton text={cta.text} />
          </a>
        )
      }
      return (
        <a key={index} href={cta.href} onClick={cta.onClick}>
          <FlowButton text={cta.text} />
        </a>
      )
    } else {
      return (
        <a
          key={index}
          href={cta.href}
          onClick={cta.onClick}
          className="text-sm font-semibold text-foreground hover:text-primary transition-colors duration-200"
        >
          {cta.text} <span aria-hidden="true">→</span>
        </a>
      )
    }
  }

  return (
    <div className={`min-h-screen w-full overflow-hidden relative bg-background flex flex-col justify-between ${className || ''}`}>
      {/* Background Tech Grid */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none z-0" 
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(255,255,255,0.08) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />
      
      {/* Glow Effects */}
      <div
        aria-hidden="true"
        className="absolute -top-40 -left-40 z-0 w-[500px] h-[500px] rounded-full opacity-30 blur-[120px] pointer-events-none"
        style={{
          background: `radial-gradient(circle, hsl(267, 100%, 50%) 0%, transparent 70%)`,
        }}
      />
      
      <div
        aria-hidden="true"
        className="absolute -bottom-40 right-0 z-0 w-[500px] h-[500px] rounded-full opacity-20 blur-[130px] pointer-events-none"
        style={{
          background: `radial-gradient(circle, hsl(320, 100%, 50%) 0%, transparent 70%)`,
        }}
      />

      {/* Header */}
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-4 sm:p-6 lg:px-8 max-w-[1200px] mx-auto">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
              {logo?.icon ? (
                logo.icon
              ) : logo?.src ? (
                <img
                  alt={logo?.alt}
                  src={logo?.src}
                  className="h-6 sm:h-8 w-auto"
                />
              ) : (
                <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-sm">V</span>
                </div>
              )}
              <span className="font-semibold text-foreground">{logo?.companyName}</span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              <Menu aria-hidden="true" className="size-6" />
            </button>
          </div>
          {navigation && navigation.length > 0 && (
            <div className="hidden lg:flex lg:gap-x-8 xl:gap-x-12">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                  {item.name}
                </a>
              ))}
            </div>
          )}
          {loginText && (
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
              <button 
                onClick={onLoginClick}
                className="text-sm font-semibold text-foreground hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
              >
                {loginText} <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          )}
        </nav>
        
        {/* Mobile menu */}
        <Dialog open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <DialogContent className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-card px-4 py-4 sm:px-6 sm:py-6 sm:max-w-sm sm:ring-1 sm:ring-border lg:hidden [&>button]:hidden">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2">
                {logo?.icon ? (
                  logo.icon
                ) : (
                  <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-sm">V</span>
                  </div>
                )}
                <span className="font-semibold text-foreground">{logo?.companyName}</span>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="sr-only">Close menu</span>
                <X aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-border">
                {navigation && navigation.length > 0 && (
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-card-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                )}
                {loginText && (
                  <div className="py-6">
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false)
                        onLoginClick?.()
                      }}
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold text-card-foreground hover:bg-accent hover:text-accent-foreground transition-colors w-full text-left bg-transparent border-none cursor-pointer"
                    >
                      {loginText}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </header>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 w-full flex-grow flex flex-col justify-center pt-24 pb-16">
        <div className="text-center">
          {announcementBanner && (
            <div className="mb-6 flex justify-center">
              <div className="inline-flex rounded-full px-3 py-1 text-xs text-muted-foreground ring-1 ring-primary/30 hover:ring-primary/50 transition-all backdrop-blur-sm bg-card/40">
                {announcementBanner.text}{' '}
                <a href={announcementBanner.linkHref} className="font-semibold text-primary hover:text-primary/80 ml-1 transition-colors">
                  {announcementBanner.linkText} &rarr;
                </a>
              </div>
            </div>
          )}
          
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.15] max-w-3xl mx-auto">
            Hi, I’m Vikashini — a Product Designer focused on simplifying{' '}
            <span className="block mt-1 sm:inline sm:mt-0 text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-pink inline-flex min-h-[1.2em]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeTextIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                >
                  {rotatingWords[activeTextIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>
          
          <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
            {description}
          </p>
          
          {callToActions && callToActions.length > 0 && (
            <div className="mt-8 flex items-center justify-center gap-x-4 sm:gap-x-6">
              {callToActions.map((cta, index) => renderCallToAction(cta, index))}
            </div>
          )}
        </div>
      </div>

    </div>
  )
}

export type { HeroLandingProps, NavigationItem, AnnouncementBanner, CallToAction }
