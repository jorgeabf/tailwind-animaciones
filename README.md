# Animaciones Tailwind CSS

## Basado en el video de Midudev

### Descripción:

Plugin de animaciones de **Tailwindcss** basado en el video de **Midudev**. Animaciones personalizadas para tus proyectos, sólo hay que instalar el paquete, añadir el plugin al archivo de configuración de tailwindcss y ya puedes implementar las animaciones en el html.

### Instalación:

#### npm

```bash
npm i plugin-tailwindcss-animaciones
```

#### pnpm

```bash
pnpm add plugin-tailwindcss-animaciones
```

#### yarn

```bash
yarn add plugin-tailwindcss-animaciones
```

### Configuración:

Añadir el plugin al archivo de configuración de tailwindcss,

```javascript
//tailwind.config.mjs

import animations from 'plugin-tailwindcss-animaciones'

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {}
  },
  plugins: [animations]
}
```

### Uso:

```html
<div class="animate-fade-in">Hola mundo</div>
```
