import { useState, useEffect, useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS_MOBILE = [
  { label: 'Home', href: '/' },
  { label: 'Web', href: '/web' },
  { label: 'Social', href: '/social' },
  { label: 'Metodo', href: '/metodo' },
  { label: 'Testimonianze', href: '/testimonianze' },
]

const NAV_LINKS_DESKTOP = [
  { label: 'Web', href: '/web' },
  { label: 'Social', href: '/social' },
  { label: 'Metodo', href: '/metodo' },
  { label: 'Testimonianze', href: '/testimonianze' },
]
// Detect touch once — non cambia durante la sessione
const isTouch =
  typeof window !== 'undefined' &&
  window.matchMedia('(pointer: coarse)').matches

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  // Throttle scroll handler: su iOS ogni evento di scroll
  // è costoso. Usiamo requestAnimationFrame per limitare i check.
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40)
  }, [])

  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll()
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [handleScroll])

  useEffect(() => { setOpen(false) }, [location])

  // Su iOS non usiamo backdrop-filter sulla navbar perché è
  // position:fixed — combinazione letale per il rendering.
  // Usiamo invece un background opaco che si attiva allo scroll.
  const navBackground = scrolled
    ? isTouch
      ? 'rgba(5,5,7,0.97)'           // iOS: opaco, nessun blur
      : 'rgba(5,5,7,0.85)'           // Desktop: semi-trasparente con blur
    : 'transparent'

  const navBackdrop = scrolled && !isTouch
    ? 'blur(24px) saturate(160%)'
    : 'none'

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          padding: scrolled ? '14px 32px' : '24px 32px',
          transition: 'padding 0.4s ease, background 0.4s ease',
          background: navBackground,
          backdropFilter: navBackdrop,
          WebkitBackdropFilter: navBackdrop,
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          // Promuovi la navbar sul suo layer GPU — evita che ogni
          // scroll triggeri un repaint della pagina sottostante
          willChange: 'transform',
          transform: 'translateZ(0)',
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ fontFamily: 'var(--font-brand)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.1em' }}>
          Weboven
        </Link>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }} className="nav-desktop">
          {NAV_LINKS_DESKTOP.map(l => (
            <Link
              key={l.href}
              to={l.href}
              style={{
                padding: '8px 16px',
                borderRadius: 100,
                fontSize: '0.85rem',
                fontWeight: 500,
                color: location.pathname === l.href ? 'var(--accent)' : 'var(--text-2)',
                background: location.pathname === l.href ? 'var(--accent-dim)' : 'transparent',
                transition: 'color 0.2s, background 0.2s',
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contatto"
            className="btn btn-primary"
            style={{ padding: '9px 22px', fontSize: '0.82rem', marginLeft: 8 }}
          >
            Parliamoci
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="nav-mobile-toggle"
          style={{
            background: 'none', border: 'none', color: 'var(--text-1)',
            display: 'flex', flexDirection: 'column', gap: 5, cursor: 'pointer', padding: 4,
          }}
          aria-label="Menu"
        >
          {[0, 1, 2].map(i => (
            <motion.span
              key={i}
              animate={open
                ? i === 1 ? { opacity: 0 } : i === 0 ? { rotate: 45, y: 9 } : { rotate: -45, y: -9 }
                : { rotate: 0, y: 0, opacity: 1 }
              }
              transition={{ duration: 0.3 }}
              style={{ display: 'block', width: 22, height: 1.5, background: 'var(--text-1)', borderRadius: 2, transformOrigin: 'center' }}
            />
          ))}
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
              // Su iOS: niente backdrop-filter sul menu fullscreen
              background: 'rgba(5,5,7,0.98)',
              zIndex: 999, display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center', gap: 16,
              // Previeni lo scroll della pagina mentre il menu è aperto
              overscrollBehavior: 'contain',
            }}
          >
            {NAV_LINKS_MOBILE.map((l, i) => (
              <motion.div
                key={l.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 + 0.1 }}
              >
                <Link
                  to={l.href}
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2rem, 8vw, 3rem)',
                    color: location.pathname === l.href ? 'var(--accent)' : 'var(--text-1)',
                    fontWeight: 700,
                  }}
                >
                  {l.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42 }}
            >
              <Link
                to="/contatto"
                className="btn btn-primary"
                style={{ marginTop: 24, fontSize: '1rem', padding: '14px 40px' }}
              >
                Parliamoci
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-mobile-toggle { display: none !important; }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-toggle { display: flex !important; }
        }
      `}</style>
    </>
  )
}
