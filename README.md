# Portfolio - Mario Alejandro Muñoz Merli

Portfolio personal desplegado con GitHub Pages. Sitio 100% estático (HTML, CSS y JS puro), sin backend ni dependencias de servidor.

## Sitio en vivo

<https://mariodemoder.github.io/portfolio>

## Stack

- HTML5, CSS3 (Bootstrap 5), JavaScript
- AOS, Swiper, GLightbox, Isotope, Typed.js
- Iconos: Bootstrap Icons, BoxIcons

## Estructura

```
assets/
  css/style.css      # Estilos del sitio
  js/data.js         # Datos de Habilidades, Portfolio y Testimonios
  js/main.js         # Renderizado de secciones + interacciones
  img/               # Imágenes (perfil, portfolio, testimonios, stack)
  vendor/            # Librerías de terceros (solo archivos minificados en uso)
index.html           # Página principal
```

## Cómo se mantiene

Las secciones repetitivas (**Habilidades**, **Portfolio** y **Testimonios**) no se editan en el HTML: se declaran como datos en `assets/js/data.js` y `assets/js/main.js` las renderiza automáticamente. Para agregar un proyecto o testimonio basta con editar ese archivo.

Para publicar cambios:

```bash
git add .
git commit -m "mensaje"
git push origin main
```

El sitio se despliega con GitHub Pages configurado en: **Settings → Pages → Deploy from a branch** (rama `main`, carpeta `/root`).
