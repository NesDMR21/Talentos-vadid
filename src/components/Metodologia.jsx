import { CgGym } from "react-icons/cg";
import { GiPrayer } from "react-icons/gi";
import { PiBowlFoodBold } from "react-icons/pi";
import { PiShootingStarFill } from "react-icons/pi";
import { GiHiveMind } from "react-icons/gi";
import { GiSoccerKick } from "react-icons/gi";
import { GiWeightLiftingUp } from "react-icons/gi";
import { GrDocumentPerformance } from "react-icons/gr";
import { TbRulerMeasure } from "react-icons/tb";
import Tabs from './Tabs.jsx'
import metodologiaImg from '../img/metodologia.jpg'

const pilares = [
  { num: '01', title: 'Técnica Individual', text: 'Dominio del balón, control, conducción y golpeo. La base de todo gran futbolista se construye con repetición inteligente y corrección técnica constante.' },
  { num: '02', title: 'Táctica & Visión de Juego', text: 'Entendemos el fútbol como un deporte de inteligencia. Formamos jugadores que leen el partido, anticipan jugadas y toman decisiones bajo presión.' },
  { num: '03', title: 'Disciplina & Trabajo en Equipo', text: 'El respeto, la puntualidad y la colaboración son pilares. Formamos líderes que elevan a sus compañeros y asumen responsabilidades.' },
  { num: '04', title: 'Preparación Física & Mental', text: 'Un atleta completo domina su cuerpo y su mente. Trabajamos resistencia, velocidad, fuerza y fortaleza psicológica para competir al más alto nivel.' },
  { num: '05', title: 'Competitividad Real', text: 'Participamos en torneos y ligas oficiales para que nuestros jugadores experimenten la presión real de la competencia y crezcan con cada partido.' },
]

const programas = [
  { icon: <GiSoccerKick />, title: 'Entrenamiento Personalizado', desc: 'Planes individualizados según las capacidades, posición y objetivos de cada jugador.' },
  { icon: <GiHiveMind />, title: 'Acompañamiento Psicológico', desc: 'Fortalecemos la mentalidad competitiva, el control emocional y la confianza bajo presión.' },
  { icon: <GiWeightLiftingUp />, title: 'Preparación Física', desc: 'Programas de acondicionamiento físico adaptados por edad y categoría para maximizar el rendimiento.' },
  { icon: <PiBowlFoodBold />, title: 'Nutrición Deportiva', desc: 'Orientación nutricional para optimizar el rendimiento, la recuperación y el crecimiento de cada atleta.' },
  { icon: <TbRulerMeasure />, title: 'Control Físico & Tallaje', desc: 'Seguimiento periódico del desarrollo físico y antropométrico de cada jugador en su proceso formativo.' },
  { icon: <CgGym />, title: 'Gimnasio & Fuerza', desc: 'Trabajo de fuerza y potencia muscular adaptado para jugadores en formación según su etapa de desarrollo.' },
  { icon: <GrDocumentPerformance />, title: 'Alto Rendimiento', desc: 'Metodologías de élite para jugadores con proyección profesional, inspiradas en academias europeas.' },
  { icon: <GiPrayer />, title: 'Trabajo Mental', desc: 'Técnicas de concentración, visualización y mentalidad ganadora para rendir al máximo en momentos decisivos.' },
  { icon: <PiShootingStarFill />, title: 'Proyección Deportiva', desc: 'Conectamos talento con oportunidades reales en clubes nacionales e internacionales.' },
]

function PilaresPanel() {
  return (
    <div className="meto-items">
      {pilares.map((p) => (
        <div className="meto-item" key={p.num}>
          <div className="meto-num">{p.num}</div>
          <div>
            <div className="meto-title">{p.title}</div>
            <div className="meto-text">{p.text}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

function ProgramasPanel() {
  return (
    <div className="formacion-grid formacion-grid--tab">
      {programas.map((c, idx) => (
        <div key={c.title} className="form-card" data-aos="fade-up" data-aos-delay={idx * 60}>
          <div className="form-icon">{c.icon}</div>
          <div className="form-title">{c.title}</div>
          <div className="form-desc">{c.desc}</div>
        </div>
      ))}
    </div>
  )
}

export default function Metodologia() {
  return (
    <section id="metodologia" className="section section--md">
      <div className="container">
        <div className="meto-layout">
          <div className="meto-visual" style={{ position: 'relative' }} data-aos="fade-right">
            <div className="meto-img">
              <img src={metodologiaImg} alt="Metodología de entrenamiento Vadid" loading="lazy" />
            </div>
            <div className="meto-img-overlay" />
          </div>

          <div data-aos="fade-left">
            <p className="section-tag">Nuestro Método</p>
            <h2 className="section-title">
              MÉTODO Y <span>FORMACIÓN</span>
            </h2>
            <div className="gold-line" />

            <Tabs
              items={[
                { label: 'Pilares', content: <PilaresPanel /> },
                { label: 'Programas', content: <ProgramasPanel /> },
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
