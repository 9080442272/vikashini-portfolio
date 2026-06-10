'use client'

import { useState, useRef } from 'react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Menu, X, Phone, Linkedin, Mail } from 'lucide-react'
import { useIsMobile } from '@/hooks/use-mobile'
import { FlowButton } from '@/components/ui/flow-button'
import { motion } from 'framer-motion'
import CinematicLayer from '@/components/CinematicLayer'

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
  title: React.ReactNode
  description: React.ReactNode
  announcementBanner?: AnnouncementBanner
  callToActions?: CallToAction[]
  titleSize?: 'small' | 'medium' | 'large'
  gradientColors?: {
    from: string
    to: string
  }
  className?: string
  isParentLoading?: boolean
  videoUrl?: string
}

const defaultProps: Partial<HeroLandingProps> = {
  titleSize: "large",
  gradientColors: {
    from: "hsl(267, 100%, 55%)",
    to: "hsl(280, 100%, 40%)"
  },
  videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-digital-animation-of-purple-and-blue-neon-lights-loop-43093-large.mp4"
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1], // easeOutExpo
    },
  },
}

const headerVariants = {
  hidden: { opacity: 0, y: -15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
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
    className,
    isParentLoading = false,
    videoUrl
  } = { ...defaultProps, ...props }

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const isMobile = useIsMobile()

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

  const animateState = isParentLoading ? "hidden" : "visible"

  return (
    <div className={`min-h-screen w-full overflow-hidden relative bg-transparent flex flex-col justify-between ${className || ''}`}>
      {/* Cinematic Looping Video Backdrop */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-25 select-none pointer-events-none"
        src={videoUrl}
      />

      {/* WebGL Depth-of-Field (Bokeh) Layer */}
      {!isParentLoading && <CinematicLayer />}

      {/* Dark vignette overlays for maximum text contrast and legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#040406]/60 via-[#040406]/90 to-background z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(4,4,6,0.9)_100%)] z-0 pointer-events-none" />

      {/* Background Tech Grid */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none z-0" 
        style={{
          backgroundImage: `radial-gradient(circle at center, rgba(255,255,255,0.06) 1px, transparent 1px)`,
          backgroundSize: '24px 24px'
        }}
      />
      
      {/* Glow Effects */}
      <div
        aria-hidden="true"
        className="absolute -top-40 -left-40 z-0 w-[500px] h-[500px] rounded-full opacity-20 blur-[120px] pointer-events-none"
        style={{
          background: `radial-gradient(circle, hsl(267, 100%, 50%) 0%, transparent 70%)`,
        }}
      />
      
      <div
        aria-hidden="true"
        className="absolute -bottom-40 right-0 z-0 w-[500px] h-[500px] rounded-full opacity-10 blur-[130px] pointer-events-none"
        style={{
          background: `radial-gradient(circle, hsl(320, 100%, 50%) 0%, transparent 70%)`,
        }}
      />

      {/* Header */}
      <motion.header
        initial="hidden"
        animate={animateState}
        variants={headerVariants}
        className="absolute inset-x-0 top-0 z-50"
      >
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
      </motion.header>

      {/* Main Content (Split Layout) */}
      <motion.div
        initial="hidden"
        animate={animateState}
        variants={containerVariants}
        className="relative z-10 max-w-[1150px] mx-auto px-6 w-full flex-grow flex flex-col justify-center pt-32 pb-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Portrait & Socials */}
          <motion.div 
            variants={itemVariants} 
            className="lg:col-span-5 flex flex-col items-center lg:items-start gap-6"
          >
            <div className="relative w-full max-w-[320px] aspect-square rounded-2xl border border-white/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.6)] group">
              {/* Glowing decorative backdrop */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-neon-pink opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-2xl -z-10 blur-xl" />
              
              <img 
                src="/vikashini_profile.jpg" 
                alt="Vikashini" 
                className="w-full h-full object-cover rounded-2xl transition-all duration-700 select-none"
              />
              
              {/* Handwritten signature script overlay */}
              <div className="absolute -bottom-6 -right-6 rotate-[-6deg] select-none pointer-events-none z-20">
                <span className="font-['Caveat'] text-5xl md:text-6xl text-primary drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]">
                  Vikashini
                </span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-4 mt-2">
              <a 
                href="tel:9080442272" 
                className="h-10 px-4 rounded-full border border-white/10 flex items-center gap-2 text-muted-foreground hover:text-primary hover:border-primary/30 bg-black/40 backdrop-blur-sm transition-all text-sm font-medium"
              >
                <Phone className="w-4 h-4" />
                <span>9080442272</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/vikashini-bala-324a531bb/" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 bg-black/40 backdrop-blur-sm transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:vikashinibala14@gmail.com" 
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 bg-black/40 backdrop-blur-sm transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Bio details */}
          <motion.div 
            variants={itemVariants} 
            className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left"
          >
            {/* Announcement Banner */}
            {announcementBanner && (
              <div className="mb-4 flex justify-center lg:justify-start">
                <div className="inline-flex rounded-full px-3 py-1 text-xs text-muted-foreground ring-1 ring-primary/30 hover:ring-primary/50 transition-all backdrop-blur-sm bg-card/40">
                  {announcementBanner.text}{' '}
                  <a href={announcementBanner.linkHref} className="font-semibold text-primary hover:text-primary/80 ml-1 transition-colors">
                    {announcementBanner.linkText} &rarr;
                  </a>
                </div>
              </div>
            )}

            {/* Tag */}
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-purple-400 mb-3 block">
              Who I Am
            </span>

            {/* Skills Tag List */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-2 gap-y-1 text-[11px] font-semibold text-white/80 tracking-widest uppercase mb-6">
              <span>Product Design</span>
              <span className="text-purple-400 font-bold">•</span>
              <span>B2B SaaS</span>
              <span className="text-purple-400 font-bold">•</span>
              <span>E-Commerce</span>
              <span className="text-purple-400 font-bold">•</span>
              <span>AI Systems</span>
              <span className="text-purple-400 font-bold">•</span>
              <span>Cybersecurity</span>
              <span className="text-purple-400 font-bold">•</span>
              <span>UX Research</span>
            </div>

            {/* Headline / Summary Bio Paragraph */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-[1.3] mb-6">
              {title}
            </h1>
            
            <p className="text-base sm:text-lg text-white/85 leading-relaxed font-normal mb-8 max-w-2xl">
              {description}
            </p>

            {/* Call To Actions */}
            {callToActions && callToActions.length > 0 && (
              <div className="flex items-center justify-center lg:justify-start gap-4">
                {callToActions.map((cta, index) => renderCallToAction(cta, index))}
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>

    </div>
  )
}

export type { HeroLandingProps, NavigationItem, AnnouncementBanner, CallToAction }
