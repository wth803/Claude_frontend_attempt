# AquaPure – 矿泉水响应式介绍网站

A responsive mineral water product website built with vanilla HTML, CSS, and JavaScript.  
Apple-inspired dark theme · Three-language i18n (中 / EN / 日) · Canvas cursor star-tracking effect

---

## 快速开始 / Quick Start

Double-click **`index.html`** to open directly in any modern browser — no server required.

---

## 文件结构 / File Structure

```
Claude_frontend_attempt/
├── index.html          # Homepage: hero, product grid, about section
├── detail.html         # Product detail page (opened as detail.html?id=1|2|3)
│
├── css/
│   └── style.css       # All styles — dark theme, responsive grid, animations
│
├── js/
│   ├── i18n.js         # Translation engine + zh / en / ja string tables
│   ├── stars.js        # Canvas cursor star-tracking + twinkling background
│   ├── main.js         # Homepage logic: product cards, navbar, scroll-reveal
│   └── detail.js       # Detail page logic: load product by URL param
│
└── README.md           # This file
```

### File descriptions

| File | Purpose |
|------|---------|
| `index.html` | Entry point. Declares the navbar, hero, products section placeholder and about section. `main.js` dynamically injects product cards. |
| `detail.html` | Detail template. Reads `?id=` from the URL. `detail.js` fills in gradients, SVG bottle, text, mineral table. |
| `css/style.css` | Shared stylesheet. CSS custom properties for theming, Flexbox/Grid layouts, scroll-reveal transitions, responsive breakpoints. |
| `js/i18n.js` | Defines `translations` (zh/en/ja), `t(key)` helper, `setLanguage(lang)`, and `applyTranslations()`. Must load before other scripts. |
| `js/stars.js` | Creates a `<canvas>` overlay. Twinkling background stars + glowing cursor particle trail + click ripples. |
| `js/main.js` | Builds product cards from `PRODUCTS` array + i18n, scroll-reveal via `IntersectionObserver`, navbar scroll behaviour. |
| `js/detail.js` | Parses `?id=`, injects product gradient/SVG, populates mineral table, wires Add-to-Cart / Buy-Now buttons. |

---

## 功能 / Features

- **Responsive design** — mobile-first CSS grid, collapses to single column on small screens
- **Mouse tracking star effect** — canvas overlay with cursor particle trail and twinkling background
- **Three-language i18n** — switch between 中文 / English / 日本語 at runtime; choice persisted via `localStorage`
- **Product detail pages** — click any card → `detail.html?id=N` with ingredient table, pricing, and CTA buttons
- **Apple-inspired UI** — `#000` background, `#f5f5f7` text, `#0071e3` accent, backdrop-blur navbar, pill buttons
- **Accessibility** — semantic HTML, `aria-label`, keyboard navigation on product cards

---

## 产品 / Products

| # | 中文名 | English | 日本語 |
|---|--------|---------|-------|
| 1 | 阿尔卑斯纯泉 | Alpine Pure | アルプス純水 |
| 2 | 矿物精华水   | Mineral Boost | ミネラルブースト |
| 3 | 气泡晶泉水   | Sparkling Crystal | スパークリング クリスタル |