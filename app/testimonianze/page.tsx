"use client"

import { motion } from "motion/react"
import ScrollReveal from "@/components/ScrollReveal"
import {
  testiHeroContent,
  testiContent,
  testiHighlight,
  testiCtaContent,
} from "@/lib/copy"
import Link from "next/link"

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1 mb-6">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 14 14" fill="var(--color-accent)">
          <path d="M7 1l1.545 3.13 3.455.503-2.5 2.437.59 3.43L7 8.885 3.91 10.5l.59-3.43L2 4.633l3.455-.503z"/>
        </svg>
      ))}
    </div>
  )
}

export default function Testimonianze() {
  return (
    <div className="w-full relative z-10 min-h-screen pt-32">
      {/* Hero */}
      <section className="px-5 py-20 pb-32">
        <div className="max-w-5xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-xs uppercase tracking-widest text-[#e8d5b0] font-semibold mb-6"
          >
            {testiHeroContent.eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8 text-text-1"
          >
            {testiHeroContent.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-lg sm:text-xl text-text-2 font-light max-w-2xl mx-auto leading-relaxed"
          >
            {testiHeroContent.sub}
          </motion.p>
        </div>
      </section>

      {/* Grid */}
      <section className="px-5 py-24 w-full">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testiContent.map((item, i) => (
              <ScrollReveal key={item.id} delay={i * 0.1} y={40}>
                <div className="h-full p-8 md:p-10 rounded-[32px] liquid-glass flex flex-col justify-between hover:-translate-y-1 transition-transform">
                  <div>
                    <Stars count={item.stars} />
                    <blockquote className="text-text-1 font-light leading-relaxed italic mb-8">
                      &quot;{item.quote}&quot;
                    </blockquote>
                  </div>
                  <div className="pt-6 border-t border-border flex justify-between items-center">
                    <div>
                      <p className="font-bold text-sm text-text-1 mb-1">{item.author}</p>
                      <p className="text-xs text-text-3 font-medium tracking-wide">{item.role}</p>
                    </div>
                    {item.url && (
                      <a 
                        href={item.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-surface-hi text-text-2 hover:text-accent hover:bg-accent/10 transition-colors"
                      >
                        <svg width="14" height="14" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3.5 3H8.5V8M8.5 3L3.5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Motivational Section */}
      <section className="px-5 py-32 text-center">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="flex justify-center mb-10">
              <div className="w-16 h-[1px] bg-accent opacity-50" />
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-8 text-text-1">
              &quot;{testiHighlight.quote}&quot;
            </h2>
            
            <span className="text-xs uppercase tracking-widest text-text-3 font-semibold">
              La mia filosofia.
            </span>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-32">
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal>
            <div className="p-16 rounded-[40px] liquid-glass-strong text-white border border-white/5">
              <h3 className="text-4xl sm:text-5xl font-bold tracking-tight mb-12">
                {testiCtaContent.title}
              </h3>
              <Link
                href={testiCtaContent.href}
                className="inline-block bg-white text-bg-base px-10 py-4 rounded-full font-bold transition-transform hover:scale-105"
              >
                {testiCtaContent.cta}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
