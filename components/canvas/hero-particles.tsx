"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
}

function resolveCSSColor(oklch: string): string {
  try {
    const el = document.createElement("div");
    el.style.color = oklch;
    document.body.appendChild(el);
    const rgb = getComputedStyle(el).color;
    document.body.removeChild(el);
    return rgb;
  } catch {
    return "rgb(107, 140, 255)";
  }
}

function toRGBA(rgb: string, alpha: number): string {
  const m = rgb.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (!m) return `rgba(107, 140, 255, ${alpha})`;
  return `rgba(${m[1]}, ${m[2]}, ${m[3]}, ${alpha})`;
}

const PARTICLE_COUNT = 60;
const CONNECT_DIST = 180;
const MAX_SPEED = 0.15;

export function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const style = getComputedStyle(document.documentElement);
    const primaryRGB = resolveCSSColor(style.getPropertyValue("--primary"));

    const particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let raf: number;

    function resize() {
      const parent = canvas!.parentElement!;
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      const dpr = Math.min(devicePixelRatio, 2);
      canvas!.width = w * dpr;
      canvas!.height = h * dpr;
      canvas!.style.width = w + "px";
      canvas!.style.height = h + "px";
      ctx!.scale(dpr, dpr);
      width = w;
      height = h;
    }

    function init() {
      const spread = Math.min(width, height) * 0.35;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: (Math.random() - 0.5) * spread * 2,
          y: (Math.random() - 0.5) * spread * 2,
          z: (Math.random() - 0.5) * spread,
          vx: (Math.random() - 0.5) * MAX_SPEED,
          vy: (Math.random() - 0.5) * MAX_SPEED,
          vz: (Math.random() - 0.5) * MAX_SPEED * 0.5,
        });
      }
    }

    function animate() {
      ctx!.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const fov = Math.min(width, height) * 0.4;

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        const bound = Math.min(width, height) * 0.45;
        if (Math.abs(p.x) > bound) p.vx *= -1;
        if (Math.abs(p.y) > bound) p.vy *= -1;
        if (Math.abs(p.z) > bound) p.vz *= -1;
      }

      const projected = particles.map((p) => {
        const scale = fov / (fov + p.z);
        return {
          x: cx + p.x * scale,
          y: cy + p.y * scale,
          scale,
          z: p.z,
        };
      });

      const sorted = projected
        .map((p, i) => ({ ...p, i }))
        .sort((a, b) => a.z - b.z);

      for (const p of sorted) {
        const alpha =
          0.2 +
          0.6 * (1 - Math.abs(p.z) / (Math.min(width, height) * 0.45 + 1));
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, Math.max(1, 1.5 * p.scale), 0, Math.PI * 2);
        ctx!.fillStyle = toRGBA(primaryRGB, alpha);
        ctx!.fill();
      }

      for (let i = 0; i < sorted.length; i++) {
        for (let j = i + 1; j < sorted.length; j++) {
          const dx = sorted[i].x - sorted[j].x;
          const dy = sorted[i].y - sorted[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_DIST) {
            const alpha =
              0.1 *
              (1 - dist / CONNECT_DIST) *
              ((sorted[i].scale + sorted[j].scale) * 0.5);
            ctx!.beginPath();
            ctx!.moveTo(sorted[i].x, sorted[i].y);
            ctx!.lineTo(sorted[j].x, sorted[j].y);
            ctx!.strokeStyle = toRGBA(primaryRGB, alpha);
            ctx!.lineWidth = 0.5;
            ctx!.stroke();
          }
        }
      }

      raf = requestAnimationFrame(animate);
    }

    resize();
    init();
    raf = requestAnimationFrame(animate);

    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement!);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
}
