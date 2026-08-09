import { useEffect, useState } from 'react'
import Logo from '../img/Logo.png'

const LINKS = [
  { href: '#sobre', label: 'Nosotros' },
  { href: '#categorias', label: 'Categorías' },
  { href: '#staff', label: 'Staff' },
  { href: '#metodologia', label: 'Método' },
  { href: '#proyeccion', label: 'Proyección' },
  { href: '#torneos', label: 'Torneos' },
  { href: '#sedes', label: 'Sedes' },
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
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

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
            {LINKS.map((link) => (
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
            className="hamburger"
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

      <div className={'mobile-menu' + (menuOpen ? ' open' : '')}>
        {LINKS.map((link) => (
          <a key={link.href} href={link.href} className="mob-link" onClick={closeMenu}>
            {link.label}
          </a>
        ))}
        <a href="#contacto" className="mob-link" onClick={closeMenu}>
          Contacto
        </a>
      </div>
    </>
  )
}
