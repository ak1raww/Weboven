"use client"

import { motion } from "motion/react"
import Link from "next/link"
import ScrollReveal from "@/components/ScrollReveal"
import CtaFaq from "@/components/CtaFaq"
import {
  heroContent,
  manifestoContent,
  servicesPreviewContent,
  quoteContent,
} from "@/lib/copy"

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-[100dvh] flex flex-col items-center pt-32 pb-8 px-5">
        <div className="relative z-10 w-full flex-1 max-w-5xl mx-auto flex flex-col items-center justify-center sm:items-start text-center sm:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#e8d5b0] uppercase tracking-widest text-sm mb-6 font-semibold"
          >
            {heroContent.eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-white font-bold leading-[1.05] tracking-tight mb-4"
            style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)" }}
          >
            <span className="block">{heroContent.name}</span>
            <span className="block">{heroContent.tagline}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-text-1 text-lg sm:text-xl max-w-xl font-light mb-10"
          >
            {heroContent.sub}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link
              href={heroContent.cta.primary.href}
              className="liquid-glass-strong text-white px-8 py-3.5 rounded-full font-semibold transition-transform hover:scale-105"
            >
              {heroContent.cta.primary.label}
            </Link>
            <Link
              href={heroContent.cta.secondary.href}
              className="liquid-glass text-text-1 px-8 py-3.5 rounded-full font-semibold transition-all hover:bg-white/10"
            >
              {heroContent.cta.secondary.label}
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="relative flex flex-col items-center gap-3 z-10 mt-8"
        >
          <span className="text-text-3 text-[10px] uppercase tracking-widest font-semibold">Scorri</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-10 bg-gradient-to-b from-accent to-transparent"
          />
        </motion.div>
      </section>

      <div className="z-10 relative">
        {/* Manifesto Section */}
        <section className="py-24 sm:py-32 px-5 w-full">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-12 sm:gap-20">
            <ScrollReveal>
              <h2 className="text-xs uppercase tracking-widest text-[#e8d5b0] font-semibold mb-4 sm:mb-0">
                {manifestoContent.label}
              </h2>
            </ScrollReveal>
            <div>
              <ScrollReveal y={40}>
                <h3 className="text-3xl sm:text-5xl font-bold leading-tight tracking-tight mb-8">
                  {manifestoContent.title}
                </h3>
              </ScrollReveal>
              <div className="space-y-6 text-lg sm:text-xl text-text-2 font-light leading-relaxed">
                {manifestoContent.body.map((text, i) => (
                  <ScrollReveal key={i} delay={i * 0.1}>
                    <p>{text}</p>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview Section */}
        <section className="py-24 px-5 w-full">
          <div className="max-w-6xl mx-auto">
            <ScrollReveal>
              <span className="text-xs uppercase tracking-widest text-[#e8d5b0] font-semibold block mb-4">
                {servicesPreviewContent.label}
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-16 max-w-2xl text-text-1">
                {servicesPreviewContent.title}
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {servicesPreviewContent.items.map((item, i) => (
                <ScrollReveal key={item.id} delay={i * 0.1} y={40}>
                  <Link
                    href={item.href}
                    className="block h-full p-8 sm:p-12 rounded-[32px] liquid-glass transition-all hover:shadow-xl hover:-translate-y-1"
                  >
                    <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-accent-glow text-accent mb-6">
                      {item.tag}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-text-1">{item.headline}</h3>
                    <p className="text-text-2 mb-10 leading-relaxed font-light">
                      {item.desc}
                    </p>
                    <div className="inline-flex items-center text-sm font-semibold text-accent">
                      {item.cta}
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="ml-2">
                        <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Break */}
        <section className="py-24 px-5">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <blockquote className="text-3xl sm:text-4xl lg:text-5xl font-bold italic tracking-tight leading-snug text-text-1 max-w-3xl mx-auto">
                &quot;{quoteContent.text}&quot;
              </blockquote>
              <div className="mt-8 text-sm font-medium text-text-3 tracking-widest uppercase">
                {quoteContent.author}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Animated Gradient CTA & FAQ */}
        <CtaFaq />

      </div>
    </div>
  )
}
