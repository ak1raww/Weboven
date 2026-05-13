"use client"

import { motion } from "motion/react"
import { Eye, Target, Zap, Cpu } from "lucide-react"
import ScrollReveal from "@/components/ScrollReveal"
import {
  metodoHeroContent,
  metodoManifestoContent,
  metodoValoriContent,
  metodoCtaContent,
} from "@/lib/copy"
import Link from "next/link"

const ICON_MAP: Record<string, React.ReactNode> = {
  Eye: <Eye size={28} strokeWidth={1.5} />,
  Target: <Target size={28} strokeWidth={1.5} />,
  Zap: <Zap size={28} strokeWidth={1.5} />,
  Cpu: <Cpu size={28} strokeWidth={1.5} />,
}

export default function Metodo() {
  return (
    <div className="w-full relative z-10 min-h-screen pt-32">
      {/* Hero */}
      <section className="px-5 py-20 pb-32">
        <div className="max-w-5xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-xs uppercase tracking-widest text-[#e8d5b0] font-semibold mb-6"
          >
            {metodoHeroContent.eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8 max-w-4xl"
          >
            {metodoHeroContent.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-lg sm:text-xl text-text-2 font-light max-w-2xl leading-relaxed"
          >
            {metodoHeroContent.sub}
          </motion.p>
        </div>
      </section>

      {/* Manifesto */}
      <section className="px-5 py-32 border-b border-border">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <span className="text-xs uppercase tracking-widest text-[#e8d5b0] font-semibold block mb-16">
              {metodoManifestoContent.label}
            </span>
          </ScrollReveal>
          <div className="space-y-12 sm:space-y-20">
            {metodoManifestoContent.blocks.map((block, i) => (
              <ScrollReveal key={i} delay={i * 0.1} y={40}>
                <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-4 sm:gap-16 items-start">
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-1">
                    {block.title}
                  </h3>
                  <p className="text-lg text-text-2 leading-relaxed font-light">
                    {block.body}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Valori */}
      <section className="px-5 py-32">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <span className="text-xs uppercase tracking-widest text-[#e8d5b0] font-semibold block mb-16">
              {metodoValoriContent.label}
            </span>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {metodoValoriContent.items.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1} y={30}>
                <div className="p-10 rounded-3xl liquid-glass">
                  <div className="w-14 h-14 rounded-2xl bg-accent-dim flex items-center justify-center text-accent mb-8">
                    {ICON_MAP[item.icon as string]}
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-text-1">{item.label}</h4>
                  <p className="text-text-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-32">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <div className="liquid-glass-strong rounded-[32px] p-10 sm:p-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-2xl">
              <div>
                <h3 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-text-1">
                  {metodoCtaContent.title}
                </h3>
                <p className="text-lg text-text-2">
                  {metodoCtaContent.sub}
                </p>
              </div>
              <Link
                href={metodoCtaContent.href}
                className="bg-white text-bg-base px-8 py-4 rounded-full font-bold transition-transform hover:scale-105 whitespace-nowrap"
              >
                {metodoCtaContent.cta}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
