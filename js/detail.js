/**
 * detail.js – Product detail page logic
 *
 * Responsibilities:
 *   • Parse ?id= from the URL to determine which product to display
 *   • Populate the page with the product's translated text and static data
 *   • Wire up language switcher (re-renders on change)
 *   • Add to cart / buy now feedback (demo alert)
 *   • Scroll-reveal animations
 */

/* ─── Static product data (non-translatable) ─────────────────── */

const PRODUCT_DATA = {
  1: {
    gradient: 'linear-gradient(145deg, #0a2342 0%, #1a6ea8 55%, #1d8fd0 100%)',
    accent:   '#74b9ff',
    tds:      '47 mg/L',
    ph:       '7.4',
    minerals: {
      calcium:     '11.5 mg/L',
      magnesium:   '2.6 mg/L',
      sodium:      '6.0 mg/L',
      potassium:   '1.0 mg/L',
      bicarbonate: '50.0 mg/L',
    },
  },
  2: {
    gradient: 'linear-gradient(145deg, #0a2e1f 0%, #0e7555 55%, #15a870 100%)',
    accent:   '#55efc4',
    tds:      '180 mg/L',
    ph:       '7.8',
    minerals: {
      calcium:     '52.0 mg/L',
      magnesium:   '26.0 mg/L',
      sodium:      '11.0 mg/L',
      potassium:   '5.0 mg/L',
      bicarbonate: '170.0 mg/L',
    },
  },
  3: {
    gradient: 'linear-gradient(145deg, #1a0533 0%, #5b1680 55%, #9b59b6 100%)',
    accent:   '#c39bd3',
    tds:      '65 mg/L',
    ph:       '6.2',
    minerals: {
      calcium:     '12.0 mg/L',
      magnesium:   '3.1 mg/L',
      sodium:      '8.5 mg/L',
      potassium:   '1.2 mg/L',
      bicarbonate: '42.0 mg/L',
    },
  },
};

/* ─── Helpers ────────────────────────────────────────────────── */

/** Get ?id= from the current URL; default to 1 */
function getProductId() {
  const raw = new URLSearchParams(window.location.search).get('id');
  const id  = parseInt(raw, 10);
  return PRODUCT_DATA[id] ? id : 1;
}

/** Build the SVG bottle visual (same as main.js but inline) */
function bottleSVG(accent) {
  const key = accent.replace('#', '');
  return `
  <svg viewBox="0 0 120 280" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
       style="width:160px;height:auto">
    <defs>
      <linearGradient id="dg${key}" x1="20%" y1="0%" x2="80%" y2="100%">
        <stop offset="0%"   stop-color="${accent}" stop-opacity="0.5"/>
        <stop offset="100%" stop-color="${accent}" stop-opacity="0.1"/>
      </linearGradient>
    </defs>
    <!-- cap -->
    <rect x="40" y="10" width="40" height="22" rx="8"
          fill="${accent}" opacity="0.7"/>
    <!-- neck -->
    <rect x="43" y="32" width="34" height="22" rx="4"
          fill="${accent}" opacity="0.45"/>
    <!-- body -->
    <path d="M26 54 C18 62 14 82 14 108 L14 212 C14 236 32 264 60 264
             C88 264 106 236 106 212 L106 108 C106 82 102 62 94 54 Z"
          fill="url(#dg${key})"
          stroke="${accent}" stroke-width="1.8" opacity="0.95"/>
    <!-- water fill -->
    <clipPath id="dc${key}">
      <path d="M26 54 C18 62 14 82 14 108 L14 212 C14 236 32 264 60 264
               C88 264 106 236 106 212 L106 108 C106 82 102 62 94 54 Z"/>
    </clipPath>
    <rect x="14" y="148" width="92" height="116"
          fill="${accent}" opacity="0.22"
          clip-path="url(#dc${key})"/>
    <!-- label -->
    <rect x="17" y="134" width="86" height="80" rx="10"
          fill="white" opacity="0.06"
          stroke="${accent}" stroke-width="1" opacity="0.3"/>
    <!-- highlight -->
    <line x1="32" y1="66" x2="29" y2="176"
          stroke="white" stroke-width="3" stroke-linecap="round" opacity="0.2"/>
  </svg>`;
}

/** Render the mineral composition table rows */
function buildMineralRows(minerals) {
  const keys = ['calcium', 'magnesium', 'sodium', 'potassium', 'bicarbonate'];
  return keys.map(k => `
    <tr>
      <td data-i18n="detail.${k}"></td>
      <td>${minerals[k]}</td>
    </tr>`).join('');
}

/** Populate the entire detail page */
function renderDetail() {
  const id   = getProductId();
  const data = PRODUCT_DATA[id];
  if (!data) return;

  /* Visual hero */
  const visual = document.getElementById('detail-visual');
  if (visual) {
    visual.style.background = data.gradient;
    visual.innerHTML = bottleSVG(data.accent);
  }

  /* Product name / type / description */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    // Rewrite template keys like "product.ID.name"
    const resolved = key.replace('{id}', id);
    el.setAttribute('data-i18n', resolved);
  });

  /* TDS / pH / source */
  const tdsEl = document.getElementById('detail-tds-value');
  if (tdsEl) tdsEl.textContent = data.tds;

  const phEl  = document.getElementById('detail-ph-value');
  if (phEl) phEl.textContent = data.ph;

  /* Price */
  const priceEl = document.getElementById('detail-price');
  if (priceEl) priceEl.setAttribute('data-i18n', `product.${id}.price`);

  /* Mineral table */
  const tbody = document.getElementById('mineral-tbody');
  if (tbody) tbody.innerHTML = buildMineralRows(data.minerals);

  /* Full description */
  const descEl = document.getElementById('detail-full-desc');
  if (descEl) descEl.setAttribute('data-i18n', `detail.fullDesc.${id}`);

  /* Source */
  const srcEl = document.getElementById('detail-source-value');
  if (srcEl) srcEl.setAttribute('data-i18n', `detail.source.${id}`);

  /* Product name / type heading */
  const nameEl = document.getElementById('detail-name');
  if (nameEl) nameEl.setAttribute('data-i18n', `product.${id}.name`);

  const typeEl = document.getElementById('detail-type');
  if (typeEl) typeEl.setAttribute('data-i18n', `product.${id}.type`);

  /* Apply all translations now that data-i18n attrs are set */
  if (typeof applyTranslations === 'function') applyTranslations();

  /* Scroll-reveal */
  observeAnimations();
}

/** Scroll-reveal via IntersectionObserver */
function observeAnimations() {
  const io = new IntersectionObserver(
    entries => entries.forEach(en => {
      if (en.isIntersecting) {
        en.target.classList.add('visible');
        io.unobserve(en.target);
      }
    }),
    { threshold: 0.1 }
  );
  document.querySelectorAll('.fade-in').forEach(el => io.observe(el));
}

/** Navbar scroll effect */
function initNavbar() {
  const nav = document.querySelector('.navbar');
  if (!nav) return;
  const update = () => nav.classList.toggle('scrolled', window.scrollY > 20);
  window.addEventListener('scroll', update, { passive: true });
  update();
}

/** Language switcher */
function initLangSwitcher() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });
}

/** Simple cart feedback (demo) */
function initButtons() {
  const addCartBtn = document.getElementById('btn-add-cart');
  const buyNowBtn  = document.getElementById('btn-buy-now');

  if (addCartBtn) {
    addCartBtn.addEventListener('click', () => {
      addCartBtn.textContent = '✓ ' + t('detail.addCart');
      addCartBtn.style.background = '#34c759';
      setTimeout(() => {
        addCartBtn.textContent = t('detail.addCart');
        addCartBtn.style.background = '';
      }, 1500);
    });
  }

  if (buyNowBtn) {
    buyNowBtn.addEventListener('click', () => {
      alert(t('detail.buyNow') + ' — Demo');
    });
  }
}

/* ─── Init ───────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initLangSwitcher();
  renderDetail();
  initButtons();

  // Re-render when language changes so all dynamic text updates
  document.addEventListener('langchange', renderDetail);
});
