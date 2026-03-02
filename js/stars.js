/**
 * stars.js – Canvas-based cursor star-tracking particle effect
 *
 * Features:
 *   • Twinkling background star-field (static stars that pulse in opacity)
 *   • Glowing cursor trail: coloured star particles spawn at the mouse
 *     position, drift upward, and fade out smoothly
 *   • Ripple burst on click
 *   • Canvas is a fixed overlay with pointer-events: none, so it never
 *     blocks page interaction
 */

class StarField {
  constructor() {
    /* Create and insert the canvas behind everything else */
    this.canvas = document.createElement('canvas');
    this.canvas.id = 'starCanvas';
    Object.assign(this.canvas.style, {
      position:      'fixed',
      top:           '0',
      left:          '0',
      width:         '100%',
      height:        '100%',
      pointerEvents: 'none',   // never blocks clicks / hovers
      zIndex:        '0',
    });
    document.body.insertBefore(this.canvas, document.body.firstChild);

    this.ctx       = this.canvas.getContext('2d');
    this.particles = [];        // cursor-trail particles
    this.ripples   = [];        // click-ripple rings
    this.bgStars   = [];        // static background stars

    this._resize();
    this._initBgStars();
    this._bindEvents();
    this._loop();
  }

  /* ── Setup ──────────────────────────────────────────────────── */

  _resize() {
    this.canvas.width  = window.innerWidth;
    this.canvas.height = window.innerHeight;
    // Rebuild bg stars on resize so density stays consistent
    this._initBgStars();
  }

  /** Seed the static twinkling background star-field */
  _initBgStars() {
    const count = Math.floor((this.canvas.width * this.canvas.height) / 6000);
    this.bgStars = Array.from({ length: count }, () => ({
      x:           Math.random() * this.canvas.width,
      y:           Math.random() * this.canvas.height,
      r:           Math.random() * 1.2 + 0.2,
      baseAlpha:   Math.random() * 0.5 + 0.1,
      alpha:       0,
      speed:       Math.random() * 0.008 + 0.003,
      dir:         Math.random() > 0.5 ? 1 : -1,
    }));
  }

  _bindEvents() {
    window.addEventListener('resize', () => this._resize());

    /* Spawn cursor-trail particles on mouse move */
    document.addEventListener('mousemove', e => {
      // Spawn 2-4 particles per move event
      const n = Math.floor(Math.random() * 3) + 2;
      for (let i = 0; i < n; i++) {
        this._spawnParticle(e.clientX, e.clientY);
      }
    });

    /* Ripple on click */
    document.addEventListener('click', e => {
      this._spawnRipple(e.clientX, e.clientY);
    });
  }

  /* ── Particle factories ─────────────────────────────────────── */

  /** Glowing star particle at the cursor position */
  _spawnParticle(x, y) {
    const colors = [
      '#ffffff', '#a0c4ff', '#74b9ff',
      '#00cec9', '#81ecec', '#dfe6e9',
      '#6c9eff', '#c0d9ff',
    ];
    this.particles.push({
      x:     x + (Math.random() - 0.5) * 16,
      y:     y + (Math.random() - 0.5) * 16,
      vx:    (Math.random() - 0.5) * 0.8,
      vy:    -(Math.random() * 1.8 + 0.4),   // drift upward
      r:     Math.random() * 2.5 + 0.5,
      alpha: 1,
      decay: Math.random() * 0.018 + 0.008,
      color: colors[Math.floor(Math.random() * colors.length)],
    });
  }

  /** Expanding ring on click */
  _spawnRipple(x, y) {
    this.ripples.push({
      x, y,
      r:     0,
      maxR:  80,
      alpha: 0.6,
      speed: 3,
    });
  }

  /* ── Render loop ────────────────────────────────────────────── */

  _loop() {
    const ctx = this.ctx;
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this._drawBgStars(ctx);
    this._drawParticles(ctx);
    this._drawRipples(ctx);

    requestAnimationFrame(() => this._loop());
  }

  _drawBgStars(ctx) {
    this.bgStars.forEach(s => {
      // Gently pulse alpha
      s.alpha += s.speed * s.dir;
      if (s.alpha >= s.baseAlpha + 0.2 || s.alpha <= 0.05) s.dir *= -1;

      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200, 220, 255, ${Math.max(0, s.alpha)})`;
      ctx.fill();
    });
  }

  _drawParticles(ctx) {
    this.particles = this.particles.filter(p => p.alpha > 0);

    this.particles.forEach(p => {
      p.x     += p.vx;
      p.y     += p.vy;
      p.vy    *= 0.98;          // slight gravity drag
      p.alpha -= p.decay;

      ctx.save();
      ctx.globalAlpha  = Math.max(0, p.alpha);
      ctx.shadowBlur   = 8;
      ctx.shadowColor  = p.color;
      ctx.fillStyle    = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    });
  }

  _drawRipples(ctx) {
    this.ripples = this.ripples.filter(r => r.alpha > 0);

    this.ripples.forEach(r => {
      r.r     += r.speed;
      r.alpha -= 0.015;

      ctx.save();
      ctx.globalAlpha = Math.max(0, r.alpha);
      ctx.strokeStyle = 'rgba(0, 113, 227, 0.8)';
      ctx.lineWidth   = 1.5;
      ctx.beginPath();
      ctx.arc(r.x, r.y, r.r, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    });
  }
}

/* Initialise once the DOM is ready */
document.addEventListener('DOMContentLoaded', () => new StarField());
