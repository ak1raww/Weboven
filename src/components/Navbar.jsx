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
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
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
        <Link to="/" className="logo" style={{ fontFamily: 'var(--font-brand)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--accent)', letterSpacing: '0.1em' }}>
          Weboven
        </Link>

        <div className="nav-desktop">
          {NAV_LINKS.map(l => (
            <Link
              key={l.href}
              to={l.href}
              className={`nav-link ${location.pathname === l.href ? 'active' : ''}`}
            >
              {l.label}
            </Link>
          ))}
          <a href="/contatto" className="btn btn-primary">Parliamoci</a>
        </div>

        <button onClick={() => setOpen(!open)} className="nav-mobile-toggle" aria-label="Menu">
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </nav>

      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        {NAV_LINKS.map(l => (
          <Link key={l.href} to={l.href} className="mobile-nav-link">
            {l.label}
          </Link>
        ))}
        <a href="/contatto" className="btn btn-primary">Parliamoci</a>
      </div>

      <style>{`
        .nav-desktop {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .nav-link {
          padding: 8px 16px;
          border-radius: 100px;
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-2);
          background: transparent;
          transition: all 0.2s ease;
          text-decoration: none;
        }
        .nav-link:hover {
          color: var(--accent);
          background: var(--accent-dim);
          transform: translateY(-1px);
        }
        .nav-link.active {
          color: var(--accent);
          background: var(--accent-dim);
        }
        .nav-mobile-toggle {
          display: none;
          background: none;
          border: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 4px;
        }
        .nav-mobile-toggle .bar {
          display: block;
          width: 22px;
          height: 1.5px;
          background: var(--text-1);
          border-radius: 2px;
          transition: all 0.3s ease;
        }
        .mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(5,5,7,0.97);
          backdrop-filter: blur(24px);
          z-index: 999;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 32px;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.4s ease, visibility 0.4s ease;
        }
        .mobile-menu.open {
          opacity: 1;
          visibility: visible;
        }
        .mobile-nav-link {
          font-family: var(--font-display);
          font-size: clamp(2rem, 8vw, 3rem);
          color: var(--text-1);
          font-weight: 700;
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .mobile-nav-link:hover {
          color: var(--accent);
        }
        @media (max-width: 768px) {
          .nav-desktop { display: none; }
          .nav-mobile-toggle { display: flex; }
        }
      `}</style>
    </>
  )
}