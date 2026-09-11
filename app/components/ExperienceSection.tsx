"use client";

import { Briefcase, GraduationCap, Calendar, Sparkles, MapPin } from "lucide-react";

interface Milestone {
  year: string;
  role: string;
  company: string;
  location: string;
  type: "Work" | "Education";
  description: string;
  highlights: string[];
}

const milestones: Milestone[] = [
  {
    year: "2024 — Present",
    role: "Lead Full-Stack Architect",
    company: "TechNova Systems",
    location: "Remote / Hybrid",
    type: "Work",
    description:
      "Spearheading the engineering of high-throughput web applications, microservices, and AI workflow integrations using Next.js 16, TypeScript, and modern cloud infrastructure.",
    highlights: [
      "Architected sub-second latency data pipelines",
      "Mentored a team of 8 cross-functional engineers",
      "Achieved 99.99% system reliability across 500K+ users",
    ],
  },
  {
    year: "2022 — 2024",
    role: "Senior Creative Frontend Engineer",
    company: "Vortex Digital Agency",
    location: "Bengaluru, India",
    type: "Work",
    description:
      "Engineered award-winning interactive interfaces, 3D WebGL experiences, and design systems for premier global clients.",
    highlights: [
      "Optimized Core Web Vitals resulting in 40% faster LCP",
      "Pioneered in-house 3D canvas animation toolkit",
      "Shipped 15+ production-grade web applications",
    ],
  },
  {
    year: "2021 — 2022",
    role: "Full-Stack Software Developer",
    company: "Apex Innovations",
    location: "New Delhi, India",
    type: "Work",
    description:
      "Developed high-traffic backend RESTful APIs, PostgreSQL schemas, and dynamic responsive client portals with React and Node.js.",
    highlights: [
      "Integrated secure payment gateways & biometric auth",
      "Streamlined Docker CI/CD automated deployment workflows",
    ],
  },
  {
    year: "2017 — 2021",
    role: "B.Tech in Computer Science & Engineering",
    company: "University Institute of Technology",
    location: "India",
    type: "Education",
    description:
      "Comprehensive coursework covering Data Structures & Algorithms, Distributed Systems, Computer Graphics, Operating Systems, and Software Architecture.",
    highlights: [
      "Graduated with Honors & Academic Distinction",
      "Led University Web Development & Hackathon Club",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/50 border border-cyan-500/30 text-cyan-300 font-mono text-xs tracking-wider uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>{"// 04. EXPERIENCE & JOURNEY"}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Milestones of My <span className="text-gradient-cyan">Career Path</span>
          </h2>
          <p className="text-gray-400 max-w-xl text-sm sm:text-base mt-4">
            A chronological timeline of impactful roles, engineering leadership, and educational achievements.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-cyan-500/30 space-y-12">
          {milestones.map((item, index) => {
            const isWork = item.type === "Work";
            const Icon = isWork ? Briefcase : GraduationCap;

            return (
              <div key={index} className="relative group">
                
                {/* Glowing Node Dot on Timeline */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#030712] border-2 border-cyan-400 flex items-center justify-center shadow-[0_0_12px_#06b6d4] group-hover:scale-125 transition-transform">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                </div>

                {/* Milestone Card */}
                <div className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-8 border border-white/10 transition-all duration-300 group-hover:border-cyan-500/40">
                  
                  {/* Top Bar: Year & Meta */}
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono font-semibold text-cyan-300">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.year}</span>
                    </span>

                    <span className="inline-flex items-center gap-1.5 text-xs text-gray-400 font-mono">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      <span>{item.location}</span>
                    </span>
                  </div>

                  {/* Title & Organization */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-cyan-400 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {item.role}
                      </h3>
                      <p className="text-sm font-medium text-gray-400">
                        {item.company}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="space-y-1.5 pt-3 border-t border-white/5">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs font-mono text-gray-400">
                        <span className="text-cyan-400 mt-0.5">▹</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
