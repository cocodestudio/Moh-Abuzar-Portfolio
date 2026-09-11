"use client";

interface TechItem {
  name: string;
  domain: string;
  badge: string;
  description: string;
  tags: string[];
}

const coreTechnologies: TechItem[] = [
  {
    name: "Next.js 16 & React 19",
    domain: "Full-Stack Core",
    badge: "Primary Engine",
    description: "App Router, Server Components, streaming SSR, and Turbopack for lightning-fast delivery.",
    tags: ["App Router", "Server Actions", "Turbopack"],
  },
  {
    name: "TypeScript / ESNext",
    domain: "Language & Safety",
    badge: "Strict Standard",
    description: "End-to-end type safety, strict schema validation, and zero-runtime-error architectures.",
    tags: ["Strict Typing", "Generics", "Zod Schemas"],
  },
  {
    name: "Tailwind CSS v4",
    domain: "Design Systems",
    badge: "High Velocity",
    description: "Utility-first design token architectures, fluid layouts, and sleek micro-animations.",
    tags: ["CSS Tokens", "Responsive Grid", "Micro-animations"],
  },
  {
    name: "Node.js & Express",
    domain: "Backend Systems",
    badge: "Sub-50ms Latency",
    description: "High-concurrency RESTful APIs, WebSockets telemetry, and serverless microservices.",
    tags: ["RESTful APIs", "WebSockets", "Microservices"],
  },
  {
    name: "PostgreSQL & Prisma",
    domain: "Data Layer",
    badge: "Relational Core",
    description: "Robust relational data modeling, query optimization, connection pooling, and migrations.",
    tags: ["Schema Modeling", "ACID Compliant", "Prisma ORM"],
  },
  {
    name: "Three.js & WebGL 3D",
    domain: "Creative 3D",
    badge: "60 FPS Spatial",
    description: "Interactive canvas viewports, custom GLSL shaders, and spatial web configurators.",
    tags: ["Interactive 3D", "Canvas Shaders", "Physics"],
  },
];

export default function StudioTechStack() {
  return (
    <section
      id="tech"
      className="flex-shrink-0 w-full md:w-[1200px] lg:w-[1350px] min-h-[100vh] md:h-full flex flex-col justify-start md:justify-center px-5 sm:px-6 md:px-12 pt-28 md:pt-32 pb-28 md:pb-28"
    >
      <div className="flex flex-col gap-6 md:gap-8 max-w-6xl w-full mx-auto">
        
        {/* Header - Simple & Professional with Clear Clearance */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="flex flex-col gap-2 max-w-xl">
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#ff4502]">
              {"// TECHNICAL ARSENAL"}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] leading-[1.1] text-[#18181b]">
              <span className="text-[#a1a1aa] font-medium">What I command.</span> <br />
              <span>Core production primitives.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#71717a] max-w-sm font-normal leading-relaxed">
            A focused, battle-tested modern stack engineered for speed, strict type safety, and conversion-ready craft.
          </p>
        </div>

        {/* 6 Core Technologies Grid - Ultra-Clean, Professional, Non-Overlapping */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {coreTechnologies.map((tech) => (
            <div
              key={tech.name}
              className="touch-card p-5 md:p-6 rounded-2xl bg-white border border-[#e4e4e7] hover:border-[#ff4502]/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Top Meta */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#f4f4f5] text-[#71717a] border border-[#e4e4e7]/60">
                    {tech.domain}
                  </span>
                  <span className="text-xs font-mono font-semibold text-emerald-600 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{tech.badge}</span>
                  </span>
                </div>

                {/* Tech Title */}
                <h3 className="text-lg font-bold text-[#18181b] group-hover:text-[#ff4502] transition-colors mb-1.5">
                  {tech.name}
                </h3>

                {/* Description */}
                <p className="text-xs text-[#71717a] leading-relaxed mb-4">
                  {tech.description}
                </p>
              </div>

              {/* Tags */}
              <div className="pt-3 border-t border-[#f4f4f5] flex flex-wrap gap-1.5">
                {tech.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#f9f9f8] border border-[#e4e4e7] text-[#71717a]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
