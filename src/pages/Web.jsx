import { Link } from 'react-router-dom'
import ScrollReveal from '../components/ScrollReveal'
import AmbientBg from '../components/AmbientBg'
import {
  webHeroContent,
  webServicesContent,
  webProcessContent,
  webCtaContent,
} from '../data/web.copy'

function ServiceItem({ item, index }) {
  return (
    <ScrollReveal delay={index * 0.12} y={50}>
      <div className="glass-card" style={{ padding: 'clamp(32px,4vw,48px)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 12 }}>
          <span className="chip">{item.tag}</span>
          <span style={{ fontSize: '0.72rem', color: 'var(--text-3)', letterSpacing: '0.1em' }}>0{index + 1}</span>
        </div>
        <h3 style={{ marginTop: 20, marginBottom: 14, fontSize: 'clamp(1.4rem,2.5vw,1.9rem)', fontFamily: 'var(--font-display)', fontWeight: 700 }}>
          {item.headline}
        </h3>
        <p style={{ fontSize: '0.97rem', lineHeight: 1.8 }}>{item.desc}</p>

        <ul style={{ marginTop: 28, display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {item.details.map((d, i) => (
            <li key={i} style={{ listStyle: 'none', background: 'rgba(232,213,176,0.07)', border: '1px solid rgba(232,213,176,0.12)', borderRadius: 100, padding: '4px 14px', fontSize: '0.78rem', color: 'var(--text-2)' }}>
              {d}
            </li>
          ))}
        </ul>
      </div>
    </ScrollReveal>
  )
}

function ProcessStep({ step, index, total }) {
  return (
    <ScrollReveal delay={index * 0.12} y={40}>
      <div style={{ display: 'grid', gridTemplateColumns: '64px 1fr', gap: 24, alignItems: 'start' }}>
        <div style={{
          width: 64, height: 64, borderRadius: '50%',
          border: '1px solid var(--border-hi)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'var(--font-display)', fontSize: '0.85rem', color: 'var(--accent)', fontWeight: 700,
          background: 'var(--accent-glow)',
          flexShrink: 0,
        }}>
          {step.n}
        </div>
        <div style={{ paddingTop: 12 }}>
          <h4 style={{ marginBottom: 8, fontSize: '1.1rem' }}>{step.label}</h4>
          <p style={{ fontSize: '0.93rem' }}>{step.desc}</p>
          {index < total - 1 && (
            <div style={{ width: 1, height: 40, background: 'var(--border)', margin: '20px 0 0 -40px' }} />
          )}
        </div>
      </div>
    </ScrollReveal>
  )
}

export default function Web() {
  return (
    <>
      <AmbientBg orbs={[
        { width: 600, height: 600, top: '-10%', right: '-5%', color: 'rgba(232,213,176,0.05)' },
        { width: 400, height: 400, bottom: '20%', left: '-10%', color: 'rgba(180,160,120,0.04)' },
      ]} />

      {/* Hero */}
      <section style={{ minHeight: '60vh', display: 'flex', alignItems: 'flex-end', padding: 'clamp(120px,14vw,200px) clamp(20px,5vw,80px) clamp(60px,6vw,80px)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}>
          <p className="eyebrow" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} style={{ marginBottom: 20 }}>
            {webHeroContent.eyebrow}
          </p>
          <h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.1, ease: [0.16,1,0.3,1] }} style={{ maxWidth: 800 }}>
            {webHeroContent.title}
          </h1>
          <p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.25 }} style={{ maxWidth: 540, marginTop: 24, fontSize: '1.05rem' }}>
            {webHeroContent.sub}
          </p>
        </div>
      </section>

      {/* Services */}
      <section style={{ padding: '0 clamp(20px,5vw,80px) clamp(80px,10vw,120px)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <ScrollReveal>
            <div className="section-label"><span className="eyebrow">{webServicesContent.label}</span></div>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24, marginTop: 16 }}>
            {webServicesContent.items.map((item, i) => (
              <ServiceItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: '0 clamp(20px,5vw,80px) clamp(80px,10vw,120px)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.2fr)', gap: 'clamp(40px,6vw,100px)' }}>
          <ScrollReveal>
            <div className="section-label"><span className="eyebrow">{webProcessContent.label}</span></div>
            <h2 style={{ marginTop: 4 }}>{webProcessContent.title}</h2>
          </ScrollReveal>
          <div style={{ paddingTop: 8 }}>
            {webProcessContent.steps.map((step, i) => (
              <ProcessStep key={i} step={step} index={i} total={webProcessContent.steps.length} />
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){ section > div { grid-template-columns: 1fr !important; } }`}</style>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 clamp(20px,5vw,80px) clamp(80px,10vw,120px)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <ScrollReveal>
            <div className="glass-card" style={{ padding: 'clamp(40px,5vw,64px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 32 }}>
              <h3 style={{ fontSize: 'clamp(1.4rem,2.5vw,2rem)', fontFamily: 'var(--font-display)', fontWeight: 700, maxWidth: 480 }}>
                {webCtaContent.title}
              </h3>
              <Link to={webCtaContent.href} className="btn btn-primary">{webCtaContent.cta}</Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
