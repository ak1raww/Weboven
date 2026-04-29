import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CustomCursor from '../components/CustomCursor'

// Detect touch once a livello di modulo
const isTouch =
  typeof window !== 'undefined' &&
  window.matchMedia('(pointer: coarse)').matches

export default function MainLayout({ children }) {
  const { pathname } = useLocation()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  // Scroll progress bar — throttled con rAF per non saturare il
  // main thread su iOS ad ogni evento scroll
  useEffect(() => {
    const bar = document.getElementById('scroll-progress')
    if (!bar) return

    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const scrollTop = window.scrollY
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
        bar.style.width = progress + '%'
        ticking = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Cursor elements */}
      <div id="custom-cursor" />
      <div id="cursor-follower" />
      <div id="scroll-progress" />
      <div className="noise-overlay" aria-hidden />

      {/*
        Background grid decorativo.

        FIX iOS principale:
        - Su touch (iOS/Android) lo rimuoviamo completamente:
          un elemento fixed con background-image + maskImage +
          willChange su iOS Safari crea uno stacking context isolato
          che aumenta l'uso di memoria GPU e può rompere position:sticky.
          Su schermi piccoli il grid non è percepibile visivamente,
          quindi il trade-off è zero.
        - Su desktop manteniamo transform:translateZ(0) per il layer GPU,
          ma RIMUOVIAMO willChange:'transform' — su Safari willChange su
          elementi fixed è controproducente (crea un compositing context
          che impedisce ottimizzazioni interne del browser).
      */}
      {!isTouch && (
        <div
          aria-hidden
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 0,
            pointerEvents: 'none',
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
            maskImage:
              'radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 100%)',
            transform: 'translateZ(0)',
            // willChange rimosso: su Safari/iOS è controproducente su fixed
          }}
        />
      )}

      <CustomCursor />
      <Navbar />

      <main style={{ position: 'relative', zIndex: 2 }}>
        {children}
      </main>

      <Footer />
    </>
  )
}
