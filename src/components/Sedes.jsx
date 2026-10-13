const sedes = [
  {
    name: 'Parque Gilma Jiménez',
    address: 'Bogotá DC · Suroriente',
    mapsQuery: 'Parque Gilma Jiménez, Bogotá DC',
    horarios: [
      { dia: 'Lunes y viernes', hora: '6:00 PM – 8:00 PM' },
      { dia: 'Miércoles', hora: '4:00 PM – 6:00 PM' },
      { dia: 'Sábados', hora: '8:00 AM – 10:00 AM' },
    ],
  },
  {
    name: 'Canchas Nico — Suba',
    address: 'Bogotá DC · Localidad de Suba',
    mapsQuery: 'Canchas Nico, Suba, Bogotá DC',
    horarios: [{ dia: 'Martes y jueves', hora: '4:00 PM – 6:00 PM' }],
  },
]

function mapsUrl(query) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}

function mapsEmbedUrl(query) {
  return `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`
}

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
          {sedes.map((sede, idx) => (
            <div className="sede-card" key={sede.name} data-aos="fade-up" data-aos-delay={idx * 120}>
              <div className="sede-map">
                <iframe
                  title={`Mapa de ${sede.name}`}
                  src={mapsEmbedUrl(sede.mapsQuery)}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
              <div className="sede-body">
                <h3 className="sede-name">{sede.name}</h3>
                <p className="sede-address">
                  {sede.address}
                  {' · '}
                  <a href={mapsUrl(sede.mapsQuery)} target="_blank" rel="noopener noreferrer">
                    Ver en Google Maps
                  </a>
                </p>
                <p className="horarios-title">Horarios de entrenamiento</p>
                {sede.horarios.map((h) => (
                  <div className="horario-row" key={h.dia}>
                    <span className="horario-dia">{h.dia}</span>
                    <span className="horario-hora">{h.hora}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="sedes-invite" data-aos="fade-up">
          <h3>¿TIENES TALENTO?</h3>
          <p>Abre la puerta de tu futuro. Asiste a una prueba de selección sin costo y demuestra lo que puedes hacer.</p>
          <a
            href="https://wa.me/573134565039?text=Hola%2C%20quisiera%20agendar%20una%20prueba%20de%20selecci%C3%B3n%20en%20Club%20Deportivo%20Talentos%20Vadid."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Agenda tu prueba →
          </a>
        </div>
      </div>
    </section>
  )
}
