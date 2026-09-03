import { useEffect, useRef } from 'react'

// Fondo animado de nubes con Canvas — dos variantes:
//  - 'day'   (default): cielo azul claro con nubes blancas (sección Vuelos)
//  - 'night': cielo nocturno profundo con ESTRELLAS parpadeantes + nubes de algodón azuladas
//             (3 canvas: estrellas z-0, nubes base z-1, capa atmosférica borrosa z-2)
// El tamaño se adapta al contenedor padre (no a la ventana) y responde a resize.

const THEMES = {
  day: {
    background: 'linear-gradient(180deg, #3a8cd1 0%, #2a6595 40%, #68cbe3 75%, #ffffff 100%)',
    snow: false,
    blur: 'blur(20px)',
    atmosOpacity: 0.4,
    // Velocidad alta para mayor dinamismo en Viajes (+30% sobre el valor previo 0.21/0.28 → 0.27/0.36)
    cloud: {
      speedMin: 0.27, speedRange: 0.36,
      opacityMin: 0.18, opacityRange: 0.22,
      stop0: (o) => `rgba(255, 255, 255, ${o})`,
      stop1: (o) => `rgba(255, 255, 255, ${o * 0.7})`,
      stop2: (o) => `rgba(240, 245, 255, ${o * 0.25})`,
      stop3: 'rgba(255, 255, 255, 0)',
    },
    // Densidad −30%: menos puffs por nube (13-20 en vez de 18-29)
    puffDensity: 0.7,
    // Atmosféricas más rápidas (0.49/0.56 → 0.63/0.72)
    atmos: { speedMin: 0.63, speedRange: 0.72, opacityMin: 0.08, opacityRange: 0.12 },
  },
  night: {
    // Gradiente nocturno profundo
    background: 'linear-gradient(180deg, #050b14 0%, #0a192f 45%, #112240 80%, #1a365d 100%)',
    snow: true,
    blur: 'blur(22px)',
    atmosOpacity: 0.35,
    // Velocidad +40% sobre el valor original (0.12→0.17, rango 0.18→0.25)
    cloud: {
      speedMin: 0.17, speedRange: 0.25,
      opacityMin: 0.12, opacityRange: 0.18,
      stop0: (o) => `rgba(180, 205, 235, ${o})`,
      stop1: (o) => `rgba(100, 130, 175, ${o * 0.6})`,
      stop2: (o) => `rgba(30, 50, 80, ${o * 0.2})`,
      stop3: 'rgba(10, 20, 35, 0)',
    },
    puffDensity: 1,
    // Atmosféricas +40% (0.3→0.42, rango 0.35→0.49)
    atmos: { speedMin: 0.42, speedRange: 0.49, opacityMin: 0.05, opacityRange: 0.08 },
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

    // Capa de nieve (solo variante night) — copos cayendo con viento sutil
    const snowCanvas = theme.snow ? container.querySelector('#snowCanvas') : null
    const snowCtx = snowCanvas ? snowCanvas.getContext('2d') : null

    let width, height
    let rafId
    let snowflakes = []

    // Ajusta los canvas al tamaño del contenedor padre (no a la ventana)
    function resizeCanvas() {
      width = canvas.width = atmosphericCanvas.width = container.clientWidth
      height = canvas.height = atmosphericCanvas.height = container.clientHeight
      if (snowCanvas) {
        snowCanvas.width = width
        snowCanvas.height = height
      }
      if (theme.snow) initSnow()
    }

    // Clase Copo de Nieve — cae hacia abajo con velocidad suave y oscila con el viento
    class Snowflake {
      constructor() {
        this.reset(true)
      }

      reset(initial = false) {
        this.baseX = Math.random() * width
        // Pre-poblado: en la creación inicial los copos llenan TODO el alto (la escena
        // ya está nevando al abrir el sitio); al reciclarse reaparecen arriba
        this.y = initial ? Math.random() * height : -4 - Math.random() * 10
        // Tamaños variados entre 0.8px y 2.5px para sensación de profundidad
        this.size = Math.random() * 1.7 + 0.8
        // Opacidad entre 0.3 y 0.8 (copos lejanos tenues, cercanos brillantes)
        this.opacity = Math.random() * 0.5 + 0.3
        // Velocidad de caída suave y variada
        this.fallSpeed = Math.random() * 0.55 + 0.25
        // Viento: fase, frecuencia y amplitud propias por copo
        this.windPhase = Math.random() * Math.PI * 2
        this.windFreq = Math.random() * 0.008 + 0.004
        this.windAmp = Math.random() * 14 + 6
      }

      update() {
        this.windPhase += this.windFreq
        this.y += this.fallSpeed
        // Oscilación lateral con seno: viento sutil
        this.x = this.baseX + Math.sin(this.windPhase) * this.windAmp
        // Reciclaje: al salir por abajo reaparece arriba (sin crear partículas nuevas)
        if (this.y > height + 4) {
          this.baseX = Math.random() * width
          this.y = -4 - Math.random() * 10
        }
      }

      // Sin save/restore (no hay transformaciones): fillStyle se cachea una vez por frame
      // en animate y globalAlpha numérico es más barato que interpolar string rgba()
      draw(currentCtx) {
        currentCtx.globalAlpha = this.opacity
        currentCtx.beginPath()
        currentCtx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        currentCtx.fill()
      }
    }

    // Cantidad de copos proporcional al área del contenedor (rendimiento: se reciclan, no crecen)
    function initSnow() {
      snowflakes = []
      const numFlakes = Math.floor((width * height) / 3000)
      for (let i = 0; i < numFlakes; i++) {
        snowflakes.push(new Snowflake())
      }
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
        // Densidad ajustable por tema (day: 0.7 = −30% de puffs; night: 1 = completo)
        const numPuffs = Math.floor((18 + Math.random() * 12) * (theme.puffDensity ?? 1))
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
        // Sin save/restore: no hay transformaciones en este draw
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
    // Array de nubes: day con densidad reducida (−30%), night completo
    const baseCloudCount = variant === 'day' ? 3 : 4
    const baseClouds = Array.from({ length: baseCloudCount }, () => new Cloud())
    const atmosphericClouds = Array.from({ length: 2 }, () => new AtmosphericCloud())

    function animate() {
      if (snowCtx) snowCtx.clearRect(0, 0, width, height)
      ctx.clearRect(0, 0, width, height)
      atmosphericCtx.clearRect(0, 0, width, height)

      // Renderizar nieve (copos cayendo) — fillStyle cacheado, loop indexado sin callbacks
      if (snowCtx) {
        snowCtx.fillStyle = 'rgba(255, 255, 255, 1)'
        for (let i = 0; i < snowflakes.length; i++) {
          const flake = snowflakes[i]
          flake.update()
          flake.draw(snowCtx)
        }
      }

      // Renderizar nubes
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
      {theme.snow && (
        <canvas id="snowCanvas" className="absolute inset-0 w-full h-full z-0" />
      )}
      <canvas id={'cloudCanvas' + idSuffix} className="absolute inset-0 w-full h-full z-[1]" />
      <canvas
        id={'atmosphericCloudCanvas' + idSuffix}
        className="absolute inset-0 w-full h-full z-[2]"
        style={{ filter: theme.blur, opacity: theme.atmosOpacity }}
      />
    </div>
  )
}
