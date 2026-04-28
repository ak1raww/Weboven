import { useEffect, useRef, useState } from 'react'

export default function ScrollReveal({ children, delay = 0, once = true, style = {} }) {
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once && ref.current) observer.unobserve(ref.current)
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -80px 0px' }
    )

    const currentRef = ref.current
    if (currentRef) observer.observe(currentRef)

    return () => {
      if (currentRef) observer.unobserve(currentRef)
    }
  }, [once])

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${isVisible ? 'in-view' : ''}`}
      style={{
        transitionDelay: `${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}