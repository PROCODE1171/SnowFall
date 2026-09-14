/**
 * SNOWFALL - Lightweight Canvas Particle Snow Engine
 * =====================================================================
 * High performance, battery-friendly snowfall with crystal shimmers.
 * Supports window resizing, mouse drift, and toggle control.
 * =====================================================================
 */

class SnowEngine {
  constructor(canvasId = "snow-canvas") {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext("2d");
    this.particles = [];
    this.maxParticles = 65; // Optimized for 60fps across mobile & desktop
    this.isRunning = true;
    this.animationFrameId = null;
    this.mouseX = 0;
    this.wind = 0.2;

    this.init();
  }

  init() {
    this.resize();
    window.addEventListener("resize", () => this.resize());
    window.addEventListener("mousemove", (e) => {
      this.mouseX = (e.clientX / window.innerWidth - 0.5) * 0.8;
    });

    // Create initial particle pool
    for (let i = 0; i < this.maxParticles; i++) {
      this.particles.push(this.createParticle(true));
    }

    this.animate();
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
    // Adjust density for mobile
    if (this.width < 768) {
      this.maxParticles = 35;
    } else {
      this.maxParticles = 65;
    }
  }

  createParticle(randomY = false) {
    const isCrystal = Math.random() > 0.8; // 20% are special glowing crystal flakes
    return {
      x: Math.random() * this.width,
      y: randomY ? Math.random() * this.height : -10,
      radius: Math.random() * (isCrystal ? 2.8 : 2.0) + 0.8,
      speedY: Math.random() * 1.2 + 0.6,
      speedX: (Math.random() - 0.5) * 0.6,
      opacity: Math.random() * 0.55 + 0.25,
      isCrystal: isCrystal,
      swing: Math.random() * Math.PI * 2,
      swingSpeed: Math.random() * 0.02 + 0.01
    };
  }

  drawFlake(p) {
    this.ctx.beginPath();
    this.ctx.save();
    this.ctx.fillStyle = p.isCrystal 
      ? `rgba(0, 240, 255, ${p.opacity})` 
      : `rgba(220, 245, 255, ${p.opacity * 0.8})`;

    if (p.isCrystal) {
      this.ctx.shadowColor = "#00f0ff";
      this.ctx.shadowBlur = 6;
      // Draw crystal diamond shape
      const r = p.radius * 1.4;
      this.ctx.moveTo(p.x, p.y - r);
      this.ctx.lineTo(p.x + r * 0.7, p.y);
      this.ctx.lineTo(p.x, p.y + r);
      this.ctx.lineTo(p.x - r * 0.7, p.y);
      this.ctx.closePath();
      this.ctx.fill();
    } else {
      this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      this.ctx.fill();
    }
    this.ctx.restore();
  }

  update() {
    this.ctx.clearRect(0, 0, this.width, this.height);

    for (let i = 0; i < this.particles.length; i++) {
      const p = this.particles[i];
      p.swing += p.swingSpeed;
      p.x += p.speedX + Math.sin(p.swing) * 0.5 + (this.mouseX || 0) * 0.3;
      p.y += p.speedY;

      // Wrap around bounds
      if (p.y > this.height + 10) {
        this.particles[i] = this.createParticle(false);
      }
      if (p.x < -10) p.x = this.width + 10;
      if (p.x > this.width + 10) p.x = -10;

      this.drawFlake(p);
    }
  }

  animate() {
    if (!this.isRunning) return;
    this.update();
    this.animationFrameId = requestAnimationFrame(() => this.animate());
  }

  toggle() {
    this.isRunning = !this.isRunning;
    if (this.isRunning) {
      this.animate();
    } else {
      cancelAnimationFrame(this.animationFrameId);
      this.ctx.clearRect(0, 0, this.width, this.height);
    }
    return this.isRunning;
  }
}

// Auto-initialize when DOM loads
window.addEventListener("DOMContentLoaded", () => {
  window.snowEngineInstance = new SnowEngine("snow-canvas");
});
