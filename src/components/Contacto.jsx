import { useState } from 'react'
import { MdOutlineAlternateEmail } from 'react-icons/md'
import { FaFacebook, FaPhoneAlt } from 'react-icons/fa'
import { FaMapLocationDot } from 'react-icons/fa6'
import { AiFillInstagram, AiFillTikTok } from 'react-icons/ai'
import WhatsappIcon from './WhatsappIcon.jsx'

const INITIAL_FORM = {
  nombre: '',
  edad: '',
  categoria: '',
  acudiente: '',
  email: '',
  telefono: '',
  mensaje: '',
  autorizacion: false,
  website: '', // honeypot: los humanos no lo ven; si viene lleno es un bot
}

const WA_NUMBER = '573134565039'
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(form) {
  const errors = {}
  if (!form.nombre.trim()) errors.nombre = 'Escribe el nombre del jugador.'
  const edad = Number(form.edad)
  if (!form.edad || edad < 5 || edad > 21) errors.edad = 'La edad debe estar entre 5 y 21 años.'
  if (!form.categoria) errors.categoria = 'Selecciona una categoría.'
  if (!EMAIL_RE.test(form.email.trim())) errors.email = 'Escribe un correo válido.'
  if (form.telefono.replace(/\D/g, '').length < 7) errors.telefono = 'Escribe un teléfono válido.'
  if (!form.autorizacion) errors.autorizacion = 'Debes autorizar el tratamiento de datos para continuar.'
  return errors
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
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target
    setForm((prev) => ({ ...prev, [id]: type === 'checkbox' ? checked : value }))
    if (errors[id]) setErrors((prev) => ({ ...prev, [id]: undefined }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (form.website) return

    const found = validate(form)
    setErrors(found)
    if (Object.keys(found).length > 0) return

    const { nombre, edad, categoria, email, telefono, acudiente, mensaje } = form
    const data = { nombre, edad, categoria, email, telefono, acudiente, mensaje }

    saveToSheet({ ...data, autorizacion: 'Sí', website: form.website })
    window.open(`https://wa.me/${WA_NUMBER}?text=${buildWaMessage(data)}`, '_blank', 'noopener')
    setSent(true)
  }

  const errorList = Object.values(errors).filter(Boolean)
  const invalid = (field) => (errors[field] ? true : undefined)

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
                  <a href={`https://wa.me/${WA_NUMBER}`} target="_blank" rel="noopener noreferrer">
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
              <a href="https://www.instagram.com/club_vadid/" target="_blank" rel="noopener noreferrer" className="social-btn">
                <AiFillInstagram /> Instagram
              </a>
              <a href="https://www.tiktok.com/@club.vadid" target="_blank" rel="noopener noreferrer" className="social-btn">
                <AiFillTikTok /> TikTok
              </a>
              <a
                href="https://www.facebook.com/andresska96/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
              >
                <FaFacebook /> Facebook
              </a>
            </div>

            <a
              href={`https://wa.me/${WA_NUMBER}?text=Hola%2C%20quiero%20inscribir%20a%20mi%20hijo%20en%20el%20Club%20Deportivo%20Talentos%20Vadid.`}
              target="_blank"
              rel="noopener noreferrer"
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
                    aria-invalid={invalid('nombre')}
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
                    aria-invalid={invalid('edad')}
                    placeholder="Ej: 12"
                    min="5"
                    max="21"
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
                    aria-invalid={invalid('categoria')}
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
                    <option value="2018-2021">2018 a 2021 · Baby Fútbol (desde 5 años)</option>
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
                    aria-invalid={invalid('email')}
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
                    aria-invalid={invalid('telefono')}
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

              <div className="form-hp" aria-hidden="true">
                <label htmlFor="website">No llenar este campo</label>
                <input type="text" id="website" tabIndex={-1} autoComplete="off" value={form.website} onChange={handleChange} />
              </div>

              <label className="form-consent" htmlFor="autorizacion">
                <input
                  type="checkbox"
                  id="autorizacion"
                  checked={form.autorizacion}
                  onChange={handleChange}
                  aria-invalid={invalid('autorizacion')}
                />
                <span>
                  Soy el jugador (mayor de edad) o su acudiente y autorizo al Club Deportivo Talentos Vadid a tratar estos datos para
                  gestionar la inscripción. *
                </span>
              </label>
              <details className="form-policy">
                <summary>Ver tratamiento de datos</summary>
                <p>
                  En cumplimiento de la Ley 1581 de 2012, los datos de este formulario se usan únicamente para contactarte sobre la
                  prueba y el proceso de inscripción en el Club Deportivo Talentos Vadid. No se venden ni se comparten con terceros.
                  Cuando el jugador es menor de edad, la autorización la da su padre, madre o acudiente. Puedes consultar, corregir o
                  pedir que eliminemos tus datos escribiendo a clubvadid.futbol@gmail.com.
                </p>
              </details>

              {errorList.length > 0 && (
                <div className="form-error" role="alert">
                  {errorList.map((msg) => (
                    <div key={msg}>{msg}</div>
                  ))}
                </div>
              )}

              {sent && errorList.length === 0 && (
                <p className="form-policy" role="status" style={{ color: 'var(--gold)' }}>
                  ¡Listo! Abrimos WhatsApp con tu solicitud. Si no se abrió, escríbenos al +57 313 456 5039.
                </p>
              )}

              <button type="submit" className="form-submit">
                Enviar inscripción →
              </button>

              <a
                href={`https://wa.me/${WA_NUMBER}?text=Hola%2C%20quiero%20información%20sobre%20el%20Club%20Deportivo%20Talentos%20Vadid.`}
                target="_blank"
                rel="noopener noreferrer"
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
