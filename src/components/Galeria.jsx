import { useState } from "react";
import GalleryModal from "./GalleryModal";

// Importar imágenes para que Vite las sirva correctamente (no depender de /public)
import entrenamiento1 from "../img/galeria/entrenamientos/1.jpg";
import entrenamiento2 from "../img/galeria/entrenamientos/2.jpg";
import entrenamiento3 from "../img/galeria/entrenamientos/3.jpg";
import entrenamiento4 from "../img/galeria/entrenamientos/4.jpg";
import entrenamiento5 from "../img/galeria/entrenamientos/5.jpg";
import entrenamiento6 from "../img/galeria/entrenamientos/6.jpg";

import competencia from "../img/galeria/competencias/com.jpg";
import competencia1 from "../img/galeria/competencias/competencia1.jpg";
import competencia2 from "../img/galeria/competencias/competencia2.jpg";
import competencia3 from "../img/galeria/competencias/competencia3.jpg";

import evento1 from "../img/galeria/eventos/1.jpg";
import evento2 from "../img/galeria/eventos/2.jpg";
import evento3 from "../img/galeria/eventos/3.jpg";
import evento4 from "../img/galeria/eventos/4.jpg";

import profesor1 from "../img/galeria/profesores/1.jpg";
import profesor2 from "../img/galeria/profesores/2.jpg";
import profesor3 from "../img/galeria/profesores/3.jpg";
import profesor4 from "../img/galeria/profesores/4.jpg";

export default function Galeria() {
  const [selectedAlbum, setSelectedAlbum] = useState(null);
  const albums = [
    {
      id: 1,
      title: "Entrenamientos",
      cover: entrenamiento1,
      images: [
        entrenamiento1,
        entrenamiento2,
        entrenamiento3,
        entrenamiento4,
        entrenamiento5,
        entrenamiento6,
      ],
    },
    {
      id: 2,
      title: "Competencias",
      cover: competencia,
      images: [competencia, competencia1, competencia2, competencia3],
    },
    {
      id: 3,
      title: "Eventos",
      cover: evento1,
      images: [evento1, evento2, evento3, evento4],
    },
    {
      id: 4,
      title: "Profesores",
      cover: profesor1,
      images: [profesor1, profesor2, profesor3, profesor4],
    },
  ];

  return (
    <section id="galeria" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 48 }} data-aos="fade-up">
          <p className="section-tag" style={{ justifyContent: 'center' }}>
            Momentos
          </p>
          <h2 className="section-title">
            NUESTRA <span>GALERÍA</span>
          </h2>
          <div className="gold-line" style={{ margin: '0 auto' }} />
        </div>

        <div className="gallery-grid" data-aos="fade-up">
  {albums.map((album) => (
    <div
      key={album.id}
      className="gallery-item"
      onClick={() => setSelectedAlbum(album)}
    >
      <img
        src={album.cover}
        alt={album.title}
        loading="lazy"
      />

      <div className="gallery-overlay">
        <span className="gallery-overlay-text">
          {album.title}
        </span>
      </div>
    </div>
  ))}
</div>

        <p
          style={{
            textAlign: 'center',
            marginTop: 32,
            fontSize: '.82rem',
            color: 'rgba(245,245,245,.25)',
            fontFamily: 'var(--font-cond)',
            letterSpacing: '.1em',
            textTransform: 'uppercase',
          }}
          data-aos="fade-up"
        >
          Las imágenes serán reemplazadas por fotos reales del club
        </p>
      </div>
      <GalleryModal
    key={selectedAlbum?.id ?? "none"}
    album={selectedAlbum}
    onClose={() => setSelectedAlbum(null)}
/>

    </section>
  )
}

