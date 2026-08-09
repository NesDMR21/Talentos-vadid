// Cómo subir fotos reales del club a la galería:
// 1. Copia el archivo (jpg, jpeg, png o webp) dentro de la subcarpeta de su categoría en src/img/galeria/:
//    entrenamientos/ · partidos/ · jugadores/ · sedes/ · comunidad/
// 2. Opcional: si la foto es de una categoría de edad específica, colócala en una subcarpeta con el
//    slug de esa categoría, por ejemplo src/img/galeria/jugadores/sub-20/. Slugs disponibles: sub-20,
//    sub-16, sub-12, sub-8. Esto habilita un filtro extra por edad dentro de esa categoría en la web.
// 3. Guarda. Vite lo detecta automáticamente y la foto aparece en su categoría (y edad, si aplica).
// No hace falta editar este archivo ni ningún componente — el nombre del archivo no importa.
//
// Las fotos originales (a veces varios MB cada una) se sirven optimizadas: vite-imagetools genera
// automáticamente versiones más livianas en .webp para la miniatura, el carrusel y el visor grande.

const thumbModules = import.meta.glob('../img/galeria/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
  eager: true,
  import: 'default',
  query: 'w=480&format=webp',
})

const featuredModules = import.meta.glob('../img/galeria/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
  eager: true,
  import: 'default',
  query: 'w=1200&format=webp',
})

const fullModules = import.meta.glob('../img/galeria/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
  eager: true,
  import: 'default',
  query: 'w=1920&format=webp',
})

export const CATEGORIES = [
  { key: 'entrenamientos', label: 'Entrenamientos' },
  { key: 'partidos', label: 'Partidos' },
  { key: 'jugadores', label: 'Jugadores' },
  { key: 'sedes', label: 'Sedes' },
  { key: 'comunidad', label: 'Comunidad' },
]

export const TEAMS = [
  { key: 'sub-20', label: 'Sub-20' },
  { key: 'sub-16', label: 'Sub-16' },
  { key: 'sub-12', label: 'Sub-12' },
  { key: 'sub-8', label: 'Sub-8' },
]

const CATEGORY_LABELS = Object.fromEntries(CATEGORIES.map((c) => [c.key, c.label]))
const TEAM_LABELS = Object.fromEntries(TEAMS.map((t) => [t.key, t.label]))

export const galleryImages = Object.keys(fullModules)
  .sort()
  .map((path, idx) => {
    const [, category, team] = path.match(/\/galeria\/([^/]+)\/(?:([^/]+)\/)?[^/]+$/)
    const categoryLabel = CATEGORY_LABELS[category] ?? category
    const teamKey = team && TEAM_LABELS[team] ? team : null
    const teamLabel = teamKey ? TEAM_LABELS[teamKey] : null

    return {
      id: `img-${idx}`,
      type: 'image',
      category,
      team: teamKey,
      thumb: thumbModules[path],
      featured: featuredModules[path],
      src: fullModules[path],
      alt: `Club Deportivo Talentos Vadid — ${categoryLabel}${teamLabel ? ` ${teamLabel}` : ''} — foto ${idx + 1}`,
    }
  })
