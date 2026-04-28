import { useOnScreen } from '../hooks/useOnScreen'

export default function ScrollReveal({ children, y = 40, delay = 0, once = true, style = {} }) {
  const [ref, isVisible] = useOnScreen({ threshold: 0.1, rootMargin: '0px 0px -80px 0px' })

  const computedStyle = {
    opacity: 0,
    transform: `translateY(${y}px)`,
    transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)`,
    transitionDelay: `${delay}s`,
    ...style
  }

  if (isVisible) {
    computedStyle.opacity = 1
    computedStyle.transform = 'translateY(0)'
  }

  return (
    <div ref={ref} style={computedStyle}>
      {children}
    </div>
  )
}