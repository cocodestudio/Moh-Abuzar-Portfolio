"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  Download,
  MessageSquare,
  Terminal,
  Layers,
  Cpu,
  Boxes,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./Icons";

const typingRoles = [
  "Full-Stack Engineer",
  "Creative 3D Technologist",
  "Next.js & Cloud Architect",
  "UI/UX Design Craftsman",
  "AI & Systems Builder",
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // 3D Parallax Tilt state
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50 });
  const [isHovering, setIsHovering] = useState(false);

  // Typing animation effect
  useEffect(() => {
    const currentRole = typingRoles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % typingRoles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  // Handle 3D Tilt Mouse Interaction
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -16;
    const rotateY = ((x - centerX) / centerX) * 16;

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;

    setTilt({ x: rotateX, y: rotateY, glareX, glareY });
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
    setTilt({ x: 0, y: 0, glareX: 50, glareY: 50 });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Bio, Intro & Actions */}
        <div className="lg:col-span-7 flex flex-col items-start z-10 text-left">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-cyan-950/40 border border-cyan-500/30 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.15)] mb-6 animate-fade-in">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-xs font-mono text-cyan-300 font-medium tracking-wide">
              Available for High-Impact Projects & Roles
            </span>
          </div>

          {/* Name & Headline */}
          <div className="space-y-2 mb-4">
            <p className="text-gray-400 font-mono text-sm tracking-widest uppercase flex items-center gap-2">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>Hello World, I am</span>
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white">
              Moh <span className="text-gradient-cyan">Abuzar</span>
            </h1>
          </div>

          {/* Animated Typing Title */}
          <div className="h-10 sm:h-12 flex items-center mb-6">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold font-mono text-gray-200">
              <span className="text-cyan-400">&gt; </span>
              <span className="text-gradient-gold">{displayedText}</span>
              <span className="inline-block w-2.5 h-6 ml-1 bg-cyan-400 animate-pulse" />
            </h2>
          </div>

          {/* Bio Description */}
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-normal">
            Passionate software craftsman sculpting high-performance full-stack applications, 
            interactive 3D web environments, and scalable modern systems with Next.js, React, 
            and cutting-edge technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
            <a
              href="#projects"
              className="relative inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-black bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 shadow-[0_0_25px_rgba(6,182,212,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.7)] hover:scale-105 transition-all duration-300 group"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-white bg-slate-900/80 border border-white/15 hover:border-cyan-400/60 hover:bg-slate-800/80 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:scale-105 transition-all duration-300"
            >
              <MessageSquare className="w-4 h-4 text-cyan-400" />
              <span>Get In Touch</span>
            </a>

            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full font-medium text-xs text-gray-300 bg-white/[0.03] border border-white/10 hover:border-white/30 hover:text-white transition-all duration-200"
            >
              <Download className="w-3.5 h-3.5 text-amber-400" />
              <span>My Story</span>
            </a>
          </div>

          {/* Social Links & Quick Stats */}
          <div className="pt-6 border-t border-white/10 w-full flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:border-cyan-400/50 hover:bg-cyan-500/10 transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-gray-300 hover:text-blue-400 hover:border-blue-400/50 hover:bg-blue-500/10 transition-all"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center text-gray-300 hover:text-emerald-400 hover:border-emerald-400/50 hover:bg-emerald-500/10 transition-all"
                aria-label="WhatsApp Chat"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>

            <div className="flex items-center gap-6 text-xs text-gray-400 font-mono">
              <div>
                <span className="text-cyan-400 font-bold text-sm">5+</span> Years Exp.
              </div>
              <div>
                <span className="text-amber-400 font-bold text-sm">35+</span> Projects
              </div>
              <div>
                <span className="text-emerald-400 font-bold text-sm">99.9%</span> Success
              </div>
            </div>
          </div>

        </div>

        {/* Right Column: 3D Holographic Parallax Portrait Card */}
        <div className="lg:col-span-5 flex justify-center items-center perspective-1200 relative">
          
          {/* Ambient Rotating Rings Behind Card */}
          <div className="absolute w-[360px] h-[360px] sm:w-[480px] sm:h-[480px] rounded-full border border-dashed border-cyan-500/20 animate-rotate-orbit pointer-events-none" />
          <div className="absolute w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] rounded-full border border-white/5 animate-spin pointer-events-none" style={{ animationDuration: "35s" }} />

          {/* Dual Tone Glow Aura Behind Portrait */}
          <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-cyan-500/30 via-indigo-600/20 to-amber-500/25 blur-[90px] pointer-events-none -z-10 animate-pulse-glow" />

          {/* 3D Interactive Card Container */}
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: isHovering
                ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.03, 1.03, 1.03)`
                : `rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
              transition: isHovering ? "transform 0.1s ease-out" : "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            className="relative w-full max-w-[340px] sm:max-w-[390px] rounded-3xl p-3 sm:p-4 glass-panel border border-cyan-500/30 shadow-[0_20px_60px_-15px_rgba(6,182,212,0.25)] preserve-3d cursor-pointer group"
          >
            {/* Holographic Glare Overlay */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none z-30 transition-opacity duration-300"
              style={{
                opacity: isHovering ? 0.35 : 0,
                background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255,255,255,0.7) 0%, rgba(6,182,212,0.2) 40%, transparent 70%)`,
              }}
            />

            {/* Futuristic Card Header Bar */}
            <div className="flex items-center justify-between px-3 py-2 border-b border-white/10 mb-2 font-mono text-[11px] text-gray-400">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
              </div>
              <span className="text-cyan-400 flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                <span>ACTIVE MATRIX 3D</span>
              </span>
            </div>

            {/* Portrait Image Container */}
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-b from-slate-900/90 to-[#030712] border border-white/10">
              
              {/* Inner ambient backlight */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent z-10" />
              <div className="absolute -bottom-10 left-0 right-0 h-36 bg-gradient-to-t from-[#030712] to-transparent z-10" />

              <Image
                src="/images/hero-portrait.png"
                alt="Moh Abuzar - Full-Stack Developer & Creative Technologist"
                fill
                priority
                className="object-contain object-bottom transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
              />

              {/* Bottom Holographic Badge */}
              <div className="absolute bottom-3 left-3 right-3 z-20 bg-slate-950/80 backdrop-blur-xl border border-cyan-500/40 rounded-xl p-2.5 flex items-center justify-between shadow-lg shadow-black/60">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white leading-none mb-1">MOH ABUZAR</p>
                    <p className="text-[10px] text-cyan-300 font-mono leading-none">Core Engineer • Tech Lead</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="inline-block px-2 py-0.5 rounded text-[9px] font-mono bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    VERIFIED
                  </span>
                </div>
              </div>
            </div>

            {/* Orbiting Floating Badge 1: Next.js 16 & React 19 */}
            <div
              className="hidden sm:flex absolute -top-5 -left-8 items-center gap-2 px-3.5 py-2 rounded-2xl bg-slate-900/90 border border-cyan-500/40 backdrop-blur-xl shadow-xl shadow-cyan-950/40 animate-float z-30"
              style={{ transform: "translateZ(30px)" }}
            >
              <Boxes className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-mono font-medium text-white">Next.js 16 & React 19</span>
            </div>

            {/* Orbiting Floating Badge 2: 3D WebGL / Canvas */}
            <div
              className="hidden sm:flex absolute top-1/3 -right-8 items-center gap-2 px-3.5 py-2 rounded-2xl bg-slate-900/90 border border-amber-500/40 backdrop-blur-xl shadow-xl shadow-amber-950/40 animate-float-delayed z-30"
              style={{ transform: "translateZ(40px)" }}
            >
              <Layers className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-mono font-medium text-white">3D WebGL / Canvas</span>
            </div>

            {/* Orbiting Floating Badge 3: AI & Cloud Systems */}
            <div
              className="hidden sm:flex absolute -bottom-5 -left-4 items-center gap-2 px-3.5 py-2 rounded-2xl bg-slate-900/90 border border-purple-500/40 backdrop-blur-xl shadow-xl shadow-purple-950/40 animate-float z-30"
              style={{ transform: "translateZ(35px)" }}
            >
              <Cpu className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-mono font-medium text-white">Cloud & AI Systems</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
