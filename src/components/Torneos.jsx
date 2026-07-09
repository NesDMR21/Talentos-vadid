import { GiTrophyCup } from "react-icons/gi";
import { IoMdFootball } from "react-icons/io";
import { FaMedal } from "react-icons/fa";
import { CiMedal } from "react-icons/ci";
import { GiStarFormation } from "react-icons/gi";



export default function Torneos() {
  return (
    <section id="torneos" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }} data-aos="fade-up">
          <p className="section-tag" style={{ justifyContent: 'center' }}>
            Competencias
          </p>
          <h2 className="section-title">
            TORNEOS & <span>COMPETENCIAS</span>
          </h2>
          <div className="gold-line" style={{ margin: '0 auto' }} />
        </div>

        <div className="torneos-grid">
          <div>
            <div className="torneo-list">
              <div className="torneo-item" data-aos="fade-right" data-aos-delay="0">
                <div className="torneo-icon"><GiTrophyCup /></div>
                <div>
                  <div className="torneo-name">Liga de Fútbol de Bogotá</div>
                  <div className="torneo-sub">Competencia oficial de la capital</div>
                </div>
              </div>
              <div className="torneo-item" data-aos="fade-right" data-aos-delay="80">
                <div className="torneo-icon"><IoMdFootball /></div>
                <div>
                  <div className="torneo-name">Hexagonal del Suroriente</div>
                  <div className="torneo-sub">Torneo zonal de alta competencia</div>
                </div>
              </div>
              <div className="torneo-item" data-aos="fade-right" data-aos-delay="160">
                <div className="torneo-icon"><FaMedal /></div>
                <div>
                  <div className="torneo-name">Hexagonal de Timiza</div>
                  <div className="torneo-sub">Torneo interbarrial tradicional</div>
                </div>
              </div>
              <div className="torneo-item" data-aos="fade-right" data-aos-delay="240">
                <div className="torneo-icon"><CiMedal /></div>
                <div>
                  <div className="torneo-name">Liga de Suroriente</div>
                  <div className="torneo-sub">Liga regional del sur de Bogotá</div>
                </div>
              </div>
              <div className="torneo-item" data-aos="fade-right" data-aos-delay="320">
                <div className="torneo-icon"><GiStarFormation /></div>
                <div>
                  <div className="torneo-name">Copa Ciudad Capital</div>
                  <div className="torneo-sub">Torneo emblema de Bogotá DC</div>
                </div>
              </div>
            </div>
          </div>

          <div className="logros-panel" data-aos="fade-left">
            <div className="logros-title">TÍTULOS & RECONOCIMIENTOS</div>
            <p className="logros-text">
              Seguimos construyendo nuestro palmarés con cada temporada. El esfuerzo de nuestros jugadores y cuerpo técnico se verá reflejado en los trofeos que están por llegar.
            </p>
            <div
              style={{ width: 60, height: 1.5, background: 'linear-gradient(90deg,var(--gold),transparent)', margin: '0 auto 28px' }}
            />
            <span className="logros-coming">🏆 En construcción · Stay tuned</span>
          </div>
        </div>
      </div>
    </section>
  )
}

