/**
 * i18n.js – Internationalisation engine + translation strings
 * Supports: zh (Chinese), en (English), ja (Japanese)
 *
 * Usage:
 *   <span data-i18n="hero.title"></span>
 *   setLanguage('en');   // switches UI language at runtime
 */

/* ─── Translation tables ─────────────────────────────────────── */
const translations = {

  /* ── CHINESE (Simplified) ──────────────────────────────────── */
  zh: {
    /* browser tab */
    title: 'AquaPure | 纯净矿泉水',

    /* shared brand & nav */
    brand:           'AquaPure',
    'nav.products':  '产品',
    'nav.about':     '关于我们',
    'nav.contact':   '联系我们',

    /* hero section */
    'hero.eyebrow':  '来自大自然',
    'hero.title':    '每一滴都是纯净的奇迹',
    'hero.subtitle': '精选高山泉源，富含天然矿物质，为您带来最纯粹的饮水体验',
    'hero.cta':      '探索产品',

    /* products listing */
    'products.title':    '我们的产品',
    'products.subtitle': '三款精心调配，适合不同生活场景',
    'card.learnMore':    '了解详情',

    /* product 1 */
    'product.1.name':  '阿尔卑斯纯泉',
    'product.1.type':  '天然矿泉水',
    'product.1.desc':  '源自阿尔卑斯山脉千年冰川，口感清冽甘甜，TDS 极低，纯净自然。',
    'product.1.price': '¥19.9 / 瓶',

    /* product 2 */
    'product.2.name':  '矿物精华水',
    'product.2.type':  '富矿物质水',
    'product.2.desc':  '来自北欧深层岩盘，钙、镁含量丰富，每天补充人体所需矿物质。',
    'product.2.price': '¥24.9 / 瓶',

    /* product 3 */
    'product.3.name':  '气泡晶泉水',
    'product.3.type':  '天然气泡水',
    'product.3.desc':  '意大利多洛米蒂山天然气泡，细腻绵密，清爽体验，佐餐佳选。',
    'product.3.price': '¥22.9 / 瓶',

    /* about */
    'about.title': '关于 AquaPure',
    'about.text':  '我们相信每个人都应该享有最纯净的水。AquaPure 源自对自然的敬畏与对品质的执着追求——从水源地到您的餐桌，每一滴都经过严格检测，守护您的健康。',

    /* features */
    'feature.pure.title':    '极致纯净',
    'feature.pure.text':     '严苛的水源检测标准，确保每一瓶都达到最高纯净度',
    'feature.natural.title': '天然矿物',
    'feature.natural.text':  '来自地球深处的天然矿物质，无人工添加',
    'feature.eco.title':     '绿色环保',
    'feature.eco.text':      '100% 可回收包装，承诺减少碳排放，守护地球',

    /* detail page – labels */
    'detail.back':        '← 返回',
    'detail.price':       '价格',
    'detail.source.label':'水源地',
    'detail.tds':         '总溶解固体 (TDS)',
    'detail.ph':          'pH 值',
    'detail.composition': '矿物成分分析',
    'detail.calcium':     '钙 (Ca²⁺)',
    'detail.magnesium':   '镁 (Mg²⁺)',
    'detail.sodium':      '钠 (Na⁺)',
    'detail.potassium':   '钾 (K⁺)',
    'detail.bicarbonate': '碳酸氢根 (HCO₃⁻)',
    'detail.addCart':     '加入购物车',
    'detail.buyNow':      '立即购买',

    /* detail page – product-specific source names */
    'detail.source.1': '阿尔卑斯山脉冰川，海拔 2 400 m',
    'detail.source.2': '北欧深层岩盘，埋深 300 m',
    'detail.source.3': '意大利多洛米蒂山泉，海拔 1 800 m',

    /* detail page – longer descriptions */
    'detail.fullDesc.1': '来自阿尔卑斯山脉海拔 2 400 米的天然冰川，历经数百年天然过滤，TDS 仅 47 mg/L，口感极为纯净。无任何人工处理，完整保留大自然的馈赠。',
    'detail.fullDesc.2': '北欧深层岩盘经历亿万年地质作用，造就了这款矿物质含量均衡、口感醇厚的矿泉水。钙、镁比例接近人体黄金吸收比，长期饮用有助于补充每日所需矿物质。',
    'detail.fullDesc.3': '来自多洛米蒂山的天然碳酸泉，气泡细腻持久，轻盈爽口，佐餐、调制鸡尾酒皆宜。低矿化度的水体使气泡更加纯净，带来真正的天然气泡享受。',

    /* footer */
    'footer.copyright': '© 2024 AquaPure. 保留所有权利。',
  },

  /* ── ENGLISH ───────────────────────────────────────────────── */
  en: {
    title: 'AquaPure | Pure Mineral Water',
    brand: 'AquaPure',
    'nav.products': 'Products',
    'nav.about':    'About',
    'nav.contact':  'Contact',

    'hero.eyebrow':  'From nature, for you',
    'hero.title':    'Every Drop a Pure Miracle',
    'hero.subtitle': 'Sourced from pristine mountain springs, rich in natural minerals — the purest drinking experience.',
    'hero.cta':      'Explore Products',

    'products.title':    'Our Products',
    'products.subtitle': 'Three carefully crafted varieties for every lifestyle',
    'card.learnMore':    'Learn more',

    'product.1.name':  'Alpine Pure',
    'product.1.type':  'Natural Spring Water',
    'product.1.desc':  'From ancient Alpine glaciers — exceptionally low TDS, crisp and naturally sweet.',
    'product.1.price': '$2.99 / bottle',

    'product.2.name':  'Mineral Boost',
    'product.2.type':  'Mineral-Rich Water',
    'product.2.desc':  'Deep Northern European bedrock provides a balanced calcium-magnesium profile your body craves.',
    'product.2.price': '$3.99 / bottle',

    'product.3.name':  'Sparkling Crystal',
    'product.3.type':  'Natural Sparkling Water',
    'product.3.desc':  'Naturally carbonated at the Dolomite source — delicate bubbles, effortlessly refreshing.',
    'product.3.price': '$3.49 / bottle',

    'about.title': 'About AquaPure',
    'about.text':  'We believe everyone deserves the purest water. AquaPure is born from reverence for nature and an unwavering pursuit of quality — from source to your table, every drop is rigorously tested.',

    'feature.pure.title':    'Uncompromising Purity',
    'feature.pure.text':     'Strict source testing standards ensure every bottle meets the highest purity benchmark',
    'feature.natural.title': 'Natural Minerals',
    'feature.natural.text':  'Earth-deep natural minerals, zero artificial additives',
    'feature.eco.title':     'Eco Conscious',
    'feature.eco.text':      '100% recyclable packaging, committed to carbon reduction, protecting our planet',

    'detail.back':         '← Back',
    'detail.price':        'Price',
    'detail.source.label': 'Water Source',
    'detail.tds':          'Total Dissolved Solids (TDS)',
    'detail.ph':           'pH Value',
    'detail.composition':  'Mineral Composition',
    'detail.calcium':      'Calcium (Ca²⁺)',
    'detail.magnesium':    'Magnesium (Mg²⁺)',
    'detail.sodium':       'Sodium (Na⁺)',
    'detail.potassium':    'Potassium (K⁺)',
    'detail.bicarbonate':  'Bicarbonate (HCO₃⁻)',
    'detail.addCart':      'Add to Cart',
    'detail.buyNow':       'Buy Now',

    'detail.source.1': 'Alpine Glacier, 2,400 m altitude',
    'detail.source.2': 'Northern European Bedrock, 300 m depth',
    'detail.source.3': 'Dolomites Spring, Italy, 1,800 m altitude',

    'detail.fullDesc.1': 'Drawn from an Alpine glacier at 2,400 m, naturally filtered over centuries. With a TDS of just 47 mg/L this water is as pure as it gets — no treatments, only nature.',
    'detail.fullDesc.2': 'Billions of years of geological action in Northern European bedrock produced this perfectly balanced mineral water. The calcium-magnesium ratio mirrors the human body\'s ideal absorption profile.',
    'detail.fullDesc.3': 'Naturally carbonated at the Dolomite source, the delicate bubbles are fine, persistent, and effortlessly refreshing — perfect with meals or as a cocktail mixer.',

    'footer.copyright': '© 2024 AquaPure. All rights reserved.',
  },

  /* ── JAPANESE ──────────────────────────────────────────────── */
  ja: {
    title: 'AquaPure | 純粋なミネラルウォーター',
    brand: 'AquaPure',
    'nav.products': '製品',
    'nav.about':    '私たちについて',
    'nav.contact':  'お問い合わせ',

    'hero.eyebrow':  '自然から、あなたへ',
    'hero.title':    '一滴一滴が、純粋な奇跡',
    'hero.subtitle': '厳選された山岳源泉から湧き出る、天然ミネラル豊富な至高の飲水体験',
    'hero.cta':      '製品を見る',

    'products.title':    '製品ラインナップ',
    'products.subtitle': 'それぞれのライフスタイルに合わせた三種類',
    'card.learnMore':    '詳しく見る',

    'product.1.name':  'アルプス純水',
    'product.1.type':  '天然湧水',
    'product.1.desc':  'アルプス山脈の古代氷河から。TDS 極めて低く、澄んだ甘さが広がります。',
    'product.1.price': '¥299 / 本',

    'product.2.name':  'ミネラルブースト',
    'product.2.type':  'ミネラルウォーター',
    'product.2.desc':  '北欧の深層岩盤が育んだ、カルシウム・マグネシウムが豊富な水。毎日の健康をサポート。',
    'product.2.price': '¥399 / 本',

    'product.3.name':  'スパークリング クリスタル',
    'product.3.type':  '天然炭酸水',
    'product.3.desc':  'ドロミテ山源泉の天然炭酸。きめ細かい泡が続く爽やかな飲み心地、食事にも最適。',
    'product.3.price': '¥349 / 本',

    'about.title': 'AquaPureについて',
    'about.text':  '誰もが最も純粋な水を味わうべきだと、私たちは信じています。AquaPureは自然への敬意と品質への揺るぎない追求から誕生しました。水源から食卓まで、すべての一滴を厳しく検査しています。',

    'feature.pure.title':    '徹底した純粋さ',
    'feature.pure.text':     '厳格な水源検査基準により、すべてのボトルが最高純度を達成',
    'feature.natural.title': '天然ミネラル',
    'feature.natural.text':  '地球深部からの天然ミネラル、人工添加物ゼロ',
    'feature.eco.title':     '環境への配慮',
    'feature.eco.text':      '100%リサイクル可能なパッケージ、カーボン削減へのコミットメント',

    'detail.back':         '← 戻る',
    'detail.price':        '価格',
    'detail.source.label': '水源',
    'detail.tds':          '総溶解固形物 (TDS)',
    'detail.ph':           'pH値',
    'detail.composition':  'ミネラル成分分析',
    'detail.calcium':      'カルシウム (Ca²⁺)',
    'detail.magnesium':    'マグネシウム (Mg²⁺)',
    'detail.sodium':       'ナトリウム (Na⁺)',
    'detail.potassium':    'カリウム (K⁺)',
    'detail.bicarbonate':  '重炭酸塩 (HCO₃⁻)',
    'detail.addCart':      'カートに追加',
    'detail.buyNow':       '今すぐ購入',

    'detail.source.1': 'アルプス氷河、標高 2,400 m',
    'detail.source.2': '北欧深層岩盤、深度 300 m',
    'detail.source.3': 'イタリア・ドロミテ源泉、標高 1,800 m',

    'detail.fullDesc.1': '標高 2,400 m のアルプス氷河から湧き出る天然水。数百年かけて自然にろ過され、TDS はわずか 47 mg/L。一切の人工処理なしに、大自然の恵みをそのままお届けします。',
    'detail.fullDesc.2': '数十億年の地質活動が北欧の岩盤に刻み込んだ、理想的なカルシウム・マグネシウム比を持つミネラルウォーター。人体の吸収率に近い黄金比で毎日の健康をサポートします。',
    'detail.fullDesc.3': 'ドロミテ山の源泉で自然に炭酸が生成された、きめ細かく持続する天然炭酸水。軽やかで爽やかな口当たりは食事にもカクテルにも完璧に調和します。',

    'footer.copyright': '© 2024 AquaPure. All rights reserved.',
  },
};

/* ─── i18n Engine ────────────────────────────────────────────── */

/** Currently active language code */
let currentLang = localStorage.getItem('aquapure-lang') || 'zh';

/**
 * Translate a single key for the current language.
 * Falls back to English, then to the key itself if missing.
 */
function t(key) {
  return (translations[currentLang] && translations[currentLang][key])
    || (translations.en && translations.en[key])
    || key;
}

/**
 * Apply translations to every element with a [data-i18n] attribute.
 * Also updates <title> and active language button styling.
 */
function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    el.textContent = t(key);
  });

  // Update the browser tab title if a title key exists
  if (t('title')) document.title = t('title');

  // Highlight the active language button
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });
}

/**
 * Switch the UI language, persist the choice, and re-render.
 * @param {string} lang - 'zh' | 'en' | 'ja'
 */
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('aquapure-lang', lang);
  applyTranslations();
  // Notify custom listeners (e.g. detail.js needs to re-render dynamic HTML)
  document.dispatchEvent(new CustomEvent('langchange', { detail: lang }));
}

// Apply translations as soon as the DOM is ready
document.addEventListener('DOMContentLoaded', applyTranslations);
