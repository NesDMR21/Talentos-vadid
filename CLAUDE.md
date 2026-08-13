# Talentos Vadid — Guía del proyecto

Landing page del Club Deportivo Talentos Vadid (Bogotá DC). SPA en React + Vite, sin backend ni router — todo el contenido vive en `src/pages/Landing.jsx`, que compone secciones como componentes independientes.

## Stack

- React 19 + Vite 8
- `aos` para animaciones on-scroll (inicializado en `InitAos.jsx`)
- `react-icons` para iconografía (Ai/Fa)
- `vite-imagetools` para variantes de imagen (webp)
- ESLint flat config (`eslint.config.js`) con `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`, `eslint-plugin-jsx-a11y` y `eslint-plugin-react` (solo la regla `react/jsx-uses-vars`, ver nota abajo)
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

## Formulario de inscripción (`Contacto.jsx`)

Al enviar el formulario pasan dos cosas en paralelo, ambas dentro de `onSubmit`:

- Se abre WhatsApp (`wa.me/573134565039`) con el mensaje prellenado — comportamiento original, sin cambios.
- `saveToSheet()` hace un POST best-effort (`fetch` con `mode:'no-cors'`, error silenciado) a `SHEET_ENDPOINT`, la URL de un Google Apps Script Web App que agrega la inscripción como fila en una Google Sheet y manda un correo de aviso a `clubvadid.futbol@gmail.com`. Si ese POST falla, no bloquea ni afecta la apertura de WhatsApp.

El código fuente del Apps Script (`doPost`, guarda en la Sheet + `MailApp.sendEmail`) está respaldado en `docs/apps-script-inscripciones.gs` — no se ejecuta desde el repo, hay que pegarlo en el editor de Apps Script vinculado a la Sheet real. Guía de uso para el equipo no técnico en `docs/GUIA-INSCRIPCIONES.md`.

## Convenciones de código

- Imports: comillas simples, sin `;`, agrupando named imports del mismo paquete (`import { AiFillInstagram, AiFillTikTok } from 'react-icons/ai'`). Varios componentes antiguos mezclan estilos (comillas dobles + `;`) — al tocar un archivo, normalizar al estilo de comillas simples/sin `;`.
- Inputs de formulario controlados con `useState`, no `document.querySelector`/refs directos al DOM (ver `Contacto.jsx`).
- Elementos clicables no nativos (`div`, `img`) requieren `role`, `tabIndex={0}` y `onKeyDown` para Enter/Espacio — lo exige `eslint-plugin-jsx-a11y`, corre `npm run lint` antes de dar por terminado un cambio de UI.
- Mobile-first no aplica aquí: los breakpoints son desktop-first (`max-width: 1024px / 768px / 500px`) en `talentos-vadid.css`. No hay breakpoint intermedio de tablet (~900px) todavía.
- `#hero` usa `100svh` (no `100vh`) para evitar el salto de la barra de direcciones en Safari — mantener ese patrón si se agregan más secciones full-height.
- Inputs de formulario deben usar `font-size: 1rem` mínimo (16px) para evitar el zoom automático de iOS Safari al enfocar.
- ESLint 9 no trackea nativamente las referencias a identificadores usados solo dentro de JSX (`eslint-scope` no recibe el flag `jsx`; el soporte nativo llega hasta ESLint 10, ver `eslint/eslint#20152`). Sin esto, cualquier import usado solo como `<Componente />` se marca como `no-unused-vars` aunque sí se use. Por eso `eslint.config.js` registra `eslint-plugin-react` únicamente para habilitar la regla `react/jsx-uses-vars` (no se adoptó el resto del `recommended` de ese plugin porque trae reglas como `react/prop-types` que no aplican aquí). No quitar esa regla ni el plugin sin reemplazar ese fix.

## Flujo de trabajo (dos colaboradores)

- Remoto: `https://github.com/NesDMR21/Talentos-vadid.git`, rama por defecto `main`.
- El proyecto históricamente se ha desarrollado con feature branches + PR (ver PR #3 `feature/galeria-staff-y-fotos`), no commits directos a `main`. Seguir ese patrón para cambios no triviales.
- Antes de pushear/abrir PR: `npm run lint` (0 errores) y `npm run build` (sin errores) deben pasar limpio.

## Backlog pendiente (prioridad baja, no urgente)

- Panel de "logros" en `Torneos.jsx`, marcado como "en construcción".
- Fotos reales para las carpetas de galería que solo tienen `.gitkeep` (`comunidad`, `sedes`, `jugadores/sub-8`, `sub-12`). `jugadores/sub-16` ya tiene fotos reales (85 fotos agregadas).
- Breakpoint intermedio de tablet (~900px).
- Soporte de swipe táctil en `Lightbox`/`Galeria` para mobile.
- Ajustar `WaFloat` en mobile (tamaño/posición con `safe-area-inset`, o colapsarlo cerca del footer).
- Datos estructurados schema.org (`SportsActivityLocation`) ahora que Sedes tiene mapas reales embebidos.
- Analítica básica (visitas, clics en CTA/WhatsApp) — hoy no hay ninguna.
- Sección de testimonios.
- Nota breve de tratamiento de datos junto al formulario de contacto (recolecta datos de menores de edad).
