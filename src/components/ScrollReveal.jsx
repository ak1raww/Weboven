import { useRef } from 'react'
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

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      style={style}
    >
      {children}
    </motion.div>
  )
}
