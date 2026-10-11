// Cómo agregar un profesor / entrenador al staff:
// 1. Copia su foto (jpg, jpeg, png o webp) dentro de src/img/staff/
// 2. Agrega un objeto abajo en STAFF con su nombre, cargo y el nombre EXACTO del archivo de foto.
//    Si dejas photo: null (o el archivo no se encuentra), se muestra un ícono de silueta en su lugar.

// Se sirven en .webp a 480px de ancho (se muestran a ~270px como máximo).
const photoModules = import.meta.glob('../img/staff/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
  eager: true,
  import: 'default',
  query: 'w=480&format=webp',
})

function resolvePhoto(filename) {
  if (!filename) return null
  const match = Object.keys(photoModules).find((path) => path.endsWith('/' + filename))
  return match ? photoModules[match] : null
}

const STAFF = [
  { name: 'Paula Cristina Peña', role: 'Coordinadora Administrativa y Operativa', photo: 'coordinadora.jpg' },
  { name: 'Jessika Buitrago', role: 'Trabajadora Social', photo: 'trabajadora-social.jpg' },
  { name: 'Andrés Velásquez', role: 'Presidente y Profesor Categoría 2006', photo: 'presidente.jpg' },
  { name: 'Daniel Poveda', role: 'Coordinador Deportivo y Profesor Categoría 2014', photo: 'coordinador-deportivo.jpg' },
  { name: 'Saúl Hernández', role: 'Profesor Baby Fútbol (2018–2021)', photo: 'profesor-2018.jpg' },
  { name: 'Bryan Briceño', role: 'Profesor Categoría 2010', photo: 'profesor-2010.jpg' },
  { name: 'Ángel Chía', role: 'Monitor', photo: 'monitor.jpg' },
  { name: 'Simón Buitrago', role: 'Asistente Técnico', photo: 'asistente-tecnico.jpg' },
]

export const staffMembers = STAFF.map((member, idx) => ({
  id: `staff-${idx}`,
  name: member.name,
  role: member.role,
  photo: resolvePhoto(member.photo),
}))
