"use client"

import { motion } from "motion/react"
import ScrollReveal from "@/components/ScrollReveal"
import {
  webHeroContent,
  webServicesContent,
  webProcessContent,
  webCtaContent,
} from "@/lib/copy"
import Link from "next/link"

export default function Web() {
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
            {webHeroContent.eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8 max-w-4xl"
          >
            {webHeroContent.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-lg sm:text-xl text-text-2 font-light max-w-2xl leading-relaxed"
          >
            {webHeroContent.sub}
          </motion.p>
        </div>
      </section>

      {/* Services */}
      <section className="px-5 py-32 w-full border-b border-border">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
             <span className="text-xs uppercase tracking-widest text-[#e8d5b0] font-semibold block mb-16">
              {webServicesContent.label}
            </span>
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {webServicesContent.items.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1} y={40}>
                <div className="h-full p-10 rounded-[32px] liquid-glass hover:shadow-lg transition-shadow flex flex-col">
                  <div className="flex justify-between items-center mb-8">
                     <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-accent-dim text-accent">
                      {item.tag}
                     </span>
                     <span className="text-text-3 font-mono text-sm">0{i + 1}</span>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-text-1">
                    {item.headline}
                  </h3>
                  <p className="text-text-2 leading-relaxed font-light flex-grow mb-10">
                    {item.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {item.details.map((d, index) => (
                      <span key={index} className="px-3 py-1.5 rounded-full border border-border-subtle bg-surface text-xs font-medium text-text-2">
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-5 py-32">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-16">
           <div>
             <ScrollReveal>
               <span className="text-xs uppercase tracking-widest text-[#e8d5b0] font-semibold block mb-6">
                 {webProcessContent.label}
               </span>
               <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-text-1">
                 {webProcessContent.title}
               </h2>
             </ScrollReveal>
           </div>
           <div className="space-y-12">
             {webProcessContent.steps.map((step, i) => (
               <ScrollReveal key={i} delay={i * 0.1} y={30}>
                 <div className="flex gap-6 sm:gap-8 relative">
                   {i !== webProcessContent.steps.length - 1 && (
                     <div className="absolute left-[24px] sm:left-[32px] top-[64px] bottom-[-48px] w-[1px] bg-border-hi" />
                   )}
                   <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-border-hi bg-surface flex items-center justify-center font-mono text-sm sm:text-base font-bold text-text-2 flex-shrink-0 z-10 relative">
                     {step.n}
                   </div>
                   <div className="pt-2 sm:pt-4 pb-4">
                     <h4 className="text-xl sm:text-2xl font-bold mb-4 text-text-1">{step.label}</h4>
                     <p className="text-text-2 leading-relaxed font-light">
                       {step.desc}
                     </p>
                   </div>
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
            <div className="liquid-glass-strong rounded-[32px] p-10 sm:p-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl text-center md:text-left text-text-1">
              <h3 className="text-3xl sm:text-4xl font-bold tracking-tight max-w-md">
                {webCtaContent.title}
              </h3>
              <Link
                href={webCtaContent.href}
                className="bg-white text-bg-base px-10 py-4 rounded-full font-bold transition-transform hover:scale-105 whitespace-nowrap"
              >
                {webCtaContent.cta}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
