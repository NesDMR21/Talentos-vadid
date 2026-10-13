import { useEffect, useRef, useState } from 'react'
import Logo from '../img/Logo.png?w=560&format=webp'

export default function IntroOverlay() {
  const ref = useRef(null)
  const [done, setDone] = useState(() => document.documentElement.classList.contains('no-intro'))

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onEnd = (e) => {
      if (e.animationName === 'fadeOutOverlay') setDone(true)
    }
    el.addEventListener('animationend', onEnd)
    return () => el.removeEventListener('animationend', onEnd)
  }, [])

  if (done) return null

  return (
    <div id="intro-overlay" ref={ref} aria-hidden="true">
      <div className="bull-wrap">
        <div className="ring" />
        <div className="ring ring-2" />
        <img src={Logo} alt="" width="280" height="280" />
      </div>
      <div className="intro-tagline">Talentos Vadid</div>
      <div className="intro-sub">Forjando disciplina · Creando campeones</div>
    </div>
  )
}
