import { useState, type MouseEvent } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [navOpen, setNavOpen] = useState(false)
  const location = useLocation()

  const navActive = navOpen || isMobileMenuOpen

  // Motion tokens for consistency
  const NAV_BG_DURATION = 260
  const NAV_TEXT_DURATION = 220
  const NAV_STAGGER = 40
  const NAV_CTA_DELAY = 200
  const NAV_EASING = 'cubic-bezier(0.25, 0.1, 0.25, 1)'

  const navItems = [
    { name: 'About', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Data Security', path: '/data-security' },
  ]

  return (
    <nav
      className="fixed inset-x-0 top-4 sm:top-6 z-50 flex justify-center overflow-x-hidden"
      role="navigation"
      aria-label="Main navigation for Trovo Fi"
      onMouseEnter={() => setNavOpen(true)}
      onMouseLeave={() => !isMobileMenuOpen && setNavOpen(false)}
    >
      <div
        className={`relative w-[85%] sm:w-[90%] max-w-6xl mx-0 rounded-full border overflow-hidden ${navActive
          ? 'backdrop-blur-2xl bg-night-900/85 border-white/15 shadow-2xl shadow-trovo-green/20'
          : 'backdrop-blur-none bg-transparent border-transparent shadow-none'
          }`}
        style={{ transition: `all ${NAV_BG_DURATION}ms ${NAV_EASING}` }}
      >
        <div
          aria-hidden
          className={`pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/5 via-white/0 to-transparent transition-opacity ${navActive ? 'opacity-100' : 'opacity-0'}`}
          style={{ transition: `opacity ${NAV_BG_DURATION}ms ${NAV_EASING}` }}
        />
        <div
          aria-hidden
          className={`pointer-events-none absolute top-1 left-6 right-6 h-px rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-opacity ${navActive ? 'opacity-100' : 'opacity-0'}`}
          style={{ transition: `opacity ${NAV_BG_DURATION}ms ${NAV_EASING}` }}
        />
        <div
          aria-hidden
          className={`pointer-events-none absolute bottom-1 left-6 right-6 h-px rounded-full bg-gradient-to-r from-transparent via-trovo-green/30 to-transparent transition-opacity ${navActive ? 'opacity-100' : 'opacity-0'}`}
          style={{ transition: `opacity ${NAV_BG_DURATION}ms ${NAV_EASING}` }}
        />
        <div
          aria-hidden
          className={`pointer-events-none absolute -inset-1 rounded-full bg-gradient-to-r from-trovo-green/15 via-blue-500/5 to-trovo-green/15 blur-lg transition-opacity ${navActive ? 'opacity-60' : 'opacity-0'}`}
          style={{ transition: `opacity ${NAV_BG_DURATION}ms ${NAV_EASING}` }}
        />

        <div className="relative flex items-center justify-between px-3 sm:px-4 h-12 sm:h-14">
          <div className="flex items-center justify-start">
            <Link
              to="/"
              onClick={(event: MouseEvent<HTMLAnchorElement>) => {
                if (location.pathname === '/') {
                  event.preventDefault()
                  setIsMobileMenuOpen(false)
                  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
                }
              }}
              className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-trovo-green/50 rounded-xl"
            >
              <div className="relative">
                <img
                  src="/trovo.svg"
                  alt="Trovo Fi Logo - Revolutionary Fintech Platform"
                  className={`h-7 w-7 sm:h-8 sm:w-8 object-contain transition-transform duration-300 ease-out ${navActive ? 'scale-[1.02] translate-y-[0.5px]' : ''
                    }`}
                  style={{
                    filter: 'brightness(0) saturate(100%) invert(45%) sepia(78%) saturate(2476%) hue-rotate(92deg) brightness(101%) contrast(107%)'
                  }}
                />
              </div>
              <span
                className="text-xl sm:text-2xl font-bold text-trovo-green tracking-tight ml-2"
                aria-label="Trovo Fi — Your Rewards, Reimagined"
              >
                Trovo
              </span>
            </Link>
          </div>

          {/* Dormant navbar: logo-only by default; items fade/slide in on hover */}
          <div className="hidden md:flex items-center gap-2">
            <div
              className={`flex items-center gap-1 rounded-full overflow-hidden transition-all duration-350 ease-out ${navActive ? 'bg-white/6 backdrop-blur-xl border border-white/10 px-2 py-1' : 'bg-transparent border border-transparent px-0 py-0'
                }`}
            >
              {navItems.map((item, idx) => (
                <Link
                  key={item.path}
                  to={item.path}
                  aria-current={location.pathname === item.path ? 'page' : undefined}
                  className={`relative flex items-center gap-2 px-3 py-1.5 rounded-full text-sm transition-all ${navActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
                    } ${location.pathname === item.path ? 'text-white bg-white/10' : 'text-gray-300 hover:text-white hover:bg-white/5'}`}
                  style={{
                    transition: `opacity ${NAV_TEXT_DURATION}ms ${NAV_EASING}, transform ${NAV_TEXT_DURATION}ms ${NAV_EASING}, color 180ms ease, background-color 180ms ease`,
                    transitionDelay: navActive ? `${120 + idx * NAV_STAGGER}ms` : '0ms'
                  }}
                >
                  <span className="relative z-10">{item.name}</span>
                  {location.pathname === item.path && (
                    <div className="absolute inset-0 bg-trovo-green/10 rounded-full" />
                  )}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2">
            <Link
              to="/join"
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all ${navActive ? 'bg-trovo-green text-white' : 'bg-transparent text-white/70'
                }`}
              data-attr="cta:join-early-access"
              style={{
                transition: `opacity ${NAV_TEXT_DURATION}ms ${NAV_EASING}, transform ${NAV_TEXT_DURATION}ms ${NAV_EASING}, background-color 200ms ease, color 200ms ease`,
                transitionDelay: navActive ? `${NAV_CTA_DELAY}ms` : '0ms'
              }}
            >
              <span
                className={`${navActive ? 'opacity-100' : 'opacity-0'} transition-opacity`}
                style={{ transition: `opacity ${NAV_TEXT_DURATION}ms ${NAV_EASING}` }}
              >
                Join Early Access
              </span>
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-trovo-green/40 hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-pressed={isMobileMenuOpen}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`w-4 h-0.5 bg-white transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : ''}`}
              />
              <span
                className={`w-4 h-0.5 bg-white mt-1 transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`w-4 h-0.5 bg-white mt-1 transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-0.5' : ''}`}
              />
            </div>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[60]" aria-modal="true" role="dialog">
          <button
            aria-label="Close menu"
            className="absolute inset-0 bg-black/30"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          <div
            id="mobile-menu"
            className="absolute left-3 right-3 top-16 sm:top-20 rounded-2xl border border-white/10 bg-night-900/90 backdrop-blur-xl overflow-hidden"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/10 via-night-800/40 to-transparent"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute top-1 left-4 right-4 h-px rounded-full bg-gradient-to-r from-transparent via-white/80 to-transparent"
            />

            <div className="py-2 relative">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.path}
                    className={`block px-4 py-3 font-medium transition-colors ${location.pathname === item.path
                      ? 'text-trovo-green bg-trovo-green/10'
                      : 'text-gray-400 hover:bg-white/5 hover:text-white'
                      }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    aria-current={location.pathname === item.path ? 'page' : undefined}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
              <div className="border-t border-white/10 mt-2 pt-2">
                <Link
                  to="/join"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block mx-2 my-2 text-center rounded-xl bg-trovo-green text-white px-4 py-3 font-semibold hover:bg-trovo-green/90"
                  data-attr="cta:join-early-access"
                >
                  Join Early Access
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
