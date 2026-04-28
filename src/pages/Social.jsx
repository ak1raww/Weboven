import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import AmbientBg from '../components/AmbientBg'
import {
  socialHeroContent,
  socialServicesContent,
  socialPlatformsContent,
  socialCtaContent,
} from '../data/social.copy'

function ServiceCard({ item }) {
  return (
    <div className="glass-card" style={{ padding: 'clamp(28px,3.5vw,44px)' }}>
      <span className="chip">{item.tag}</span>
      <h3 style={{ marginTop: 18, marginBottom: 12, fontSize: 'clamp(1.3rem,2.2vw,1.75rem)', fontFamily: 'var(--font-display)', fontWeight: 700 }}>
        {item.headline}
      </h3>
      <p style={{ fontSize: '0.95rem', lineHeight: 1.8 }}>{item.desc}</p>
      <ul style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 8 }}>
        {item.details.map((d, i) => (
          <li key={i} style={{ listStyle: 'none', display: 'flex', alignItems: 'center', gap: 10, fontSize: '0.85rem', color: 'var(--text-2)' }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--accent)', flexShrink: 0, opacity: 0.7 }} />
            {d}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Social() {
  return (
    <>
      <AmbientBg orbs={[
        { width: 700, height: 500, top: '0%', left: '-20%', color: 'rgba(232,213,176,0.04)' },
        { width: 500, height: 500, bottom: '0%', right: '-10%', color: 'rgba(200,180,140,0.05)' },
      ]} />

      {/* Hero */}
      <section style={{ minHeight: '60vh', display: 'flex', alignItems: 'flex-end', padding: 'clamp(120px,14vw,200px) clamp(20px,5vw,80px) clamp(60px,6vw,80px)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}>
          <motion.p className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} style={{ marginBottom: 20 }}>
            {socialHeroContent.eyebrow}
          </motion.p>
          <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.1 }} style={{ maxWidth: 820 }}>
            {socialHeroContent.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }} style={{ maxWidth: 520, marginTop: 24, fontSize: '1.05rem' }}>
            {socialHeroContent.sub}
          </motion.p>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: '0 clamp(20px,5vw,80px) clamp(80px,10vw,120px)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <ScrollReveal>
            <div className="section-label"><span className="eyebrow">{socialServicesContent.label}</span></div>
          </ScrollReveal>
          <ScrollReveal>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, marginTop: 16 }}>
              {socialServicesContent.items.map((item, i) => (
                <ServiceCard key={i} item={item} />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Platforms */}
      <section style={{ padding: '0 clamp(20px,5vw,80px) clamp(60px,8vw,100px)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <ScrollReveal>
            <div className="section-label"><span className="eyebrow">{socialPlatformsContent.label}</span></div>
            <h2 style={{ marginTop: 4, marginBottom: 40 }}>{socialPlatformsContent.title}</h2>
          </ScrollReveal>
          <ScrollReveal>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              {socialPlatformsContent.platforms.map((p, i) => (
                <div
                  key={p}
                  className="glass-card"
                  style={{ padding: '14px 28px', borderRadius: 100, fontSize: '0.95rem', fontWeight: 500, color: 'var(--text-1)' }}
                >
                  {p}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 clamp(20px,5vw,80px) clamp(80px,10vw,120px)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <ScrollReveal>
            <div className="glass-card" style={{ padding: 'clamp(40px,5vw,64px)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
              <div aria-hidden style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(232,213,176,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
              <h3 style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontFamily: 'var(--font-display)', fontWeight: 700, marginBottom: 16 }}>
                {socialCtaContent.title}
              </h3>
              <p style={{ marginBottom: 36, fontSize: '1.02rem', maxWidth: 440, margin: '0 auto 36px' }}>
                {socialCtaContent.sub}
              </p>
              <Link to={socialCtaContent.href} className="btn btn-primary">{socialCtaContent.cta}</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
