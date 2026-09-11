"use client";

import { useState } from "react";
import {
  Sparkles,
  Cpu,
} from "lucide-react";

interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Cloud" | "Creative";
  level: number; // 0 to 100
  status: string;
  color: string;
}

const skillsData: Skill[] = [
  // Frontend
  { name: "React 19 & Next.js 16", category: "Frontend", level: 96, status: "Advanced / Core", color: "from-cyan-400 to-blue-500" },
  { name: "TypeScript / Modern JS", category: "Frontend", level: 94, status: "Mastery", color: "from-blue-400 to-indigo-500" },
  { name: "Tailwind CSS v4 & Vanilla CSS", category: "Frontend", level: 98, status: "Expert UI", color: "from-teal-400 to-cyan-500" },
  { name: "HTML5 Canvas & 3D Shaders", category: "Creative", level: 88, status: "Interactive 3D", color: "from-amber-400 to-orange-500" },
  { name: "Redux Toolkit & Zustand", category: "Frontend", level: 90, status: "State Architecture", color: "from-purple-400 to-pink-500" },
  
  // Backend
  { name: "Node.js & Express", category: "Backend", level: 92, status: "High Throughput", color: "from-emerald-400 to-green-600" },
  { name: "Python & AI Agent APIs", category: "Backend", level: 86, status: "Applied AI", color: "from-yellow-400 to-amber-600" },
  { name: "PostgreSQL & Prisma ORM", category: "Backend", level: 90, status: "Relational DB", color: "from-sky-400 to-blue-600" },
  { name: "MongoDB & Mongoose", category: "Backend", level: 89, status: "NoSQL DB", color: "from-green-500 to-emerald-700" },
  { name: "REST APIs & GraphQL", category: "Backend", level: 94, status: "API Engineering", color: "from-violet-400 to-purple-600" },
  { name: "Redis & Edge Caching", category: "Backend", level: 85, status: "Performance", color: "from-red-400 to-rose-600" },

  // Cloud & Tools
  { name: "Docker & Containerization", category: "Cloud", level: 84, status: "Microservices", color: "from-blue-400 to-cyan-600" },
  { name: "Git, GitHub & CI/CD", category: "Cloud", level: 95, status: "DevOps Flow", color: "from-orange-400 to-red-500" },
  { name: "Vercel, AWS & Cloudflare", category: "Cloud", level: 88, status: "Edge Hosting", color: "from-indigo-400 to-blue-600" },
  { name: "Figma UI/UX & Wireframing", category: "Creative", level: 87, status: "Product Design", color: "from-pink-400 to-rose-500" },
  { name: "Three.js & WebGL 3D", category: "Creative", level: 85, status: "Spatial Web", color: "from-cyan-300 to-emerald-400" },
];

const categories = ["All", "Frontend", "Backend", "Cloud", "Creative"] as const;

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredSkills =
    activeCategory === "All"
      ? skillsData
      : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 font-mono text-xs tracking-wider uppercase mb-3">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>{"// 02. TECHNICAL MATRIX"}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Tools & Technologies I <span className="text-gradient-cyan">Command</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-sm sm:text-base mt-4">
            A comprehensive suite of modern frameworks, scalable backbones, and creative engines used to construct enterprise-grade software.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-full glass-panel border border-white/10 max-w-xl">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-cyan-500 text-black shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                      : "text-gray-400 hover:text-white hover:bg-white/[0.06]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="glass-panel glass-panel-hover rounded-2xl p-5 sm:p-6 flex flex-col justify-between border border-white/10 group transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/[0.05] text-gray-300 border border-white/5">
                    {skill.category}
                  </span>
                  <span className="text-xs font-mono font-bold text-cyan-400">
                    {skill.level}%
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                  {skill.name}
                </h3>
                <p className="text-xs text-gray-400 font-mono mb-4">
                  {skill.status}
                </p>
              </div>

              {/* Progress Bar with Glowing Head */}
              <div className="w-full h-2 rounded-full bg-slate-800/80 overflow-hidden relative">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Summary Footer */}
        <div className="mt-14 p-6 rounded-2xl glass-panel border border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Always Evolving & Learning</p>
              <p className="text-xs text-gray-400 font-mono">Exploring AI Agents, WebAssembly, and Next-Gen Edge Compute</p>
            </div>
          </div>
          <a
            href="#projects"
            className="px-5 py-2.5 rounded-full text-xs font-semibold text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 hover:bg-cyan-900/60 hover:border-cyan-400 transition-all shrink-0"
          >
            See Skills In Action →
          </a>
        </div>

      </div>
    </section>
  );
}
