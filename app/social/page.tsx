"use client"

import { motion } from "motion/react"
import ScrollReveal from "@/components/ScrollReveal"
import {
  socialHeroContent,
  socialServicesContent,
  socialPlatformsContent,
  socialCtaContent,
} from "@/lib/copy"
import Link from "next/link"

export default function Social() {
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
            {socialHeroContent.eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8 max-w-4xl"
          >
            {socialHeroContent.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-lg sm:text-xl text-text-2 font-light max-w-2xl leading-relaxed"
          >
            {socialHeroContent.sub}
          </motion.p>
        </div>
      </section>

      {/* Services */}
      <section className="px-5 py-24 w-full">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
             <span className="text-xs uppercase tracking-widest text-[#e8d5b0] font-semibold block mb-16">
              {socialServicesContent.label}
            </span>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {socialServicesContent.items.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1} y={40}>
                <div className="h-full p-10 rounded-[32px] liquid-glass hover:shadow-lg transition-shadow">
                  <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-accent/20 text-accent mb-8">
                    {item.tag}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-text-1">
                    {item.headline}
                  </h3>
                  <p className="text-text-2 leading-relaxed font-light mb-10">
                    {item.desc}
                  </p>
                  <ul className="space-y-3">
                    {item.details.map((d, index) => (
                      <li key={index} className="flex items-center gap-3 text-sm text-text-3 font-medium tracking-wide">
                         <div className="w-1.5 h-1.5 rounded-full bg-accent-dim" />
                         {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="px-5 py-32">
        <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
          <ScrollReveal>
            <span className="text-xs uppercase tracking-widest text-[#e8d5b0] font-semibold block mb-8">
              {socialPlatformsContent.label}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-16 max-w-2xl text-text-1">
              {socialPlatformsContent.title}
            </h2>
          </ScrollReveal>
          <div className="flex flex-wrap justify-center gap-4">
            {socialPlatformsContent.platforms.map((p, i) => (
              <ScrollReveal key={p} delay={i * 0.05} y={20}>
                <div className="px-6 py-3 rounded-full liquid-glass font-semibold text-text-2 text-sm md:text-base">
                  {p}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-32">
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal>
            <div className="p-16 rounded-[40px] liquid-glass-strong text-white">
              <h3 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                {socialCtaContent.title}
              </h3>
              <p className="text-xl text-text-2 mb-12 max-w-xl mx-auto font-light">
                {socialCtaContent.sub}
              </p>
              <Link
                href={socialCtaContent.href}
                className="inline-block bg-white text-bg-base px-10 py-4 rounded-full font-bold transition-transform hover:scale-105"
              >
                {socialCtaContent.cta}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
