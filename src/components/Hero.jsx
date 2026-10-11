import { useEffect, useRef } from 'react'
import heroSrcset from '../img/hero.jpg?w=640;1125&format=webp&as=srcset'
import heroSrc from '../img/hero.jpg?w=1125&format=webp'

const STATS = [
  { target: 4, label: 'Categorías activas' },
  { target: 8, plus: true, label: 'Años formando jugadores' },
  { target: 5, label: 'Torneos disputados' },
  { target: 50, plus: true, label: 'Jugadores proyectados' },
]

function animateCounter(el, target, duration = 1600) {
  const start = performance.now()
  let frame
  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1)
    el.textContent = String(Math.round(target * (1 - Math.pow(1 - progress, 3))))
    if (progress < 1) frame = requestAnimationFrame(tick)
  }
  frame = requestAnimationFrame(tick)
  return () => cancelAnimationFrame(frame)
}

export default function Hero() {
  const statsRef = useRef(null)

  useEffect(() => {
    const stats = statsRef.current
    if (!stats) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const counters = [...stats.querySelectorAll('.counter')]
    const cancels = []
    let inView = false
    let visible = getComputedStyle(stats).opacity === '1'
    let started = false

    const start = () => {
      if (started || !inView || !visible) return
      started = true
      counters.forEach((c) => cancels.push(animateCounter(c, Number(c.dataset.target))))
    }

    // Los números se ven con su valor final; al entrar en pantalla (y cuando
    // termina el fade-in del hero) cuentan desde 0.
    counters.forEach((c) => {
      c.textContent = '0'
    })

    const onAnimEnd = (e) => {
      if (e.target !== stats) return
      visible = true
      start()
    }
    stats.addEventListener('animationend', onAnimEnd)

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        inView = true
        start()
        obs.disconnect()
      },
      { threshold: 0.2 },
    )
    obs.observe(stats)

    return () => {
      obs.disconnect()
      stats.removeEventListener('animationend', onAnimEnd)
      cancels.forEach((cancel) => cancel())
    }
  }, [])

  return (
    <section id="hero">
      <div className="hero-bg">
        <img
          src={heroSrc}
          srcSet={heroSrcset}
          sizes="100vw"
          alt=""
          fetchPriority="high"
          decoding="async"
          width="1125"
          height="551"
        />
      </div>
      <div className="hero-content">
        <p className="hero-eyebrow">Club Vadid · Bogotá DC, Colombia</p>
        <h1 className="hero-title">
          <span className="line1">CLUB DEPORTIVO</span>
          <span className="line2">TALENTOS</span>
          <span className="line3">VADID</span>
        </h1>
        <p className="hero-slogan">Forjando disciplina, creando campeones.</p>
        <div className="hero-cta">
          <a href="#contacto" className="btn-primary">
            Inscríbete ahora
          </a>
          <a href="https://wa.me/573134565039" target="_blank" rel="noopener noreferrer" className="btn-outline">
            Contáctanos
          </a>
          <a href="#categorias" className="btn-ghost">
            Ver categorías
          </a>
        </div>

        <div className="hero-stats" ref={statsRef}>
          {STATS.map((stat) => (
            <div className="stat-item" key={stat.label}>
              <div className="stat-num">
                <span className="counter" data-target={stat.target}>
                  {stat.target}
                </span>
                {stat.plus && <sup>+</sup>}
              </div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
