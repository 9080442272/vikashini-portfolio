'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Menu, X, ArrowRight, Sparkles, AlertCircle, CheckCircle, Database, LayoutGrid, Check } from 'lucide-react'
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
  const [workflowMode, setWorkflowMode] = useState<'fragmented' | 'unified'>('unified')
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
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full flex-grow flex flex-col justify-center pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center w-full">
          {/* Text Left */}
          <div className="lg:col-span-7 text-left flex flex-col justify-center">
            {announcementBanner && (
              <div className="mb-6">
                <div className="inline-flex rounded-full px-3 py-1 text-xs text-muted-foreground ring-1 ring-primary/30 hover:ring-primary/50 transition-all backdrop-blur-sm bg-card/40">
                  {announcementBanner.text}{' '}
                  <a href={announcementBanner.linkHref} className="font-semibold text-primary hover:text-primary/80 ml-1 transition-colors">
                    {announcementBanner.linkText} &rarr;
                  </a>
                </div>
              </div>
            )}
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
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
            
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed font-light">
              {description}
            </p>
            
            {callToActions && callToActions.length > 0 && (
              <div className="mt-8 flex items-center gap-x-4 sm:gap-x-6">
                {callToActions.map((cta, index) => renderCallToAction(cta, index))}
              </div>
            )}
          </div>

          {/* Interactive Flow Simulator Right */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-full max-w-md rounded-2xl border border-white/[0.08] bg-card/30 backdrop-blur-md p-6 relative overflow-hidden shadow-2xl"
            >
              {/* Simulator Card Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-neon-purple animate-pulse" />
                  <span className="text-xs font-semibold text-foreground tracking-wider uppercase">Interactive Architecture Simulator</span>
                </div>
                <div className="flex bg-white/[0.04] p-0.5 rounded-lg border border-white/[0.05]">
                  <button 
                    onClick={() => setWorkflowMode('fragmented')}
                    className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${workflowMode === 'fragmented' ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    Before
                  </button>
                  <button 
                    onClick={() => setWorkflowMode('unified')}
                    className={`px-3 py-1 rounded-md text-xs font-medium transition-all ${workflowMode === 'unified' ? 'bg-neon-purple/20 text-neon-purple border border-neon-purple/30' : 'text-muted-foreground hover:text-foreground'}`}
                  >
                    After
                  </button>
                </div>
              </div>

              {/* Simulator Flow Screen */}
              <div className="min-h-[200px] flex flex-col justify-center gap-4 relative">
                <AnimatePresence mode="wait">
                  {workflowMode === 'fragmented' ? (
                    <motion.div
                      key="fragmented"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="text-center text-xs text-red-400 font-medium bg-red-950/20 border border-red-900/30 rounded-lg p-2 flex items-center justify-center gap-2">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>Mental Model Mismatch (2 Separate Modules)</span>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        {/* Module 1 */}
                        <div className="rounded-xl border border-white/[0.06] bg-card/50 p-3 flex flex-col gap-2 relative">
                          <div className="flex items-center gap-1.5">
                            <LayoutGrid className="w-4 h-4 text-blue-400" />
                            <span className="text-xs font-semibold text-foreground">Sales Channel</span>
                          </div>
                          <p className="text-[10px] text-muted-foreground leading-normal">Connect account and sync listings</p>
                          <span className="text-[8px] bg-blue-500/10 text-blue-400 self-start px-1.5 py-0.5 rounded border border-blue-500/20">Module A</span>
                        </div>

                        {/* Module 2 */}
                        <div className="rounded-xl border border-white/[0.06] bg-card/50 p-3 flex flex-col gap-2 relative">
                          <div className="flex items-center gap-1.5">
                            <Database className="w-4 h-4 text-amber-400" />
                            <span className="text-xs font-semibold text-foreground">Market Monitoring</span>
                          </div>
                          <p className="text-[10px] text-muted-foreground leading-normal">Configure pricing data and competitors</p>
                          <span className="text-[8px] bg-amber-500/10 text-amber-400 self-start px-1.5 py-0.5 rounded border border-amber-500/20">Module B</span>
                        </div>
                      </div>

                      <p className="text-xs text-muted-foreground text-center italic mt-2">
                        "I connected my Amazon channel, why can't I see pricing data here?"
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="unified"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-4"
                    >
                      <div className="text-center text-xs text-emerald-400 font-medium bg-emerald-950/20 border border-emerald-900/30 rounded-lg p-2 flex items-center justify-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>Seamless Connection &amp; Prompt Flow</span>
                      </div>

                      {/* Unified Hub Module */}
                      <div className="rounded-xl border border-neon-purple/20 bg-neon-purple/[0.02] p-4 flex flex-col gap-3 relative shadow-[0_0_20px_rgba(155,92,255,0.05)]">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Sparkles className="w-4 h-4 text-neon-purple" />
                            <span className="text-xs font-semibold text-foreground">Unified Channel Hub</span>
                          </div>
                          <span className="text-[8px] bg-neon-purple/20 text-neon-purple px-1.5 py-0.5 rounded border border-neon-purple/30 font-medium uppercase tracking-wider">Unified Flow</span>
                        </div>
                        
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-[11px] text-muted-foreground bg-white/[0.02] p-2 rounded border border-white/[0.04]">
                            <span>1. Connect Marketplace (API)</span>
                            <span className="text-emerald-400 font-bold flex items-center gap-0.5"><Check className="w-3 h-3" /> Done</span>
                          </div>
                          <motion.div 
                            initial={{ y: 5, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="bg-neon-purple/10 border border-neon-purple/20 p-2 rounded flex flex-col gap-1.5"
                          >
                            <div className="flex justify-between items-center">
                              <span className="text-[11px] font-semibold text-foreground">2. Enable Monitoring?</span>
                              <span className="text-[9px] text-neon-purple font-semibold">Prompt Triggered</span>
                            </div>
                            <div className="flex gap-2 mt-1">
                              <button className="bg-neon-purple hover:bg-neon-purple/80 text-white text-[9px] font-semibold px-2 py-1 rounded transition-colors">Yes, Enable</button>
                              <button className="bg-white/5 hover:bg-white/10 text-muted-foreground text-[9px] font-semibold px-2 py-1 rounded transition-colors">Not Now</button>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Impact Stats bottom */}
              <div className="mt-6 pt-4 border-t border-white/[0.06] grid grid-cols-3 gap-2 text-center">
                <div>
                  <div className="text-sm font-bold text-foreground">55%</div>
                  <div className="text-[9px] text-muted-foreground">Faster Setup</div>
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">3.1x</div>
                  <div className="text-[9px] text-muted-foreground">Adoption</div>
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">63%</div>
                  <div className="text-[9px] text-muted-foreground">Less Tickets</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer link or indicators */}
      <div className="text-center pb-6 text-xs text-muted-foreground select-none relative z-10">
        Scroll down to explore my case studies
      </div>
    </div>
  )
}

export type { HeroLandingProps, NavigationItem, AnnouncementBanner, CallToAction }
