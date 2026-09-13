"use client";

export default function StudioServices() {
  const serviceColumns = [
    {
      title: "Full-Stack Web Apps",
      glyph: (
        <svg width="44" height="44" viewBox="0 0 64 64" fill="none" className="w-10 h-10 md:w-11 md:h-11">
          <path
            d="M32.9893 0V32V64C33.139 46.3951 47.3832 32.1485 64.9881 31.9988C47.3832 31.8491 33.139 17.6049 32.9893 0Z"
            fill="#FF4502"
          />
          <path
            d="M0.989258 0V64C1.13898 46.3951 15.3832 32.1485 32.9881 31.9988C15.3832 31.8491 1.13898 17.6049 0.989258 0Z"
            fill="#FF4502"
          />
        </svg>
      ),
      items: [
        "Custom SaaS & Web Platforms",
        "Rapid 0-to-1 MVP Builds",
        "Next.js & Full-Stack Systems",
        "Scalable Backend & APIs",
        "PostgreSQL & Secure Data",
        "Payment & Auth Integrations",
      ],
    },
    {
      title: "Modern UI/UX & Design",
      glyph: (
        <svg width="44" height="44" viewBox="0 0 64 64" fill="none" className="w-10 h-10 md:w-11 md:h-11">
          <path
            d="M31.9925 64C31.8427 46.3951 17.5985 32.1509 -0.00634766 32.0012C17.5985 31.8515 31.8427 17.6049 31.9925 0C32.1422 17.6049 46.3864 31.8515 63.9913 32.0012C46.3864 32.1509 32.1422 46.3951 31.9925 64Z"
            fill="#FF4502"
          />
        </svg>
      ),
      items: [
        "Intuitive Product Dashboards",
        "Responsive Mobile-First UIs",
        "Clean Design Systems & Tokens",
        "Smooth User Onboarding Flows",
        "Conversion-Focused Pages",
        "Micro-Interactions & Motion",
      ],
    },
    {
      title: "Mobile & Apps",
      glyph: (
        <svg width="44" height="44" viewBox="0 0 64 64" fill="none" className="w-10 h-10 md:w-11 md:h-11">
          <path
            d="M31.9995 4.00293C47.4015 4.13546 59.8601 16.5941 59.9927 31.9961L59.9956 32V4H31.9956L31.9995 4.00293Z"
            fill="#FF4502"
          />
          <path
            d="M3.99854 31.9961C4.13106 16.5941 16.5897 4.13546 31.9917 4.00293L31.9956 4H3.99561V32L3.99854 31.9961Z"
            fill="#FF4502"
          />
          <path
            d="M31.9917 59.9971C16.5897 59.8645 4.13106 47.4059 3.99854 32.0039L3.99561 32V60H31.9956L31.9917 59.9971Z"
            fill="#FF4502"
          />
          <path
            d="M59.9927 32.0039C59.8601 47.4059 47.4015 59.8645 31.9995 59.9971L31.9956 60H59.9956V32L59.9927 32.0039Z"
            fill="#FF4502"
          />
        </svg>
      ),
      items: [
        "Cross-Platform Flutter Apps",
        "Fluid iOS & Android UX",
        "Push Notifications & Sync",
        "Offline-First Data Storage",
        "Camera & Device Hardware APIs",
        "App Store Launch Readiness",
      ],
    },
    {
      title: "Production & Cloud",
      glyph: (
        <svg width="44" height="44" viewBox="0 0 64 64" fill="none" className="w-10 h-10 md:w-11 md:h-11">
          <path
            d="M38.9951 59.9961C19.7427 59.8304 4.16957 44.2573 4.00391 25.0049L4 25V60H39L38.9951 59.9961Z"
            fill="#FF4502"
          />
          <path
            d="M25.0049 4.00391C44.2573 4.16957 59.8304 19.7427 59.9961 38.9951L60 39V4H25L25.0049 4.00391Z"
            fill="#FF4502"
          />
        </svg>
      ),
      items: [
        "AWS Cloud (EC2, Route 53, S3, Amplify)",
        "Google Play Console Deployment",
        "Apple iOS App Store Publishing",
        "Vercel & Global Edge Hosting",
        "Firebase Suite & Cloud Infrastructure",
        "Automated CI/CD & Zero-Downtime Releases",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="flex-shrink-0 w-full md:w-screen min-h-screen md:h-full flex flex-col justify-start md:justify-center px-6 sm:px-10 md:px-16 lg:px-24 pt-20 sm:pt-22 md:pt-24 pb-24 sm:pb-24 md:pb-16 lg:pb-18 overflow-visible"
    >
      <div className="my-auto w-full max-w-7xl mx-auto flex flex-col gap-4 md:gap-5 lg:gap-6">
        
        {/* Outpace Section Heading */}
        <div className="flex flex-col gap-1.5 max-w-2xl">
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold tracking-[-0.03em] leading-[1.12] text-[#18181b]">
            <span className="text-[#a1a1aa] font-medium">Turning product ideas into</span> <br />
            <span>scalable reality.</span>
          </h2>
          <p className="text-xs sm:text-sm text-[#71717a] font-normal leading-relaxed mt-0.5">
            You don&apos;t need a bloated agency or months of meetings. You need clean architecture, modern user experiences, and rapid execution that helps your product win users and drive revenue.
          </p>
        </div>

        {/* 4 Columns with Outpace Geometric Glyphs & Deliverables */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 md:gap-4 lg:gap-5 pt-2 border-t border-[#e4e4e7]">
          {serviceColumns.map((col, idx) => (
            <div
              key={col.title}
              className="touch-card flex flex-col items-start justify-between gap-3 p-4 sm:p-5 lg:p-6 rounded-2xl bg-white border border-[#e4e4e7] hover:border-[#ff4502]/40 hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-full">
                {/* Top Glyph & Index */}
                <div className="flex items-center justify-between w-full mb-3">
                  <div className="group-hover:scale-110 transition-transform duration-300">
                    {col.glyph}
                  </div>
                  <span className="text-xs font-mono text-[#a1a1aa] font-semibold">
                    0{idx + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold tracking-tight text-[#18181b] group-hover:text-[#ff4502] transition-colors mb-2">
                  {col.title}
                </h3>

                {/* Services List */}
                <ul className="flex flex-col gap-2 w-full pt-3 border-t border-[#f4f4f5]">
                  {col.items.map((item) => (
                    <li
                      key={item}
                      className="text-xs text-[#71717a] font-medium flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#d4d4d8] group-hover:bg-[#ff4502] transition-colors flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
