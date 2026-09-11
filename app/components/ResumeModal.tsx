"use client";

import { X, Download, Briefcase, GraduationCap, Code2 } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-10 shadow-2xl border border-[#e4e4e7] relative my-8 modal-scroll max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Actions */}
        <div className="flex items-center justify-between pb-6 border-b border-[#e4e4e7] mb-6">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#ff4502] font-semibold">
              Curriculum Vitae
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#18181b] tracking-tight">
              Moh Abuzar
            </h2>
            <p className="text-xs sm:text-sm text-[#71717a]">
              Founder @ CoCode Studio • Senior Full-Stack Software Engineer
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="p-2.5 rounded-full bg-[#f4f4f5] hover:bg-[#e4e4e7] text-[#18181b] transition-colors cursor-pointer text-xs font-semibold flex items-center gap-1.5 px-4"
              title="Print / Save PDF"
            >
              <Download className="w-4 h-4 text-[#ff4502]" />
              <span className="hidden sm:inline">Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2.5 rounded-full bg-[#f4f4f5] hover:bg-[#e4e4e7] text-[#18181b] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Contact Info Row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-[#f9f9f8] border border-[#e4e4e7] text-xs font-mono text-[#71717a] mb-8">
          <div>
            <span className="text-[#a1a1aa] block text-[10px]">EMAIL</span>
            <span className="text-[#18181b] font-semibold">mohabuzar.dev@gmail.com</span>
          </div>
          <div>
            <span className="text-[#a1a1aa] block text-[10px]">COMPANY</span>
            <span className="text-[#18181b] font-semibold">CoCode Studio</span>
          </div>
          <div>
            <span className="text-[#a1a1aa] block text-[10px]">LOCATION</span>
            <span className="text-[#18181b] font-semibold">Global / Remote</span>
          </div>
          <div>
            <span className="text-[#a1a1aa] block text-[10px]">STATUS</span>
            <span className="text-emerald-600 font-semibold">Open for Clients</span>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="mb-8">
          <h3 className="text-xs font-mono uppercase tracking-wider text-[#ff4502] font-semibold mb-2">
            Executive Profile
          </h3>
          <p className="text-sm text-[#71717a] leading-relaxed">
            Senior Full-Stack Software Engineer and Founder of CoCode Studio with 5+ years of production experience architecting high-velocity web applications, enterprise SaaS platforms, and interactive 3D interfaces. Specialized in React 19, Next.js 16, TypeScript, Node.js, and cloud systems with a track record of enabling clients to raise over $25M+ in venture funding.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="mb-8">
          <h3 className="text-xs font-mono uppercase tracking-wider text-[#ff4502] font-semibold mb-4 flex items-center gap-1.5">
            <Briefcase className="w-4 h-4 text-[#ff4502]" />
            <span>Leadership &amp; Work Experience</span>
          </h3>

          <div className="space-y-6 border-l-2 border-[#e4e4e7] pl-4 sm:pl-6 ml-2">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                <h4 className="text-base font-bold text-[#18181b]">Founder &amp; Principal Architect</h4>
                <span className="text-xs font-mono text-[#ff4502] bg-[#ff4502]/10 px-2.5 py-0.5 rounded-full font-semibold">
                  2024 — Present
                </span>
              </div>
              <p className="text-xs font-medium text-[#71717a] mb-2">CoCode Studio • Global</p>
              <ul className="text-xs text-[#71717a] space-y-1 list-disc list-inside">
                <li>Founded CoCode Studio, leading end-to-end full-stack engineering and product design sprints for high-growth tech startups.</li>
                <li>Shipped 15+ production platforms with sub-second latency, zero downtime, and high conversion UX.</li>
                <li>Partnered directly with founders across Silicon Valley, NYC, and global hubs on AI and Web3 initiatives.</li>
              </ul>
            </div>

            <div>
              <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                <h4 className="text-base font-bold text-[#18181b]">Lead Full-Stack Software Engineer</h4>
                <span className="text-xs font-mono text-[#71717a]">2022 — 2024</span>
              </div>
              <p className="text-xs font-medium text-[#71717a] mb-2">TechNova Cloud Systems</p>
              <ul className="text-xs text-[#71717a] space-y-1 list-disc list-inside">
                <li>Architected scalable microservices handling 500K+ monthly active users with Next.js, Node.js, and PostgreSQL.</li>
                <li>Reduced Core Web Vitals LCP by 40% and improved search ranking across enterprise client portfolios.</li>
              </ul>
            </div>

            <div>
              <div className="flex flex-wrap items-center justify-between gap-1 mb-1">
                <h4 className="text-base font-bold text-[#18181b]">Frontend &amp; 3D Creative Engineer</h4>
                <span className="text-xs font-mono text-[#71717a]">2021 — 2022</span>
              </div>
              <p className="text-xs font-medium text-[#71717a] mb-2">Vortex Digital Labs</p>
              <ul className="text-xs text-[#71717a] space-y-1 list-disc list-inside">
                <li>Developed interactive WebGL 3D product customizers, canvas shaders, and fluid responsive design systems.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Mastery */}
        <div className="mb-8">
          <h3 className="text-xs font-mono uppercase tracking-wider text-[#ff4502] font-semibold mb-3 flex items-center gap-1.5">
            <Code2 className="w-4 h-4 text-[#ff4502]" />
            <span>Technical Mastery</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-[#f9f9f8] border border-[#e4e4e7]">
              <span className="font-bold text-[#18181b] block mb-1">Frontend &amp; UI Architecture</span>
              <span className="text-[#71717a]">Next.js 16, React 19, TypeScript, Tailwind CSS, WebGL, Three.js, Canvas</span>
            </div>
            <div className="p-3 rounded-xl bg-[#f9f9f8] border border-[#e4e4e7]">
              <span className="font-bold text-[#18181b] block mb-1">Backend &amp; Cloud Infrastructure</span>
              <span className="text-[#71717a]">Node.js, Express, Python, PostgreSQL, Prisma, Redis, Docker, Vercel, AWS</span>
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-xs font-mono uppercase tracking-wider text-[#ff4502] font-semibold mb-3 flex items-center gap-1.5">
            <GraduationCap className="w-4 h-4 text-[#ff4502]" />
            <span>Education</span>
          </h3>
          <div className="flex items-center justify-between text-xs">
            <div>
              <span className="font-bold text-[#18181b]">Bachelor of Technology (B.Tech) — Computer Science &amp; Engineering</span>
              <span className="text-[#71717a] block">University Institute of Technology • First Class with Distinction</span>
            </div>
            <span className="text-xs font-mono text-[#71717a]">2017 — 2021</span>
          </div>
        </div>

      </div>
    </div>
  );
}
