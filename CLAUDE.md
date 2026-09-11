# Commerce League — Project Documentation

## Project Overview
Commerce League (The Commerce League) es el evento de avenida+ que reúne a los comercios más grandes de Argentina que operan en marketplaces bancarios, con foco en logística, medios de pago, IA y comunidad.

**Status:** Temporada 01 en producción · Temporada 02 en preparación
**Creado:** 2026-04-13
**Repo:** https://github.com/GonzaloFriasTech/commerce-league
**Sitio en producción:** https://commerce-league.thecommerceleague.workers.dev

---

## Tech Stack
- **HTML5** — semantic markup, single `index.html`
- **CSS3** — custom properties (design tokens), no preprocesador
- **Vanilla JavaScript** — ES6+, strict mode, patrón `DOMContentLoaded`
- Sin build tool
- **Deploy:** Cloudflare Workers (assets estáticos servidos vía `wrangler.toml` + `worker.js`)

---

## Directory Structure

```
commerce-league/
├── index.html          # Punto de entrada principal
├── style.css           # Estilos globales y design tokens
├── script.js           # JavaScript del cliente (i18n, ticker, tour, chatbot, modal S02, etc.)
├── worker.js            # Worker de Cloudflare que sirve los assets estáticos
├── wrangler.toml         # Configuración de deploy en Cloudflare Workers
├── CLAUDE.md            # Este archivo — documentación del proyecto
└── assets/
    ├── logos/           # Logo TCL, logos de sponsors/partners (SVG/PNG)
    └── images/          # Imágenes hero, banners, fotos
```

---

## Deploy

Pararse en la carpeta del proyecto y correr, desde Git Bash:

```bash
npm run deploy
```

Esto ejecuta `wrangler deploy` y publica los assets estáticos en:
https://commerce-league.thecommerceleague.workers.dev

Para levantar el sitio en local (dev server de Wrangler):

```bash
npm run dev
```

---

## Design Tokens (`style.css :root`)
Todas las constantes visuales viven en custom properties de CSS al inicio de `style.css`.

| Token | Valor / Propósito |
|---|---|
| `--color-bg` / `--color-surface` | `#000001` — fondo de toda la página (no negro puro, decisión intencional) |
| `--color-pink` / acento principal | `#FF6B35` — naranja estilo Stripe, usado en badges, CTAs, bordes de acento |
| `--grad-primary` / `--grad-text` | Gradiente naranja (`#FF6B35` → `#FF4500`) para botones y títulos destacados |
| `--container-max` | 1200px — ancho máximo de layout |
| `--radius-pill` | 100px — botones y badges tipo pill |

---

## Decisiones importantes
- **Fondo `#000001` en toda la página** (no `#000000` puro): se usa consistentemente en body, secciones y modales para que el logo TCL con `mix-blend-mode: lighten` se funda visualmente con el fondo sin mostrar recuadro.
- **Acento naranja `#FF6B35`** estilo Stripe: color de marca principal para CTAs, badges, bordes de foco y gradientes de texto/botones.
- **Logo TCL fundido con el fondo**: el logo se integra sin recuadro visible haciendo que el fondo del contenedor donde vive (ej. `.s2-modal`) use el mismo `#000001` que el fondo del logo, en vez de `mix-blend-mode`. `mix-blend-mode: screen` sí se usa en otros 3 puntos del CSS (efectos decorativos), pero no está aplicado al logo TCL.
- **Sistema de idioma ES/EN**: objeto `i18n` en `script.js` con todas las strings de la UI por clave (`nav.*`, `hero.*`, `reg.*`, `chat.*`, `tour.*`, `s2.*`, etc.). El idioma activo se guarda en `localStorage` (`tcl-lang`) y se aplica vía atributos `data-i18n` en el HTML (`switchLanguage()` actualiza `textContent`/`innerHTML` según corresponda).

---

## Estado actual
- **Temporada 01**: evento en producción, registro vía Eventbrite (links por idioma en `initRegistroCTA()`).
- **Popup Temporada 02**: modal de anuncio agregado (`#s2-modal-overlay` / `initSeasonModal()` en `script.js`), aparece automáticamente 1s después de cargar la página, bilingüe, se cierra con el botón X o clickeando fuera.
  - Botón **"Inscribirme →"** del popup S02 sigue apuntando a `href="#registro"` como placeholder — **pendiente**: actualizar con el link real de Eventbrite de Temporada 02 cuando Gonzalo lo traiga.

---

## Key Conventions
- JavaScript en **strict mode** (`'use strict'`).
- Todo el JS corre dentro de un listener `DOMContentLoaded`.
- Utilidades `$()` y `$$()` disponibles como shorthand de `querySelector`/`querySelectorAll`.
- Nombres de clases CSS en **BEM-lite** kebab-case (`.site-header`, `.s2-modal__title`).
- Imágenes optimizadas antes de subir a `/assets/`.
- SVG preferido para logos e íconos cuando sea posible.

---

## Roadmap / TODO
- [ ] Actualizar botón "Inscribirme →" del popup S02 con el link real de Eventbrite (Temporada 02)
- [ ] Confirmar fecha/hora/ubicación definitivas de Temporada 02 una vez cerradas
- [ ] Evaluar si el popup S02 necesita lógica de "no mostrar de nuevo" (ej. `localStorage`) una vez pase el anuncio inicial

---

## Notes for Claude
- "Commerce League" implica un concepto de comercio competitivo/gamificado — mantener ese tono en copys y features nuevas.
- Preferir soluciones vanilla salvo que una librería esté claramente justificada.
- Al agregar nuevas secciones a `index.html`, sumar el CSS correspondiente en `style.css` y la interactividad en `script.js`, siguiendo el patrón de `initXxx()` + registro en el `DOMContentLoaded` al final del archivo.
- Cualquier texto de UI nuevo debe agregarse como clave en el objeto `i18n` (ambos bloques `es` y `en`) y usarse vía `data-i18n` en el HTML.
