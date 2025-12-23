import React, { useLayoutEffect, useRef, useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { gsap } from 'gsap'
import { GoArrowUpRight } from 'react-icons/go'
import './CardNav.css'

export interface CardNavItemLink { label: string; ariaLabel?: string; href?: string }
export interface CardNavItem { label: string; bgColor: string; textColor: string; links: CardNavItemLink[] }
export interface CardNavProps {
  logo: string
  logoAlt?: string
  items: CardNavItem[]
  className?: string
  ease?: string
  baseColor?: string
  menuColor?: string
  buttonBgColor?: string
  buttonTextColor?: string
}

const CardNav: React.FC<CardNavProps> = ({
  logo,
  logoAlt = 'Logo',
  items,
  className = '',
  ease = 'power3.out',
  baseColor = 'rgba(2, 6, 23, 0.85)',
  menuColor,
  buttonBgColor = '#1DB954',
  buttonTextColor = '#fff'
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const navRef = useRef<HTMLDivElement | null>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])
  const tlRef = useRef<gsap.core.Timeline | null>(null)

  // Scroll detection for enhanced glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const calculateHeight = () => {
    const navEl = navRef.current
    if (!navEl) return 280

    const isMobile = window.matchMedia('(max-width: 768px)').matches
    if (isMobile) {
      const contentEl = navEl.querySelector('.card-nav-content') as HTMLElement | null
      if (contentEl) {
        const wasVisible = contentEl.style.visibility
        const wasPointerEvents = contentEl.style.pointerEvents
        const wasPosition = contentEl.style.position
        const wasHeight = contentEl.style.height

        contentEl.style.visibility = 'visible'
        contentEl.style.pointerEvents = 'auto'
        contentEl.style.position = 'static'
        contentEl.style.height = 'auto'

        // force layout
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        contentEl.offsetHeight

        const topBar = 56
        const padding = 16
        const contentHeight = contentEl.scrollHeight

        contentEl.style.visibility = wasVisible
        contentEl.style.pointerEvents = wasPointerEvents
        contentEl.style.position = wasPosition
        contentEl.style.height = wasHeight

        return topBar + contentHeight + padding
      }
    }
    return 280
  }

  const createTimeline = () => {
    const navEl = navRef.current
    if (!navEl) return null

    gsap.set(navEl, { height: window.matchMedia('(max-width: 768px)').matches ? 56 : 64, overflow: 'hidden' })
    gsap.set(cardsRef.current, { y: 30, opacity: 0 })

    const tl = gsap.timeline({ paused: true })
    tl.to(navEl, { height: calculateHeight, duration: 0.35, ease: 'power2.out' })
    tl.to(
      cardsRef.current,
      { y: 0, opacity: 1, duration: 0.3, ease: 'power2.out', stagger: 0.08 },
      '-=0.15'
    )

    return tl
  }

  useLayoutEffect(() => {
    const tl = createTimeline()
    tlRef.current = tl
    return () => {
      tl?.kill()
      tlRef.current = null
    }
  }, [ease, items])

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return

      if (isExpanded) {
        const newHeight = calculateHeight()
        gsap.set(navRef.current, { height: newHeight })

        tlRef.current.kill()
        const newTl = createTimeline()
        if (newTl) {
          newTl.progress(1)
          tlRef.current = newTl
        }
      } else {
        tlRef.current.kill()
        const newTl = createTimeline()
        if (newTl) {
          tlRef.current = newTl
        }
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isExpanded])

  const toggleMenu = () => {
    const tl = tlRef.current
    if (!tl) return
    if (!isExpanded) {
      setIsHamburgerOpen(true)
      setIsExpanded(true)
      tl.eventCallback('onReverseComplete', null)
      tl.play(0)
    } else {
      setIsHamburgerOpen(false)
      tl.eventCallback('onReverseComplete', () => setIsExpanded(false))
      tl.reverse()
    }
  }

  const handleCTAClick = () => {
    window.location.assign('/join')
    // Close menu if open on mobile
    if (isExpanded) {
      toggleMenu()
    }
  }

  const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
    if (el) cardsRef.current[i] = el
  }

  const handleLogoClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (location.pathname === '/') {
      event.preventDefault()
      event.stopPropagation()

      // Close menu first if open
      if (isExpanded) {
        toggleMenu()
        // Wait for menu collapse animation to complete before any scroll
        setTimeout(() => {
          // Only scroll if not already at top (prevents visual jump)
          if (window.scrollY > 10) {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
          }
        }, 400)
      } else {
        // Only scroll if not already at top
        if (window.scrollY > 10) {
          window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
        }
      }
    } else if (isExpanded) {
      toggleMenu()
    }
  }

  return (
    <div className={`card-nav-container ${className}`}>
      <nav
        ref={navRef}
        className={`card-nav ${isExpanded ? 'open' : ''} ${isScrolled ? 'scrolled' : ''}`}
        style={{ backgroundColor: baseColor }}
      >
        <div className="card-nav-top">
          <div
            className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''}`}
            onClick={toggleMenu}
            role="button"
            aria-label={isExpanded ? 'Close menu' : 'Open menu'}
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                toggleMenu()
              }
            }}
            style={{ color: menuColor || '#E2E8F0' }}
          >
            <div className="hamburger-line" />
            <div className="hamburger-line" />
          </div>

          <Link to="/" className="logo-container" onClick={handleLogoClick}>
            <img src={logo} alt={logoAlt} className="logo" />
          </Link>

          <button
            type="button"
            className="card-nav-cta-button"
            onClick={handleCTAClick}
            style={{ backgroundColor: buttonBgColor, color: buttonTextColor }}
          >
            <span className="whitespace-nowrap">Join Early Access</span>
          </button>
        </div>

        <div className="card-nav-content" aria-hidden={!isExpanded}>
          {(items || []).slice(0, 3).map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="nav-card"
              ref={setCardRef(idx)}
              style={{ backgroundColor: item.bgColor, color: item.textColor }}
            >
              <div className="nav-card-label">{item.label}</div>
              <div className="nav-card-links">
                {item.links?.map((lnk, i) => (
                  <a
                    key={`${lnk.label}-${i}`}
                    className="nav-card-link"
                    href={lnk.href}
                    aria-label={lnk.ariaLabel}
                    onClick={() => {
                      if (isExpanded) {
                        setTimeout(() => toggleMenu(), 150)
                      }
                    }}
                  >
                    <GoArrowUpRight className="nav-card-link-icon" aria-hidden="true" />
                    {lnk.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  )
}

export default CardNav
