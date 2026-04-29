import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

// Detect touch once — niente matchMedia ad ogni render
const isTouch =
  typeof window !== 'undefined' &&
  window.matchMedia('(pointer: coarse)').matches

export default function ScrollReveal({
  children,
  y = 40,
  delay = 0,
  duration = 0.8,
  once = true,
  style = {},
}) {
  const ref = useRef(null)
  const inView = useInView(ref, {
    once,
    // Su iOS usiamo margin 0 invece di -80px:
    // il margine negativo forza il browser a calcolare
    // l'intersezione in anticipo, utile su desktop ma
    // inutile su touch dove preferiamo ridurre il lavoro
    margin: isTouch ? '0px' : '-80px 0px',
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: isTouch ? 20 : y }} // Meno spostamento su iOS = animazione più leggera
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: isTouch ? 0.5 : duration, // Più veloce su iOS
        delay: isTouch ? delay * 0.5 : delay, // Stagger ridotto su touch
        ease: [0.16, 1, 0.3, 1],
      }}
      style={style}
    >
      {children}
    </motion.div>
  )
}
