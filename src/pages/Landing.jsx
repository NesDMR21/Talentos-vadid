import IntroOverlay from '../components/IntroOverlay.jsx'
import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import Sobre from '../components/Sobre.jsx'
import Categorias from '../components/Categorias.jsx'
import Formacion from '../components/Formacion.jsx'
import Metodologia from '../components/Metodologia.jsx'
import Proyeccion from '../components/Proyeccion.jsx'
import Torneos from '../components/Torneos.jsx'
import Galeria from '../components/Galeria.jsx'
import Sedes from '../components/Sedes.jsx'
import Faq from '../components/Faq.jsx'
import Contacto from '../components/Contacto.jsx'
import Footer from '../components/Footer.jsx'
import WaFloat from '../components/WaFloat.jsx'
import InitAos from '../components/InitAos.jsx'
import Logo from '../img/Logo.png'

export default function Landing() {
  return (
    <>
      <InitAos />
      <IntroOverlay />
      <div className="shield-bg">
        <img src={Logo} alt="" aria-hidden="true" />
      </div>
      <Navbar />

      <main>
        <Hero />
        <Sobre />
        <Categorias />
        <Formacion />
        <Metodologia />
        <Proyeccion />
        <Torneos />
        <Galeria />
        <Sedes />
        <Faq />
        <Contacto />
        <Footer />
      </main>

      <WaFloat />
    </>
  )
}


