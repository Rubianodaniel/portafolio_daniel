# Deployment Instructions

## 🔒 Environment Variables

Este proyecto usa variables de entorno para las credenciales de EmailJS por seguridad.

### Desarrollo Local

1. Crea un archivo `.env` en la raíz del proyecto:
```bash
EMAILJS_PUBLIC_KEY=your_public_key
EMAILJS_SERVICE_ID=your_service_id  
EMAILJS_TEMPLATE_ID=your_template_id
```

2. El archivo `.env` está en `.gitignore` - nunca se subirá a Git.

### Deployment en Netlify

1. Ve a tu dashboard de Netlify
2. Selecciona tu proyecto
3. Ve a `Site settings` > `Environment variables`
4. Agrega estas variables:
   - `EMAILJS_PUBLIC_KEY` = `IIhi6yDnWg7VZ-5tY`
   - `EMAILJS_SERVICE_ID` = `service_stils01`
   - `EMAILJS_TEMPLATE_ID` = `template_6121fak`

### Deployment en Vercel

1. Ve a tu dashboard de Vercel
2. Selecciona tu proyecto
3. Ve a `Settings` > `Environment Variables`
4. Agrega las mismas variables de arriba

### Deployment en GitHub Pages

Para GitHub Pages (que no soporta variables de entorno de servidor), las credenciales están hardcodeadas en `config.js` como fallback. Esto es aceptable para EmailJS ya que son credenciales públicas.

## 🚀 Deploy Commands

### Netlify
```bash
# Build command (si usas build process)
npm run build

# Publish directory
./
```

### Vercel
```bash
# Build command
npm run build

# Output directory  
./
```

### GitHub Pages
1. Sube el código a GitHub
2. Ve a `Settings` > `Pages`
3. Selecciona source: `Deploy from a branch`
4. Branch: `main`, folder: `/ (root)`

## 📁 Estructura del Proyecto

```
portfolio/
├── .env                 # Variables de entorno (local)
├── .gitignore          # Ignora .env y otros archivos
├── config.js           # Configuración centralizada
├── app.js              # App principal (usa config)
├── index.html          # HTML principal
├── styles.css          # Estilos
├── components/         # Componentes SPA
└── utils/              # Utilidades
```

## ✅ Checklist Pre-Deploy

- [ ] Variables de entorno configuradas
- [ ] `.env` en `.gitignore`
- [ ] Credenciales de EmailJS válidas
- [ ] Formulario de contacto probado
- [ ] Responsive design verificado