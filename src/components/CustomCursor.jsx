import { useEffect } from 'react'

export default function CustomCursor() {
  useEffect(() => {
    // FIX: Don't run custom cursor on touch/pointer:coarse devices (iOS Safari, Android).
    // On touch devices there's no mousemove, so the cursor divs stay frozen at 0,0 top-left.
    // FIX: Only use pointer:coarse to detect touch devices.
    // navigator.maxTouchPoints > 0 false-positives on Firefox desktop (reports 1),
    // and 'ontouchstart' in window can also be true on some desktop Firefox builds.
    // pointer:coarse is the only reliable signal that the primary input is a finger.
    const isTouch = window.matchMedia('(pointer: coarse)').matches

    const dot = document.getElementById('custom-cursor')
    const ring = document.getElementById('cursor-follower')
    if (!dot || !ring) return

    if (isTouch) {
      // Hide cursor elements entirely on touch devices
      dot.style.display = 'none'
      ring.style.display = 'none'
      return
    }

    // Also hide until first mousemove so cursor doesn't flash at 0,0 on load
    dot.style.opacity = '0'
    ring.style.opacity = '0'

    let mx = 0, my = 0, rx = 0, ry = 0
    let raf
    let hasMovedOnce = false

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      dot.style.left = mx + 'px'
      dot.style.top = my + 'px'

      if (!hasMovedOnce) {
        // Snap ring to cursor position on first move so it doesn't slide in from 0,0
        rx = mx
        ry = my
        dot.style.opacity = '1'
        ring.style.opacity = '1'
        hasMovedOnce = true
      }
    }

    const lerp = (a, b, t) => a + (b - a) * t

    const animate = () => {
      rx = lerp(rx, mx, 0.12)
      ry = lerp(ry, my, 0.12)
      ring.style.left = rx + 'px'
      ring.style.top = ry + 'px'
      raf = requestAnimationFrame(animate)
    }

    const onEnter = () => {
      ring.style.width = '60px'
      ring.style.height = '60px'
      ring.style.borderColor = 'rgba(232,213,176,0.5)'
      dot.style.opacity = '0.5'
    }

    const onLeave = () => {
      ring.style.width = '36px'
      ring.style.height = '36px'
      ring.style.borderColor = 'rgba(232,213,176,0.3)'
      dot.style.opacity = '1'
    }

    document.addEventListener('mousemove', onMove)
    document.querySelectorAll('a, button, .btn, .glass-card').forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    raf = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return null
}
