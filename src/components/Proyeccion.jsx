import Logo from '../img/Logo.png'
import { GiWorld } from "react-icons/gi";

export default function Proyeccion() {
  return (
    <section id="proyeccion" className="section">
      <div className="container">
        <div className="proy-header" data-aos="fade-up">
          <p className="section-tag" style={{ justifyContent: 'center' }}>
            Caso de Éxito
          </p>
          <h2 className="section-title">
            DEL SUEÑO A <span>CROACIA</span>
          </h2>
          <div className="gold-line" style={{ margin: '0 auto' }} />
        </div>

        <div className="proy-hero-card" data-aos="fade-up">
          <div className="proy-hero-inner">
            <div className="proy-photo">
              <div className="proy-photo-placeholder">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" opacity=".3">
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
                </svg>
                <span>
                  <img src={Logo} alt="foto de prueba" />
                </span>
              </div>
              <div className="proy-photo-overlay" />
            </div>

            <div className="proy-info">
              <h3 className="proy-name">
                JOAN <span>CAMPOS</span>
              </h3>
              <p className="proy-role">Centrocampista · Bogotá, Colombia</p>

              <div className="proy-highlight">
                <div className="proy-stat">
                  <div className="proy-stat-num">18</div>
                  <div className="proy-stat-label">Años</div>
                </div>
                <div className="proy-stat">
                  <div className="proy-stat-num">7</div>
                  <div className="proy-stat-label">Años en Vadid</div>
                </div>
                <div className="proy-stat">
                  <div className="proy-stat-num"><GiWorld /></div>
                  <div className="proy-stat-label">Internacional</div>
                </div>
              </div>

              <p className="proy-desc">
                Joan llegó a Talentos Vadid con apenas 11 años y un sueño. Durante 7 años de formación integral —técnica, física, táctica y mental— se convirtió en uno de los referentes de nuestra academia. Su dedicación, disciplina y talento lo llevaron más lejos de lo que muchos imaginaban.
              </p>

              <div className="destination-badge">
                <span className="flag">🇭🇷</span>
                <div>
                  <div className="dest-text">NK Prigorje · Croacia</div>
                  <div className="dest-sub">Proyección Internacional</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3
          style={{
            fontFamily: 'var(--font-cond)',
            fontSize: '1rem',
            fontWeight: 700,
            letterSpacing: '.15em',
            textTransform: 'uppercase',
            color: 'rgba(201,168,76,.6)',
            marginBottom: 40,
            textAlign: 'center',
          }}
          data-aos="fade-up"
        >
          — Su Camino —
        </h3>

        <div className="timeline" data-aos="fade-up">
          <div className="tl-item">
            <div className="tl-dot">
              <div className="tl-dot-circle" />
              <div className="tl-dot-inner" />
            </div>
            <div className="tl-content">
              <div className="tl-year">2017 · 11 años</div>
              <div className="tl-title">Llegada a Talentos Vadid</div>
              <div className="tl-text">
                Joan se une a la academia con grandes condiciones físicas pero aún en proceso de formación técnica. El trabajo comienza desde los fundamentos.
              </div>
            </div>
          </div>

          <div className="tl-item">
            <div className="tl-dot">
              <div className="tl-dot-circle" />
              <div className="tl-dot-inner" />
            </div>
            <div className="tl-content">
              <div className="tl-year">2019–2021 · 13–15 años</div>
              <div className="tl-title">Formación Técnica & Competitiva</div>
              <div className="tl-text">
                Participación en torneos locales. Vadid potencia su técnica individual, inteligencia táctica y preparación física. Primeras oportunidades en clubes externos.
              </div>
            </div>
          </div>

          <div className="tl-item">
            <div className="tl-dot">
              <div className="tl-dot-circle" />
              <div className="tl-dot-inner" />
            </div>
            <div className="tl-content">
              <div className="tl-year">2022–2023 · 16–17 años</div>
              <div className="tl-title">Alto Rendimiento & Preparación Mental</div>
              <div className="tl-text">
                Incorporación al programa de alto rendimiento con acompañamiento psicológico. Joan consolida su perfil como mediocampista de proyección.
              </div>
            </div>
          </div>

          <div className="tl-item">
            <div className="tl-dot">
              <div className="tl-dot-circle" />
              <div className="tl-dot-inner" />
            </div>
            <div className="tl-content">
              <div className="tl-year">2024 · 18 años</div>
              <div className="tl-title">🇭🇷 NK Prigorje, Croacia</div>
              <div className="tl-text">
                Tras 7 años de proceso formativo, Joan Campos firma con el club NK Prigorje en Croacia. Su historia demuestra que con talento, trabajo y el sistema correcto, los sueños se convierten en realidad.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

