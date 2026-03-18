# Verificación de Dominio en Resend - Paso a Paso

Dado que ya tienes el dominio `cmacousticceiling.com` configurado en Cloudflare, la mejor opción es verificar el dominio en Resend. Así podrás enviar emails profesionales desde tu propio dominio.

## Pasos para Verificar el Dominio

### 1. Iniciar Verificación en Resend

1. Ve a **https://resend.com/domains**
2. Clic en **Add Domain**
3. Ingresa: `cmacousticceiling.com`
4. Selecciona la región: **US East (N. Virginia)**
5. Clic en **Add**

### 2. Agregar Registros DNS en Cloudflare

Resend te dará estos registros para agregar:

**Registro 1 - SPF (TXT)**
- Tipo: `TXT`
- Nombre: `@` (o `cmacousticceiling.com`)
- Valor: `v=spf1 include:_spf.resend.com ~all`

**Registro 2 - DKIM (TXT)**
- Tipo: `TXT`
- Nombre: `resend._domainkey` (Resend te dará el nombre exacto)
- Valor: [Resend te dará un valor largo]

**Registro 3 - MX (Opcional, solo si quieres recibir emails en Resend)**
- Tipo: `MX`
- Nombre: `@`
- Valor: `feedback-smtp.us-east-1.amazonses.com` (prioridad 10)

### 3. Agregar en Cloudflare

1. Ve a tu dashboard de Cloudflare: https://dash.cloudflare.com
2. Selecciona el dominio `cmacousticceiling.com`
3. Ve a la pestaña **DNS**
4. Clic en **Add record**
5. Agrega cada uno de los registros que te dio Resend (SPF y DKIM son obligatorios)

### 4. Esperar Verificación

- Vuelve a Resend → Domains
- El estado cambiará de **Pending** a **Verified** (puede tomar minutos o hasta 24 horas)

### 5. Actualizar el Código

Una vez verificado, actualiza `/api/contact.js`:

```javascript
const data = await resend.emails.send({
  from: 'CM Acoustic <noreply@cmacousticceiling.com>', // ← Tu dominio verificado
  to: 'info@cmacousticceiling.com', // ← Ahora sí funciona
  // ... resto del código
});
```

### 6. Actualizar Vercel

1. Ve a Vercel → Tu proyecto → Settings → Environment Variables
2. Asegúrate de que `RECIPIENT_EMAIL` esté configurado como `info@cmacousticceiling.com`
3. Redeploy si es necesario

## ¿Por qué es mejor verificar el dominio?

✅ **Profesional**: Los emails salen desde `noreply@cmacousticceiling.com`  
✅ **Confiable**: Mejor tasa de entrega, no va a spam  
✅ **Sin límites de testing**: Puedes enviar a cualquier email  
✅ **Gratis**: Resend tiene 3,000 emails/mes gratuitos  
✅ **Ya tienes todo**: Cloudflare y el dominio están listos  

## Solución Temporal Mientras Verificas

Si necesitas que funcione **ahora mismo** mientras verificas el dominio:

1. En Vercel, cambia temporalmente:
   ```
   RECIPIENT_EMAIL = sapiensedvard@gmail.com
   ```

2. El formulario funcionará inmediatamente

3. Después de verificar el dominio en Resend, cambia de vuelta a:
   ```
   RECIPIENT_EMAIL = info@cmacousticceiling.com
   ```

---

¿Necesitas ayuda con algún paso específico de la verificación del dominio?