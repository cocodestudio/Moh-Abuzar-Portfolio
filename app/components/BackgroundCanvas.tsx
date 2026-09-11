"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  size: number;
  color: string;
  alpha: number;
  baseAlpha: number;
}

interface PolyhedronNode {
  x: number;
  y: number;
  z: number;
}

interface FloatingShape {
  cx: number;
  cy: number;
  cz: number;
  rotX: number;
  rotY: number;
  rotZ: number;
  vRotX: number;
  vRotY: number;
  vRotZ: number;
  size: number;
  color: string;
  nodes: PolyhedronNode[];
  edges: [number, number][];
}

export default function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Mouse coordinates
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      isMoving: false,
      lastMoveTime: Date.now(),
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.isMoving = true;
      mouse.lastMoveTime = Date.now();
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.targetX = e.touches[0].clientX;
        mouse.targetY = e.touches[0].clientY;
        mouse.isMoving = true;
        mouse.lastMoveTime = Date.now();
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    // Color Palette
    const colors = [
      "rgba(6, 182, 212,", // Cyan
      "rgba(139, 92, 246,", // Violet
      "rgba(245, 158, 11,", // Amber
      "rgba(56, 189, 248,", // Sky
    ];

    // Initialize Particles
    const particleCount = Math.min(Math.floor((width * height) / 14000), 100);
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const baseAlpha = 0.2 + Math.random() * 0.5;
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 800 + 100,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        vz: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 2.2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: baseAlpha,
        baseAlpha: baseAlpha,
      });
    }

    // Helper to generate a 3D wireframe cube
    const createCube = (size: number): { nodes: PolyhedronNode[]; edges: [number, number][] } => {
      const s = size / 2;
      const nodes: PolyhedronNode[] = [
        { x: -s, y: -s, z: -s },
        { x: s, y: -s, z: -s },
        { x: s, y: s, z: -s },
        { x: -s, y: s, z: -s },
        { x: -s, y: -s, z: s },
        { x: s, y: -s, z: s },
        { x: s, y: s, z: s },
        { x: -s, y: s, z: s },
      ];
      const edges: [number, number][] = [
        [0, 1], [1, 2], [2, 3], [3, 0],
        [4, 5], [5, 6], [6, 7], [7, 4],
        [0, 4], [1, 5], [2, 6], [3, 7],
      ];
      return { nodes, edges };
    };

    // Helper to generate a 3D Octahedron
    const createOctahedron = (size: number): { nodes: PolyhedronNode[]; edges: [number, number][] } => {
      const s = size / 2;
      const nodes: PolyhedronNode[] = [
        { x: 0, y: -s, z: 0 },
        { x: s, y: 0, z: 0 },
        { x: 0, y: 0, z: s },
        { x: -s, y: 0, z: 0 },
        { x: 0, y: 0, z: -s },
        { x: 0, y: s, z: 0 },
      ];
      const edges: [number, number][] = [
        [0, 1], [0, 2], [0, 3], [0, 4],
        [5, 1], [5, 2], [5, 3], [5, 4],
        [1, 2], [2, 3], [3, 4], [4, 1],
      ];
      return { nodes, edges };
    };

    // Initialize 3D Floating Shapes
    const shapes: FloatingShape[] = [];
    const shapeTypes = [createCube, createOctahedron];

    for (let i = 0; i < 4; i++) {
      const type = shapeTypes[i % shapeTypes.length];
      const { nodes, edges } = type(120 + Math.random() * 80);
      shapes.push({
        cx: (width * (i + 1)) / 5 + (Math.random() - 0.5) * 100,
        cy: (height * (i % 2 === 0 ? 0.3 : 0.7)) + (Math.random() - 0.5) * 80,
        cz: 400 + Math.random() * 400,
        rotX: Math.random() * Math.PI * 2,
        rotY: Math.random() * Math.PI * 2,
        rotZ: Math.random() * Math.PI * 2,
        vRotX: (Math.random() - 0.5) * 0.008,
        vRotY: (Math.random() - 0.5) * 0.012,
        vRotZ: (Math.random() - 0.5) * 0.006,
        size: 100,
        color: colors[i % colors.length],
        nodes,
        edges,
      });
    }

    // Perspective projection constant
    const fov = 600;

    const render = () => {
      // Smooth mouse lerp
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Dark space background clear
      ctx.fillStyle = "#030712";
      ctx.fillRect(0, 0, width, height);

      // Subtle radial ambient light that follows the mouse
      const gradient = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        Math.max(width, height) * 0.65
      );
      gradient.addColorStop(0, "rgba(6, 182, 212, 0.08)");
      gradient.addColorStop(0.3, "rgba(139, 92, 246, 0.04)");
      gradient.addColorStop(1, "rgba(3, 7, 18, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Render 3D Floating Shapes
      shapes.forEach((shape) => {
        shape.rotX += shape.vRotX;
        shape.rotY += shape.vRotY;
        shape.rotZ += shape.vRotZ;

        // Mouse influence on floating center
        const dx = (mouse.x - shape.cx) * 0.0003;
        const dy = (mouse.y - shape.cy) * 0.0003;
        shape.rotY += dx;
        shape.rotX += dy;

        const cosX = Math.cos(shape.rotX);
        const sinX = Math.sin(shape.rotX);
        const cosY = Math.cos(shape.rotY);
        const sinY = Math.sin(shape.rotY);
        const cosZ = Math.cos(shape.rotZ);
        const sinZ = Math.sin(shape.rotZ);

        // Project nodes
        const projected = shape.nodes.map((node) => {
          // Rotate Y
          const x1 = node.x * cosY + node.z * sinY;
          const y1 = node.y;
          const z1 = -node.x * sinY + node.z * cosY;

          // Rotate X
          const x2 = x1;
          const y2 = y1 * cosX - z1 * sinX;
          const z2 = y1 * sinX + z1 * cosX;

          // Rotate Z
          const x3 = x2 * cosZ - y2 * sinZ;
          const y3 = x2 * sinZ + y2 * cosZ;
          const z3 = z2 + shape.cz;

          const scale = fov / (fov + z3);
          return {
            px: shape.cx + x3 * scale,
            py: shape.cy + y3 * scale,
            scale,
          };
        });

        // Draw edges
        ctx.lineWidth = 1.2;
        shape.edges.forEach(([i, j]) => {
          const p1 = projected[i];
          const p2 = projected[j];
          ctx.strokeStyle = `${shape.color} 0.2)`;
          ctx.beginPath();
          ctx.moveTo(p1.px, p1.py);
          ctx.lineTo(p2.px, p2.py);
          ctx.stroke();
        });

        // Draw vertex nodes
        projected.forEach((p) => {
          ctx.fillStyle = `${shape.color} 0.55)`;
          ctx.beginPath();
          ctx.arc(p.px, p.py, 2.5 * p.scale, 0, Math.PI * 2);
          ctx.fill();
        });
      });

      // Update & Render Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Movement
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        // Wrap around bounds
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
        if (p.z < 100) p.z = 800;
        if (p.z > 800) p.z = 100;

        // Mouse interaction (repel gently)
        const dmx = p.x - mouse.x;
        const dmy = p.y - mouse.y;
        const distToMouse = Math.sqrt(dmx * dmx + dmy * dmy);
        if (distToMouse < 180) {
          const force = (180 - distToMouse) / 180;
          p.x += (dmx / distToMouse) * force * 2.5;
          p.y += (dmy / distToMouse) * force * 2.5;
        }

        // 3D perspective scale
        const scale = fov / (fov + p.z);
        const radius = p.size * scale;

        // Draw particle dot
        ctx.fillStyle = `${p.color} ${p.alpha * scale})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(radius, 0.8), 0, Math.PI * 2);
        ctx.fill();

        // Connect nearby particles with glowing lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            const lineAlpha = (1 - dist / 120) * 0.22 * scale;
            ctx.strokeStyle = `rgba(148, 163, 184, ${lineAlpha})`;
            ctx.lineWidth = 0.75;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 w-full h-full"
    />
  );
}
