import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const reasons = [
  {
    number: "01",
    title: "Design That Understands You",
    description:
      "Every space begins with understanding your lifestyle, preferences, and aspirations. We create interiors that feel personal, functional, and timeless.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=85&w=1000&auto=format&fit=crop",
    tag: "Personalized Approach",
  },
  {
    number: "02",
    title: "Attention to Every Detail",
    description:
      "From spatial planning to material selection, every element is carefully considered to create a cohesive and refined environment.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=85&w=1000&auto=format&fit=crop",
    tag: "Thoughtful Craftsmanship",
  },
  {
    number: "03",
    title: "Function Meets Aesthetics",
    description:
      "We believe beautiful spaces should work effortlessly. Our designs balance visual appeal, practical functionality, and everyday comfort.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=85&w=1000&auto=format&fit=crop",
    tag: "Purposeful Design",
  },
  {
    number: "04",
    title: "A Seamless Design Journey",
    description:
      "From the first conversation to the final details, we maintain a structured approach focused on clarity, collaboration, and quality.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=85&w=1000&auto=format&fit=crop",
    tag: "End-to-End Experience",
  },
];

export default function WhyChooseUs() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeReason = reasons[activeIndex];

  return (
    <section className="bg-[#F7F5F0] py-16 md:py-20">
      <div className="mx-auto max-w-[1500px]">
        {/* Section Header */}
        <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3 text-sm text-[#858585]">
              <span className="h-2.5 w-2.5 rounded-full bg-black" />
              Why Choose Us
            </div>

            <h2 className="max-w-xl text-4xl font-medium leading-[1.08] tracking-[-0.055em] text-[#171717] md:text-5xl lg:text-6xl">
              Thoughtful Design.
              <br />
              Meaningful Spaces.
            </h2>
          </div>

          <div className="lg:justify-self-end lg:pb-2">
            <p className="max-w-md text-base leading-7 text-[#858585] md:text-lg">
              Great design goes beyond appearances. It's about understanding
              people, respecting spaces, and creating environments that make
              everyday living better.
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
          {/* Left: Interactive Image */}
          <div className="relative h-[400px] overflow-hidden bg-[#E8E5DF] md:h-[600px] lg:sticky lg:top-28 lg:h-[620px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeReason.image}
                src={activeReason.image}
                alt={activeReason.title}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </AnimatePresence>

            {/* Image Caption */}
            <div className="absolute bottom-0 left-0 flex w-full items-center justify-between bg-gradient-to-t from-black/60 to-transparent p-6 pt-20 text-white md:p-8 md:pt-24">
              <div>
                <span className="text-xs uppercase tracking-[0.2em] text-white/70">
                  Our Approach
                </span>

                <p className="mt-2 text-xl font-medium">{activeReason.tag}</p>
              </div>

              <span className="text-4xl font-light">{activeReason.number}</span>
            </div>
          </div>

          {/* Right: Interactive Reasons */}
          <div className="border-t border-black/15">
            {reasons.map((reason, index) => {
              const isActive = activeIndex === index;

              return (
                <button
                  key={reason.number}
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={isActive}
                  className="group block w-full border-b border-black/15 py-7 text-left md:py-9"
                >
                  <div className="flex items-start gap-5 md:gap-7">
                    <span
                      className={`pt-1 text-sm transition-colors ${
                        isActive ? "text-black" : "text-[#A5A5A5]"
                      }`}
                    >
                      /{reason.number}
                    </span>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <h3
                          className={`text-xl font-medium tracking-tight transition-colors duration-300 md:text-2xl lg:text-3xl ${
                            isActive ? "text-[#171717]" : "text-[#858585]"
                          }`}
                        >
                          {reason.title}
                        </h3>

                        <motion.span
                          animate={{ rotate: isActive ? 45 : 0 }}
                          className="shrink-0 text-2xl font-light text-[#252525]"
                        >
                          +
                        </motion.span>
                      </div>

                      <AnimatePresence initial={false}>
                        {isActive && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35 }}
                            className="overflow-hidden"
                          >
                            <p className="max-w-lg pt-5 text-sm leading-7 text-[#858585] md:text-base">
                              {reason.description}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 flex flex-col justify-between gap-5 border-t border-black/15 pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-[#858585]">
            Your space deserves a thoughtful approach.
          </p>

          <a
            href="/contact"
            className="group inline-flex w-fit items-center gap-3 border-b border-black pb-2 text-sm text-[#171717]"
          >
            Let's Discuss Your Project
            <span className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
