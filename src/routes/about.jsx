import { useRef } from "react";
import ImpactSection from "../components/site/About/Impact";
import TeamSection from "../components/site/About/TeamSection";
import FAQ from "../components/site/FAQ";
import WhyChooseUs from "../components/site/About/WhyChooseUs";
import TrustedClients from "../components/site/About/Clients";

export default function About() {
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
              src="about-hero.jpg"
              alt="Luxury contemporary interior design"
              className="h-full w-full object-cover scale-[1.12]"
            />
          </div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/45" />

          {/* Bottom Information */}
          <div className="absolute bottom-25 left-6 right-6 z-10 flex items-center justify-between text-white/80 md:left-16 md:right-16 lg:left-24 lg:right-24">
            <h3 className="max-w-4xl font-medium text-2xl leading-[1.4] md:text-7xl lg:text-4xl">
              We design interior and architectural spaces with clarity,
              structure, and purpose from concept to completion.
            </h3>
            <a href="#">Get in touch</a>
          </div>
        </section>
      </div>

      <section className="relative z-10 -mt-14 md:rounded-t-[2rem] bg-[#F7F5F0] pt-0 md:pt-20 px-6 md:px-10 lg:px-24">
        <div className="mx-auto max-w-[1500px] pb-16">
          {/* Section Header */}
          <div className="flex flex-col justify-between gap-6 pt-14 md:pt-0 md:flex-row md:items-end">
            <div className="grid items-center gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
              {/* Image */}
              <div className="relative">
                <div className="mb-4 flex items-center gap-3 text-sm text-[#858585]">
                  <span className="h-2.5 w-2.5 rounded-full bg-black" />
                  Our Story
                </div>

                <div className="overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=85&w=1400&auto=format&fit=crop"
                    alt="Contemporary luxury interior design"
                    className="aspect-[1.15/1] w-full object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="lg:pl-4">
                <p className="max-w-4xl text-xl font-regular leading-[1.25] tracking-[-0.045em] text-[#171717] sm:text-xl md:text-2xl lg:text-[clamp(1.5rem,.5vw,1.75rem)]">
                  Established in 2014, the studio has evolved into a practice
                  shaping refined interior and architectural spaces.
                  <br /> <br />
                  Every project begins with intention, structure, and a deep
                  understanding of context. Design and execution come together
                  through a balanced, detail-driven approach.
                  <br /> <br />
                  Thoughtful, functional, and enduring spaces brought to life.
                  Defined by consistency, guided by purpose, and built to
                  enhance everyday living.
                </p>

                {/* <a
                  href="/about"
                  className="group mt-7 inline-flex items-center gap-3 border-b border-black pb-1 text-base text-[#171717]"
                >
                  Read Our Story
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </a> */}
              </div>
            </div>
          </div>
        </div>
        <ImpactSection />
        <WhyChooseUs />
        <TeamSection />
        <TrustedClients />
        <FAQ />
      </section>
    </main>
  );
}
