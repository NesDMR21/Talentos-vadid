export default function Galeria() {
  return (
    <section id="galeria" className="section">
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

        <div className="gallery-grid" data-aos="fade-up">
          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1508098682722-e99c643e9337?w=700&q=80"
              alt="Entrenamiento Vadid"
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(20%)' }}
              loading="lazy"
            />
            <div className="gallery-overlay">
              <span className="gallery-overlay-text">Entrenamiento</span>
            </div>
          </div>

          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=500&q=80"
              alt="Partido Vadid"
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(20%)' }}
              loading="lazy"
            />
            <div className="gallery-overlay">
              <span className="gallery-overlay-text">Competencia</span>
            </div>
          </div>

          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=500&q=80"
              alt="Jugadores Vadid"
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(20%)' }}
              loading="lazy"
            />
            <div className="gallery-overlay">
              <span className="gallery-overlay-text">Jugadores</span>
            </div>
          </div>

          <div className="gallery-item">
            <div className="gallery-placeholder">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
              </svg>
              <span>Tu foto aquí</span>
            </div>
            <div className="gallery-overlay">
              <span className="gallery-overlay-text">Próximamente</span>
            </div>
          </div>

          <div className="gallery-item">
            <img
              src="https://images.unsplash.com/photo-1529516548873-9ce57c8f155e?w=700&q=80"
              alt="Estadio Vadid"
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(20%)' }}
              loading="lazy"
            />
            <div className="gallery-overlay">
              <span className="gallery-overlay-text">Partido</span>
            </div>
          </div>

          <div className="gallery-item">
            <div className="gallery-placeholder">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z" />
              </svg>
              <span>Video · Próximamente</span>
            </div>
            <div className="gallery-overlay">
              <span className="gallery-overlay-text">Video</span>
            </div>
          </div>
        </div>

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
          Las imágenes serán reemplazadas por fotos reales del club
        </p>
      </div>
    </section>
  )
}

