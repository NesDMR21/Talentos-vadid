# TODO — Talentos Vadid

Ver `CLAUDE.md` para la guía del proyecto y las convenciones de código.

## Para que salga en Google (pasos manuales)

- [ ] Definir la URL definitiva y ponerla en `site.config.js` (`SITE_URL`) o como variable de entorno `SITE_URL` en Vercel
- [ ] Conectar el proyecto de Vercel al repo de GitHub (cada merge a `main` se publica solo)
- [ ] (Recomendado) Dominio propio, p. ej. clubvadid.com
- [ ] Google Search Console: verificar el sitio, enviar `sitemap.xml` y pedir indexación
- [ ] Perfil de Empresa en Google (Google Business Profile) para el club, con el link a la web
- [ ] Poner el link de la web en la bio de Instagram, TikTok y Facebook
- [ ] Pegar la nueva versión de `docs/apps-script-inscripciones.gs` en Apps Script y volver a desplegar

## Pendiente

- [ ] Correr `npm run fotos` (comprime ~170 MB de fotos a ~42 MB)
- [ ] Panel de títulos en `Torneos.jsx` cuando haya palmarés
- [ ] Horario por categoría
- [ ] Fotos reales para carpetas que solo tienen `.gitkeep` (comunidad, sedes, partidos, jugadores sub-8/12)
- [ ] Soporte de swipe táctil en Lightbox/Galería
- [ ] Analítica (Vercel Web Analytics es gratis)
- [ ] Sección de testimonios
