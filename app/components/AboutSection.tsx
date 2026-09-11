"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import {
  Code2,
  Cpu,
  Layers,
  Sparkles,
  Zap,
  CheckCircle2,
  Terminal,
} from "lucide-react";

const stats = [
  { label: "Years of Experience", value: "5+", detail: "Full-Stack & UI/UX" },
  { label: "Completed Projects", value: "35+", detail: "Web, Mobile & AI Apps" },
  { label: "Client Satisfaction", value: "99.8%", detail: "Positive Feedback" },
  { label: "Lines of Clean Code", value: "100K+", detail: "Optimized & Tested" },
];

const pillars = [
  {
    icon: Code2,
    title: "Full-Stack Engineering",
    description:
      "Crafting robust, end-to-end architectures utilizing Next.js 16, TypeScript, Node.js, and relational/NoSQL databases with sub-millisecond edge latency.",
    color: "cyan",
  },
  {
    icon: Layers,
    title: "Modern UI/UX & Motion",
    description:
      "Designing responsive, glassmorphic interfaces with micro-animations, accessible design tokens, and fluid layouts optimized for every screen size.",
    color: "purple",
  },
  {
    icon: Zap,
    title: "3D & Creative Web",
    description:
      "Building captivating interactive experiences using WebGL, Three.js, Canvas particle systems, and hardware-accelerated 3D parallax shaders.",
    color: "amber",
  },
  {
    icon: Cpu,
    title: "Performance & Cloud Scale",
    description:
      "Targeting 100/100 Google Lighthouse scores, CDN edge caching, containerized cloud infrastructure, and enterprise-grade reliability.",
    color: "emerald",
  },
];

export default function AboutSection() {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setTilt({
      x: ((y - centerY) / centerY) * -12,
      y: ((x - centerX) / centerX) * 12,
    });
  };

  return (
    <section id="about" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 font-mono text-xs tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>{"// 01. ABOUT ME"}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Architecting Digital Realities With{" "}
            <span className="text-gradient-cyan">Precision & Code</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-sm sm:text-base mt-4">
            A developer who bridges the gap between sophisticated engineering and intuitive visual artistry.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Left Column: 3D Spotlight Photo Card */}
          <div className="lg:col-span-5 flex justify-center perspective-1000">
            <div
              ref={cardRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => {
                setIsHovered(false);
                setTilt({ x: 0, y: 0 });
              }}
              style={{
                transform: isHovered
                  ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.02, 1.02, 1.02)`
                  : "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
                transition: isHovered ? "transform 0.1s ease-out" : "transform 0.5s ease-out",
              }}
              className="relative w-full max-w-[360px] rounded-3xl p-4 glass-panel border border-amber-500/30 shadow-[0_20px_60px_-15px_rgba(245,158,11,0.2)] preserve-3d cursor-pointer group"
            >
              {/* Corner Decorative Tech Brackets */}
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-amber-400/80 rounded-tl pointer-events-none" />
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-amber-400/80 rounded-tr pointer-events-none" />
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-amber-400/80 rounded-bl pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-amber-400/80 rounded-br pointer-events-none" />

              {/* Photo Display Container */}
              <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-b from-slate-900 to-[#030712] border border-white/10">
                <Image
                  src="/images/about-portrait.png"
                  alt="Moh Abuzar - About Me"
                  fill
                  className="object-contain object-bottom transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 360px"
                />

                {/* Subtle Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-80" />

                {/* Floating Floating Code Snippet */}
                <div className="absolute bottom-4 left-3 right-3 z-20 bg-black/75 backdrop-blur-md rounded-xl p-3 border border-amber-500/30 font-mono text-[11px] text-amber-300">
                  <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-white/10 text-gray-400 text-[10px]">
                    <span className="flex items-center gap-1">
                      <Terminal className="w-3 h-3 text-amber-400" />
                      <span>engineer.profile</span>
                    </span>
                    <span className="text-emerald-400">● online</span>
                  </div>
                  <p className="text-gray-300">
                    <span className="text-purple-400">const</span> <span className="text-blue-400">abuzar</span> = &#123;
                  </p>
                  <p className="pl-3 text-gray-400">
                    passion: <span className="text-amber-400">&apos;Infinite&apos;</span>,
                  </p>
                  <p className="pl-3 text-gray-400">
                    craft: <span className="text-cyan-400">&apos;Full-Stack 3D&apos;</span>
                  </p>
                  <p className="text-gray-300">&#125;;</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Philosophy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
              Driven by Curiosity, Defined by{" "}
              <span className="text-gradient-gold">High-Impact Results</span>
            </h3>

            <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
              <p>
                Hello! I am <strong className="text-white font-semibold">Moh Abuzar</strong>, 
                a Full-Stack Developer and Creative Technologist who loves turning intricate problems 
                into performant, beautiful, and intuitive digital applications.
              </p>
              <p>
                My philosophy centers on <em>visual excellence combined with rock-solid architectural foundations</em>. 
                Whether architecting scalable Next.js backbones, creating immersive 3D WebGL interactions, 
                or designing glassmorphic design systems, I strive to build software that not only functions 
                flawlessly but leaves a memorable impression.
              </p>
              <p className="text-gray-400">
                I continuously explore next-generation tech like AI-driven workflows, interactive spatial interfaces, 
                and edge-rendered web systems to stay ahead of the digital curve.
              </p>
            </div>

            {/* Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
              {[
                "Modern React 19 & Next.js 16 Ecosystem",
                "Full-Stack API Design & Microservices",
                "Hardware-Accelerated 3D & WebGL Motion",
                "Lighthouse 100 Performance Optimization",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-gray-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-panel glass-panel-hover rounded-2xl p-6 text-center group"
            >
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-cyan-400 mb-1 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-white mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-gray-400 font-mono">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>

        {/* 4 Pillars of Excellence */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-8 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 group-hover:border-cyan-400 transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {pillar.title}
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
