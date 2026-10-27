"use client";

import { useEffect, useRef } from "react";

/**
 * Animated background behind the whole site, drawn on one canvas. On the home page it changes
 * as you scroll, cross-fading between three scenes:
 *   screens 1-2: a slowly turning swirl of dashes
 *   screen 3:    dashes flowing in a U, down the left, across the bottom, up the right
 *   after that:  a light scatter of drifting dots
 * Every other page shows only the dots. Dashes in the swirl and the U drift away from the
 * cursor. Colours run indigo on the left to orange on the right. Reduced motion: still frame.
 */

type Pointer = { x: number; y: number };
type Frame = { ctx: CanvasRenderingContext2D; w: number; h: number; dt: number; time: number; pointer: Pointer; dark: boolean; shrink: number };
type Scene = { resize: (w: number, h: number) => void; draw: (f: Frame) => void };

const PUSH_RADIUS = 140;

// Hue runs 234 (indigo) through 280 (violet) to 374 = 14 (orange).
const hueAt = (t: number) => (234 + Math.min(1, Math.max(0, t)) * 140) % 360;

type Push = { ox: number; oy: number };

// Ease a dash away from the cursor, and back once the cursor moves on.
function pushAway(p: Push, x: number, y: number, pointer: Pointer) {
  let tx = 0;
  let ty = 0;
  const dx = x - pointer.x;
  const dy = y - pointer.y;
  const dist = Math.hypot(dx, dy);
  if (dist < PUSH_RADIUS && dist > 0.01) {
    const force = (1 - dist / PUSH_RADIUS) * 46;
    tx = (dx / dist) * force;
    ty = (dy / dist) * force;
  }
  p.ox += (tx - p.ox) * 0.08;
  p.oy += (ty - p.oy) * 0.08;
  return { x: x + p.ox, y: y + p.oy };
}

function dash(f: Frame, x: number, y: number, tx: number, ty: number, length: number, hue: number, alpha: number) {
  const hx = (tx * length) / 2;
  const hy = (ty * length) / 2;
  f.ctx.strokeStyle = `hsla(${hue.toFixed(0)}, ${f.dark ? "75%" : "70%"}, ${f.dark ? "66%" : "58%"}, ${alpha})`;
  f.ctx.beginPath();
  f.ctx.moveTo(x - hx, y - hy);
  f.ctx.lineTo(x + hx, y + hy);
  f.ctx.stroke();
}

/* ---------- Scene 1: the swirl ---------- */

function swirlScene(): Scene {
  type D = Push & { angle: number; radius: number; speed: number; length: number; tilt: number; alpha: number; tiny: boolean };
  let dashes: D[] = [];

  const make = (tiny: boolean): D => {
    const radius = tiny ? 0.1 + Math.random() * 1.2 : 0.3 + 0.85 * Math.pow(Math.random(), 0.75);
    return {
      angle: Math.random() * Math.PI * 2,
      radius,
      speed: tiny ? 0.00003 + Math.random() * 0.00003 : (0.00007 + Math.random() * 0.00005) / radius,
      length: 5 + Math.random() * 6,
      tilt: (Math.random() - 0.5) * 0.9,
      alpha: tiny ? 0.18 + Math.random() * 0.2 : 0.45 + Math.random() * 0.5,
      ox: 0,
      oy: 0,
      tiny,
    };
  };

  return {
    resize: () => {
      dashes = [...Array.from({ length: 760 }, () => make(false)), ...Array.from({ length: 220 }, () => make(true))];
    },
    draw: (f) => {
      const cx = f.w / 2;
      const cy = f.h * 0.48;
      const R = Math.max(f.w, f.h) * 0.5;
      for (const d of dashes) {
        d.angle += d.speed * f.dt;
        const cos = Math.cos(d.angle);
        const sin = Math.sin(d.angle);
        const { x, y } = pushAway(d, cx + cos * d.radius * R, cy + sin * d.radius * R * 0.82, f.pointer);
        if (x < -20 || y < -20 || x > f.w + 20 || y > f.h + 20) continue;
        if (d.tiny) {
          f.ctx.fillStyle = `hsla(240, 10%, 60%, ${d.alpha})`;
          f.ctx.fillRect(x, y, 1.6, 1.6);
          continue;
        }
        const dir = d.angle + Math.PI / 2 + d.tilt;
        dash(f, x, y, Math.cos(dir), Math.sin(dir), d.length, hueAt((1 + cos) / 2), d.alpha);
      }
    },
  };
}

/* ---------- Scene 2: the U ---------- */

type Geometry = { xL: number; xR: number; yB: number; rc: number; hwSide: number; hwBottom: number; segs: number[]; total: number };
const U_TOP = -40;

function geometry(w: number, h: number): Geometry {
  // Sides sit in the gutters beside the 1280px content column; the bottom band hugs the edge.
  const gutter = (w - 1280) / 2;
  const side = w < 900 ? w * 0.14 : Math.min(Math.max(gutter + 70, 110), w * 0.22);
  const bottom = Math.min(Math.max(h * 0.2, 100), 230);
  const xL = side / 2;
  const xR = w - side / 2;
  const yB = h - bottom / 2;
  const rc = Math.max(side, bottom) * 0.9;
  const left = yB - rc - U_TOP;
  const corner = (Math.PI / 2) * rc;
  const across = Math.max(xR - xL - 2 * rc, 0);
  const segs = [left, left + corner, left + corner + across, left + 2 * corner + across];
  return { xL, xR, yB, rc, hwSide: side / 2, hwBottom: bottom / 2, segs, total: segs[3] + left };
}

// Point, direction and band half-width at distance s along the U.
function along(g: Geometry, s: number) {
  const [a, b, c, d] = g.segs;
  if (s < a) return { x: g.xL, y: U_TOP + s, tx: 0, ty: 1, hw: g.hwSide };
  if (s < b) {
    const t = (s - a) / (b - a);
    const ang = Math.PI - t * (Math.PI / 2);
    return {
      x: g.xL + g.rc + Math.cos(ang) * g.rc,
      y: g.yB - g.rc + Math.sin(ang) * g.rc,
      tx: Math.sin(ang),
      ty: -Math.cos(ang),
      hw: g.hwSide + (g.hwBottom - g.hwSide) * t,
    };
  }
  if (s < c) return { x: g.xL + g.rc + (s - b), y: g.yB, tx: 1, ty: 0, hw: g.hwBottom };
  if (s < d) {
    const t = (s - c) / (d - c);
    const ang = Math.PI / 2 - t * (Math.PI / 2);
    return {
      x: g.xR - g.rc + Math.cos(ang) * g.rc,
      y: g.yB - g.rc + Math.sin(ang) * g.rc,
      tx: Math.sin(ang),
      ty: -Math.cos(ang),
      hw: g.hwBottom + (g.hwSide - g.hwBottom) * t,
    };
  }
  return { x: g.xR, y: g.yB - g.rc - (s - d), tx: 0, ty: -1, hw: g.hwSide };
}

function uScene(): Scene {
  type D = Push & { s: number; lane: number; phase: number; speed: number; length: number; alpha: number; tiny: boolean };
  let g: Geometry;
  let dashes: D[] = [];
  // More dashes near the middle of the band, fewer at its edges.
  const lane = () => (Math.random() + Math.random() + Math.random() - 1.5) / 1.5;

  const make = (tiny: boolean): D => ({
    s: Math.random() * g.total,
    lane: lane(),
    phase: Math.random() * Math.PI * 2,
    speed: tiny ? 0.03 + Math.random() * 0.03 : 0.06 + Math.random() * 0.07,
    length: 5 + Math.random() * 6,
    alpha: tiny ? 0.18 + Math.random() * 0.2 : 0.45 + Math.random() * 0.5,
    ox: 0,
    oy: 0,
    tiny,
  });

  return {
    resize: (w, h) => {
      g = geometry(w, h);
      const count = Math.min(900, Math.round(g.total * 0.2));
      dashes = [...Array.from({ length: count }, () => make(false)), ...Array.from({ length: Math.round(count * 0.25) }, () => make(true))];
    },
    draw: (f) => {
      for (const d of dashes) {
        d.s += d.speed * f.dt;
        if (d.s > g.total) {
          d.s -= g.total;
          d.lane = lane();
        }
        const p = along(g, d.s);
        // a gentle sway across the band keeps the stream from looking like rails
        const sway = d.lane + 0.12 * Math.sin(d.s * 0.006 + d.phase + f.time * 0.0008);
        const { x, y } = pushAway(d, p.x - p.ty * sway * p.hw, p.y + p.tx * sway * p.hw, f.pointer);
        // fade in at the top left and out at the top right, so nothing pops
        const edge = Math.min(1, Math.max(0, (y + 20) / 120));
        if (edge <= 0) continue;
        if (d.tiny) {
          f.ctx.fillStyle = `hsla(240, 10%, 60%, ${d.alpha * edge})`;
          f.ctx.fillRect(x, y, 1.6, 1.6);
          continue;
        }
        dash(f, x, y, p.tx, p.ty, Math.max(d.length * (1 - f.shrink), 0.5), hueAt(d.s / g.total), d.alpha * edge);
      }
    },
  };
}

/* ---------- Scene 3: scattered dots ---------- */

function dotsScene(): Scene {
  type D = { x: number; y: number; vx: number; vy: number; r: number; alpha: number; phase: number };
  let w = 0;
  let h = 0;
  let dots: D[] = [];

  const make = (): D => {
    const angle = Math.random() * Math.PI * 2;
    const speed = 0.008 + Math.random() * 0.014;
    return {
      x: Math.random() * w,
      y: Math.random() * h,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      r: 1.3 + Math.random() * 1.4,
      alpha: 0.55 + Math.random() * 0.4,
      phase: Math.random() * Math.PI * 2,
    };
  };

  return {
    resize: (nw, nh) => {
      w = nw;
      h = nh;
      // about one dot per 9,000 px² of screen: roughly 230 on a 1920 x 1080 display
      dots = Array.from({ length: Math.round((w * h) / 9000) }, make);
    },
    draw: (f) => {
      for (const d of dots) {
        d.x += d.vx * f.dt;
        d.y += d.vy * f.dt;
        // wrap around the edges so the scatter stays even
        if (d.x < -5) d.x = w + 5;
        else if (d.x > w + 5) d.x = -5;
        if (d.y < -5) d.y = h + 5;
        else if (d.y > h + 5) d.y = -5;
        const twinkle = 0.8 + 0.2 * Math.sin(f.time * 0.0012 + d.phase);
        f.ctx.fillStyle = `hsla(${hueAt(d.x / w).toFixed(0)}, 75%, ${f.dark ? "66%" : "56%"}, ${d.alpha * twinkle})`;
        f.ctx.beginPath();
        f.ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        f.ctx.fill();
      }
    },
  };
}

/* ---------- Which scene shows where ---------- */

function mix() {
  // Use the drifting colorful dots across all pages (including the top pages)
  return { weights: [0, 0, 0.85], shrink: 0 };
}

export function ParticleField() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scenes = [swirlScene(), uScene(), dotsScene()];
    const pointer: Pointer = { x: -9999, y: -9999 };
    let w = 0;
    let h = 0;
    let frame = 0;
    let last = performance.now();
    let time = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      for (const scene of scenes) scene.resize(w, h);
    };

    const draw = (dt: number) => {
      time += dt;
      ctx.clearRect(0, 0, w, h);
      ctx.lineCap = "round";
      ctx.lineWidth = 2.2;
      const { weights, shrink } = mix();
      const f: Frame = { ctx, w, h, dt, time, pointer, shrink, dark: document.documentElement.classList.contains("dark") };
      weights.forEach((weight, i) => {
        if (weight <= 0.001) return;
        ctx.globalAlpha = weight;
        scenes[i].draw(f);
      });
      ctx.globalAlpha = 1;
    };

    const tick = (now: number) => {
      const dt = Math.min(now - last, 50);
      last = now;
      draw(dt);
      frame = requestAnimationFrame(tick);
    };

    const onMove = (e: PointerEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
    };
    const onLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };
    // with reduced motion, redraw the still frame when the scroll position picks a new scene
    const onScroll = () => draw(0);

    resize();
    window.addEventListener("resize", resize);
    if (still) {
      draw(0);
      window.addEventListener("scroll", onScroll, { passive: true });
    } else {
      window.addEventListener("pointermove", onMove, { passive: true });
      document.addEventListener("pointerleave", onLeave);
      frame = requestAnimationFrame(tick);
    }

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className="pointer-events-none fixed inset-0 -z-10" />;
}
