import { CgGym } from "react-icons/cg";
import { GiPrayer } from "react-icons/gi";
import { PiBowlFoodBold } from "react-icons/pi";
import { PiShootingStarFill } from "react-icons/pi";
import { GiHiveMind } from "react-icons/gi";
import { GiSoccerKick } from "react-icons/gi";
import { GrDocumentPerformance } from "react-icons/gr";
import { TbRulerMeasure } from "react-icons/tb";

export default function Formacion() {
  return (
    <section id="formacion" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }} data-aos="fade-up">
          <p className="section-tag" style={{ justifyContent: 'center' }}>
            Desarrollo Completo
          </p>
          <h2 className="section-title">
            FORMACIÓN <span>INTEGRAL</span>
          </h2>
          <div className="gold-line" style={{ margin: '0 auto 24px' }} />
          <p style={{ maxWidth: 540, margin: '0 auto', color: 'rgba(245,245,245,.45)', fontSize: '.9rem', lineHeight: 1.7 }}>
            No solo formamos futbolistas. Construimos personas completas, preparadas para los desafíos del deporte profesional y la vida.
          </p>
        </div>

        <div className="formacion-grid">
          {[ 
            {icon:<GiSoccerKick/>, title:'Entrenamiento Personalizado', desc:'Planes individualizados según las capacidades, posición y objetivos de cada jugador.'},
            {icon:<GiHiveMind/>, title:'Acompañamiento Psicológico', desc:'Fortalecemos la mentalidad competitiva, el control emocional y la confianza bajo presión.'},
            {icon:<PiBowlFoodBold/>, title:'Preparación Física', desc:'Programas de acondicionamiento físico adaptados por edad y categoría para maximizar el rendimiento.'},
            {icon:<PiBowlFoodBold/>, title:'Nutrición Deportiva', desc:'Orientación nutricional para optimizar el rendimiento, la recuperación y el crecimiento de cada atleta.'},
            {icon:<TbRulerMeasure/>, title:'Control Físico & Tallaje', desc:'Seguimiento periódico del desarrollo físico y antropométrico de cada jugador en su proceso formativo.'},
            {icon:<CgGym/>, title:'Gimnasio & Fuerza', desc:'Trabajo de fuerza y potencia muscular adaptado para jugadores en formación según su etapa de desarrollo.'},
            {icon:<GrDocumentPerformance/>, title:'Alto Rendimiento', desc:'Metodologías de élite para jugadores con proyección profesional, inspiradas en academias europeas.'},
            {icon:<GiPrayer/>, title:'Trabajo Mental', desc:'Técnicas de concentración, visualización y mentalidad ganadora para rendir al máximo en momentos decisivos.'},
            {icon:<PiShootingStarFill/>, title:'Proyección Deportiva', desc:'Conectamos talento con oportunidades reales en clubes nacionales e internacionales.'},
          ].map((c, idx) => (
            <div key={c.title} className="form-card" data-aos="fade-up" data-aos-delay={idx * 60}>
              <div className="form-icon">{c.icon}</div>
              <div className="form-title">{c.title}</div>
              <div className="form-desc">{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

