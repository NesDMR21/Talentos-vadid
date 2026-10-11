import { useId, useState } from 'react'

const faqData = [
  {
    q: '¿Desde qué edad reciben jugadores?',
    a: 'Recibimos jugadores desde los 5 años. Contamos con las categorías Baby Fútbol (2018 a 2021), Sub-12 (2014), Sub-16 (2010) y Sub-20 (2006). Cada categoría tiene un enfoque y una metodología adaptados a la edad y al desarrollo del jugador.',
  },
  {
    q: '¿Dónde y a qué hora entrenan?',
    a: 'En el Parque Gilma Jiménez entrenamos lunes y viernes de 6:00 a 8:00 PM, miércoles de 4:00 a 6:00 PM y sábados de 8:00 a 10:00 AM. En las Canchas Nico de Suba entrenamos martes y jueves de 4:00 a 6:00 PM.',
  },
  {
    q: '¿Puedo asistir a una prueba sin inscribirme?',
    a: '¡Sí! Invitamos a todos los interesados a una prueba de selección sin costo y sin compromiso. Es la mejor manera de conocer nuestra metodología y de que nuestro cuerpo técnico evalúe las capacidades del jugador. Escríbenos por WhatsApp para coordinarla.',
  },
  {
    q: '¿Qué debo llevar a la primera prueba?',
    a: 'Ropa deportiva cómoda, guayos o tenis adecuados para cancha, agua y muchas ganas de demostrar tu talento. No es necesario traer balón. Recomendamos llegar 15 minutos antes del horario acordado.',
  },
  {
    q: '¿Las categorías son mixtas?',
    a: 'Sí. Las categorías 2010 y Baby Fútbol son mixtas: niños y niñas participan en los mismos entrenamientos y competencias. Creemos en el fútbol como un deporte para todos.',
  },
  {
    q: '¿Participan en torneos y competencias oficiales?',
    a: 'Sí. Competimos en la Liga de Fútbol de Bogotá, el Hexagonal del Suroriente, el Hexagonal de Timiza, la Liga de Suroriente y la Copa Ciudad Capital. La experiencia competitiva real es fundamental en nuestra metodología.',
  },
  {
    q: '¿Cómo puedo inscribir a mi hijo/a?',
    a: 'Escríbenos por WhatsApp (+57 313 456 5039) o llena el formulario de esta página. Coordinamos una prueba de valoración y, si el jugador es seleccionado, te explicamos todo el proceso de inscripción formal. También puedes escribir a clubvadid.futbol@gmail.com.',
  },
]

function FaqItem({ item, open, onToggle }) {
  const id = useId()

  return (
    <div className="faq-item">
      <h3 style={{ margin: 0 }}>
        <button
          type="button"
          className={'faq-q' + (open ? ' active' : '')}
          aria-expanded={open}
          aria-controls={id}
          id={`${id}-q`}
          onClick={onToggle}
        >
          {item.q}
          <span className="faq-icon" aria-hidden="true">
            +
          </span>
        </button>
      </h3>
      <div id={id} className={'faq-a' + (open ? ' open' : '')} role="region" aria-labelledby={`${id}-q`} inert={!open}>
        <div className="faq-a-inner">{item.a}</div>
      </div>
    </div>
  )
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="section section--sm">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }} data-aos="fade-up">
          <p className="section-tag" style={{ justifyContent: 'center' }}>
            Resolvemos tus dudas
          </p>
          <h2 className="section-title">
            PREGUNTAS <span>FRECUENTES</span>
          </h2>
          <div className="gold-line" style={{ margin: '0 auto' }} />
        </div>

        <div className="faq-wrap" data-aos="fade-up">
          {faqData.map((item, idx) => (
            <FaqItem
              key={item.q}
              item={item}
              open={openIndex === idx}
              onToggle={() => setOpenIndex((v) => (v === idx ? null : idx))}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
