const clients = [
  { name: "NORTHLINE", style: "font-bold tracking-[0.18em]" },
  { name: "FORMA", style: "font-serif font-bold tracking-wide" },
  { name: "ATELIER", style: "font-light tracking-[0.3em]" },
  { name: "MONOLITH", style: "font-black tracking-tight" },
  { name: "HABITAT", style: "font-serif italic font-medium" },
  { name: "ARC STUDIO", style: "font-semibold tracking-[0.12em]" },
  { name: "LIVING CO.", style: "font-medium tracking-wide" },
  { name: "MODERNIST", style: "font-black tracking-tight" },
];

function BrandLogo({ client }) {
  return (
    <div className="flex h-20 min-w-[170px] items-center justify-center px-8 md:min-w-[220px]">
      <span
        className={`whitespace-nowrap text-xl text-[#252525]/55 transition-colors duration-300 hover:text-[#171717] md:text-2xl ${client.style}`}
      >
        {client.name}
      </span>
    </div>
  );
}

function LogoMarquee({ reverse = false, duration = 35 }) {
  return (
    <div
      className="group relative flex overflow-hidden"
      aria-label="Trusted client brands"
    >
      <div
        className={`flex w-max shrink-0 items-center animate-marquee ${
          reverse ? "flex-row-reverse" : ""
        } group-hover:[animation-play-state:paused]`}
        style={{
          "--marquee-duration": `${duration}s`,
        }}
      >
        {[0, 1, 2, 3].map((copy) => (
          <div
            key={copy}
            className="flex shrink-0 items-center"
            aria-hidden={copy !== 0}
          >
            {clients.map((client) => (
              <BrandLogo key={`${copy}-${client.name}`} client={client} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TrustedClients() {
  return (
    <section className="overflow-hidden bg-[#F7F5F0] py-24 md:py-28 lg:py-32">
      {/* Marquee Animation */}
      <style>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-25%);
          }
        }

        .animate-marquee {
          animation: marquee var(--marquee-duration, 35s) linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
          }
        }
      `}</style>

      <div className="mx-auto max-w-[1600px]">
        {/* Section Introduction */}
        <div className="mb-14 px-6 text-center md:mb-16">
          <div className="mb-5 flex items-center justify-center gap-3 text-sm text-[#858585]">
            <span className="h-2.5 w-2.5 rounded-full bg-black" />
            Trusted By
          </div>

          <h2 className="text-4xl font-medium leading-[1.08] tracking-[-0.055em] text-[#171717] md:text-5xl lg:text-6xl">
            Building Spaces.
            <br className="sm:hidden" /> Building Trust.
          </h2>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-6 text-[#858585] md:text-base">
            Collaborating with forward-thinking brands and people to create
            meaningful spaces.
          </p>
        </div>

        {/* First Marquee */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#F7F5F0] to-transparent md:w-32" />

          <LogoMarquee duration={35} />

          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#F7F5F0] to-transparent md:w-32" />
        </div>

        {/* Divider */}
        <div className="mx-6 border-t border-black/10 md:mx-10" />

        {/* Second Marquee */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#F7F5F0] to-transparent md:w-32" />

          <LogoMarquee reverse duration={42} />

          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#F7F5F0] to-transparent md:w-32" />
        </div>
      </div>
    </section>
  );
}
