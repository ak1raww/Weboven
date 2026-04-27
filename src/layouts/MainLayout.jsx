import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CustomCursor from '../components/CustomCursor'

export default function MainLayout({ children }) {
  const { pathname } = useLocation()

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])

  // Scroll progress bar
  useEffect(() => {
    const bar = document.getElementById('scroll-progress')
    if (!bar) return
    const onScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      bar.style.width = progress + '%'
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
        Background grid — applied globally on every page.
        Positioned fixed so it covers the whole viewport regardless of scroll.
        pointer-events:none and z-index:0 so it never interferes with content.
        
        FIX for Safari performance: transform:translateZ(0) forces this layer
        onto the GPU compositing stack so it doesn't trigger repaints on scroll.
      */}
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
          // GPU compositing hint — critical for Safari not to repaint this on every scroll frame
          transform: 'translateZ(0)',
          willChange: 'transform',
        }}
      />

      <CustomCursor />
      <Navbar />

      <main style={{ position: 'relative', zIndex: 2 }}>
        {children}
      </main>

      <Footer />
    </>
  )
}
