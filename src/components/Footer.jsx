import { Link } from 'react-router-dom'

const NAV = [
  { label: 'Web & E-Commerce', href: '/web' },
  { label: 'Social Media', href: '/social' },
  { label: 'Metodo', href: '/metodo' },
  { label: 'Testimonianze', href: '/testimonianze' },
  { label: 'Contatto', href: '/contatto' },
]

const SOCIALS = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/surradiant',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/393388666909',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:contact@weboven.it',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="M2 7l10 7 10-7"/>
      </svg>
    ),
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{
      position: 'relative',
      borderTop: '1px solid var(--border)',
      background: 'rgba(255,255,255,0.015)',
      overflow: 'hidden',
    }}>
      <div aria-hidden style={{
        position: 'absolute',
        bottom: 0, left: '50%',
        transform: 'translateX(-50%)',
        width: 600, height: 200,
        background: 'radial-gradient(ellipse, rgba(232,213,176,0.04) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: 'clamp(56px,8vw,96px) clamp(20px,5vw,80px) clamp(32px,4vw,48px)',
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr 1fr',
        gap: 'clamp(40px,6vw,80px)',
        alignItems: 'start',
      }}>
        <div>
          <Link to="/" style={{
            fontFamily: 'var(--font-brand)',
            fontSize: '1.4rem',
            fontWeight: 700,
            color: 'var(--accent)',
            letterSpacing: '0.1em',
            display: 'block',
            marginBottom: 20,
            textDecoration: 'none',
          }}>
            Weboven
          </Link>
          <p style={{
            fontSize: '0.9rem',
            lineHeight: 1.8,
            color: 'var(--text-2)',
            maxWidth: 300,
            marginBottom: 32,
          }}>
            Costruisco esperienze digitali che lavorano per il tuo business. Siti, e-commerce e social media con un metodo preciso.
          </p>
          <div style={{ display: 'flex', gap: 12 }}>
            {SOCIALS.map(s => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={s.label}
                style={{
                  width: 40, height: 40,
                  borderRadius: 10,
                  border: '1px solid var(--border)',
                  background: 'var(--surface)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--text-2)',
                  transition: 'color 0.2s, border-color 0.2s, background 0.2s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = 'var(--accent)'
                  e.currentTarget.style.borderColor = 'rgba(232,213,176,0.3)'
                  e.currentTarget.style.background = 'var(--accent-dim)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = 'var(--text-2)'
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.background = 'var(--surface)'
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p style={{
            fontSize: '0.7rem',
            fontWeight: 500,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            opacity: 0.7,
            marginBottom: 20,
          }}>
            Navigazione
          </p>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {NAV.map(l => (
              <Link
                key={l.href}
                to={l.href}
                style={{
                  fontSize: '0.9rem',
                  color: 'var(--text-2)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  width: 'fit-content',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--text-1)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-2)'}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p style={{
            fontSize: '0.7rem',
            fontWeight: 500,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
            opacity: 0.7,
            marginBottom: 20,
          }}>
            Contatti
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <a
              href="mailto:contact@weboven.it"
              style={{ fontSize: '0.9rem', color: 'var(--text-2)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--text-1)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-2)'}
            >
              contact@weboven.it
            </a>
            <a
              href="https://wa.me/393388666909"
              target="_blank"
              rel="noreferrer"
              style={{ fontSize: '0.9rem', color: 'var(--text-2)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--text-1)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-2)'}
            >
              WhatsApp
            </a>
          </div>
          <Link
            to="/contatto"
            className="btn btn-primary"
            style={{ marginTop: 32, display: 'inline-flex', padding: '11px 24px', fontSize: '0.82rem' }}
          >
            Inizia un progetto
          </Link>
        </div>
      </div>

      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '20px clamp(20px,5vw,80px)',
        borderTop: '1px solid var(--border)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 12,
      }}>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-3)' }}>
          © {year} Weboven — Tutti i diritti riservati
        </p>
        <p style={{ fontSize: '0.75rem', color: 'var(--text-3)' }}>
          Fatto con metodo. Costruito per durare.
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer > div:nth-child(2) {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  )
}
