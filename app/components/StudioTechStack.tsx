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
    name: "Next.js & React",
    domain: "Web Platform",
    badge: "Production Standard",
    description: "Lightning-fast page loads, superior search engine SEO, and fluid interactive experiences that convert visitors into users.",
    tags: ["App Router", "Fast Hydration", "SEO Ready"],
  },
  {
    name: "PHP & Laravel",
    domain: "Backend & MVC",
    badge: "Robust Architecture",
    description: "Enterprise-grade MVC backend architecture, secure authentication, expressive Eloquent ORM, and high-velocity API development.",
    tags: ["Laravel", "Eloquent ORM", "Secure MVC", "REST APIs"],
  },
  {
    name: "Node.js & APIs",
    domain: "API Layer",
    badge: "Sub-50ms Latency",
    description: "High-speed backend endpoints, real-time WebSocket communication, and secure third-party integrations (Stripe, Auth, AI).",
    tags: ["RESTful APIs", "WebSockets", "Integrations"],
  },
  {
    name: "Flutter",
    domain: "Mobile Applications",
    badge: "iOS & Android Native",
    description: "Single-codebase cross-platform apps compiling directly to native ARM code with 60fps/120fps fluid animations and offline sync.",
    tags: ["iOS & Android", "Dart", "Clean Architecture", "Cross-Platform"],
  },
  {
    name: "PostgreSQL & MongoDB",
    domain: "Database Layer",
    badge: "SQL & NoSQL Scale",
    description: "Robust relational data integrity alongside dynamic document collections, optimized indexing, and automated data pipelines.",
    tags: ["PostgreSQL", "MongoDB", "ACID Compliant", "Optimized Queries"],
  },
  {
    name: "Firebase Suite",
    domain: "Cloud Infrastructure",
    badge: "Realtime & Auth",
    description: "Instant cloud synchronization, Firestore realtime databases, secure authentication, cloud messaging (FCM), and serverless functions.",
    tags: ["Firestore", "Firebase Auth", "Cloud Messaging", "Serverless"],
  },
];

export default function StudioTechStack() {
  return (
    <section
      id="tech"
      className="flex-shrink-0 w-full md:w-screen min-h-screen md:h-full flex flex-col justify-start md:justify-center px-6 sm:px-10 md:px-16 lg:px-24 pt-20 sm:pt-22 md:pt-24 pb-24 sm:pb-24 md:pb-16 lg:pb-18 overflow-visible"
    >
      <div className="my-auto w-full max-w-7xl mx-auto flex flex-col gap-4 md:gap-5 lg:gap-6">
        
        {/* Header - Simple & Professional with Clear Clearance */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-3">
          <div className="flex flex-col gap-1.5 max-w-xl">
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-[-0.03em] leading-[1.12] text-[#18181b]">
              <span className="text-[#a1a1aa] font-medium">Tools chosen for</span> <br />
              <span>speed, stability &amp; scale.</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#71717a] max-w-sm font-normal leading-relaxed">
            Every technology in my stack is battle-tested in production. No experimental bloat — just reliable primitives that let us ship fast and scale effortlessly.
          </p>
        </div>

        {/* 6 Core Technologies Grid - Ultra-Clean, Professional, Non-Overlapping */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 md:gap-4 lg:gap-4.5">
          {coreTechnologies.map((tech) => (
            <div
              key={tech.name}
              className="touch-card p-4 sm:p-4.5 lg:p-5 rounded-2xl bg-white border border-[#e4e4e7] hover:border-[#ff4502]/40 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Top Meta */}
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#f4f4f5] text-[#71717a] border border-[#e4e4e7]/60">
                    {tech.domain}
                  </span>
                  <span className="text-xs font-mono font-semibold text-emerald-600 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{tech.badge}</span>
                  </span>
                </div>

                {/* Tech Title */}
                <h3 className="text-base sm:text-lg font-bold text-[#18181b] group-hover:text-[#ff4502] transition-colors mb-1">
                  {tech.name}
                </h3>

                {/* Description */}
                <p className="text-xs text-[#71717a] leading-relaxed mb-3">
                  {tech.description}
                </p>
              </div>

              {/* Tags */}
              <div className="pt-2.5 border-t border-[#f4f4f5] flex flex-wrap gap-1.5">
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
