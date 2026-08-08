import { GiWorld } from "react-icons/gi";
import Tabs from './Tabs.jsx'
import johanCamposImg from '../img/johan-campos.jpg'

const etapas = [
  {
    year: '2017 · 11 años',
    title: 'Llegada a Talentos Vadid',
    text: 'Johan se une a la academia con grandes condiciones físicas pero aún en proceso de formación técnica. El trabajo comienza desde los fundamentos.',
  },
  {
    year: '2019–2021 · 13–15 años',
    title: 'Formación Técnica & Competitiva',
    text: 'Participación en torneos locales. Vadid potencia su técnica individual, inteligencia táctica y preparación física. Primeras oportunidades en clubes externos.',
  },
  {
    year: '2022–2023 · 16–17 años',
    title: 'Alto Rendimiento & Preparación Mental',
    text: 'Incorporación al programa de alto rendimiento con acompañamiento psicológico. Johan consolida su perfil como mediocampista de proyección.',
  },
  {
    year: '2024 · 18 años',
    title: '🇭🇷 NK Prigorje, Croacia',
    text: 'Tras 7 años de proceso formativo, Johan Campos firma con el club NK Prigorje en Croacia. Su historia demuestra que con talento, trabajo y el sistema correcto, los sueños se convierten en realidad.',
  },
]

function EtapaPanel({ etapa }) {
  return (
    <div className="tl-content">
      <div className="tl-year">{etapa.year}</div>
      <div className="tl-title">{etapa.title}</div>
      <div className="tl-text">{etapa.text}</div>
    </div>
  )
}

export default function Proyeccion() {
  return (
    <section id="proyeccion" className="section section--md">
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
              <img src={johanCamposImg} alt="Johan Campos" loading="lazy" />
              <div className="proy-photo-overlay" />
            </div>

            <div className="proy-info">
              <h3 className="proy-name">
                JOHAN <span>CAMPOS</span>
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
                Johan llegó a Talentos Vadid con apenas 11 años y un sueño. Durante 7 años de formación integral —técnica, física, táctica y mental— se convirtió en uno de los referentes de nuestra academia. Su dedicación, disciplina y talento lo llevaron más lejos de lo que muchos imaginaban.
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
            marginBottom: 24,
            textAlign: 'center',
          }}
          data-aos="fade-up"
        >
          — Su Camino —
        </h3>

        <div className="tl-tabs" data-aos="fade-up">
          <Tabs items={etapas.map((etapa) => ({ label: etapa.year.split(' · ')[0], content: <EtapaPanel etapa={etapa} /> }))} />
        </div>
      </div>
    </section>
  )
}
