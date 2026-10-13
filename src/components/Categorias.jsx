import { ImManWoman } from 'react-icons/im'

const CATEGORIAS = [
  { year: '2006', age: 'Sub-20 · Competitivo', enfoque: 'Alto rendimiento y proyección profesional', nivel: 5, nivelLabel: 'Élite' },
  { year: '2010', age: 'Sub-16 · Semi-competitivo', enfoque: 'Técnica, táctica y desarrollo físico', nivel: 4, nivelLabel: 'Avanzado', mixta: true },
  { year: '2014', age: 'Sub-12 · Iniciación', enfoque: 'Fundamentos técnicos y amor por el deporte', nivel: 3, nivelLabel: 'Intermedio' },
  { year: '2018–2021', age: 'Baby Fútbol · Desde 5 años', enfoque: 'Coordinación, diversión y primeros pasos', nivel: 2, nivelLabel: 'Iniciación', mixta: true },
]

function Nivel({ value, label }) {
  return (
    <div className="cat-info-val">
      <span className="cat-dots" aria-hidden="true">
        {[1, 2, 3, 4, 5].map((n) => (
          <span key={n} className={'cat-dot' + (n <= value ? ' on' : '')} />
        ))}
      </span>
      {label}
    </div>
  )
}

export default function Categorias() {
  return (
    <section id="categorias" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }} data-aos="fade-up">
          <p className="section-tag" style={{ justifyContent: 'center' }}>
            Nuestras Categorías
          </p>
          <h2 className="section-title">
            JUGADORES DESDE <span>5 AÑOS</span>
          </h2>
          <div className="gold-line" style={{ margin: '0 auto 0' }} />
        </div>

        <div className="cat-grid">
          {CATEGORIAS.map((cat, idx) => (
            <div className="cat-card" key={cat.year} data-aos="fade-up" data-aos-delay={idx * 80}>
              <div className="cat-level" />
              <h3 className="cat-year">{cat.year}</h3>
              <div className="cat-age">{cat.age}</div>
              <div className="cat-divider" />
              <div className="cat-info">
                <div className="cat-info-label">Enfoque</div>
                <div className="cat-info-val">{cat.enfoque}</div>
              </div>
              <div className="cat-info">
                <div className="cat-info-label">Nivel</div>
                <Nivel value={cat.nivel} label={cat.nivelLabel} />
              </div>
              {cat.mixta && (
                <span className="cat-badge-mixta">
                  <ImManWoman /> Mixta
                </span>
              )}
            </div>
          ))}
        </div>

        <p className="cat-note" data-aos="fade-up">
          ✦ Aceptamos jugadores desde los 5 años · <a href="#sedes">Ver horarios por sede</a> ✦
        </p>
      </div>
    </section>
  )
}
