"use client";

export default function StudioMarquee() {
  const marqueeItems = [
    "COCODE STUDIO FOUNDER",
    "SENIOR SOFTWARE ARCHITECT",
    "NEXT.JS 16 & REACT 19",
    "VENTURE-BACKED PRODUCTION",
    "SPATIAL 3D & THREE.JS",
    "HIGH-CONVERTING UI/UX",
    "SUB-SECOND LATENCY",
    "TYPESCRIPT ARCHITECTURE",
    "SCALE & ZERO FLUFF",
  ];

  return (
    <div className="w-full py-3.5 bg-white border-y border-[#e4e4e7] overflow-hidden select-none relative z-20">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {/* Double repeat for endless loop */}
        {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
          <div key={idx} className="flex items-center gap-8">
            <span className="text-xs font-mono font-bold tracking-widest text-[#18181b] uppercase">
              {item}
            </span>
            <span className="text-[#ff4502] text-xs font-bold">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
