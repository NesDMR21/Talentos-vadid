// Respaldo versionado del Google Apps Script que recibe las inscripciones del
// formulario de Contacto.jsx. Este archivo NO se ejecuta desde el repo: vive
// como script vinculado a la Google Sheet de inscripciones (Extensiones > Apps
// Script), desplegado como Web App. Ver docs/GUIA-INSCRIPCIONES.md para los
// pasos de configuración y CLAUDE.md para cómo se conecta con Contacto.jsx.

const SHEET_NAME = 'Inscripciones'
const NOTIFY_EMAIL = 'clubvadid.futbol@gmail.com'

function doPost(e) {
  const data = JSON.parse(e.postData.contents)
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME)

  sheet.appendRow([
    new Date(),
    data.nombre || '',
    data.edad || '',
    data.categoria || '',
    data.acudiente || '',
    data.email || '',
    data.telefono || '',
    data.mensaje || '',
  ])

  MailApp.sendEmail({
    to: NOTIFY_EMAIL,
    subject: `Nueva inscripción: ${data.nombre || 'Sin nombre'}`,
    body: `Nueva solicitud de inscripción desde la página web.\n\nJugador: ${data.nombre}\nEdad: ${data.edad}\nCategoría: ${data.categoria}\nAcudiente: ${data.acudiente || '-'}\nEmail: ${data.email}\nTeléfono: ${data.telefono}\nMensaje: ${data.mensaje || '-'}`,
  })

  return ContentService.createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON)
}
