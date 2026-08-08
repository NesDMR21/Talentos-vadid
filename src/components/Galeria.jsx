import { useState } from 'react'
import { CATEGORIES, TEAMS, galleryImages } from '../data/gallery.js'
import { shuffle } from '../utils/shuffle.js'
import GaleriaDestacada from './GaleriaDestacada.jsx'
import Lightbox from './Lightbox.jsx'

const BATCH_SIZE = 9

export default function Galeria() {
  const [shuffledImages] = useState(() => shuffle(galleryImages))
  const [activeCategory, setActiveCategory] = useState('todas')
  const [activeTeam, setActiveTeam] = useState('todas')
  const [visibleCount, setVisibleCount] = useState(BATCH_SIZE)
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const visibleCategories = CATEGORIES.filter((cat) =>
    galleryImages.some((img) => img.category === cat.key)
  )

  const teamsInCategory =
    activeCategory === 'todas'
      ? []
      : TEAMS.filter((team) =>
          galleryImages.some((img) => img.category === activeCategory && img.team === team.key)
        )

  const selectCategory = (key) => {
    setActiveCategory(key)
    setActiveTeam('todas')
    setVisibleCount(BATCH_SIZE)
  }

  const selectTeam = (key) => {
    setActiveTeam(key)
    setVisibleCount(BATCH_SIZE)
  }

  const filtered = shuffledImages.filter((img) => {
    if (activeCategory !== 'todas' && img.category !== activeCategory) return false
    if (activeCategory !== 'todas' && activeTeam !== 'todas' && img.team !== activeTeam) return false
    return true
  })

  const visible = filtered.slice(0, visibleCount)
  const remaining = filtered.length - visible.length

  return (
    <section id="galeria" className="section section--sm">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 48 }} data-aos="fade-up">
          <p className="section-tag" style={{ justifyContent: 'center' }}>
            Momentos
          </p>
          <h2 className="section-title">
            NUESTRA <span>GALERÍA</span>
          </h2>
          <div className="gold-line" style={{ margin: '0 auto' }} />
        </div>

        <GaleriaDestacada />

        {visibleCategories.length > 0 && (
          <div className="tabs-nav" style={{ justifyContent: 'center' }} data-aos="fade-up">
            <button
              className={'tab-btn' + (activeCategory === 'todas' ? ' active' : '')}
              onClick={() => selectCategory('todas')}
            >
              Todas
            </button>
            {visibleCategories.map((cat) => (
              <button
                key={cat.key}
                className={'tab-btn' + (activeCategory === cat.key ? ' active' : '')}
                onClick={() => selectCategory(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        )}

        {teamsInCategory.length > 0 && (
          <div className="tabs-nav tabs-nav--sub" style={{ justifyContent: 'center' }} data-aos="fade-up">
            <button
              className={'tab-btn' + (activeTeam === 'todas' ? ' active' : '')}
              onClick={() => selectTeam('todas')}
            >
              Todas las edades
            </button>
            {teamsInCategory.map((team) => (
              <button
                key={team.key}
                className={'tab-btn' + (activeTeam === team.key ? ' active' : '')}
                onClick={() => selectTeam(team.key)}
              >
                {team.label}
              </button>
            ))}
          </div>
        )}

        {filtered.length > 0 ? (
          <>
            <div className="gallery-grid" data-aos="fade-up">
              {visible.map((item, idx) => (
                <div
                  key={item.id}
                  className="gallery-item"
                  onClick={() => setLightboxIndex(idx)}
                >
                  <img
                    src={item.thumb}
                    alt={item.alt}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(20%)' }}
                    loading="lazy"
                  />
                  <div className="gallery-overlay">
                    <span className="gallery-overlay-text">{item.alt}</span>
                  </div>
                </div>
              ))}
            </div>

            {remaining > 0 && (
              <div style={{ textAlign: 'center', marginTop: 32 }}>
                <button
                  className="btn-primary"
                  onClick={() => setVisibleCount((v) => Math.min(v + BATCH_SIZE, filtered.length))}
                >
                  Ver más fotos ({remaining})
                </button>
              </div>
            )}
          </>
        ) : (
          <p
            style={{
              textAlign: 'center',
              marginTop: 32,
              fontSize: '.82rem',
              color: 'rgba(245,245,245,.25)',
              fontFamily: 'var(--font-cond)',
              letterSpacing: '.1em',
              textTransform: 'uppercase',
            }}
            data-aos="fade-up"
          >
            Muy pronto: fotos y videos reales de nuestros entrenamientos y torneos
          </p>
        )}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={filtered}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNavigate={setLightboxIndex}
        />
      )}
    </section>
  )
}
