// Comprime las fotos del proyecto para que el repo y el build no pesen tanto.
//
// Uso:
//   npm run fotos          → optimiza las fotos de src/img (las reemplaza)
//   npm run fotos -- --ver → solo muestra cuánto se ahorraría, sin tocar nada
//
// Qué hace con cada foto (jpg, jpeg, png, webp) dentro de src/img/:
//   - La reduce a máximo 2000 px en su lado más largo (la web nunca la muestra
//     más grande: el visor usa 1920 px).
//   - La endereza según la orientación de la cámara y le quita los metadatos
//     (modelo de cámara, ubicación GPS, etc.).
//   - Solo la reemplaza si el resultado pesa menos que el original.
// El logo (Logo.png) no se toca. Correr de nuevo es seguro: las fotos ya
// optimizadas se saltan.

import { readdir, readFile, stat, writeFile } from 'node:fs/promises'
import { extname, join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const ROOT = fileURLToPath(new URL('../src/img/', import.meta.url))
const MAX_SIDE = 2000
const SKIP = new Set(['Logo.png'])
const EXTS = new Set(['.jpg', '.jpeg', '.png', '.webp'])
const dryRun = process.argv.includes('--ver')

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) yield* walk(path)
    else if (EXTS.has(extname(entry.name).toLowerCase()) && !SKIP.has(entry.name)) yield path
  }
}

const mb = (bytes) => (bytes / 1024 / 1024).toFixed(1) + ' MB'

let before = 0
let after = 0
let changed = 0

for await (const file of walk(ROOT)) {
  const original = await readFile(file)
  const size = (await stat(file)).size
  before += size

  const ext = extname(file).toLowerCase()
  let pipeline = sharp(original).rotate().resize(MAX_SIDE, MAX_SIDE, { fit: 'inside', withoutEnlargement: true })
  if (ext === '.png') pipeline = pipeline.png({ compressionLevel: 9, palette: true, quality: 85 })
  else if (ext === '.webp') pipeline = pipeline.webp({ quality: 80 })
  else pipeline = pipeline.jpeg({ quality: 80, mozjpeg: true })

  const output = await pipeline.toBuffer()
  // Solo vale la pena si ahorra al menos un 10 %.
  if (output.length < size * 0.9) {
    after += output.length
    changed++
    if (!dryRun) await writeFile(file, output)
    console.log(`${relative(ROOT, file)}: ${mb(size)} → ${mb(output.length)}`)
  } else {
    after += size
  }
}

console.log(
  `\n${dryRun ? '[solo vista previa] ' : ''}${changed} fotos optimizadas · ` +
    `src/img pasó de ${mb(before)} a ${mb(after)} (${Math.round((1 - after / before) * 100)} % menos)`,
)
