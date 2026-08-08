import { useEffect } from 'react'

export default function Lightbox({ images, index, onClose, onNavigate }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onNavigate((index + 1) % images.length)
      if (e.key === 'ArrowLeft') onNavigate((index - 1 + images.length) % images.length)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [index, images.length, onClose, onNavigate])

  const current = images[index]
  if (!current) return null

  return (
    <div className="lightbox" onClick={onClose}>
      <button className="lightbox-close" aria-label="Cerrar" onClick={onClose}>
        ✕
      </button>

      {images.length > 1 && (
        <button
          className="lightbox-nav lightbox-prev"
          aria-label="Foto anterior"
          onClick={(e) => {
            e.stopPropagation()
            onNavigate((index - 1 + images.length) % images.length)
          }}
        >
          ‹
        </button>
      )}

      <img
        className="lightbox-img"
        src={current.src}
        alt={current.alt}
        onClick={(e) => e.stopPropagation()}
      />

      {images.length > 1 && (
        <button
          className="lightbox-nav lightbox-next"
          aria-label="Foto siguiente"
          onClick={(e) => {
            e.stopPropagation()
            onNavigate((index + 1) % images.length)
          }}
        >
          ›
        </button>
      )}
    </div>
  )
}
