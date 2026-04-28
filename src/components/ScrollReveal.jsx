import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

export default function ScrollReveal({
  children,
  y = 40,
  delay = 0,
  duration = 0.8,
  once = true,
  style = {},
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once, margin: '-80px 0px' })

  // If the element is already in the viewport when JS runs (above-the-fold content),
  // skip the hidden initial state entirely — no flash of invisible content.
  const [startVisible, setStartVisible] = useState(false)
  useEffect(() => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setStartVisible(true)
    }
  }, [])

  return (
    <motion.div
      ref={ref}
      initial={startVisible ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      style={style}
    >
      {children}
    </motion.div>
  )
}
