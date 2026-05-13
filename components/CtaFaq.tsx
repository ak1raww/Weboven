"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { motion, AnimatePresence } from "motion/react"
import Link from "next/link"

const FAQ_DATA = [
  {
    q: "Che costi ha un sito web?",
    a: "Dipende dal progetto. Prima conosco la persona e le esigenze. Di sicuro non sono un'azienda che chiede 2500€ per un sito WordPress fatto con i template pre-assemblati.",
  },
  {
    q: "Quanto tempo ci vuole per realizzarlo?",
    a: "Dipende dalla complessità e dai feedback. Il progetto meno impegnativo prende una settimana; quello più complesso fino a un mese.",
  },
  {
    q: "Posso gestire il sito in autonomia?",
    a: "Assolutamente sì. Ti fornisco una guida e supporto per capire il funzionamento del sito. Se non te la senti, sono a disposizione.",
  },
  {
    q: "Ho già un sito, come facciamo?",
    a: "Se è obsoleto o malfunzionante, analizziamo i problemi e costruiamo una soluzione migliore e performante.",
  },
]

export default function CtaFaq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  return (
    <section className="max-w-6xl w-full mx-auto px-5 py-24 sm:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1.2fr] gap-12 lg:gap-20 items-start">
        {/* Left column — Clean Space CTA card */}
        <div 
          className="bg-surface/50 border border-border-subtle rounded-[32px] py-20 px-10 text-white flex flex-col justify-center items-center text-center relative overflow-hidden" 
        >
          <div className="relative z-10 w-full">
            <h2 
              className="font-bold leading-[1.1] mb-6 text-text-1 tracking-tight" 
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Hai in mente<br/>un progetto?
            </h2>
            <p className="text-lg mb-10 font-light text-text-2 max-w-md mx-auto">
              Trasformiamo le idee in strumenti di business reali.
            </p>
            <Link 
              href="/contatto"
              className="inline-block bg-white text-bg-base font-bold text-base transition-transform hover:scale-105"
              style={{ padding: "16px 40px", borderRadius: "9999px" }}
            >
              Inizia Oggi Stesso
            </Link>
          </div>
        </div>

        {/* Right column — FAQ accordion */}
        <div className="flex flex-col justify-center gap-4">
          {FAQ_DATA.map((item, index) => {
            const isActive = activeIndex === index
            return (
              <div
                key={index}
                onClick={() => setActiveIndex(isActive ? null : index)}
                className={`liquid-glass rounded-2xl py-5 px-6 cursor-pointer transition-all duration-300 relative border-none ${
                  isActive ? 'shadow-[0_4px_24px_rgba(232,213,176,0.05)]' : ''
                }`}
              >
                <div className="flex justify-between items-center font-semibold text-base text-text-1">
                  <span>{item.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                    isActive ? 'bg-accent/10 text-accent' : 'bg-surface-hi text-text-2'
                  }`}>
                    {isActive ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </div>
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 text-sm md:text-base text-text-2 font-light leading-relaxed pr-8">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
