import { useEffect } from 'react'
import Logo from '../img/Logo.png'

function animateCounter(el, target, duration = 1800) {
  let start = 0
  const step = target / (duration / 16)

  const timer = setInterval(() => {
    start += step
    if (start >= target) {
      el.textContent = String(target)
      clearInterval(timer)
    } else {
      el.textContent = String(Math.floor(start))
    }
  }, 16)
}

export default function Hero() {
  useEffect(() => {
    const heroStats = document.querySelector('.hero-stats')
    if (!heroStats) return

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.querySelectorAll('.counter').forEach((c) => {
            const target = parseInt(c.dataset.target || '0', 10)
            animateCounter(c, target)
          })
          obs.unobserve(entry.target)
        })
      },
      { threshold: 0.5 },
    )

    obs.observe(heroStats)

    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (window.innerWidth <= 768) return

    const onScroll = () => {
      const y = window.scrollY
      const bull = document.querySelector('.hero-bull')
      if (bull) bull.style.transform = `translateY(calc(-50% + ${y * 0.08}px))`
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="hero">
      <div className="hero-bg" />
      <div className="hero-content">
        <p className="hero-eyebrow">Bogotá DC, Colombia</p>
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
          <a
            href="https://wa.me/573134565039"
            target="_blank"
            rel="noopener"
            className="btn-outline"
          >
            Contáctanos
          </a>
          <a href="#categorias" className="btn-ghost">
            Ver categorías
          </a>
        </div>

        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-num">
              <span className="counter" data-target="4">
                0
              </span>
            </div>
            <div className="stat-label">Categorías activas</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">
              <span className="counter" data-target="8">
                0
              </span>
              <sup>+</sup>
            </div>
            <div className="stat-label">Años formando jugadores</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">
              <span className="counter" data-target="5">
                0
              </span>
            </div>
            <div className="stat-label">Torneos disputados</div>
          </div>
          <div className="stat-item">
            <div className="stat-num">
              <span className="counter" data-target="50">
                0
              </span>
              <sup>+</sup>
            </div>
            <div className="stat-label">Jugadores proyectados</div>
          </div>
        </div>
      </div>

      {/* bull (Imagen Flotante, se puede cambiar o dejar) */}
      <img className="hero-bull" src={Logo} alt="" aria-hidden="true" />
    </section>
  )
}

