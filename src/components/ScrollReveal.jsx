import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.4,
  once = true,
  style = {},
  className = ""
}) {
  const ref = useRef(null)
  
  // Mobile detection to eliminate heavy runtime animations on mobile
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' 
      ? window.innerWidth <= 768 || /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)
      : false
  )

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || /iPhone|iPad|iPod|Android/i.test(navigator.userAgent))
    }
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Avoid running useInView hook on mobile at all if possible, but hooks can't be conditional.
  // We'll pass a dummy ref if mobile to minimize work, or just use it.
  const inView = useInView(ref, { once, margin: '-50px 0px' })

  const [startVisible, setStartVisible] = useState(false)
  useEffect(() => {
    if (!ref.current || isMobile) return
    const rect = ref.current.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setStartVisible(true)
    }
  }, [isMobile])

  // Return static children on mobile
  if (isMobile) {
    return <div style={style} className={className}>{children}</div>
  }

  return (
    <motion.div
      ref={ref}
      initial={startVisible ? { opacity: 1 } : { opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration, delay, ease: 'easeOut' }}
      style={style}
      className={className}
    >
      {children}
    </motion.div>
  )
}
