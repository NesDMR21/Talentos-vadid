# Talentos Vadid — Guía del proyecto

Landing page del Club Deportivo Talentos Vadid (Bogotá DC). SPA en React + Vite, sin backend ni router — todo el contenido vive en `src/pages/Landing.jsx`, que compone secciones como componentes independientes.

## Stack

- React 19 + Vite 8
- `aos` para animaciones on-scroll (inicializado en `InitAos.jsx`)
- `react-icons` para iconografía (Ai/Fa)
- `vite-imagetools` para variantes de imagen (webp)
- ESLint flat config (`eslint.config.js`) con `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh` y `eslint-plugin-jsx-a11y`
- Sin TypeScript, sin PropTypes, sin Prettier — el estilo se mantiene a mano (ver convenciones abajo)

## Comandos

```
npm run dev      # servidor de desarrollo (Vite)
npm run build    # build de producción
npm run lint     # eslint .
npm run preview  # preview del build
```

## Estructura

- `src/pages/Landing.jsx` — compone todas las secciones en orden.
- `src/components/` — un componente por sección (`Hero`, `Sobre`, `Categorias`, `Metodologia`, `Proyeccion`, `Torneos`, `Galeria`/`GaleriaDestacada`, `Staff`, `Sedes`, `Faq`, `Contacto`, `Footer`, `Navbar`, `WaFloat`, `IntroOverlay`, `InitAos`) más utilitarios (`Tabs`, `Lightbox`, `WhatsappIcon`).
- `src/data/gallery.js` — carga imágenes reales desde `src/img/galeria/**` vía `import.meta.glob` (carpetas: `competencias`, `comunidad`, `entrenamientos`, `eventos`, `jugadores`, `partidos`, `profesores`, `sedes`). Algunas subcarpetas aún no tienen fotos reales (solo `.gitkeep`).
- `src/data/staff.js` — datos del staff, fotos en `src/img/staff/`.
- `src/styles/talentos-vadid.css` — único archivo CSS global (sin CSS modules).

## Convenciones de código

- Imports: comillas simples, sin `;`, agrupando named imports del mismo paquete (`import { AiFillInstagram, AiFillTikTok } from 'react-icons/ai'`). Varios componentes antiguos mezclan estilos (comillas dobles + `;`) — al tocar un archivo, normalizar al estilo de comillas simples/sin `;`.
- Inputs de formulario controlados con `useState`, no `document.querySelector`/refs directos al DOM (ver `Contacto.jsx`).
- Elementos clicables no nativos (`div`, `img`) requieren `role`, `tabIndex={0}` y `onKeyDown` para Enter/Espacio — lo exige `eslint-plugin-jsx-a11y`, corre `npm run lint` antes de dar por terminado un cambio de UI.
- Mobile-first no aplica aquí: los breakpoints son desktop-first (`max-width: 1024px / 768px / 500px`) en `talentos-vadid.css`. No hay breakpoint intermedio de tablet (~900px) todavía.
- `#hero` usa `100svh` (no `100vh`) para evitar el salto de la barra de direcciones en Safari — mantener ese patrón si se agregan más secciones full-height.
- Inputs de formulario deben usar `font-size: 1rem` mínimo (16px) para evitar el zoom automático de iOS Safari al enfocar.

## Flujo de trabajo (dos colaboradores)

- Remoto: `https://github.com/NesDMR21/Talentos-vadid.git`, rama por defecto `main`.
- El proyecto históricamente se ha desarrollado con feature branches + PR (ver PR #3 `feature/galeria-staff-y-fotos`), no commits directos a `main`. Seguir ese patrón para cambios no triviales.
- Antes de pushear/abrir PR: `npm run lint` (0 errores) y `npm run build` (sin errores) deben pasar limpio.

## Backlog pendiente (prioridad baja, no urgente)

- Panel de "logros" en `Torneos.jsx`, marcado como "en construcción".
- Fotos reales para las carpetas de galería que solo tienen `.gitkeep` (`comunidad`, `sedes`, `jugadores/sub-8`, `sub-12`, `sub-16`).
- Breakpoint intermedio de tablet (~900px).
- Soporte de swipe táctil en `Lightbox`/`Galeria` para mobile.
- Ajustar `WaFloat` en mobile (tamaño/posición con `safe-area-inset`, o colapsarlo cerca del footer).
- SEO/meta: `index.html` tiene `lang="en"` (debería ser `es`), `type="image/img"` inválido en el favicon `<link>`, falta `<meta name="description">` y Open Graph tags (importa para las previews al compartir por WhatsApp/Facebook), y `public/favicon.svg` existe pero no está referenciado.
- Datos estructurados schema.org (`SportsActivityLocation`) ahora que Sedes tiene mapas reales embebidos.
- Analítica básica (visitas, clics en CTA/WhatsApp) — hoy no hay ninguna.
- Sección de testimonios.
- Nota breve de tratamiento de datos junto al formulario de contacto (recolecta datos de menores de edad).
