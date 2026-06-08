# COFI TRADERS — Contexto del proyecto

Este archivo le da contexto a Claude Code sobre quién es Maikol, qué es COFI TRADERS, qué se construyó, y hacia dónde va el proyecto.

---

## Quién es Maikol

- Senior Product Manager de AI en Equifax, San José, Costa Rica
- Ingeniero en Computación + Maestría en UX / Interaction Design / Service Design
- Bilingual (ES/EN), viaja frecuentemente por trabajo
- Vendió una startup de mobile software development después de 10 años
- Creció en Sabalito, Coto Brus — pueblo cafetalero en la región Brunca de Costa Rica
- Plan: en 7 años, COFI TRADERS reemplaza su salario de Equifax (~$8k/mes)

---

## Qué es COFI TRADERS

**Modelo de negocio:** Broker/curador de micro-lotes de café especial costarricense para mercados internacionales. No es un tostador — el tostado actual es transitorio mientras aprende la industria.

**Visión:** Ser el representante/exportador de micro-productores costarricenses hacia tostadores internacionales (Europa, USA, Japón, Korea). El diferenciador es trazabilidad real, acceso directo al productor, y tecnología para documentar y comunicar el origen.

**Registro:** Persona física, actividad 5610, Régimen Simplificado en Hacienda CR. Dominio: cofi.cr

**Historia:** Maikol es de Sabalito — sus vecinos son los productores. Eso le da acceso que ningún intermediario externo tiene. Su perfil técnico (inglés, viajes, UX, AI) le da acceso a compradores que ningún productor tiene. COFI es el puente.

**Referente:** Pergamino (Pedro Echavarría, Colombia) — conectó micro-productores colombianos con tostadores internacionales desde origen. COFI busca hacer lo mismo con Costa Rica.

---

## Productores actuales

### Lica Torres — Cerro Buena Vista
- Región: Brunca / Rivas, Pérez Zeledón
- Microbeneficio: Cerro Buena Vista

### Don Humberto — El Arrempujón
- Región: Brunca / Sabalito, Coto Brus
- Microbeneficio: El Arrempujón

---

## Lotes disponibles (cosecha 2025)

| Lote | Variedad | Proceso | Altitud | Productor |
|---|---|---|---|---|
| Etíope 47 | SL28 | White Honey | 1,800 msnm | Lica Torres |
| Milenio H10 | H10 | Black Cherry | 1,600 msnm | Lica Torres |
| Milenio H10 | H10 | Red Honey | 1,600 msnm | Lica Torres |
| Venecia | Venecia | Honey | 1,300 msnm | Don Humberto |
| Centroamericano | Centroamericano | Natural | 1,300 msnm | Don Humberto |

---

## Qué se construyó en esta sesión

### Estructura del sitio
```
cofi-site/
├── index.html              ← Landing principal bilingüe (EN/ES)
├── netlify.toml            ← Configuración de rutas para Netlify
└── lotes/
    ├── black-cherry.html
    ├── etiope-white-honey.html
    ├── milenio-red-honey.html
    ├── venecia-honey.html
    └── centroamericano.html
```

### Características del sitio actual
- Landing bilingüe EN/ES con toggle que recuerda preferencia (localStorage)
- Schema.org JSON-LD completo para LLM SEO (AEO)
- Catálogo de 5 lotes con rutas: `cofi.cr/lotes/black-cherry`, etc.
- Fichas de lote individuales con paleta de color única por lote
- Formulario de contacto (visual únicamente — falta conectar a backend)
- QR placeholder en cada ficha de lote (falta generar QRs reales)
- Design system: Cormorant Garamond + DM Mono, fondo negro, acentos gold

---

## Próximos pasos priorizados

### Inmediato
1. **Conectar formulario a Netlify Forms** — agregar `netlify` attribute al form y `data-netlify="true"`, sin código adicional
2. **Publicar en Netlify** y apuntar DNS de cofi.cr
3. **Generar QRs reales** para cada lote una vez que estén las URLs finales
4. **Agregar notas de cata reales** al lote Milenio Red Honey (no tenemos ficha oficial aún)

### Corto plazo (1-2 meses)
5. **Generador de notas de cata con AI** — input: datos del Q-grader → output: 3 versiones (técnica, sensorial, redes sociales)
6. **Sistema de documentación de finca** — grabar conversación con productor → transcripción Whisper → ficha estructurada automática
7. **SEO/AEO** — crear páginas de contenido que respondan preguntas reales: "¿qué es el proceso Black Cherry?", "café especial Brunca Costa Rica"

### Mediano plazo (6 meses)
8. **Portal de catálogo dinámico** — base de datos de lotes, filtros por región/proceso/perfil, solicitud de muestras integrada
9. **CRM mínimo** — seguimiento de prospectos internacionales, lote asignado, reacción, conversión

---

## Stack tecnológico actual
- HTML/CSS/JS estático — sin framework
- Hosting: Netlify (target)
- Dominio: cofi.cr
- Fonts: Google Fonts (Cormorant Garamond + DM Mono)
- Sin base de datos todavía

## Stack tecnológico target
- Next.js o Astro para escalar a dinámico
- Netlify Forms → evolucionará a backend propio
- Anthropic API para generador de notas de cata y documentación de finca
- Airtable o Notion como CRM inicial

---

## Instrucciones para Claude Code

Cuando Maikol te dé una tarea, tené en cuenta:
- El sitio está en la carpeta `cofi-site/` — esa es la raíz del proyecto
- El diseño usa variables CSS definidas en cada archivo — mantené consistencia
- El sistema bilingüe usa clases `.en-only` y `.es-only` con `body.es` como selector — no rompas ese patrón
- Maikol prefiere respuestas directas, sin teoría, con código concreto
- Siempre decile cuál es el próximo paso después de completar una tarea
