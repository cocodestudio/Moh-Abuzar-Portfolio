"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let mouseX = -100;
    let mouseY = -100;
    let trailX = -100;
    let trailY = -100;
    let animId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setPosition({ x: mouseX, y: mouseY });
      setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.closest("a") ||
          target.closest("button") ||
          target.closest("[role='button']") ||
          target.closest("input") ||
          target.closest("textarea") ||
          target.closest(".hover-target"))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const render = () => {
      trailX += (mouseX - trailX) * 0.18;
      trailY += (mouseY - trailY) * 0.18;
      setTrailingPos({ x: trailX, y: trailY });
      animId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="hidden md:block pointer-events-none">
      {/* Precision Core Dot */}
      <div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-cyan-400 rounded-full pointer-events-none z-50 transition-transform duration-75 ease-out shadow-[0_0_10px_#06b6d4]"
        style={{
          transform: `translate3d(${position.x - 5}px, ${position.y - 5}px, 0) scale(${
            isHovered ? 0 : 1
          })`,
        }}
      />

      {/* Trailing Fluid Ring */}
      <div
        className={`fixed top-0 left-0 rounded-full pointer-events-none z-50 transition-all duration-300 ease-out border ${
          isHovered
            ? "w-12 h-12 -ml-6 -mt-6 border-cyan-400 bg-cyan-500/15 backdrop-blur-[1px] scale-110 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
            : "w-8 h-8 -ml-4 -mt-4 border-cyan-500/50 bg-transparent shadow-[0_0_12px_rgba(6,182,212,0.2)]"
        }`}
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0)`,
        }}
      />
    </div>
  );
}
