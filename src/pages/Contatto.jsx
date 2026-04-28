import { useState } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import AmbientBg from '../components/AmbientBg'
import {
  contattoHeroContent,
  contattoCanaliContent,
  contattoFaqContent,
} from '../data/contatto.copy'

function CanalCard({ item, index }) {
  return (
    <ScrollReveal delay={index * 0.12} y={40}>
      <a
        href={item.href}
        target={item.href.startsWith('http') ? '_blank' : undefined}
        rel="noreferrer"
        className="glass-card"
        style={{
          display: 'block',
          padding: 'clamp(28px,3.5vw,44px)',
          textDecoration: 'none',
          borderColor: item.primary ? 'rgba(232,213,176,0.25)' : undefined,
        }}
      >
        <div style={{
          width: 48, height: 48, borderRadius: 12,
          background: item.primary ? 'var(--accent-dim)' : 'var(--surface-hi)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: '1rem', color: item.primary ? 'var(--accent)' : 'var(--text-2)',
          marginBottom: 20,
        }}>
          {item.icon}
        </div>
        <span className="chip" style={{ marginBottom: 12 }}>{item.tag}</span>
        <p style={{ fontSize: '0.93rem', lineHeight: 1.75, marginTop: 12, marginBottom: 24 }}>
          {item.desc}
        </p>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          color: item.primary ? 'var(--accent)' : 'var(--text-2)',
          fontSize: '0.85rem', fontWeight: 500,
        }}>
          {item.cta}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </a>
    </ScrollReveal>
  )
}

function FaqItem({ item, index }) {
  return (
    <ScrollReveal delay={index * 0.08} y={20}>
      <div className="faq-item-hover">
        <div className="faq-question-hover">
          <span>{item.q}</span>
          <span className="faq-icon-hover">+</span>
        </div>
        <div className="faq-answer-hover">
          <p>{item.a}</p>
        </div>
      </div>
    </ScrollReveal>
  )
}

export default function Contatto() {
  return (
    <>
      <AmbientBg orbs={[
        { width: 600, height: 600, top: '0%', right: '-10%', color: 'rgba(232,213,176,0.06)' },
        { width: 400, height: 400, bottom: '10%', left: '-10%', color: 'rgba(180,160,120,0.04)' },
      ]} />

      {/* Hero */}
      <section style={{ minHeight: '50vh', display: 'flex', alignItems: 'flex-end', padding: 'clamp(120px,14vw,200px) clamp(20px,5vw,80px) clamp(60px,6vw,80px)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}>
          <p className="eyebrow" style={{ marginBottom: 20, opacity: 0, animation: 'fadeUp 0.7s forwards' }}>
            {contattoHeroContent.eyebrow}
          </p>
          <h1 style={{ opacity: 0, animation: 'fadeUp 0.9s 0.1s forwards' }}>
            {contattoHeroContent.title}
          </h1>
          <p style={{ maxWidth: 500, marginTop: 24, fontSize: '1.05rem', opacity: 0, animation: 'fadeUp 0.8s 0.25s forwards' }}>
            {contattoHeroContent.sub}
          </p>
        </div>
      </section>

      {/* Canali */}
      <section style={{ padding: '0 clamp(20px,5vw,80px) clamp(80px,10vw,120px)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <ScrollReveal>
            <div className="section-label"><span className="eyebrow">{contattoCanaliContent.label}</span></div>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24, marginTop: 16 }}>
            {contattoCanaliContent.items.map((item, i) => (
              <CanalCard key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '0 clamp(20px,5vw,80px) clamp(80px,10vw,120px)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.4fr)', gap: 'clamp(40px,6vw,100px)' }}>
          <ScrollReveal>
            <div className="section-label"><span className="eyebrow">{contattoFaqContent.label}</span></div>
            <h2 style={{ marginTop: 4, fontSize: 'clamp(1.8rem,3vw,2.8rem)' }}>Hai delle domande?</h2>
          </ScrollReveal>
          <div>
            {contattoFaqContent.items.map((item, i) => (
              <FaqItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){ section > div { grid-template-columns: 1fr !important; } }`}</style>
      </section>
    </>
  )
}