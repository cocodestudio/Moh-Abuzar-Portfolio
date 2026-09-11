"use client";

import { useState } from "react";
import {
  ExternalLink,
  FolderGit2,
  Sparkles,
  ArrowUpRight,
  Layers,
  Cpu,
  Boxes,
} from "lucide-react";
import { GithubIcon } from "./Icons";

interface Project {
  title: string;
  category: "Full-Stack" | "AI & Web3" | "3D & Creative";
  description: string;
  tags: string[];
  gradient: string;
  icon: typeof Cpu;
  stats: string;
  githubUrl: string;
  liveUrl: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "NexusAI Agentic Studio",
    category: "AI & Web3",
    description:
      "A next-generation multimodal workspace featuring autonomous AI agent workflows, real-time vector embeddings, voice synthesis, and an infinite interactive canvas.",
    tags: ["Next.js 16", "React 19", "Gemini API", "Vector DB", "Tailwind CSS", "TypeScript"],
    gradient: "from-cyan-500/20 via-blue-600/20 to-indigo-900/40",
    icon: Cpu,
    stats: "Sub-100ms Inference • 15K+ Queries",
    githubUrl: "https://github.com",
    liveUrl: "https://nexusai-demo.dev",
    featured: true,
  },
  {
    title: "HyperVault 3D FinTech Engine",
    category: "Full-Stack",
    description:
      "High-throughput decentralized asset management suite equipped with real-time WebGL interactive financial charts, biometric authentication, and multi-chain telemetry.",
    tags: ["Next.js", "TypeScript", "Three.js", "PostgreSQL", "Tailwind CSS", "Redis"],
    gradient: "from-amber-500/20 via-orange-600/20 to-red-900/40",
    icon: Boxes,
    stats: "10K TPS Load Tested • 99.99% Uptime",
    githubUrl: "https://github.com",
    liveUrl: "https://hypervault-demo.dev",
    featured: true,
  },
  {
    title: "AuraStudio 3D Product Visualizer",
    category: "3D & Creative",
    description:
      "Photorealistic web-based 3D configurator allowing real-time material swapping, custom studio HDRI lighting, AR mobile preview, and seamless stripe checkout.",
    tags: ["Three.js", "WebGL", "React 19", "Tailwind CSS", "Zustand", "Stripe"],
    gradient: "from-purple-500/20 via-pink-600/20 to-rose-900/40",
    icon: Layers,
    stats: "60 FPS WebGL • 4K PBR Shaders",
    githubUrl: "https://github.com",
    liveUrl: "https://aurastudio-demo.dev",
    featured: true,
  },
  {
    title: "PulseCloud Telemetry Suite",
    category: "Full-Stack",
    description:
      "Real-time enterprise microservices monitor delivering sub-second WebSocket telemetry, automated anomaly alarms, and dynamic dependency topology graphs.",
    tags: ["Node.js", "WebSockets", "Docker", "TimescaleDB", "Next.js", "Tailwind"],
    gradient: "from-emerald-500/20 via-teal-600/20 to-cyan-900/40",
    icon: FolderGit2,
    stats: "500K Events/Sec • Automated Alarms",
    githubUrl: "https://github.com",
    liveUrl: "https://pulsecloud-demo.dev",
  },
];

const filterCategories = ["All", "Full-Stack", "AI & Web3", "3D & Creative"] as const;

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 font-mono text-xs tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>{"// 03. FEATURED WORKS"}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Crafted With <span className="text-gradient-cyan">Passion & Polish</span>
          </h2>
          <p className="text-gray-400 max-w-2xl text-sm sm:text-base mt-4">
            A curated selection of high-impact web systems, 3D interactive applications, and scalable products I&apos;ve designed and built.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-full glass-panel border border-white/10 max-w-xl">
            {filterCategories.map((cat) => {
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
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

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const Icon = project.icon;
            return (
              <div
                key={project.title}
                className="group relative rounded-3xl glass-panel border border-white/10 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_20px_50px_rgba(6,182,212,0.15)] hover:-translate-y-1.5"
              >
                {/* Visual Header / Mockup Banner */}
                <div className={`relative w-full h-48 sm:h-56 bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-between overflow-hidden border-b border-white/10`}>
                  
                  {/* Subtle Grid Pattern Overlay */}
                  <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-10" />

                  {/* Top Bar of Project Card */}
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-xs font-mono text-cyan-300">
                      <Icon className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{project.category}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/15 flex items-center justify-center text-gray-300 hover:text-white hover:border-cyan-400/60 transition-all"
                        aria-label="View Source Code"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-8 h-8 rounded-full bg-cyan-500 text-black flex items-center justify-center hover:scale-110 shadow-[0_0_10px_#06b6d4] transition-all"
                        aria-label="Live Demo"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>

                  {/* Decorative Metric Banner */}
                  <div className="relative z-10">
                    <span className="inline-block px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono text-emerald-400">
                      ● {project.stats}
                    </span>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-3 flex items-center justify-between">
                      <span>{project.title}</span>
                      <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-cyan-400" />
                    </h3>

                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div>
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/5 text-[11px] font-mono text-gray-300 group-hover:border-cyan-500/20 group-hover:text-cyan-200 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
