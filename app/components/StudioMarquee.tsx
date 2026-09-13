"use client";

export default function StudioMarquee() {
  const marqueeItems = [
    "NEXT.JS & REACT",
    "FLUTTER & DART",
    "PHP & LARAVEL",
    "NODE.JS & REST APIS",
    "MONGODB & POSTGRESQL",
    "FIREBASE & FIRESTORE",
    "AWS EC2 & ROUTE 53",
    "GOOGLE PLAY CONSOLE & APP STORE",
    "VERCEL PRODUCTION DEPLOYMENT",
    "ANDROID & WEB DEVELOPMENT",
    "FULL-STACK ARCHITECTURE",
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
