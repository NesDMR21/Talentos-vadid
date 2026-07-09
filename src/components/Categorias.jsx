import { ImManWoman } from "react-icons/im";



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
          <div className="cat-card" data-aos="fade-up" data-aos-delay="0">
            <div className="cat-level" />
            <div className="cat-year">2006</div>
            <div className="cat-age">Sub-20 · Competitivo</div>
            <div className="cat-divider" />
            <div className="cat-info">
              <div className="cat-info-label">Enfoque</div>
              <div className="cat-info-val">Alto rendimiento y proyección profesional</div>
            </div>
            <div className="cat-info">
              <div className="cat-info-label">Horarios</div>
              <div className="cat-info-val">Lun–Vie 6PM–8PM · Sáb–Dom 8AM</div>
            </div>
            <div className="cat-info">
              <div className="cat-info-label">Nivel</div>
              <div className="cat-info-val">⬤⬤⬤⬤⬤ Élite</div>
            </div>
          </div>

          <div className="cat-card" data-aos="fade-up" data-aos-delay="80">
            <div className="cat-level" />
            <div className="cat-year">2010</div>
            <div className="cat-age">Sub-16 · Semi-competitivo</div>
            <div className="cat-divider" />
            <div className="cat-info">
              <div className="cat-info-label">Enfoque</div>
              <div className="cat-info-val">Técnica, táctica y desarrollo físico</div>
            </div>
            <div className="cat-info">
              <div className="cat-info-label">Horarios</div>
              <div className="cat-info-val">Mié 4PM–6PM · Sáb–Dom 8AM</div>
            </div>
            <div className="cat-info">
              <div className="cat-info-label">Nivel</div>
              <div className="cat-info-val">⬤⬤⬤⬤○ Avanzado</div>
            </div>
            <span className="cat-badge-mixta"><ImManWoman/> Mixta</span>
          </div>

          <div className="cat-card" data-aos="fade-up" data-aos-delay="160">
            <div className="cat-level" />
            <div className="cat-year">2014</div>
            <div className="cat-age">Sub-12 · Iniciación</div>
            <div className="cat-divider" />
            <div className="cat-info">
              <div className="cat-info-label">Enfoque</div>
              <div className="cat-info-val">Fundamentos técnicos y amor por el deporte</div>
            </div>
            <div className="cat-info">
              <div className="cat-info-label">Horarios</div>
              <div className="cat-info-val">Lun–Vie 6PM–8PM · Sáb 8AM</div>
            </div>
            <div className="cat-info">
              <div className="cat-info-label">Nivel</div>
              <div className="cat-info-val">⬤⬤⬤○○ Intermedio</div>
            </div>
          </div>

          <div className="cat-card" data-aos="fade-up" data-aos-delay="240">
            <div className="cat-level" />
            <div className="cat-year">2018</div>
            <div className="cat-age">Sub-8 · Baby Fútbol</div>
            <div className="cat-divider" />
            <div className="cat-info">
              <div className="cat-info-label">Enfoque</div>
              <div className="cat-info-val">Coordinación, diversión y primeros pasos</div>
            </div>
            <div className="cat-info">
              <div className="cat-info-label">Horarios</div>
              <div className="cat-info-val">Sáb–Dom 8AM–10AM</div>
            </div>
            <div className="cat-info">
              <div className="cat-info-label">Nivel</div>
              <div className="cat-info-val">⬤⬤○○○ Iniciación</div>
            </div>
            <span className="cat-badge-mixta"><ImManWoman/> Mixta</span>
          </div>
        </div>

        <p
          style={{
            textAlign: 'center',
            marginTop: 32,
            fontFamily: 'var(--font-cond)',
            fontSize: '.85rem',
            letterSpacing: '.1em',
            textTransform: 'uppercase',
            color: 'rgba(201,168,76,.5)',
          }}
          data-aos="fade-up"
        >
          ✦ Aceptamos jugadores desde los 5 años · Categorías mixtas disponibles ✦
        </p>
      </div>
    </section>
  )
}

