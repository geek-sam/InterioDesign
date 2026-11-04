import { useRef } from "react";
import { projects } from "../utils/appData";
import StickyServices from "../components/site/Home/StickyServices";
import FAQ from "../components/site/FAQ";
import CTASection from "../components/site/CTA";
import ProcessSection from "../components/site/Process";

export default function ServicesPage() {
  const imageRef = useRef(null);
  return (
    <main className="relative bg-[#F7F5F0]">
      {/* Sticky Hero Wrapper */}
      <div className="relative">
        <section className="sticky top-0 z-0 h-screen h-[100svh] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              ref={imageRef}
              src="hero-bg.jpg"
              alt="Luxury contemporary interior design"
              className="h-full w-full object-cover scale-[1.12]"
            />
          </div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/35" />

          {/* Bottom Information */}
          <div className="absolute bottom-25 left-6 right-6 z-10 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-white/80 md:left-16 md:right-16 lg:left-24 lg:right-24">
            <h3 className="max-w-4xl font-medium text-2xl leading-[1.4] md:text-7xl lg:text-4xl">
              We design interior and architectural spaces with clarity,
              structure, and purpose from concept to completion.
            </h3>
            <a href="#">Get in touch ↓</a>
          </div>
        </section>
      </div>

      <section className="relative z-10 -mt-14 rounded-t-[2rem] bg-[#F7F5F0] pt-0 md:pt-20 px-6 md:px-10 lg:px-24">
        <div className="mx-auto max-w-[1500px] pb-20">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="mb-4 flex items-center gap-3 text-sm text-[#858585]">
                <span className="h-2.5 w-2.5 rounded-full bg-black" />
                Services
              </div>

              <h2 className="text-5xl font-medium tracking-[-0.055em] text-[#171717] md:text-7xl lg:text-[80px]">
                Our Services
              </h2>
            </div>

            <p className="max-w-[320px] text-base leading-6 text-[#858585]">
              Every space has its own character, shaped by thoughtful design.
            </p>
          </div>
        </div>
      </section>
      <ProcessSection />
      <StickyServices />
      <FAQ />
      <CTASection />
    </main>
  );
}
