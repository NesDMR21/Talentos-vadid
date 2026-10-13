import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools'
import { SITE, SITE_URL } from './site.config.js'

// Inyecta en el HTML las etiquetas que dependen de la URL pública (canonical,
// Open Graph absoluto) y los datos estructurados de schema.org, y genera
// robots.txt + sitemap.xml en el build. Ver site.config.js.
function seo() {
  const abs = (path) => (SITE_URL ? `${SITE_URL}${path}` : path)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SportsOrganization',
    name: SITE.name,
    alternateName: SITE.alternateNames,
    description: SITE.description,
    sport: 'Fútbol',
    ...(SITE_URL && { url: `${SITE_URL}/` }),
    logo: abs('/logo-512.png'),
    image: abs('/og-image.jpg'),
    email: SITE.email,
    telephone: SITE.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bogotá',
      addressRegion: 'Bogotá D.C.',
      addressCountry: 'CO',
    },
    location: SITE.sedes.map((sede) => ({
      '@type': 'SportsActivityLocation',
      name: sede.name,
      address: { '@type': 'PostalAddress', addressLocality: sede.locality, addressCountry: 'CO' },
    })),
    sameAs: SITE.sameAs,
  }

  return {
    name: 'talentos-vadid-seo',
    transformIndexHtml() {
      const tags = [
        { tag: 'meta', attrs: { property: 'og:image', content: abs('/og-image.jpg') }, injectTo: 'head' },
        { tag: 'meta', attrs: { name: 'twitter:image', content: abs('/og-image.jpg') }, injectTo: 'head' },
        { tag: 'script', attrs: { type: 'application/ld+json' }, children: JSON.stringify(jsonLd), injectTo: 'head' },
      ]
      if (SITE_URL) {
        tags.push(
          { tag: 'link', attrs: { rel: 'canonical', href: `${SITE_URL}/` }, injectTo: 'head' },
          { tag: 'meta', attrs: { property: 'og:url', content: `${SITE_URL}/` }, injectTo: 'head' },
        )
      }
      return tags
    },
    generateBundle() {
      const robots = ['User-agent: *', 'Allow: /', SITE_URL && `Sitemap: ${SITE_URL}/sitemap.xml`]
        .filter(Boolean)
        .join('\n')
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: robots + '\n' })

      if (SITE_URL) {
        const today = new Date().toISOString().slice(0, 10)
        this.emitFile({
          type: 'asset',
          fileName: 'sitemap.xml',
          source: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${SITE_URL}/</loc><lastmod>${today}</lastmod></url>
</urlset>
`,
        })
      }
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), imagetools(), seo()],
})
