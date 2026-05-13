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
      */}
      <div className="bg-grid-ambient" aria-hidden />

      <CustomCursor />
      <Navbar />

      <main style={{ position: 'relative', zIndex: 2 }}>
        {children}
      </main>

      <Footer />
    </>
  )
}
