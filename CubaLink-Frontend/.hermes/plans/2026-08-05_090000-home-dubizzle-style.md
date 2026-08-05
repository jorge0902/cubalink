# Adaptar Home CubaLink al estilo Dubizzle (escritorio)

> **Objetivo:** Tomar ideas de la página principal de Dubizzle (desktop) y adaptarlas a CubaLink — sin clonar, manteniendo la identidad cubana y los módulos propios.

## Qué se observó en Dubizzle (desktop)

1. **Header funcional**: logo + selector de ciudad/emirato + accesos (notificaciones, favoritos, chats, mis anuncios) + botón destacado "Place Your Ad" (verde) + "Log in or sign up".
2. **Barra de búsqueda gigante en el hero**: campo de texto grande centrado, con pestañas encima para filtrar por sección (All / Motors / Jobs / Classifieds / Property / Community) y botón de búsqueda prominente.
3. **Título del hero** corto y claro: "The best place to buy your house, sell your car or find a job in UAE".
4. **"Popular Categories"**: grid de ~10 categorías grandes, cada una con icono/imagen y 4 subcategorías enlazadas + "All in X" al final.
5. **Filas de listings destacados**: "Popular in Cars", "Popular in Residential for Rent", etc. — tarjetas con imagen, **precio grande arriba**, título, y ubicación en línea gris separada.
6. **Banners promocionales**: franjas anchas con ofertas (TruEstimate, Holiday Homes, Agents).
7. **Footer denso**: Company / Countries / Social / Support / Languages.

## Ideas que SÍ suman a CubaLink

| Idea Dubizzle | Adaptación CubaLink |
|---|---|
| Botón "Place Your Ad" verde | Botón "Publicar anuncio" destacado (en CubaLink: abre PublishModal) |
| Barra de búsqueda gigante con pestañas | Buscador con pestañas: Todo / Empleos / Rentas / Marketplace / Viajes / Remesas / Confiables |
| Popular Categories con subcategorías | Grid de 8 categorías con icono + 3-4 subcategorías reales + "Ver todo" |
| Filas "Popular in X" con precio grande | Filas "Populares en Rentas / Marketplace / Empleos" reutilizando datos mock existentes (jobs, productos, rentas) |
| Banners promocionales anchos | Banner "Sistema de Confianza" (ya existe) + banner app + banner remesas |
| Footer denso | Footer con columnas: Secciones / Ayuda / Redes / Contacto |

## Ideas que NO se copian (identidad propia)

- No copy del logo ni marca verde/naranja de Dubizzle → se mantiene paleta CubaLink (azul `brand-blue-deep` + dorado `brand-gold`)
- No categorías ajenas (Motors, Property…) → solo las 8 categorías reales de CubaLink
- No textos en inglés → 100% español cubano
- No la densidad brutal de links de Dubizzle → footer más limpio

## Plan de implementación (futuro, NO ejecutar ahora)

### Task 1 — Header tipo marketplace
**Files:** `src/components/Navbar.jsx`
- Añadir botón "Publicar anuncio" destacado (primary/dorado) que abre `PublishModal`
- Mantener links existentes (Inicio, Empleos, Comunidad, Perfil, Explorar, Unirte)
- **Sin selector de ciudad**: lanzamiento solo en Moscú, Rusia — la ubicación va fija como "Moscú" en el footer/hero si hace falta

### Task 2 — Hero con buscador gigante y pestañas
**Files:** `src/pages/HomeNew.jsx`
- Reemplazar el input simple actual por un buscador grande centrado con:
  - Pestañas de sección: Todo / Empleos / Rentas / Marketplace / Viajes / Remesas / Confiables
  - Campo de texto ancho con placeholder "¿Qué estás buscando? Ej: albañil, cuarto, remesa..."
  - Botón de búsqueda circular prominente (icono `search`)
- Título del hero corto: "Trabajo, renta, remesa y esa mano que hace falta" (ya existe)

### Task 3 — Grid de categorías con subcategorías (estilo Dubizzle)
**Files:** `src/pages/HomeNew.jsx` (o `src/data/categories.js` nuevo)
- Cada categoría pasa a ser una tarjeta grande con: icono en círculo de color, título, 3-4 subcategorías como links pequeños (ej. Empleos → Construcción, Limpieza, Oficina; Rentas → Cuartos, Estudios, Casas) y enlace "Ver todo en X" al final
- Subcategorías mock inline (sin nuevas páginas) — redirigen a la página de la categoría con filtro

### Task 4 — Filas "Populares en X" con precio destacado
**Files:** `src/pages/HomeNew.jsx`
- 3 filas horizontales reutilizando datos existentes:
  - "Populares en Rentas" → 4 tarjetas de `src/data/rentals.js` (o el que exista)
  - "Populares en Marketplace" → 4 productos de `src/data/products.js`
  - "Populares en Empleos" → 3-4 `JobCard`
- Tarjeta: imagen arriba, **precio grande** (₽ / CUP según módulo), título 1 línea, ubicación gris abajo
- Título de fila + link "Ver todos →"

### Task 5 — Banner promocional ancho (app)
**Files:** `src/pages/HomeNew.jsx`
- Franja ancha con gradiente: "Descarga la app de CubaLink" + botones Google Play / App Store (reutiliza el bloque de Register.jsx → extraer a componente `DownloadAppBanner`)

### Task 6 — Footer denso pero limpio
**Files:** `src/components/Footer.jsx`
- Columnas: Secciones (Empleos, Rentas, Marketplace, Viajes, Remesas, Confiables) / Ayuda / Redes sociales / Contacto
- Mantener links actuales + añadir columnas de secciones

### Task 7 — Verificación y push
- `node node_modules/vite/bin/vite.js build` sin errores
- Revisar en navegador desktop (viewport ancho) cada sección
- `git add -A && git commit -m "feat: Home estilo marketplace (Dubizzle-inspired) desktop" && git push origin main`

## Fuentes de datos a verificar antes de Task 4
- `src/data/` — listar archivos existentes (jobs.js, rentals?, products?, etc.) para reutilizar en filas "Populares en X"

## Riesgos / notas
- El proveedor de visión no está disponible (error 400 en vision_analyze y browser_vision) — el análisis se basó en el snapshot de accesibilidad de uae.dubizzle.com, que captura la estructura completa
- No clonar: mantener voz cubana, paleta azul/dorado y las 8 categorías propias
- Mobile ya está cubierto (BottomNav) — este rediseño es prioridad desktop
