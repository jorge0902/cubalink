import { useEffect, useRef, useState } from 'react'

// Contador animado que sube desde 0 hasta el valor al entrar en pantalla.
export default function AnimatedNumber({ value, duration = 1200, className = '' }) {
  const [display, setDisplay] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true)
          obs.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!started || typeof value !== 'number' || value % 1 !== 0) return
    let raf
    const start = performance.now()
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay(Math.round(value * eased))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [started, value, duration])

  const final = typeof value === 'number' && value % 1 === 0 ? display : value
  return (
    <span ref={ref} className={className}>
      {started ? final : typeof value === 'number' && value % 1 === 0 ? 0 : value}
    </span>
  )
}