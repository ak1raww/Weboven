import { Link } from 'react-router-dom'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import ScrollReveal from '../components/ScrollReveal'
import AmbientBg from '../components/AmbientBg'
import {
  metodoHeroContent,
  metodoManifestoContent,
  metodoValoriContent,
  metodoCtaContent,
} from '../data/metodo.copy'

function ValoreCard({ item, index }) {
  return (
    <ScrollReveal delay={index * 0.1} y={35}>
      <div className="glass-card" style={{ padding: '32px 28px' }}>
        <div style={{
          width: 48, height: 48, borderRadius: 12,
          background: 'var(--accent-dim)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.3rem', marginBottom: 20, color: 'var(--accent)',
        }}>
          {item.icon}
        </div>
        <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', marginBottom: 10, color: 'var(--text-1)' }}>{item.label}</h4>
        <p style={{ fontSize: '0.92rem', lineHeight: 1.75 }}>{item.desc}</p>
      </div>
    </ScrollReveal>
  )
}

export default function Metodo() {
  return (
    <>
      <AmbientBg orbs={[
        { width: 600, height: 600, top: '5%', right: '-10%', color: 'rgba(232,213,176,0.055)' },
        { width: 450, height: 450, bottom: '15%', left: '-15%', color: 'rgba(180,160,120,0.04)' },
      ]} />

      {/* Hero */}
      <section style={{ minHeight: '60vh', display: 'flex', alignItems: 'flex-end', padding: 'clamp(120px,14vw,200px) clamp(20px,5vw,80px) clamp(60px,6vw,80px)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}>
          <motion.p className="eyebrow" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} style={{ marginBottom: 20 }}>
            {metodoHeroContent.eyebrow}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1, ease: [0.16,1,0.3,1] }} style={{ maxWidth: 760 }}>
            {metodoHeroContent.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }} style={{ maxWidth: 560, marginTop: 24, fontSize: '1.05rem' }}>
            {metodoHeroContent.sub}
          </motion.p>
        </div>
      </section>

      {/* Manifesto blocks */}
      <section style={{ padding: '0 clamp(20px,5vw,80px) clamp(80px,10vw,120px)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <ScrollReveal>
            <div className="section-label"><span className="eyebrow">{metodoManifestoContent.label}</span></div>
          </ScrollReveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 2, marginTop: 16 }}>
            {metodoManifestoContent.blocks.map((block, i) => (
              <ScrollReveal key={i} delay={i * 0.15} y={40}>
                <div style={{
                  padding: 'clamp(32px,4vw,48px) 0',
                  borderBottom: '1px solid var(--border)',
                  display: 'grid',
                  gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.4fr)',
                  gap: 'clamp(24px,5vw,80px)',
                  alignItems: 'start',
                }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.2rem,2vw,1.6rem)', fontWeight: 700, lineHeight: 1.25 }}>
                    {block.title}
                  </h3>
                  <p style={{ fontSize: '1rem', lineHeight: 1.8, paddingTop: 4 }}>{block.body}</p>
                </div>
                <style>{`@media(max-width:640px){ div > div { grid-template-columns: 1fr !important; } }`}</style>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Valori */}
      <section style={{ padding: '0 clamp(20px,5vw,80px) clamp(80px,10vw,120px)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <ScrollReveal>
            <div className="section-label"><span className="eyebrow">{metodoValoriContent.label}</span></div>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20, marginTop: 20 }}>
            {metodoValoriContent.items.map((item, i) => (
              <ValoreCard key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 clamp(20px,5vw,80px) clamp(80px,10vw,120px)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 32, padding: 'clamp(32px,4vw,56px)', borderTop: '1px solid var(--border)' }}>
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem,2.5vw,2rem)', fontWeight: 700, marginBottom: 8 }}>
                  {metodoCtaContent.title}
                </h3>
                <p style={{ fontSize: '0.97rem' }}>{metodoCtaContent.sub}</p>
              </div>
              <Link to={metodoCtaContent.href} className="btn btn-primary">{metodoCtaContent.cta}</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
