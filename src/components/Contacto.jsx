import { useMemo, useState } from 'react'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import { FaMapLocationDot } from 'react-icons/fa6'
import { AiFillInstagram, AiFillTikTok } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
import WhatsappIcon from './WhatsappIcon.jsx'

const INITIAL_FORM = {
  nombre: '',
  edad: '',
  categoria: '',
  acudiente: '',
  email: '',
  telefono: '',
  mensaje: '',
}

function buildWaMessage(data) {
  const nombre = data.nombre.trim()
  const edad = data.edad
  const categoria = data.categoria
  const email = data.email.trim()
  const telefono = data.telefono.trim()
  const acudiente = data.acudiente.trim()
  const mensaje = data.mensaje.trim()

  return encodeURIComponent(
    `Hola, me interesa inscribir a mi jugador en el Club Deportivo Talentos Vadid.\n\n👤 Jugador: ${nombre}\n🎂 Edad: ${edad}\n⚽ Categoría: ${categoria}\n${acudiente ? `👨‍👩‍👦 Acudiente: ${acudiente}\n` : ''}📧 Email: ${email}\n📞 Teléfono: ${telefono}${mensaje ? `\n💬 Mensaje: ${mensaje}` : ''}`,
  )
}

// Web App de Google Apps Script que guarda cada inscripción en una Google
// Sheet y avisa por correo a clubvadid.futbol@gmail.com. Código fuente y
// pasos de despliegue en docs/apps-script-inscripciones.gs y CLAUDE.md.
const SHEET_ENDPOINT = 'https://script.google.com/macros/s/AKfycbw6qlCWfbIiGxqnflP0wPTSnSOadSCLXDX2XPdtsXW6pPCGwpCXeSQhbHhaHl6P0oUfaw/exec'

function saveToSheet(data) {
  fetch(SHEET_ENDPOINT, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(data),
  }).catch(() => {})
}

export default function Contacto() {
  const waNumber = '573134565039'
  const action = useMemo(() => `https://wa.me/${waNumber}`, [waNumber])
  const [form, setForm] = useState(INITIAL_FORM)

  const handleChange = (e) => {
    const { id, value } = e.target
    setForm((prev) => ({ ...prev, [id]: value }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const { nombre, edad, categoria, email, telefono, acudiente, mensaje } = form

    if (!nombre || !edad || !categoria || !email || !telefono) {
      alert('Por favor completa los campos requeridos.')
      return
    }

    const waMsg = buildWaMessage({ nombre, edad, categoria, email, telefono, acudiente, mensaje })

    saveToSheet({ nombre, edad, categoria, email, telefono, acudiente, mensaje })
    window.open(`${action}?text=${waMsg}`, '_blank', 'noopener')
  }

  return (
    <section id="contacto" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }} data-aos="fade-up">
          <p className="section-tag" style={{ justifyContent: 'center' }}>
            Únete
          </p>
          <h2 className="section-title">
            EMPIEZA TU <span>HISTORIA</span>
          </h2>
          <div className="gold-line" style={{ margin: '0 auto' }} />
        </div>

        <div className="contacto-layout">
          <div className="contacto-info" data-aos="fade-right">
            <h3
              style={{
                fontFamily: 'var(--font-cond)',
                fontSize: '1.5rem',
                fontWeight: 700,
                letterSpacing: '.06em',
                textTransform: 'uppercase',
                color: 'var(--white)',
                marginBottom: 16,
              }}
            >
              Hablemos
            </h3>
            <p>
              ¿Tu hijo tiene talento y pasión por el fútbol? Escríbenos. Estamos aquí para guiarte en cada paso del camino hacia su desarrollo deportivo y proyección profesional.
            </p>

            <div className="contact-detail">
              <div className="contact-detail-icon"><FaPhoneAlt /></div>
              <div>
                <div className="contact-detail-label">WhatsApp Business</div>
                <div className="contact-detail-val">
                  <a href="https://wa.me/573134565039" target="_blank" rel="noopener">
                    +57 313 456 5039
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-detail-icon"><MdOutlineAlternateEmail /></div>
              <div>
                <div className="contact-detail-label">Correo electrónico</div>
                <div className="contact-detail-val">
                  <a href="mailto:clubvadid.futbol@gmail.com">clubvadid.futbol@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-detail-icon"><FaMapLocationDot /></div>
              <div>
                <div className="contact-detail-label">Ubicación</div>
                <div className="contact-detail-val">
                  Bogotá DC, Colombia<br />Parque Gilma Jiménez · Canchas Nico Suba
                </div>
              </div>
            </div>

            <div className="social-row">
              <a href="https://www.instagram.com/club_vadid/" target="_blank" rel="noopener" className="social-btn">
                <AiFillInstagram /> Instagram
              </a>
              <a href="https://www.tiktok.com/@club.vadid" target="_blank" rel="noopener" className="social-btn">
                <AiFillTikTok /> TikTok
              </a>
              <a
                href="https://www.facebook.com/andresska96/"
                target="_blank"
                rel="noopener"
                className="social-btn"
              >
                <FaFacebook /> Facebook
              </a>
            </div>

            <a
              href="https://wa.me/573134565039?text=Hola%2C%20quiero%20inscribir%20a%20mi%20hijo%20en%20el%20Club%20Deportivo%20Talentos%20Vadid."
              target="_blank"
              rel="noopener"
              className="whatsapp-direct"
              style={{ marginTop: 24 }}
            >
              <WhatsappIcon />
              Escribir por WhatsApp directamente
            </a>
          </div>

          <div data-aos="fade-left" data-aos-delay="100">
            <form id="contactForm" noValidate onSubmit={onSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label" htmlFor="nombre">
                    Nombre del jugador *
                  </label>
                  <input
                    className="form-input"
                    type="text"
                    id="nombre"
                    placeholder="Nombre completo"
                    value={form.nombre}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="edad">
                    Edad *
                  </label>
                  <input
                    className="form-input"
                    type="number"
                    id="edad"
                    placeholder="Ej: 12"
                    min="5"
                    max="25"
                    value={form.edad}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="categoria">
                    Categoría de interés *
                  </label>
                  <select
                    className="form-select"
                    id="categoria"
                    value={form.categoria}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Selecciona una categoría
                    </option>
                    <option value="2006">2006 · Sub-20</option>
                    <option value="2010">2010 · Sub-16 (Mixta)</option>
                    <option value="2014">2014 · Sub-12</option>
                    <option value="2018">2018 · Baby Fútbol</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="acudiente">
                    Acudiente (opcional)
                  </label>
                  <input
                    className="form-input"
                    type="text"
                    id="acudiente"
                    placeholder="Nombre del acudiente"
                    value={form.acudiente}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="email">
                    Correo electrónico *
                  </label>
                  <input
                    className="form-input"
                    type="email"
                    id="email"
                    placeholder="correo@ejemplo.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="telefono">
                    Teléfono / WhatsApp *
                  </label>
                  <input
                    className="form-input"
                    type="tel"
                    id="telefono"
                    placeholder="+57 300 000 0000"
                    value={form.telefono}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group full">
                  <label className="form-label" htmlFor="mensaje">
                    Mensaje adicional
                  </label>
                  <textarea
                    className="form-textarea"
                    id="mensaje"
                    placeholder="Cuéntanos sobre el jugador, experiencia previa, posición favorita..."
                    value={form.mensaje}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <button type="submit" className="form-submit">
                Enviar solicitud de inscripción →
              </button>

              <a
                href="https://wa.me/573134565039?text=Hola%2C%20quiero%20información%20sobre%20el%20Club%20Deportivo%20Talentos%20Vadid."
                target="_blank"
                rel="noopener"
                className="whatsapp-direct"
              >
                <WhatsappIcon />
                O contáctanos directamente por WhatsApp
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
