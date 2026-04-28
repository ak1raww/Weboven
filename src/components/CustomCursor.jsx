import { useEffect } from 'react'

export default function CustomCursor() {
  useEffect(() => {
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (isTouch) return // do nothing on a touch device

    const dot = document.getElementById('custom-cursor')
    const ring = document.getElementById('cursor-follower')
    if (!dot || !ring) return

    // Start hidden, reveal on first mousemove
    dot.style.opacity = '0'
    ring.style.opacity = '0'
    document.documentElement.style.cursor = 'none'

    let mx = 0, my = 0, rx = 0, ry = 0
    let raf
    let hasMovedOnce = false

    const onMove = (e) => {
      const overScrollbar = e.clientX >= document.documentElement.clientWidth
      if (overScrollbar) {
        dot.style.opacity = '0'
        ring.style.opacity = '0'
        document.documentElement.style.cursor = ''
        return
      }

      mx = e.clientX
      my = e.clientY
      dot.style.left = mx + 'px'
      dot.style.top = my + 'px'

      if (!hasMovedOnce) {
        rx = mx
        ry = my
        hasMovedOnce = true
      }

      dot.style.opacity = '1'
      ring.style.opacity = '1'
      document.documentElement.style.cursor = 'none'
    }

    const onMouseLeave = () => {
      dot.style.opacity = '0'
      ring.style.opacity = '0'
      document.documentElement.style.cursor = ''
    }

    const onMouseEnter = () => {
      document.documentElement.style.cursor = 'none'
    }

    const lerp = (a, b, t) => a + (b - a) * t

    const animate = () => {
      rx = lerp(rx, mx, 0.12)
      ry = lerp(ry, my, 0.12)
      ring.style.left = rx + 'px'
      ring.style.top = ry + 'px'
      raf = requestAnimationFrame(animate)
    }

    const onEnterInteractive = () => {
      ring.style.width = '60px'
      ring.style.height = '60px'
      ring.style.borderColor = 'rgba(232,213,176,0.5)'
      dot.style.opacity = '0.5'
    }

    const onLeaveInteractive = () => {
      ring.style.width = '36px'
      ring.style.height = '36px'
      ring.style.borderColor = 'rgba(232,213,176,0.3)'
      dot.style.opacity = '1'
    }

    document.addEventListener('mousemove', onMove)
    document.documentElement.addEventListener('mouseleave', onMouseLeave)
    document.documentElement.addEventListener('mouseenter', onMouseEnter)
    document.querySelectorAll('a, button, .btn, .glass-card').forEach(el => {
      el.addEventListener('mouseenter', onEnterInteractive)
      el.addEventListener('mouseleave', onLeaveInteractive)
    })

    raf = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.documentElement.removeEventListener('mouseleave', onMouseLeave)
      document.documentElement.removeEventListener('mouseenter', onMouseEnter)
      document.documentElement.style.cursor = ''
      cancelAnimationFrame(raf)
    }
  }, [])

  return null
}