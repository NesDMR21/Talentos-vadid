import { IoMdFootball } from "react-icons/io";
import { FaHorseHead } from "react-icons/fa";
import { GiMightyForce } from "react-icons/gi";
import { IoAirplaneSharp } from "react-icons/io5";


export default function Sobre() {
  return (
    <section id="sobre" className="section">
      <div className="container">
        <div className="sobre-grid">
          <div className="sobre-visual" data-aos="fade-right">
            <div className="sobre-img">
              <img
                src="https://res.cloudinary.com/aes3puw6/image/upload/v1784134408/WhatsApp_Image_2026-07-15_at_11.25.56_AM_nkdipm.jpg"
                alt="Entrenamiento Club Deportivo Talentos Vadid"
                loading="lazy"
              />
              <div className="sobre-img-overlay" />
            </div>
            <div className="sobre-badge">
              <div className="num">8+</div>
              <div className="txt">Años de<br />formación</div>
            </div>
          </div>

          <div className="sobre-text" data-aos="fade-left" data-aos-delay="150">
            <p className="section-tag">Nuestra Historia</p>
            <h2 className="section-title">
              FORJADOS PARA <span>COMPETIR</span>
            </h2>
            <div className="gold-line" />
            <p>
              El Club Deportivo Talentos Vadid nació con una misión clara: transformar el talento natural en excelencia
              futbolística. Desde nuestros inicios en Bogotá DC, hemos construido una academia donde el deporte es más que
              un juego: es una escuela de vida.
            </p>
            <p>
              Nuestra filosofía integra la formación técnica de alto nivel con el desarrollo humano integral. Creemos que un
              gran futbolista se construye dentro y fuera del campo: con disciplina, carácter, determinación y valores que lo
              acompañarán toda la vida.
            </p>
            <p>
              Con metodologías inspiradas en las academias europeas de élite y un equipo de entrenadores comprometidos,
              Talentos Vadid es el puente entre el sueño y la realidad profesional.
            </p>

            <div className="sobre-values">
              <div className="value-card" data-aos="fade-up" data-aos-delay="100">
                <div className="value-icon"><IoMdFootball /></div>
                <div className="value-name">Excelencia Técnica</div>
                <div className="value-desc">
                  Formación individualizada con énfasis en habilidades técnicas de primer nivel.
                </div>
              </div>
              <div className="value-card" data-aos="fade-up" data-aos-delay="150">
                <div className="value-icon"><FaHorseHead /></div>
                <div className="value-name">Inteligencia de Juego</div>
                <div className="value-desc">
                  Desarrollamos jugadores pensantes, creativos y con visión táctica avanzada.
                </div>
              </div>
              <div className="value-card" data-aos="fade-up" data-aos-delay="200">
                <div className="value-icon"><GiMightyForce /></div>
                <div className="value-name">Carácter & Disciplina</div>
                <div className="value-desc">
                  Formamos personas con valores sólidos y mentalidad de campeón.
                </div>
              </div>
              <div className="value-card" data-aos="fade-up" data-aos-delay="250">
                <div className="value-icon"><IoAirplaneSharp /></div>
                <div className="value-name">Proyección Internacional</div>
                <div className="value-desc">
                  Abrimos puertas al mundo. Nuestros jugadores compiten a nivel global.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

