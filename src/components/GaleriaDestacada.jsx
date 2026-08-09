import { useCallback, useEffect, useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaPause, FaPlay } from 'react-icons/fa'
import { galleryImages } from '../data/gallery.js'
import { shuffle } from '../utils/shuffle.js'

const AUTOPLAY_MS = 5000

export default function GaleriaDestacada() {
  const [state, setState] = useState(() => ({ order: shuffle(galleryImages), pos: 0 }))
  const [userPaused, setUserPaused] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  )
  const [hovering, setHovering] = useState(false)
  const [isHidden, setIsHidden] = useState(false)

  const goNext = useCallback(() => {
    setState((prev) => {
      const pos = prev.pos + 1
      if (pos >= prev.order.length) return { order: shuffle(galleryImages), pos: 0 }
      return { ...prev, pos }
    })
  }, [])

  const goPrev = useCallback(() => {
    setState((prev) => {
      const pos = prev.pos - 1
      if (pos < 0) return { ...prev, pos: prev.order.length - 1 }
      return { ...prev, pos }
    })
  }, [])

  useEffect(() => {
    const onVisibility = () => setIsHidden(document.hidden)
    document.addEventListener('visibilitychange', onVisibility)
    return () => document.removeEventListener('visibilitychange', onVisibility)
  }, [])

  const isPaused = userPaused || hovering || isHidden

  useEffect(() => {
    if (isPaused || state.order.length <= 1) return
    const id = setInterval(goNext, AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [isPaused, state.order.length, goNext])

  useEffect(() => {
    if (state.order.length === 0) return
    const next = state.order[(state.pos + 1) % state.order.length]
    if (next) {
      const img = new Image()
      img.src = next.featured
    }
  }, [state])

  if (galleryImages.length === 0) return null

  const current = state.order[state.pos]
  const hasMultiple = state.order.length > 1

  return (
    <div
      className="destacados"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onFocus={() => setHovering(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setHovering(false)
      }}
      data-aos="fade-up"
    >
      <div className="destacados-frame" role="group" aria-roledescription="carrusel" aria-label="Momentos destacados">
        <img key={`${current.id}-bg`} className="destacados-bg" src={current.thumb} alt="" aria-hidden="true" />
        <img key={`${current.id}-fg`} className="destacados-img" src={current.featured} alt={current.alt} />
        <div className="destacados-caption">
          <span>{current.alt}</span>
        </div>
      </div>

      {hasMultiple && (
        <div className="destacados-controls">
          <button className="destacados-arrow" aria-label="Foto anterior" onClick={goPrev}>
            <FaChevronLeft />
          </button>
          <button
            className="destacados-toggle"
            aria-label={userPaused ? 'Reanudar' : 'Pausar'}
            aria-pressed={userPaused}
            onClick={() => setUserPaused((p) => !p)}
          >
            {userPaused ? <FaPlay /> : <FaPause />}
          </button>
          <span className="destacados-count">
            {state.pos + 1} / {state.order.length}
          </span>
          <button className="destacados-arrow" aria-label="Foto siguiente" onClick={goNext}>
            <FaChevronRight />
          </button>
        </div>
      )}
    </div>
  )
}
