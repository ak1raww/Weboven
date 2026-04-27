import { useEffect } from 'react'

export default function CustomCursor() {
  useEffect(() => {
    const dot = document.getElementById('custom-cursor')
    const ring = document.getElementById('cursor-follower')
    if (!dot || !ring) return

    let mx = 0, my = 0, rx = 0, ry = 0
    let raf

    const onMove = (e) => {
      mx = e.clientX
      my = e.clientY
      dot.style.left = mx + 'px'
      dot.style.top = my + 'px'
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
