# Club Deportivo Talentos Vadid — sitio web

Landing page oficial del Club Vadid (Bogotá DC). React 19 + Vite 8, desplegada en Vercel.

```
npm install
npm run dev      # desarrollo
npm run build    # build de producción
npm run lint     # revisar código
npm run fotos    # comprimir fotos nuevas antes de subirlas
```

- Contenido y secciones: `src/components/`
- Fotos de la galería: `src/img/galeria/<categoría>/` (se cargan solas, ver `src/data/gallery.js`)
- Staff: `src/data/staff.js`
- SEO (URL pública, datos del club): `site.config.js`
- Formulario de inscripción → Google Sheet: `docs/GUIA-INSCRIPCIONES.md`

Guía técnica completa en `CLAUDE.md`, pendientes en `TODO.md`.
