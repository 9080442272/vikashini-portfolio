'use client'

import { useState } from 'react'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Menu, X } from 'lucide-react'
import { useIsMobile } from '@/hooks/use-mobile'
import { FlowButton } from '@/components/ui/flow-button'
import { motion } from 'framer-motion'

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
  // Logo and branding
  logo?: {
    src?: string
    alt?: string
    companyName: string
    icon?: React.ReactNode
  }
  
  // Navigation
  navigation?: NavigationItem[]
  loginText?: string
  loginHref?: string
  onLoginClick?: () => void
  
  // Hero content
  title: string
  description: string
  announcementBanner?: AnnouncementBanner
  callToActions?: CallToAction[]
  
  // Styling options
  titleSize?: 'small' | 'medium' | 'large'
  gradientColors?: {
    from: string
    to: string
  }
  
  // Additional customization
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
  const isMobile = useIsMobile()

  const getTitleSizeClasses = () => {
    switch (titleSize) {
      case 'small':
        return 'text-xl sm:text-2xl md:text-3xl'
      case 'medium':
        return 'text-2xl sm:text-3xl md:text-4xl'
      case 'large':
      default:
        return 'text-2xl sm:text-4xl md:text-5xl'
    }
  }

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
    <div className={`min-h-screen w-full overflow-hidden relative bg-background ${className || ''}`}>
      {/* Purple glow effect - top left */}
      <div
        aria-hidden="true"
        className="absolute -top-20 -left-20 z-0 w-[300px] h-[300px] rounded-full opacity-40 blur-[100px] animate-[pulse-glow_8s_ease-in-out_infinite]"
        style={{
          background: `radial-gradient(circle, hsl(267, 100%, 50%) 0%, hsl(280, 100%, 35%) 50%, transparent 70%)`,
        }}
      />
      
      {/* Purple glow effect - center bottom */}
      <div
        aria-hidden="true"
        className="absolute -bottom-20 left-1/2 -translate-x-1/2 z-0 w-[500px] h-[250px] opacity-50 blur-[80px] animate-[pulse-glow_6s_ease-in-out_infinite_1s]"
        style={{
          background: `radial-gradient(ellipse at center, hsl(270, 100%, 45%) 0%, hsl(285, 100%, 30%) 40%, transparent 70%)`,
        }}
      />
      
      {/* Subtle right glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 -right-20 z-0 w-[250px] h-[250px] rounded-full opacity-30 blur-[100px] animate-[pulse-glow_10s_ease-in-out_infinite_2s]"
        style={{
          background: `radial-gradient(circle, hsl(280, 100%, 40%) 0%, transparent 70%)`,
        }}
      />

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
            {loginText && (
              <button 
                onClick={onLoginClick}
                className="text-sm font-semibold text-foreground hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
              >
                {loginText} <span aria-hidden="true">&rarr;</span>
              </button>
            )}
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

      <div className="relative z-10 isolate px-6 pt-4 overflow-hidden min-h-screen flex flex-col justify-center">        
        <div className="mx-auto max-w-4xl pt-20 sm:pt-25">
          {/* Announcement banner */}
          {announcementBanner && (
            <div className="hidden sm:mb-4 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm text-muted-foreground ring-1 ring-primary/30 hover:ring-primary/50 transition-all backdrop-blur-sm">
                {announcementBanner.text}{' '}
                <a href={announcementBanner.linkHref} className="font-semibold text-primary hover:text-primary/80 transition-colors">
                  <span aria-hidden="true" className="absolute inset-0" />
                  {announcementBanner.linkText} <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          )}
          
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={`${getTitleSizeClasses()} font-bold tracking-tight text-balance text-foreground leading-[1.2] md:leading-[1.1]`}
            >
              {title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mt-6 sm:mt-8 text-base sm:text-lg font-light text-muted-foreground max-w-2xl mx-auto"
            >
              {description}
            </motion.p>
            
            {/* Call to action buttons */}
            {callToActions && callToActions.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="mt-8 sm:mt-10 flex items-center justify-center gap-x-4 sm:gap-x-6"
              >
                {callToActions.map((cta, index) => renderCallToAction(cta, index))}
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export type { HeroLandingProps, NavigationItem, AnnouncementBanner, CallToAction }
