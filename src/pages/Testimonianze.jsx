import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useRef } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import AmbientBg from '../components/AmbientBg'
import {
  testiHeroContent,
  testiContent,
  testiHighlight,
  testiCtaContent,
} from '../data/testimonianze.copy'

function Stars({ count }) {
  return (
    <div style={{ display: 'flex', gap: 3 }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="var(--accent)">
          <path d="M7 1l1.545 3.13 3.455.503-2.5 2.437.59 3.43L7 8.885 3.91 10.5l.59-3.43L2 4.633l3.455-.503z"/>
        </svg>
      ))}
    </div>
  )
}

function TestiCard({ item, index }) {
  return (
    <ScrollReveal delay={index * 0.1} y={40}>
      <div className="glass-card" style={{ padding: 'clamp(28px,3vw,40px)', height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Stars count={item.stars} />
        
        <blockquote style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(0.95rem,1.3vw,1.05rem)',
          lineHeight: 1.8,
          color: 'var(--text-1)',
          fontWeight: 300,
          flex: 1,
          marginTop: 20,
          marginBottom: 28,
          fontStyle: 'italic',
        }}>
          "{item.quote}"
        </blockquote>

        <div style={{ 
          borderTop: '1px solid var(--border)', 
          paddingTop: 20, 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center' // Allineamento centrale per far stare bene il pulsante
        }}>
          <div>
            <p style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--text-1)', marginBottom: 2 }}>{item.author}</p>
            <p style={{ fontSize: '0.78rem', color: 'var(--text-3)', letterSpacing: '0.04em' }}>{item.role}</p>
          </div>
          
          {/* Pulsante Liquid Glass Mini */}
          {item.url && (
            <a 
              href={item.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-glass" // Uso le tue classi CSS
              style={{
                padding: '8px 16px', // Versione più compatta del tuo .btn standard
                fontSize: '0.7rem',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                gap: '6px'
              }}
            >
              <span>Sito</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.5 3H8.5V8M8.5 3L3.5 8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          )}
        </div>
      </div>
    </ScrollReveal>
  )
}

export default function Testimonianze() {
  return (
    <>
      <AmbientBg orbs={[
        { width: 650, height: 650, top: '-5%', right: '-10%', color: 'rgba(232,213,176,0.05)' },
        { width: 400, height: 400, bottom: '5%', left: '-5%', color: 'rgba(180,160,120,0.04)' },
      ]} />

      {/* Hero */}
      <section style={{ minHeight: '50vh', display: 'flex', alignItems: 'flex-end', padding: 'clamp(120px,14vw,200px) clamp(20px,5vw,80px) clamp(60px,6vw,80px)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}>
          <motion.p className="eyebrow" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} style={{ marginBottom: 20 }}>
            {testiHeroContent.eyebrow}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1, ease: [0.16,1,0.3,1] }} style={{ maxWidth: 720 }}>
            {testiHeroContent.title}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }} style={{ maxWidth: 460, marginTop: 24, fontSize: '1.05rem' }}>
            {testiHeroContent.sub}
          </motion.p>
        </div>
      </section>

      {/* Testimonials grid */}
      <section style={{ padding: '0 clamp(20px,5vw,80px) clamp(80px,10vw,120px)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: 24,
            alignItems: 'start',
          }}>
            {testiContent.map((item, i) => (
              <TestiCard key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Sezione Motivazionale */}
      <section style={{ padding: 'clamp(80px,12vw,140px) clamp(20px,5vw,80px)', textAlign: 'center' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <ScrollReveal delay={0.1}>
            <div style={{ marginBottom: 40, display: 'flex', justifyContent: 'center' }}>
               {/* Un piccolo separatore dorato sopra la frase */}
               <div style={{ width: 60, height: 1, background: 'var(--accent)', opacity: 0.3 }}></div>
            </div>
            
            <h2 
              className="text-shimmer" 
              style={{ 
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.8rem, 4.5vw, 3.5rem)', 
                lineHeight: 1.2,
                fontWeight: 700,
                letterSpacing: '-0.02em',
                marginBottom: 20
              }}
            >
              "{testiHighlight.quote}"
            </h2>
            
            <motion.p 
              className="eyebrow" 
              initial={{ opacity: 0 }} 
              whileInView={{ opacity: 0.6 }} 
              viewport={{ once: true }}
              style={{ fontSize: '0.65rem' }}
            >
              La mia filosofia.
            </motion.p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 clamp(20px,5vw,80px) clamp(80px,10vw,120px)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <ScrollReveal>
            <div className="glass-card" style={{ padding: 'clamp(40px,5vw,64px)', textAlign: 'center' }}>
              <h3 style={{ fontSize: 'clamp(1.6rem,3vw,2.4rem)', fontFamily: 'var(--font-display)', fontWeight: 700, marginBottom: 32 }}>
                {testiCtaContent.title}
              </h3>
              <Link to={testiCtaContent.href} className="btn btn-primary">{testiCtaContent.cta}</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}