import { useMemo } from 'react'
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTikTok } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";

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

export default function Contacto() {
  const waNumber = '573134565039'
  const action = useMemo(() => `https://wa.me/${waNumber}`, [waNumber])

  const onSubmit = (e) => {
    e.preventDefault()

    const form = e.currentTarget
    const nombre = form.querySelector('#nombre').value
    const edad = form.querySelector('#edad').value
    const categoria = form.querySelector('#categoria').value
    const email = form.querySelector('#email').value
    const telefono = form.querySelector('#telefono').value
    const acudiente = form.querySelector('#acudiente').value
    const mensaje = form.querySelector('#mensaje').value

    if (!nombre || !edad || !categoria || !email || !telefono) {
      alert('Por favor completa los campos requeridos.')
      return
    }

    const waMsg = buildWaMessage({
      nombre,
      edad,
      categoria,
      email,
      telefono,
      acudiente,
      mensaje,
    })

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
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
              </svg>
              Escribir por WhatsApp directamente
            </a>
          </div>

          <div data-aos="fade-left" data-aos-delay="100">
            <form id="contactForm" novalidate onSubmit={onSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label" htmlFor="nombre">
                    Nombre del jugador *
                  </label>
                  <input className="form-input" type="text" id="nombre" placeholder="Nombre completo" required />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="edad">
                    Edad *
                  </label>
                  <input className="form-input" type="number" id="edad" placeholder="Ej: 12" min="5" max="25" required />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="categoria">
                    Categoría de interés *
                  </label>
                  <select className="form-select" id="categoria" required>
                    <option value="" disabled defaultValue="">
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
                  <input className="form-input" type="text" id="acudiente" placeholder="Nombre del acudiente" />
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
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                </svg>
                O contáctanos directamente por WhatsApp
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

