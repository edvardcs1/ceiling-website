# Setup Instructions - CM Acoustic Contact Form

## Configuración del Formulario de Contacto

Para que el formulario de contacto funcione correctamente en Vercel, necesitas configurar las siguientes variables de entorno en tu proyecto Vercel.

## 1. Crear Gmail App Password

1. Ve a tu cuenta de Google: https://myaccount.google.com
2. Ve a **Seguridad** → **Verificación en dos pasos** (debe estar activada)
3. Después de activar 2FA, ve a **Contraseñas de aplicaciones**
4. Genera una nueva contraseña para "Correo" en tu dispositivo
5. Copia la contraseña de 16 caracteres (ejemplo: `abcd efgh ijkl mnop`)

## 2. Configurar Variables de Entorno en Vercel

Ve a tu dashboard de Vercel → Proyecto → Settings → Environment Variables

Agrega estas variables:

| Variable | Valor | Descripción |
|----------|-------|-------------|
| `GMAIL_USER` | `tucorreo@gmail.com` | Tu correo de Gmail |
| `GMAIL_APP_PASSWORD` | `abcd efgh ijkl mnop` | La contraseña de aplicación generada |
| `RECIPIENT_EMAIL` | `info@cmacousticceiling.com` | Correo destino (ya configurado en Cloudflare) |

## 3. Redeploy en Vercel

Después de agregar las variables, Vercel automáticamente reconstruirá tu sitio.

Si no se reconstruye automáticamente:
- Ve a tu proyecto en Vercel
- Clic en "Redeploy"

## 4. Prueba el Formulario

1. Ve a tu sitio: `https://cmacousticceiling.com/contact`
2. Llena el formulario
3. Envía el mensaje
4. Revisa tu correo de Gmail (debería llegar a `info@cmacousticceiling.com`)

## Solución de Problemas

### Error "Failed to send message"
- Verifica que las variables de entorno estén correctamente configuradas
- Asegúrate de que la verificación en dos pasos de Gmail esté activada
- Verifica que la contraseña de aplicación sea correcta

### No llegan los correos
- Revisa la carpeta de Spam/Junk en tu Gmail
- Verifica que el routing de Cloudflare esté funcionando correctamente
- Revisa los logs en Vercel: Dashboard → Functions → api/contact

## Archivos Modificados

- `/api/contact.js` - Serverless function para enviar emails
- `/src/pages/Contact.tsx` - Formulario actualizado para enviar datos al backend
- `package.json` - Agregado `nodemailer` como dependencia

## Notas de Seguridad

⚠️ **Nunca compartas tu `GMAIL_APP_PASSWORD` ni la guardes en el código.**
⚠️ **Siempre usa variables de entorno en Vercel.**

La contraseña de aplicación solo tiene acceso al correo y puede ser revocada en cualquier momento desde tu cuenta de Google.