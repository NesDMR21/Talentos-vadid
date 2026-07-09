import { useEffect, useState } from 'react'

const faqData = [
  {
    q: '¿Desde qué edad reciben jugadores?',
    a: 'Recibimos jugadores desde los 5 años en adelante. Contamos con categorías Baby Fútbol (desde 2018), Sub-12 (2014), Sub-16 (2010) y Sub-20 (2006). Cada categoría tiene un enfoque y metodología adaptada a la edad y desarrollo del jugador.',
  },
  {
    q: '¿Puedo asistir a una prueba sin inscribirme?',
    a: '¡Sí! Invitamos a todos los interesados a asistir a una prueba de selección sin compromiso. Es la mejor manera de conocer nuestra metodología y que nuestro cuerpo técnico evalúe las capacidades del jugador. Contáctanos por WhatsApp para coordinar.',
  },
  {
    q: '¿Qué debo llevar a la primera prueba?',
    a: 'Ropa deportiva cómoda, guayos o tenis adecuados para cancha, agua y muchas ganas de demostrar tu talento. No es necesario traer balón. Recomendamos llegar 15 minutos antes del horario acordado.',
  },
  {
    q: '¿Las categorías son mixtas?',
    a: 'Sí. Las categorías 2010 y 2018 son mixtas, participando niños y niñas en los mismos entrenamientos y competencias. Creemos en la inclusión y en el fútbol como un deporte para todos sin distinción de género.',
  },
  {
    q: '¿Participan en torneos y competencias oficiales?',
    a: 'Absolutamente. Competimos en la Liga de Fútbol de Bogotá, el Hexagonal del Suroriente, Hexagonal de Timiza, Liga de Suroriente y Copa Ciudad Capital. La experiencia competitiva real es fundamental en nuestra metodología.',
  },
  {
    q: '¿Cómo puedo inscribir a mi hijo/a?',
    a: 'El proceso es sencillo: contáctanos por WhatsApp (+57 313 456 5039) o llena el formulario en esta página. Coordinaremos una prueba de valoración y si el jugador es seleccionado, te explicaremos todo el proceso de inscripción formal. También puedes escribir a clubvadid.futbol@gmail.com.',
  },
]

function FaqItem({ item, open, onToggle }) {
  const [maxHeight, setMaxHeight] = useState(0)

  useEffect(() => {
    const el = document.getElementById(`faq-a-${item.q}`)
    if (!el) return
    requestAnimationFrame(() => {
      setMaxHeight(open ? el.scrollHeight : 0)
    })
  }, [open, item.q])

  return (
    <div className="faq-item">
      <button className={'faq-q' + (open ? ' active' : '')} aria-expanded={open} onClick={onToggle}>
        {item.q}
        <span className="faq-icon">+</span>
      </button>
      <div id={`faq-a-${item.q}`} className="faq-a" style={{ maxHeight }}>
        <div className="faq-a-inner">{item.a}</div>
      </div>
    </div>
  )
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="section">
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

