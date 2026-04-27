import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import AmbientBg from '../components/AmbientBg'
import {
  heroContent,
  manifestoContent,
  servicesPreviewContent,
  numbersContent,
  quoteContent,
  contactContent,
} from '../data/home.copy'

/* ── small helpers ── */
function GlassServiceCard({ item, index }) {
  return (
    <ScrollReveal delay={index * 0.15} y={50}>
      <Link to={item.href} className="glass-card" style={{ display: 'block', padding: '40px 36px', height: '100%', textDecoration: 'none' }}>
        <span className="chip">{item.tag}</span>
        <h3 style={{ marginTop: 20, marginBottom: 14, fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontFamily: 'var(--font-display)', fontWeight: 700 }}>
          {item.headline}
        </h3>
        <p style={{ fontSize: '0.95rem', lineHeight: 1.8 }}>{item.desc}</p>
        <div style={{ marginTop: 32, display: 'flex', alignItems: 'center', gap: 8, color: 'var(--accent)', fontSize: '0.85rem', fontWeight: 500 }}>
          {item.cta}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </Link>
    </ScrollReveal>
  )
}

function NumberCard({ item, index }) {
  return (
    <ScrollReveal delay={index * 0.1} y={30}>
      <div className="glass-card" style={{ padding: '32px 28px', textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 900, color: 'var(--accent)', lineHeight: 1 }}>
          {item.value}
        </div>
        <p style={{ marginTop: 10, fontSize: '0.82rem', color: 'var(--text-2)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
          {item.label}
        </p>
      </div>
    </ScrollReveal>
  )
}

/* ── Hero with parallax ──
 * FIX: Use window-level scroll (no `target` ref) so Chrome & Safari
 * track the same scroll source as Firefox. The `target` prop on useScroll
 * causes Chromium/WebKit to look for a scrollable ancestor of the ref,
 * which is `<main>` (position:relative / z-index:2) — not the window —
 * breaking the progress value on those engines.
 */
function Hero() {
  const ref = useRef(null)

  // Track window scroll, map first viewport height to [0,1]
  const { scrollY } = useScroll()

  // We don't know window.innerHeight at module scope, so derive it lazily
  // via a transform that maps 0..600 → effects. 600px ≈ typical hero height.
  const y = useTransform(scrollY, [0, 600], [0, 120])
  const opacity = useTransform(scrollY, [0, 420], [1, 0])

  return (
    <section
      ref={ref}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <motion.div
        style={{
          y,
          opacity,
          width: '100%',
          padding: '120px clamp(20px,5vw,80px) 80px',
          // GPU compositing hint — fixes Safari jank on transforms
          willChange: 'transform, opacity',
        }}
      >
        <motion.p
          className="eyebrow animate-fade-up"
          style={{ marginBottom: 20 }}
        >
          {heroContent.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          style={{ maxWidth: 900 }}
        >
          <span className="text-shimmer">{heroContent.name}</span>
          <br />
          <span style={{ display: 'block', marginTop: 8 }}>{heroContent.tagline}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', maxWidth: 560, marginTop: 24, marginBottom: 48, color: 'var(--text-2)' }}
        >
          {heroContent.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}
        >
          <Link to={heroContent.cta.primary.href} className="btn btn-primary">
            {heroContent.cta.primary.label}
          </Link>
          <a href={heroContent.cta.secondary.href} className="btn btn-glass">
            {heroContent.cta.secondary.label}
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{
          position: 'absolute', bottom: 40, left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
          pointerEvents: 'none',
        }}
      >
        <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-3)' }}>Scorri</p>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, var(--accent), transparent)' }}
        />
      </motion.div>
    </section>
  )
}

/* ── Manifesto Section ── */
function Manifesto() {
  return (
    <section style={{ padding: 'clamp(80px,10vw,140px) clamp(20px,5vw,80px)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <ScrollReveal>
          <div className="section-label">
            <span className="eyebrow">{manifestoContent.label}</span>
          </div>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.2fr) minmax(0,1fr)', gap: 'clamp(40px,6vw,100px)', alignItems: 'start' }}>
          <ScrollReveal y={60}>
            <h2 style={{ lineHeight: 1.1 }}>
              {manifestoContent.title}
            </h2>
          </ScrollReveal>

          <div style={{ paddingTop: 8 }}>
            {manifestoContent.body.map((text, i) => (
              <ScrollReveal key={i} delay={i * 0.15} y={30}>
                <p style={{ fontSize: '1.05rem', marginBottom: 24, lineHeight: 1.8 }}>{text}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <style>{`@media(max-width:768px){ section > div > div { grid-template-columns: 1fr !important; } }`}</style>
    </section>
  )
}

/* ── Services Preview ── */
function ServicesPreview() {
  return (
    <section style={{ padding: '0 clamp(20px,5vw,80px) clamp(80px,10vw,140px)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <ScrollReveal>
          <div className="section-label">
            <span className="eyebrow">{servicesPreviewContent.label}</span>
          </div>
          <h2 style={{ marginBottom: 48, maxWidth: 500 }}>{servicesPreviewContent.title}</h2>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
          {servicesPreviewContent.items.map((item, i) => (
            <GlassServiceCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Numbers ── */
function Numbers() {
  return (
    <section style={{ padding: '0 clamp(20px,5vw,80px) clamp(80px,10vw,140px)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        <ScrollReveal>
          <div className="section-label">
            <span className="eyebrow">{numbersContent.label}</span>
          </div>
        </ScrollReveal>

        <div className="strike-zone-wrapper">
          <div className="big-x-pc" aria-hidden="true" />

          <div className="grid-faded">
            {numbersContent.items.map((item, i) => (
              <NumberCard key={i} item={item} index={i} />
            ))}
          </div>
        </div>

        <ScrollReveal delay={0.4}>
          <div className="commitment-manifesto" style={{ textAlign: 'center', marginTop: '80px' }}>
            <p style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', color: 'var(--text-1)' }}>
              Non ti darò "numeri".
            </p>
            <p style={{ fontSize: 'clamp(1.2rem, 3vw, 1.8rem)', color: 'var(--text-1)' }}>
              Non mi servono i numeri per far crescere la tua attività.
            </p>
            <span className="gold-leaf" style={{
              display: 'block',
              marginTop: '20px',
              color: 'var(--accent)',
              fontFamily: 'var(--font-display)',
              fontSize: '2rem',
            }}>
              Ho bisogno del TUO impegno.
            </span>
          </div>
        </ScrollReveal>

      </div>
    </section>
  )
}

/* ── Quote Break ── */
function QuoteSection() {
  return (
    <section style={{ padding: 'clamp(60px,8vw,120px) clamp(20px,5vw,80px)' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div className="divider" />
        <ScrollReveal y={30}>
          <blockquote style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 700,
            lineHeight: 1.2,
            color: 'var(--text-1)',
            textAlign: 'center',
            padding: 'clamp(40px,6vw,80px) 0',
            letterSpacing: '-0.01em',
          }}>
            <span style={{ color: 'var(--accent)', opacity: 0.5, fontSize: '4rem', lineHeight: 0, verticalAlign: '-0.3em' }}>"</span>
            {quoteContent.text}
            <span style={{ display: 'block', fontSize: '0.9rem', fontFamily: 'var(--font-body)', fontWeight: 400, color: 'var(--text-3)', marginTop: 20, letterSpacing: '0.1em' }}>
              {quoteContent.author}
            </span>
          </blockquote>
        </ScrollReveal>
        <div className="divider" />
      </div>
    </section>
  )
}

/* ── Contact Section ── */
function ContactSection() {
  return (
    <section id={contactContent.id} style={{ padding: 'clamp(80px,10vw,140px) clamp(20px,5vw,80px)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="glass-card" style={{ padding: 'clamp(48px,6vw,80px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div aria-hidden style={{
            position: 'absolute', top: '50%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 500, height: 300,
            background: 'radial-gradient(ellipse, rgba(232,213,176,0.08) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <ScrollReveal>
            <span className="eyebrow">{contactContent.label}</span>
            <h2 style={{ marginTop: 16, marginBottom: 16, maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}>
              {contactContent.title}
            </h2>
            <p style={{ maxWidth: 480, margin: '0 auto 40px', fontSize: '1.05rem' }}>
              {contactContent.sub}
            </p>

            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href={contactContent.whatsapp} target="_blank" rel="noreferrer" className="btn btn-primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                {contactContent.cta}
              </a>
              <a href={`mailto:${contactContent.email}`} className="btn btn-glass">
                {contactContent.email}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

/* ── PAGE ── */
export default function Home() {
  return (
    <>
      <AmbientBg />
      <Hero />
      <Manifesto />
      <ServicesPreview />
      <Numbers />
      <QuoteSection />
      <ContactSection />
    </>
  )
}
