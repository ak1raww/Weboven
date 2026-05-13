"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { Facebook, Instagram, Music2, Twitter, Youtube } from "lucide-react"

function LogoIcon() {
  return (
    <div className="w-8 h-8 bg-accent rounded-[8px] flex items-center justify-center flex-shrink-0">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 20C4 20 4 14 10 10C16 6 20 4 20 4C20 4 18 8 14 14C10 20 4 20 4 20Z" fill="var(--bg-base)" />
        <path d="M4 20L10 14" stroke="var(--bg-base)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  )
}

function FooterCard() {
  return (
    <div className="w-full max-w-6xl mx-auto px-5 mb-[16vw] md:mb-[18vw] lg:mb-24 relative z-20 mt-10 md:mt-20">
      {/* Outer Body */}
      <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-[32px] md:rounded-[48px] shadow-[0_10px_30px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col pt-12 md:pt-16 pb-6 md:pb-8">
        <div className="px-6 md:px-16 lg:px-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 lg:gap-12 text-center md:text-left">
            
            {/* Brand Info */}
            <div className="col-span-2 space-y-6 md:space-y-8 flex flex-col items-center md:items-start">
              <div className="flex items-center gap-2.5">
                <LogoIcon />
                <span className="text-[26px] font-bold tracking-tight text-text-1">weboven</span>
              </div>
              <p className="text-text-2 leading-relaxed text-[15px] md:text-[16px] font-normal max-w-[320px] mx-auto md:mx-0">
                Esperienze digitali che lasciano il segno. Non faccio siti web, costruisco strumenti che lavorano per te mentre dormi.
              </p>
              <div className="flex justify-center md:justify-start gap-4">
                {[
                  { Icon: Instagram, href: "https://instagram.com/surradiant" },
                  { Icon: Twitter, href: "#" },
                  { Icon: Youtube, href: "#" },
                ].map(({ Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    className="w-[44px] h-[44px] flex items-center justify-center rounded-xl bg-surface text-text-2 hover:bg-surface-hi hover:text-text-1 transition-all active:scale-95 group"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Product Column */}
            <div className="col-span-1 space-y-4 md:space-y-6 flex flex-col items-center md:items-start">
              <h4 className="text-[13px] md:text-[14px] font-medium text-text-3 uppercase tracking-wider">Servizi</h4>
              <ul className="space-y-3 md:space-y-4 flex flex-col items-center md:items-start">
                {["Siti Vetrina", "E-Commerce", "Web App", "Gestione Social"].map((link) => (
                  <li key={link}>
                    <a href="/web" className="text-[14px] md:text-[15px] font-medium text-text-2 hover:text-accent transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Science Column */}
            <div className="col-span-1 space-y-4 md:space-y-6 flex flex-col items-center md:items-start">
              <h4 className="text-[13px] md:text-[14px] font-medium text-text-3 uppercase tracking-wider">Esplora</h4>
              <ul className="space-y-3 md:space-y-4 flex flex-col items-center md:items-start">
                {["Il Metodo", "Testimonianze", "Contatti", "Progetti"].map((link) => (
                  <li key={link}>
                    <a href="/metodo" className="text-[14px] md:text-[15px] font-medium text-text-2 hover:text-accent transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="px-6 md:px-16 lg:px-20 mt-12 md:mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6 text-[14px] md:text-[15px]">
          <p className="text-text-3 font-medium text-center md:text-left">© 2026 Weboven. Diritti Riservati.</p>
          <div className="flex items-center gap-6">
            <a href="/contatto" className="hidden md:inline-flex items-center justify-center px-6 py-2 rounded-full text-bg-base bg-[#e8d5b0] hover:scale-105 transition-all font-semibold">Parliamoci</a>
          </div>
        </div>
      </div>
    </div>
  )
}

function GlassText() {
  return (
    <div className="absolute bottom-0 inset-x-0 w-full flex items-center justify-center select-none overflow-hidden z-0 pointer-events-none px-4">
      <svg className="absolute w-0 h-0" aria-hidden="true" focusable="false">
        <defs>
          <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000000" floodOpacity="0.25" result="outer-shadow"/>
            <feComponentTransfer in="SourceAlpha" result="alpha"><feFuncA type="linear" slope="1" /></feComponentTransfer>
            <feOffset in="alpha" dx="0" dy="4" result="offset-white" />
            <feGaussianBlur in="offset-white" stdDeviation="4" result="blur-white" />
            <feComposite in="alpha" in2="blur-white" operator="out" result="inner-white-mask" />
            <feFlood floodColor="#27272a" floodOpacity="0.2" result="white-fill" />
            <feComposite in="white-fill" in2="inner-white-mask" operator="in" result="inner-white-final" />
            <feGaussianBlur in="alpha" stdDeviation="6" result="blur-black" />
            <feComposite in="alpha" in2="blur-black" operator="out" result="inner-black-mask" />
            <feFlood floodColor="#000000" floodOpacity="0.5" result="black-fill" />
            <feComposite in="black-fill" in2="inner-black-mask" operator="in" result="inner-black-final" />
            <feMerge>
              <feMergeNode in="outer-shadow" />
              <feMergeNode in="SourceGraphic" />
              <feMergeNode in="inner-white-final" />
              <feMergeNode in="inner-black-final" />
            </feMerge>
          </filter>
        </defs>
      </svg>
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }} 
        whileInView={{ opacity: 1, scale: 1 }} 
        viewport={{ once: true, margin: "100px" }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }} 
        className="relative z-[5] w-full text-center"
      >
        <h1 
          className="text-[14vw] sm:text-[18vw] md:text-[22vw] lg:text-[24vw] font-bold tracking-tight leading-none select-none text-[#e8d5b0]/20 pb-0 w-full" 
          style={{ filter: 'url(#glass-effect)' }}
        >
          weboven
        </h1>
      </motion.div>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center gap-0 pt-0 overflow-hidden relative z-10 min-h-[460px] md:min-h-[500px]">
      <GlassText />
      <FooterCard />
    </footer>
  )
}
