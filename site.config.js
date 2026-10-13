// Datos del sitio que usa el SEO (vite.config.js los inyecta en el HTML y genera
// robots.txt, sitemap.xml y los datos estructurados para Google).
//
// SITE_URL: dirección pública definitiva de la página, sin "/" al final.
// Ej: 'https://clubvadid.com' o 'https://talentos-vadid.vercel.app'.
// También se puede definir como variable de entorno SITE_URL en Vercel. Si no se
// define, en Vercel se usa automáticamente el dominio de producción del proyecto
// (VERCEL_PROJECT_PRODUCTION_URL). Fuera de Vercel y sin SITE_URL, el sitio
// funciona igual pero sin canonical ni sitemap.
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
export const SITE_URL = (process.env.SITE_URL || (vercelUrl ? `https://${vercelUrl}` : '')).replace(/\/$/, '')

export const SITE = {
  name: 'Club Deportivo Talentos Vadid',
  alternateNames: ['Club Vadid', 'Talentos Vadid', 'Club Talentos Vadid'],
  description:
    'Club Vadid (Club Deportivo Talentos Vadid): escuela de fútbol en Bogotá para niños y jóvenes desde los 5 años. Categorías Baby Fútbol, Sub-12, Sub-16 y Sub-20, sedes en Parque Gilma Jiménez y Suba. Agenda una prueba sin costo.',
  phone: '+57 313 456 5039',
  email: 'clubvadid.futbol@gmail.com',
  sameAs: [
    'https://www.instagram.com/club_vadid/',
    'https://www.tiktok.com/@club.vadid',
    'https://www.facebook.com/andresska96/',
  ],
  sedes: [
    { name: 'Parque Gilma Jiménez', locality: 'Bogotá' },
    { name: 'Canchas Nico, Suba', locality: 'Bogotá' },
  ],
}
