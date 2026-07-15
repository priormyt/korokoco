# KOROKOCO — polloskokoroco.com

Landing page para la dark kitchen **KOROKOCO** (pollo al horno, comida casera saludable). Sitio 100 % estático (HTML + CSS + JS vanilla, sin build step), hosteado en **GitHub Pages**. En vivo: https://polloskokoroco.com/

## Arquitectura

```
korokoco/
├── index.html        # Toda la landing (una sola página con secciones)
├── css/
│   ├── tokens.css    # 🎨 ÚNICA fuente de verdad del branding
│   └── styles.css    # Estilos — solo consumen tokens, nunca valores directos
├── js/main.js        # Menú móvil + detalles (sin dependencias)
└── img/
    ├── logo.svg      # Logo placeholder
    └── favicon.svg   # Favicon placeholder
```

**Por qué así:** para una landing informativa, cero frameworks = cero mantenimiento, carga instantánea, y GitHub Pages lo sirve directo desde `main` sin build. Si el proyecto crece (menú administrable, pedidos en línea), el siguiente paso natural es migrar a Astro conservando los mismos tokens.

## 🎨 Cambiar la marca (5 minutos)

Todo el branding es provisional y está centralizado:

1. **Colores** → edita las variables en [`css/tokens.css`](css/tokens.css) (`--brand`, `--accent`, `--ink`, `--paper`…). Nada más define colores en el proyecto.
2. **Fuentes** → cambia `--font-display` y `--font-body` en `tokens.css`, y el `<link>` de Google Fonts en `index.html` (marcado con el comentario `FUENTES`).
3. **Logo y favicon** → reemplaza `img/logo.svg` e `img/favicon.svg` con los archivos finales, **manteniendo el mismo nombre** — no hay que tocar código.
4. **Textos y precios** → directamente en `index.html`. Los pendientes están marcados con `[ corchetes ]`.
5. **WhatsApp** → busca y reemplaza `5215500000000` en `index.html` por el número real.

## Desarrollo local

No necesita instalación. Abre `index.html` en el navegador, o para un servidor local:

```bash
python3 -m http.server 8000
# → http://localhost:8000
```

## Deploy

Cada push a `main` publica automáticamente vía GitHub Pages (Settings → Pages → branch `main`, carpeta `/`).

### Dominio polloskokoroco.com

Ya configurado: el archivo [`CNAME`](CNAME) apunta a `polloskokoroco.com`, el DNS resuelve a las IPs de GitHub Pages y HTTPS está activo. El sitio está en vivo en https://polloskokoroco.com/.

Si en el futuro se cambia el dominio, actualiza el `CNAME` (Settings → Pages → Custom domain) y las referencias internas en `index.html` (`og:url`, `og:image`, `schema.org`, correo de contacto).

## Pendientes de contenido

- [ ] Logo, colores y fuentes definitivos
- [ ] Fotos reales de platillos (reemplazar placeholders del menú)
- [ ] Número de WhatsApp real
- [ ] Enlaces de Uber Eats / Rappi / DiDi Food
- [ ] Zona de entrega y horarios reales
- [ ] Imagen Open Graph (`img/og-image.png`, 1200×630)
