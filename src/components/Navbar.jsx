import { useEffect, useState } from 'react'
import Logo from '../img/Logo.png?w=96&format=webp'

// desktop: false = solo aparece en el menú móvil (en escritorio no caben todos)
const LINKS = [
  { href: '#sobre', label: 'Nosotros' },
  { href: '#categorias', label: 'Categorías' },
  { href: '#staff', label: 'Staff' },
  { href: '#metodologia', label: 'Método' },
  { href: '#proyeccion', label: 'Proyección' },
  { href: '#torneos', label: 'Torneos', desktop: false },
  { href: '#galeria', label: 'Galería' },
  { href: '#sedes', label: 'Sedes' },
  { href: '#faq', label: 'Preguntas', desktop: false },
]

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
    if (!menuOpen) return
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav id="navbar" className={scrolled || menuOpen ? 'scrolled' : ''} aria-label="Principal">
        <div className="nav-inner">
          <a href="#hero" className="nav-logo">
            <img className="logo-shield" src={Logo} alt="" width="44" height="44" />
            <div className="logo-text">
              TALENTOS VADID
              <span>Club Deportivo · Bogotá DC</span>
            </div>
          </a>

          <ul className="nav-links">
            {LINKS.filter((link) => link.desktop !== false).map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
            <li>
              <a href="#contacto" className="nav-cta">
                Inscríbete
              </a>
            </li>
          </ul>

          <button
            type="button"
            className="hamburger"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      <div id="mobile-menu" className={'mobile-menu' + (menuOpen ? ' open' : '')} inert={!menuOpen}>
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} className="mob-link" onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <a href="#contacto" className="mob-link" onClick={closeMenu}>
          Inscríbete
        </a>
      </div>
    </>
  )
}
