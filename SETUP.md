# Setup Instructions - CM Acoustic Contact Form

## Configuración del Formulario de Contacto con Resend

Para que el formulario de contacto funcione correctamente en Vercel con Resend, sigue estos pasos.

## 1. Crear Cuenta en Resend

1. Ve a **https://resend.com**
2. Regístrate con tu correo (puede ser el Gmail donde llegan los mensajes de Cloudflare)
3. Una vez dentro, ve a **API Keys**
4. Clic en **Create API Key**
5. Nombre: `cm-acoustic-website`
6. Permisos: `Sending access`
7. Copia la API Key (empieza con `re_`)

## 2. Configurar Variables de Entorno en Vercel

Ve a tu dashboard de Vercel → Proyecto → Settings → Environment Variables

Agrega estas variables:

| Variable | Valor | Descripción |
|----------|-------|-------------|
| `RESEND_API_KEY` | `re_xxxxxxxx` | Tu API Key de Resend |
| `RECIPIENT_EMAIL` | `info@cmacousticceiling.com` | Correo destino |

## 3. (Opcional) Verificar Dominio en Resend

Para que los correos salgan desde `noreply@cmacousticceiling.com` en lugar de `onboarding@resend.dev`:

1. En Resend, ve a **Domains**
2. Clic en **Add Domain**
3. Ingresa: `cmacousticceiling.com`
4. Sigue las instrucciones de DNS (agrega los registros en Cloudflare)
5. Espera la verificación (puede tomar minutos o horas)

## 4. Redeploy en Vercel

Después de agregar las variables de entorno:

1. Vercel reconstruirá automáticamente el sitio
2. Si no lo hace: Dashboard → Proyecto → Clic en **Redeploy**

## 5. Probar el Formulario

1. Ve a tu sitio: `https://cmacousticceiling.com/contact`
2. Llena el formulario con datos de prueba
3. Envía el mensaje
4. Revisa que llegue a `info@cmacousticceiling.com` (que ya está configurado con Cloudflare para llegar a tu Gmail)

## Solución de Problemas

### Error "Failed to send message"
- Verifica que la API Key de Resend esté correctamente copiada
- Revisa los logs en Vercel: Dashboard → Functions → api/contact

### No llegan los correos
- En Resend, ve a **Emails** para ver el estado de los envíos
- Revisa la carpeta de Spam/Junk en tu Gmail
- Verifica que el routing de Cloudflare esté funcionando

## Ventajas de Resend

✅ Plan gratuito: 3,000 emails/mes  
✅ No necesitas Gmail ni SMTP  
✅ Integración nativa con Vercel  
✅ Buena tasa de entregabilidad  
✅ Panel de control para ver emails enviados  

## Archivos del Sistema

- `/api/contact.js` - Serverless function usando Resend
- `/src/pages/Contact.tsx` - Formulario del frontend