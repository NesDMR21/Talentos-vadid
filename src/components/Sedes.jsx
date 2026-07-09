export default function Sedes() {
  return (
    <section id="sedes" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }} data-aos="fade-up">
          <p className="section-tag" style={{ justifyContent: 'center' }}>
            Dónde Entrenamos
          </p>
          <h2 className="section-title">
            NUESTRAS <span>SEDES</span>
          </h2>
          <div className="gold-line" style={{ margin: '0 auto' }} />
        </div>

        <div className="sedes-grid">
          <div className="sede-card" data-aos="fade-up" data-aos-delay="0">
            <div className="sede-map">
              <span style={{ position: 'relative', zIndex: 1 }}>📍</span>
            </div>
            <div className="sede-body">
              <h3 className="sede-name">Parque Gilma Jiménez</h3>
              <p className="sede-address">Bogotá DC · Suroriente</p>
              <p className="horarios-title">Horarios de entrenamiento</p>
              <div className="horario-row">
                <span className="horario-dia">Lunes y Viernes</span>
                <span className="horario-hora">6:00PM – 8:00PM</span>
              </div>
              <div className="horario-row">
                <span className="horario-dia">Miércoles</span>
                <span className="horario-hora">4:00PM – 6:00PM</span>
              </div>
              <div className="horario-row">
                <span className="horario-dia">Sábados y Domingos</span>
                <span className="horario-hora">8:00AM – 10:00AM</span>
              </div>
            </div>
          </div>

          <div className="sede-card" data-aos="fade-up" data-aos-delay="120">
            <div className="sede-map">
              <span style={{ position: 'relative', zIndex: 1 }}>📍</span>
            </div>
            <div className="sede-body">
              <h3 className="sede-name">Canchas Nico — Suba</h3>
              <p className="sede-address">Bogotá DC · Localidad de Suba</p>
              <p className="horarios-title">Horarios de entrenamiento</p>
              <div className="horario-row">
                <span className="horario-dia">Lunes y Viernes</span>
                <span className="horario-hora">6:00PM – 8:00PM</span>
              </div>
              <div className="horario-row">
                <span className="horario-dia">Miércoles</span>
                <span className="horario-hora">4:00PM – 6:00PM</span>
              </div>
              <div className="horario-row">
                <span className="horario-dia">Sábados y Domingos</span>
                <span className="horario-hora">8:00AM – 10:00AM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="sedes-invite" data-aos="fade-up">
          <h3>¿TIENES TALENTO?</h3>
          <p>Abre la puerta de tu futuro. Asiste a una prueba de selección sin costo y demuestra lo que puedes hacer.</p>
          <a
            href="https://wa.me/573134565039?text=Hola%2C%20quisiera%20agendar%20una%20prueba%20de%20selecci%C3%B3n%20en%20Club%20Deportivo%20Talentos%20Vadid."
            target="_blank"
            rel="noopener"
            className="btn-primary"
          >
            Agenda tu prueba →
          </a>
        </div>
      </div>
    </section>
  )
}

