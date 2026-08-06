import { useEffect, useRef } from 'react'

// Fondo animado de nubes con Canvas — integrado para la sección de Vuelos.
// Dos capas: nubes base + capa atmosférica borrosa (efecto profundidad).
// El tamaño se adapta al contenedor padre (no a la ventana) y responde a resize.
export default function SkyClouds({ className = '' }) {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const canvas = container.querySelector('#cloudCanvas')
    const atmosphericCanvas = container.querySelector('#atmosphericCloudCanvas')
    if (!canvas || !atmosphericCanvas) return

    const ctx = canvas.getContext('2d')
    const atmosphericCtx = atmosphericCanvas.getContext('2d')

    let width, height
    let rafId

    // Ajusta el canvas al tamaño del contenedor de vuelos (no a la ventana)
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
        this.speed = 0.15 + Math.random() * 0.2
        this.scale = 0.9 + Math.random() * 1.2
        this.opacity = 0.18 + Math.random() * 0.22

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

          radGrad.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`)
          radGrad.addColorStop(0.4, `rgba(255, 255, 255, ${this.opacity * 0.7})`)
          radGrad.addColorStop(0.85, `rgba(240, 245, 255, ${this.opacity * 0.25})`)
          radGrad.addColorStop(1, 'rgba(255, 255, 255, 0)')

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
        this.speed = 0.35 + Math.random() * 0.4
        this.scale = 2.2 + Math.random() * 2.0
        this.opacity = 0.08 + Math.random() * 0.12
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
  }, [])

  return (
    <div
      ref={containerRef}
      className={`sky-container absolute inset-0 w-full h-full overflow-hidden pointer-events-none ${className}`}
      style={{ background: 'linear-gradient(180deg, #3a8cd1 0%, #2a6595 40%, #68cbe3 75%, #ffffff 100%)' }}
      aria-hidden="true"
    >
      <canvas id="cloudCanvas" className="absolute inset-0 w-full h-full z-[1]" />
      <canvas
        id="atmosphericCloudCanvas"
        className="absolute inset-0 w-full h-full z-[2] opacity-40"
        style={{ filter: 'blur(20px)' }}
      />
    </div>
  )
}
