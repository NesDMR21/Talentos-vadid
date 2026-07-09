import { useEffect, useState } from 'react'
import Logo from '../img/Logo.png'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const hamburger = document.getElementById('hamburger')
    const mobileMenu = document.getElementById('mobileMenu')
    if (!hamburger || !mobileMenu) return

    // Sync inicial
    mobileMenu.classList.toggle('open', menuOpen)
    hamburger.setAttribute('aria-expanded', String(menuOpen))
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  useEffect(() => {
    const links = document.querySelectorAll('.mob-link')
    const onClick = () => setMenuOpen(false)
    links.forEach((l) => l.addEventListener('click', onClick))
    return () => links.forEach((l) => l.removeEventListener('click', onClick))
  }, [])

  return (
    <>
      <nav id="navbar" className={scrolled ? 'scrolled' : ''} role="navigation">
        <div className="nav-inner">
          <a href="#hero" className="nav-logo">
<svg className="logo-shield" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<image href={Logo} x="5" y="5" width="50" height="50" preserveAspectRatio="xMidYMid meet" />
              <defs>
                <clipPath id="shield-clip">
                  <path d="M30 3L5 12V30C5 44 30 57 30 57C30 57 55 44 55 30V12L30 3Z" />
                </clipPath>
              </defs>
            </svg>
            <div className="logo-text">
              TALENTOS VADID
              <span>Club Deportivo · Bogotá DC</span>
            </div>
          </a>

          <ul className="nav-links">
            <li>
              <a href="#sobre">Nosotros</a>
            </li>
            <li>
              <a href="#categorias">Categorías</a>
            </li>
            <li>
              <a href="#formacion">Formación</a>
            </li>
            <li>
              <a href="#proyeccion">Proyección</a>
            </li>
            <li>
              <a href="#torneos">Torneos</a>
            </li>
            <li>
              <a href="#sedes">Sedes</a>
            </li>
            <li>
              <a href="#contacto" className="nav-cta">
                Inscríbete
              </a>
            </li>
          </ul>

          <button
            className="hamburger"
            id="hamburger"
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div className="mobile-menu" id="mobileMenu">
        <a href="#sobre" className="mob-link">
          Nosotros
        </a>
        <a href="#categorias" className="mob-link">
          Categorías
        </a>
        <a href="#formacion" className="mob-link">
          Formación
        </a>
        <a href="#proyeccion" className="mob-link">
          Proyección
        </a>
        <a href="#torneos" className="mob-link">
          Torneos
        </a>
        <a href="#sedes" className="mob-link">
          Sedes
        </a>
        <a href="#contacto" className="mob-link">
          Contacto
        </a>
      </div>
    </>
  )
}

