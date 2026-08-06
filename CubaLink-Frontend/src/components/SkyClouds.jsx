import { useEffect, useRef } from 'react'

// Fondo animado de nubes con Canvas — dos variantes:
//  - 'day'   (default): cielo azul claro con nubes blancas (sección Vuelos)
//  - 'night': cielo azul noche con nubes de algodón azuladas (hero principal)
// El tamaño se adapta al contenedor padre (no a la ventana) y responde a resize.

const THEMES = {
  day: {
    background: 'linear-gradient(180deg, #3a8cd1 0%, #2a6595 40%, #68cbe3 75%, #ffffff 100%)',
    blur: 'blur(20px)',
    atmosOpacity: 0.4,
    cloud: {
      speedMin: 0.15, speedRange: 0.2,
      opacityMin: 0.18, opacityRange: 0.22,
      stop0: (o) => `rgba(255, 255, 255, ${o})`,
      stop1: (o) => `rgba(255, 255, 255, ${o * 0.7})`,
      stop2: (o) => `rgba(240, 245, 255, ${o * 0.25})`,
      stop3: 'rgba(255, 255, 255, 0)',
    },
    atmos: { speedMin: 0.35, speedRange: 0.4, opacityMin: 0.08, opacityRange: 0.12 },
  },
  night: {
    background: 'linear-gradient(180deg, #0b1e3a 0%, #16294d 45%, #1d3a63 75%, #274b7d 100%)',
    blur: 'blur(22px)',
    atmosOpacity: 0.35,
    cloud: {
      speedMin: 0.12, speedRange: 0.18,
      opacityMin: 0.12, opacityRange: 0.18,
      stop0: (o) => `rgba(180, 205, 235, ${o})`,
      stop1: (o) => `rgba(100, 130, 175, ${o * 0.6})`,
      stop2: (o) => `rgba(30, 50, 80, ${o * 0.2})`,
      stop3: 'rgba(10, 20, 35, 0)',
    },
    atmos: { speedMin: 0.3, speedRange: 0.35, opacityMin: 0.05, opacityRange: 0.08 },
  },
}

export default function SkyClouds({ variant = 'day', className = '' }) {
  const containerRef = useRef(null)
  const theme = THEMES[variant] || THEMES.day
  const idSuffix = variant === 'night' ? 'Night' : ''

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const canvas = container.querySelector('#cloudCanvas' + idSuffix)
    const atmosphericCanvas = container.querySelector('#atmosphericCloudCanvas' + idSuffix)
    if (!canvas || !atmosphericCanvas) return

    const ctx = canvas.getContext('2d')
    const atmosphericCtx = atmosphericCanvas.getContext('2d')

    let width, height
    let rafId

    // Ajusta el canvas al tamaño del contenedor padre (no a la ventana)
    function resizeCanvas() {
      width = canvas.width = atmosphericCanvas.width = container.clientWidth
      height = canvas.height = atmosphericCanvas.height = container.clientHeight
    }

    // Clase Nube con Gradientes Radiales (Efecto Algodón)
    class Cloud {
      constructor() {
        this.reset(true)
      }

      reset(initial = false) {
        this.x = initial ? Math.random() * width : -450
        this.y = Math.random() * (height * 0.55)
        this.speed = theme.cloud.speedMin + Math.random() * theme.cloud.speedRange
        this.scale = 0.9 + Math.random() * 1.2
        this.opacity = theme.cloud.opacityMin + Math.random() * theme.cloud.opacityRange

        this.puffs = []
        const numPuffs = 18 + Math.floor(Math.random() * 12)
        for (let i = 0; i < numPuffs; i++) {
          this.puffs.push({
            dx: (Math.random() * 220 - 110) * this.scale,
            dy: (Math.random() * 70 - 35) * this.scale,
            r: (50 + Math.random() * 55) * this.scale,
          })
        }
      }

      update() {
        this.x += this.speed
        if (this.x - 400 > width) {
          this.reset(false)
        }
      }

      draw(currentCtx) {
        currentCtx.save()

        this.puffs.forEach((puff) => {
          const puffX = this.x + puff.dx
          const puffY = this.y + puff.dy
          const r = puff.r

          const radGrad = currentCtx.createRadialGradient(puffX, puffY, 0, puffX, puffY, r)

          radGrad.addColorStop(0, theme.cloud.stop0(this.opacity))
          radGrad.addColorStop(0.4, theme.cloud.stop1(this.opacity))
          radGrad.addColorStop(0.85, theme.cloud.stop2(this.opacity))
          radGrad.addColorStop(1, theme.cloud.stop3)

          currentCtx.fillStyle = radGrad
          currentCtx.beginPath()
          currentCtx.arc(puffX, puffY, r, 0, Math.PI * 2)
          currentCtx.fill()
        })

        currentCtx.restore()
      }
    }

    class AtmosphericCloud extends Cloud {
      reset(initial = false) {
        super.reset(initial)
        this.speed = theme.atmos.speedMin + Math.random() * theme.atmos.speedRange
        this.scale = 2.2 + Math.random() * 2.0
        this.opacity = theme.atmos.opacityMin + Math.random() * theme.atmos.opacityRange
        this.y = Math.random() * (height * 0.45)
      }
    }

    resizeCanvas()
    const baseClouds = Array.from({ length: 4 }, () => new Cloud())
    const atmosphericClouds = Array.from({ length: 2 }, () => new AtmosphericCloud())

    function animate() {
      ctx.clearRect(0, 0, width, height)
      atmosphericCtx.clearRect(0, 0, width, height)

      baseClouds.forEach((cloud) => {
        cloud.update()
        cloud.draw(ctx)
      })

      atmosphericClouds.forEach((cloud) => {
        cloud.update()
        cloud.draw(atmosphericCtx)
      })

      rafId = requestAnimationFrame(animate)
    }

    animate()

    const onResize = () => resizeCanvas()
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', onResize)
    }
  }, [idSuffix, theme])

  return (
    <div
      ref={containerRef}
      className={`sky-container absolute inset-0 w-full h-full overflow-hidden pointer-events-none ${className}`}
      style={{ background: theme.background }}
      aria-hidden="true"
    >
      <canvas id={'cloudCanvas' + idSuffix} className="absolute inset-0 w-full h-full z-[1]" />
      <canvas
        id={'atmosphericCloudCanvas' + idSuffix}
        className="absolute inset-0 w-full h-full z-[2]"
        style={{ filter: theme.blur, opacity: theme.atmosOpacity }}
      />
    </div>
  )
}
