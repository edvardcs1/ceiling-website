# Setup Instructions - CM Acoustic Contact Form

## Configuración del Formulario de Contacto con Resend

Para que el formulario de contacto funcione correctamente en Vercel con Resend, sigue estos pasos.

## ⚠️ IMPORTANTE: Error 403 - Solución

Si ves el error: *"You can only send testing emails to your own email address"*

### Opción 1: Verificar tu Dominio en Resend (Recomendado para Producción)

1. Ve a **https://resend.com/domains**
2. Clic en **Add Domain**
3. Ingresa: `cmacousticceiling.com`
4. Resend te dará registros DNS para agregar en Cloudflare:
   - Tipo: `MX`, `TXT` (SPF), `TXT` (DKIM)
5. Ve a tu dashboard de Cloudflare → DNS
6. Agrega los registros que te dio Resend
7. Espera la verificación (puede tomar minutos o horas)
8. Una vez verificado, podrás enviar a `info@cmacousticceiling.com`

### Opción 2: Enviar a tu Gmail temporalmente (Para pruebas)

Mientras verificas el dominio, cambia la variable en Vercel:

| Variable | Valor |
|----------|-------|
| `RECIPIENT_EMAIL` | `sapiensedvard@gmail.com` |

**Nota:** Reemplaza con tu email de Gmail donde quieres recibir los mensajes de prueba.

Después de verificar el dominio, cambia de vuelta a `info@cmacousticceiling.com`.

---

## Pasos Completos de Configuración

### 1. Crear Cuenta en Resend

1. Ve a **https://resend.com**
2. Regístrate con tu correo Gmail
3. Ve a **API Keys** → **Create API Key**
4. Nombre: `cm-acoustic-website`
5. Permisos: `Sending access`
6. Copia la API Key (empieza con `re_`)

### 2. Configurar Variables de Entorno en Vercel

Ve a tu dashboard de Vercel → Proyecto → Settings → Environment Variables

| Variable | Valor |
|----------|-------|
| `RESEND_API_KEY` | `re_xxxxxxxx` |
| `RECIPIENT_EMAIL` | `sapiensedvard@gmail.com` (temporal) o `info@cmacousticceiling.com` (después de verificar dominio) |

### 3. Verificar Dominio (Para enviar a info@cmacousticceiling.com)

1. En Resend: **Domains** → **Add Domain** → `cmacousticceiling.com`
2. Copia los registros DNS que te da Resend
3. En Cloudflare: **DNS** → Agrega los registros
4. Espera verificación en Resend

### 4. Redeploy en Vercel

Después de agregar las variables:
- Vercel reconstruirá automáticamente
- O ve a tu proyecto → clic en **Redeploy**

### 5. Probar

1. Ve a `https://cmacousticceiling.com/contact`
2. Llena el formulario
3. Revisa tu Gmail

## Solución de Problemas

### Error 403 - "You can only send testing emails to your own email address"
**Causa:** Sin dominio verificado, Resend solo permite enviar al email de la cuenta.  
**Solución:** Verifica tu dominio `cmacousticceiling.com` en Resend (ver Paso 3 arriba).

### Error 400 - Bad Request
- Verifica que todos los campos del formulario estén llenos
- Revisa los logs en Vercel Dashboard

### No llegan los correos
- En Resend, ve a **Emails** para ver estado de envíos
- Revisa carpeta Spam en tu Gmail
- Verifica que el routing de Cloudflare funcione

## Archivos del Sistema

- `/api/contact.js` - Serverless function usando Resend
- `/src/pages/Contact.tsx` - Formulario del frontend