import Logo from '../img/Logo.png'
import { MdOutlineAlternateEmail } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTikTok } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={Logo} alt="Talentos Vadid" style={{ width: 44, height: 44, objectFit: 'contain' }} />
              <div style={{ fontFamily: 'var(--font-cond)', fontSize: '1rem', fontWeight: 700, letterSpacing: '.06em' }}>
                TALENTOS VADID
                <div style={{ fontSize: '.72rem', fontWeight: 400, letterSpacing: '.08em', color: 'var(--gold)', marginTop: 2 }}>
                  CLUB DEPORTIVO
                </div>
              </div>
            </div>
            <p>Formando campeones con disciplina, carácter y pasión por el fútbol. Bogotá DC, Colombia.</p>
            <p className="footer-slogan">✦ Forjando disciplina, creando campeones ✦</p>
          </div>

          <div>
            <p className="footer-col-title">Navegación</p>
            <ul className="footer-links">
              <li>
                <a href="#sobre">Sobre Nosotros</a>
              </li>
              <li>
                <a href="#categorias">Categorías</a>
              </li>
              <li>
                <a href="#formacion">Formación Integral</a>
              </li>
              <li>
                <a href="#metodologia">Metodología</a>
              </li>
              <li>
                <a href="#proyeccion">Proyección</a>
              </li>
            </ul>
          </div>

          <div>
            <p className="footer-col-title">Información</p>
            <ul className="footer-links">
              <li>
                <a href="#torneos">Torneos</a>
              </li>
              <li>
                <a href="#galeria">Galería</a>
              </li>
              <li>
                <a href="#sedes">Sedes</a>
              </li>
              <li>
                <a href="#faq">Preguntas Frecuentes</a>
              </li>
              <li>
                <a href="#contacto">Contacto</a>
              </li>
            </ul>
          </div>

          <div>
            <p className="footer-col-title">Redes Sociales</p>
            <ul className="footer-links">
              <li>
                <a href="https://www.instagram.com/club_vadid/" target="_blank" rel="noopener">
                  <AiFillInstagram /> Instagram
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@club.vadid" target="_blank" rel="noopener">
                  <AiFillTikTok /> TikTok
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/andresska96/" target="_blank" rel="noopener">
                  <FaFacebook /> Facebook
                </a>
              </li>
              <li>
                <a href="https://wa.me/573134565039" target="_blank" rel="noopener">
                  <FaWhatsappSquare /> WhatsApp
                </a>
              </li>
              <li>
                <a href="mailto:clubvadid.futbol@gmail.com">
                  <MdOutlineAlternateEmail /> Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">© 2024 Club Deportivo Talentos Vadid · Bogotá DC, Colombia · Todos los derechos reservados.</p>
          <div className="footer-bottom-links">
            <a href="#hero">Inicio</a>
            <a href="mailto:clubvadid.futbol@gmail.com">Contacto</a>
            <a href="https://wa.me/573134565039" target="_blank" rel="noopener">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

