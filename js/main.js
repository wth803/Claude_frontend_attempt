/**
 * main.js – Homepage logic
 *
 * Responsibilities:
 *   • Render the three product cards dynamically
 *   • Wire up language-switcher buttons
 *   • Navbar scroll behaviour (becomes opaque on scroll)
 *   • Intersection-Observer-based scroll-reveal animations
 *   • Navigate to detail.html?id=N on card click
 */

/* ─── Product data (visual layer only – text comes from i18n) ── */

/**
 * Static, non-translated product metadata.
 * The gradient and accent colour define each product's visual identity.
 */
const PRODUCTS = [
  {
    id:       1,
    gradient: 'linear-gradient(145deg, #0a2342 0%, #1a6ea8 55%, #1d8fd0 100%)',
    accent:   '#74b9ff',
    icon:     '💧',
  },
  {
    id:       2,
    gradient: 'linear-gradient(145deg, #0a2e1f 0%, #0e7555 55%, #15a870 100%)',
    accent:   '#55efc4',
    icon:     '🌿',
  },
  {
    id:       3,
    gradient: 'linear-gradient(145deg, #1a0533 0%, #5b1680 55%, #9b59b6 100%)',
    accent:   '#c39bd3',
    icon:     '✨',
  },
];

/* ─── Helpers ────────────────────────────────────────────────── */

/** Create the SVG water-bottle illustration used inside each card */
function bottleSVG(accent) {
  return `
  <svg viewBox="0 0 80 170" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <linearGradient id="b${accent.replace('#','')}" x1="20%" y1="0%" x2="80%" y2="100%">
        <stop offset="0%"   stop-color="${accent}" stop-opacity="0.35"/>
        <stop offset="100%" stop-color="${accent}" stop-opacity="0.08"/>
      </linearGradient>
    </defs>
    <!-- bottle cap -->
    <rect x="27" y="6" width="26" height="14" rx="5"
          fill="${accent}" opacity="0.6"/>
    <!-- bottle neck -->
    <rect x="29" y="20" width="22" height="14" rx="3"
          fill="${accent}" opacity="0.35"/>
    <!-- bottle body -->
    <path d="M18 34 C12 40 10 55 10 70 L10 132 C10 148 22 162 40 162
             C58 162 70 148 70 132 L70 70 C70 55 68 40 62 34 Z"
          fill="url(#b${accent.replace('#','')})"
          stroke="${accent}" stroke-width="1.2" opacity="0.9"/>
    <!-- water fill level -->
    <clipPath id="c${accent.replace('#','')}">
      <path d="M18 34 C12 40 10 55 10 70 L10 132 C10 148 22 162 40 162
               C58 162 70 148 70 132 L70 70 C70 55 68 40 62 34 Z"/>
    </clipPath>
    <rect x="10" y="90" width="60" height="72"
          fill="${accent}" opacity="0.18"
          clip-path="url(#c${accent.replace('#','')})"/>
    <!-- label area -->
    <rect x="13" y="84" width="54" height="52" rx="6"
          fill="white" opacity="0.05"
          stroke="${accent}" stroke-width="0.8" opacity="0.25"/>
    <!-- highlight streak -->
    <line x1="22" y1="42" x2="20" y2="110"
          stroke="white" stroke-width="2" stroke-linecap="round" opacity="0.22"/>
  </svg>`;
}

/** Build one product card element */
function buildCard(product) {
  const card = document.createElement('article');
  card.className    = 'product-card fade-in';
  card.setAttribute('role', 'button');
  card.setAttribute('tabindex', '0');
  card.setAttribute('aria-label', t(`product.${product.id}.name`));

  card.innerHTML = `
    <div class="card-visual" style="background:${product.gradient}">
      <div class="card-bottle">${bottleSVG(product.accent)}</div>
    </div>
    <div class="card-content">
      <p  class="card-type"  data-i18n="product.${product.id}.type"></p>
      <h3 class="card-name"  data-i18n="product.${product.id}.name"></h3>
      <p  class="card-desc"  data-i18n="product.${product.id}.desc"></p>
      <span class="card-link" data-i18n="card.learnMore"></span>
    </div>`;

  // Navigate to detail page on click or Enter/Space key press
  const navigate = () => {
    window.location.href = `detail.html?id=${product.id}`;
  };
  card.addEventListener('click', navigate);
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); navigate(); }
  });

  return card;
}

/** Render all product cards into #product-grid */
function renderCards() {
  const grid = document.getElementById('product-grid');
  if (!grid) return;
  grid.innerHTML = '';
  PRODUCTS.forEach(p => grid.appendChild(buildCard(p)));
  // Translations are applied by i18n.js via applyTranslations(); trigger it
  if (typeof applyTranslations === 'function') applyTranslations();
  // Re-observe new elements
  observeAnimations();
}

/* ─── Scroll-reveal animations ───────────────────────────────── */

function observeAnimations() {
  const io = new IntersectionObserver(
    entries => entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add('visible');
        io.unobserve(en.target);
      }
    }),
    { threshold: 0.12 }
  );
  document.querySelectorAll('.fade-in').forEach(el => io.observe(el));
}

/* ─── Navbar scroll effect ───────────────────────────────────── */

function initNavbar() {
  const nav = document.querySelector('.navbar');
  if (!nav) return;
  const update = () => nav.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', update, { passive: true });
  update();
}

/* ─── Language switcher ──────────────────────────────────────── */

function initLangSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });
}

/* ─── Init ───────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initLangSwitcher();
  renderCards();
  observeAnimations();

  // Re-render cards when language changes so dynamic text updates
  document.addEventListener('langchange', renderCards);
});
