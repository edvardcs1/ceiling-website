# Guía de Imágenes del Sitio CM Acoustic

## Resumen de Ubicaciones de Imágenes

### 1. Logo y Favicon (Carpeta `/public/`)
**Archivos locales que debes reemplazar:**
- `/public/logo.png` - Logo del sitio (usado en Navbar y Footer)
- `/public/favicon.png` - Icono de la pestaña del navegador

---

### 2. Servicios (`/src/constants.ts`)
**Ubicación:** Líneas 15-20, 27-32, 39-44, etc. (campo `image` en cada servicio)

Las 6 imágenes de servicios están en la constante `SERVICES`:

| Servicio | Línea | URL Actual |
|----------|-------|------------|
| Acoustic Ceiling Installation | 22 | '/images/services/ceiling.jpg'  |
| Drywall Installation & Finishing | 30 | `https://images.unsplash.com/photo-1503387762-592deb58ef4e` |
| Acoustic Panel Systems | 38 | `https://images.unsplash.com/photo-1497215842964-222b430dc094` |
| Commercial Tenant Improvements | 46 | `https://images.unsplash.com/photo-1497366811353-6870744d04b2` |
| Ceiling Tile Replacement & Repair | 54 | `https://images.unsplash.com/photo-1581094794329-c8112a89af12` |
| Residential Drywall & Ceilings | 62 | `https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3` |

---

### 3. Proyectos/Portfolio (`/src/constants.ts`)
**Ubicación:** Líneas 71-106 en la constante `PROJECTS`

| Proyecto | Línea | URL Actual |
|----------|-------|------------|
| Mesa Corporate Office | 78 | `https://picsum.photos/seed/office/800/600` |
| Gilbert Luxury Residence | 85 | `https://picsum.photos/seed/home/800/600` |
| Phoenix Retail Center | 92 | `https://picsum.photos/seed/retail/800/600` |
| Scottsdale Medical Plaza | 99 | `https://picsum.photos/seed/medical/800/600` |
| Chandler School Renovation | 106 | `https://picsum.photos/seed/school/800/600` |
| Tempe Loft Conversion | 113 | `https://picsum.photos/seed/loft/800/600` |

---

### 4. Página Home (`/src/pages/Home.tsx`)

| Sección | Línea | URL Actual | Descripción |
|---------|-------|------------|-------------|
| Hero Background | 15 | `https://images.unsplash.com/photo-1503387762-592deb58ef4e` | Imagen de fondo del hero |
| About Section | 165 | `https://images.unsplash.com/photo-1541888946425-d81bb19480c5` | Imagen de "About Us" |

---

## Cómo Cambiar las Imágenes

### Opción 1: Usar URLs de Internet (Unsplash, etc.)
Simplemente reemplaza la URL en el archivo correspondiente:

```typescript
// En constants.ts o Home.tsx
image: 'https://images.unsplash.com/photo-TU-NUEVA-IMAGEN?auto=format&fit=crop&q=80&w=800',
```

### Opción 2: Usar Imágenes Locales (Recomendado)
1. Coloca tus imágenes en la carpeta `/public/images/`
2. Cambia la referencia a ruta local:

```typescript
// Ejemplo para servicios
image: '/images/acoustic-ceiling.jpg',

// Ejemplo para hero en Home.tsx
src="/images/hero-background.jpg"
```

---

## Estructura Recomendada para Imágenes Locales

```
/public/
├── logo.png
├── favicon.png
└── images/
    ├── services/
    │   ├── acoustic-ceiling.jpg
    │   ├── drywall.jpg
    │   ├── acoustic-panels.jpg
    │   ├── commercial-ti.jpg
    │   ├── ceiling-repair.jpg
    │   └── residential.jpg
    ├── projects/
    │   ├── mesa-office.jpg
    │   ├── gilbert-home.jpg
    │   ├── phoenix-retail.jpg
    │   ├── scottsdale-medical.jpg
    │   ├── chandler-school.jpg
    │   └── tempe-loft.jpg
    └── hero-bg.jpg
```

---

## Dimensiones Recomendadas

| Tipo | Ancho | Alto | Formato |
|------|-------|------|---------|
| Logo | 200px | auto | PNG con transparencia |
| Favicon | 32px | 32px | PNG |
| Servicios | 800px | 600px | JPG/WebP |
| Proyectos | 800px | 600px | JPG/WebP |
| Hero | 2000px | 1000px | JPG/WebP |
| About | 1000px | 750px | JPG/WebP |

---

## Archivos a Editar

1. **Logo/Favicon:** Reemplazar archivos en `/public/`
2. **Servicios:** Editar `/src/constants.ts` (líneas 15-70)
3. **Proyectos:** Editar `/src/constants.ts` (líneas 71-120)
4. **Hero:** Editar `/src/pages/Home.tsx` (línea 15)
5. **About:** Editar `/src/pages/Home.tsx` (línea 165)