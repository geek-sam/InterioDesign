import { useEffect, useRef } from "react";
import AboutSection from "../components/site/Home/about";
import SelectedWorks from "../components/site/Home/SelectedWorks";
import StickyServices from "../components/site/Home/StickyServices";
import Testimonials from "../components/site/Home/Testimonials";
import FAQ from "../components/site/FAQ";
import CTASection from "../components/site/CTA";
// import Hero from "/images/hero-bg.jpg";

export default function Index() {
  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) return;

    let frame;

    const updateParallax = () => {
      cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        const scrollY = Math.max(0, window.scrollY);
        const offset = Math.min(scrollY * 0.22, 150);

        image.style.transform = `translate3d(0, ${offset}px, 0) scale(1.12)`;
      });
    };

    window.addEventListener("scroll", updateParallax, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", updateParallax);
      cancelAnimationFrame(frame);
    };
  }, []);

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

          {/* Hero Content */}
          <div className="relative z-10 flex h-full flex-col justify-center px-6 text-white md:px-16 lg:px-24">
            <span className="mb-6 text-xs uppercase tracking-[0.3em]">
              Architecture · Interior · Lifestyle
            </span>

            <h1 className="max-w-4xl font-medium text-5xl leading-[1.08] md:text-7xl lg:text-8xl">
              Spaces That
              <br />
              <span className="">Tell Stories.</span>
            </h1>

            <p className="mt-7 max-w-md text-sm leading-7 text-white/80 md:text-base">
              Thoughtfully designed interiors that balance timeless aesthetics,
              functionality, and individuality.
            </p>

            <a
              href="/projects"
              className="mt-9 flex w-fit items-center gap-5 border-b border-white pb-3 text-xs uppercase tracking-[0.2em] transition-all hover:gap-8"
            >
              Explore Our Work <span>↗</span>
            </a>
          </div>

          {/* Bottom Information */}
          <div className="absolute bottom-10 left-6 right-6 z-10 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-white/80 md:left-16 md:right-16 lg:left-24 lg:right-24">
            <span>Designing Experiences</span>
            <span>Scroll to Explore ↓</span>
          </div>
        </section>
      </div>

      {/* Overlapping Content */}
      <section className="relative z-10 -mt-14 rounded-t-[2rem] bg-[#F7F5F0] pt-0 md:pt-20">
        <AboutSection />
        <SelectedWorks />
        <StickyServices />
        <Testimonials />
        <FAQ />
        <CTASection />
      </section>
    </main>
  );
}
