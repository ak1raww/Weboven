"use client"

import { Menu, X, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion"

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Servizi Web", href: "/web" },
  { label: "Social", href: "/social" },
  { label: "Il Metodo", href: "/metodo" },
  { label: "Testimonianze", href: "/testimonianze" },
]

function HamburgerButton({ open, onClick, scrolled }: { open: boolean; scrolled: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300 z-50 ${scrolled ? 'liquid-glass' : ''}`}
      style={!scrolled ? { backgroundColor: open ? "rgba(0,0,0,0.8)" : "rgba(255,255,255,0.1)" } : {}}
      aria-label="Toggle menu"
    >
      <span
        className="absolute transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]"
        style={{ opacity: open ? 0 : 1, transform: open ? "rotate(-90deg) scale(0.5)" : "rotate(0deg) scale(1)" }}
      >
        <Menu size={20} color="white" strokeWidth={1.5} />
      </span>
      <span
        className="absolute transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)]"
        style={{ opacity: open ? 1 : 0, transform: open ? "rotate(0deg) scale(1)" : "rotate(90deg) scale(0.5)" }}
      >
        <X size={20} color="white" strokeWidth={1.5} />
      </span>
    </button>
  )
}

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  return (
    <>
      <div
        className="fixed inset-0 z-40 lg:hidden transition-all duration-500"
        style={{
          backdropFilter: open ? "blur(12px)" : "blur(0px)",
          backgroundColor: open ? "rgba(0,0,0,0.6)" : "rgba(0,0,0,0)",
          pointerEvents: open ? "auto" : "none",
        }}
        onClick={onClose}
      />

      <div
        className="fixed top-0 left-0 right-0 z-40 lg:hidden overflow-hidden"
        style={{
          maxHeight: open ? "480px" : "0px",
          transition: "max-height 0.5s cubic-bezier(0.23, 1, 0.32, 1)",
        }}
      >
        <div
          className="pt-24 pb-6 px-5"
          style={{ backgroundColor: "rgba(8,8,8,0.97)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div className="flex flex-col gap-1">
            {NAV_ITEMS.map((item, i) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className="text-white/70 hover:text-white text-base py-3 px-3 rounded-xl hover:bg-white/5 transition-all duration-200 flex items-center justify-between group"
                style={{
                  opacity: open ? 1 : 0,
                  transform: open ? "translateY(0)" : "translateY(-8px)",
                  transition: `opacity 0.4s cubic-bezier(0.23,1,0.32,1) ${open ? (i * 50 + 80) : 0}ms, transform 0.4s cubic-bezier(0.23,1,0.32,1) ${open ? (i * 50 + 80) : 0}ms, color 0.2s, background 0.2s`,
                }}
              >
                {item.label}
                <ArrowRight size={14} className="opacity-0 group-hover:opacity-40 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" />
              </Link>
            ))}
          </div>

          <div
            className="mt-5 pt-5"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.07)",
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(-8px)",
              transition: `opacity 0.4s cubic-bezier(0.23,1,0.32,1) ${open ? 360 : 0}ms, transform 0.4s cubic-bezier(0.23,1,0.32,1) ${open ? 360 : 0}ms`,
            }}
          >
            <Link
              href="/contatto"
              onClick={onClose}
              className="inline-flex w-full justify-center items-center py-3 rounded-full text-bg-base text-sm font-medium transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: "#e8d5b0" }}
            >
              Parliamoci
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const { scrollYProgress } = useScroll()
  const clipPathValue = useTransform(scrollYProgress, [0, 1], ["100%", "0%"])
  const clipPath = useMotionTemplate`inset(0 ${clipPathValue} 0 0)`

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[60] flex items-start justify-between px-5 lg:px-10 transition-all duration-500 pointer-events-none pt-4 lg:pt-6`}
      >
        <div className="flex-1 flex pointer-events-auto">
          <Link href="/" className="group">
            <div className="transition-all duration-300 px-4 py-2 liquid-glass rounded-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <div className="relative">
                <span className="text-xl font-bold tracking-tight text-white block">Weboven</span>
                <motion.span
                  className="absolute left-0 top-0 text-xl font-bold tracking-tight text-[#e8d5b0] select-none pointer-events-none"
                  style={{ clipPath }}
                  aria-hidden="true"
                >
                  Weboven
                </motion.span>
              </div>
            </div>
          </Link>
        </div>

        <div className="hidden lg:flex items-center justify-center fixed top-0 left-1/2 -translate-x-1/2 pointer-events-auto z-[61] rounded-b-3xl">
          <div 
            className="liquid-glass border border-t-0 shadow-[0_20px_40px_rgba(0,0,0,0.4)] border-white/10 rounded-b-3xl" 
            style={{ position: 'absolute', inset: 0, zIndex: -1 }}
          />

          <div className="flex items-center gap-1 px-3 py-2 pt-3 md:px-4 md:py-2.5 md:pt-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm px-4 py-1.5 rounded-full transition-all duration-200 whitespace-nowrap text-white/80 hover:text-white hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex-1 flex justify-end items-center gap-2 pointer-events-auto">
          <HamburgerButton open={open} scrolled={scrolled} onClick={() => setOpen((v) => !v)} />
          <Link
            href="/contatto"
            className="hidden lg:flex items-center justify-center text-sm font-medium px-5 py-2.5 rounded-full text-bg-base transition-all duration-300 hover:scale-105 shadow-lg bg-[#e8d5b0]"
          >
            Parliamoci
          </Link>
        </div>
      </nav>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  )
}
