"use client"

import { motion } from "motion/react"
import ScrollReveal from "@/components/ScrollReveal"
import {
  contattoHeroContent,
  contattoCanaliContent,
  contattoFaqContent,
} from "@/lib/copy"
import CtaFaq from "@/components/CtaFaq"

export default function Contatto() {
  return (
    <div className="w-full relative z-10 min-h-screen pt-32">
      {/* Hero */}
      <section className="px-5 py-20 pb-32">
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-xs uppercase tracking-widest text-accent font-semibold mb-6"
          >
            {contattoHeroContent.eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-7xl font-bold tracking-tight mb-8"
          >
            {contattoHeroContent.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-lg sm:text-xl text-text-2 font-light max-w-2xl leading-relaxed"
          >
            {contattoHeroContent.sub}
          </motion.p>
        </div>
      </section>

      {/* Channels */}
      <section className="px-5 pb-32">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <span className="text-xs uppercase tracking-widest text-[#e8d5b0] font-semibold block mb-8">
              {contattoCanaliContent.label}
            </span>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contattoCanaliContent.items.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1} y={40}>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className={`block h-full p-8 rounded-3xl transition-all hover:-translate-y-1 ${
                    item.primary
                      ? "liquid-glass-strong text-white border border-accent/20 shadow-xl"
                      : "liquid-glass text-text-1"
                  }`}
                >
                  <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-6 ${item.primary ? 'bg-accent/20 text-accent' : 'bg-surface-hi text-text-2'}`}>
                    {item.tag}
                  </span>
                  <p className={`text-base leading-relaxed mb-8 ${item.primary ? 'text-text-1' : 'text-text-2'}`}>
                    {item.desc}
                  </p>
                  <div className={`inline-flex items-center text-sm font-semibold ${item.primary ? 'text-accent' : 'text-text-1'}`}>
                    {item.cta}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="ml-2">
                      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaFaq />
    </div>
  )
}
