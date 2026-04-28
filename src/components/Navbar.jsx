import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Web', href: '/web' },
  { label: 'Social', href: '/social' },
  { label: 'Metodo', href: '/metodo' },
  { label: 'Testimonianze', href: '/testimonianze' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setOpen(false) }, [location])

  return (
    <>
      <nav
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          padding: scrolled ? '14px 32px' : '24px 32px',
          transition: 'padding 0.4s ease, background 0.4s ease, backdrop-filter 0.4s ease',
          background: scrolled ? 'rgba(5,5,7,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(24px) saturate(160%)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}
      >
        <Link to="/" style={{ fontFamily: 'var(--font-brand)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.1em' }}>
          Weboven
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }} className="nav-desktop">
          {NAV_LINKS.map(l => (
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
          <a href="/contatto" className="btn btn-primary" style={{ padding: '9px 22px', fontSize: '0.82rem', marginLeft: 8 }}>
            Parliamoci
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="nav-mobile-toggle"
          style={{
            background: 'none', border: 'none', color: 'var(--text-1)',
            display: 'flex', flexDirection: 'column', gap: 5, cursor: 'pointer', padding: 4,
          }}
          aria-label="Menu"
        >
          <span style={{ display: 'block', width: 22, height: 1.5, background: 'var(--text-1)', borderRadius: 2, transition: 'all 0.3s', transform: open ? 'rotate(45deg) translateY(8px)' : 'none' }} />
          <span style={{ display: 'block', width: 22, height: 1.5, background: 'var(--text-1)', borderRadius: 2, transition: 'all 0.3s', opacity: open ? 0 : 1 }} />
          <span style={{ display: 'block', width: 22, height: 1.5, background: 'var(--text-1)', borderRadius: 2, transition: 'all 0.3s', transform: open ? 'rotate(-45deg) translateY(-8px)' : 'none' }} />
        </button>
      </nav>

      <div
        className={`mobile-menu ${open ? 'open' : ''}`}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(5,5,7,0.97)',
          backdropFilter: 'blur(24px)',
          zIndex: 999,
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: 16,
          opacity: 0, visibility: 'hidden',
          transition: 'opacity 0.4s ease, visibility 0.4s ease',
        }}
      >
        {NAV_LINKS.map(l => (
          <Link
            key={l.href}
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
        ))}
        <a href="/contatto" className="btn btn-primary" style={{ marginTop: 24, fontSize: '1rem', padding: '14px 40px' }}>
          Parliamoci
        </a>
      </div>

      <style>{`
        .nav-mobile-toggle { display: none !important; }
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile-toggle { display: flex !important; }
        }
        .mobile-menu.open {
          opacity: 1 !important;
          visibility: visible !important;
        }
      `}</style>
    </>
  )
}