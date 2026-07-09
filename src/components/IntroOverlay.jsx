import { useEffect } from 'react'
import Logo from '../img/Logo.png'

export default function IntroOverlay() {
  useEffect(() => {
    const el = document.getElementById('intro-overlay')
    if (!el) return

    const onEnd = (e) => {
      if (e.animationName === 'fadeOutOverlay') {
        el.style.display = 'none'
      }
    }

    el.addEventListener('animationend', onEnd)
    return () => el.removeEventListener('animationend', onEnd)
  }, [])

  return (
    <div id="intro-overlay">
      <div className="bull-wrap">
        <div className="ring" />
        <div className="ring ring-2" />
        <img src={Logo} alt="Talentos Vadid" />
      </div>
      <div className="intro-tagline">Talentos Vadid</div>
      <div className="intro-sub">Forjando disciplina · Creando campeones</div>
    </div>
  )
}

