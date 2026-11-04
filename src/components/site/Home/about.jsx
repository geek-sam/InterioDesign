import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 10, suffix: "+", label: "Years of Experience" },
  { value: 120, suffix: "+", label: "Completed Projects" },
  { value: 95, suffix: "%", label: "Client Satisfaction" },
];

function AnimatedCounter({ value, suffix, label, active }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    let startTime;
    const duration = 1800;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);

      // Ease-out animation
      const eased = 1 - Math.pow(1 - progress, 4);

      setCount(Math.floor(eased * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [active, value]);

  return (
    <div>
      <div className="font-mono text-6xl tracking-tight text-[#171717] sm:text-7xl md:text-8xl lg:text-9xl">
        {count}
        {suffix}
      </div>

      <p className="mt-3 text-sm text-[#858585] md:text-lg">{label}</p>
    </div>
  );
}

export default function AboutSection() {
  const statsRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = statsRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#F7F5F0] px-6 py-20 md:px-10 lg:px-24 lg:py-12">
      <div className="mx-auto max-w-[1500px]">
        {/* About Content */}
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Image */}
          <div className="relative">
            <div className="mb-4 flex items-center gap-3 text-sm text-[#858585]">
              <span className="h-2.5 w-2.5 rounded-full bg-black" />
              About Us
            </div>

            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=85&w=1400&auto=format&fit=crop"
                alt="Contemporary luxury interior design"
                className="aspect-[1.5/1] w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>

          {/* Description */}
          <div className="lg:pl-4">
            <h2 className="max-w-4xl text-2xl font-medium leading-[1.15] tracking-[-0.045em] text-[#171717] sm:text-3xl md:text-4xl lg:text-[clamp(2.5rem,2.8vw,4rem)]">
              We are a design studio focused on crafting calm, intentional
              interiors that balance aesthetics, functionality, and everyday
              living.
            </h2>

            <a
              href="/about"
              className="group mt-7 inline-flex items-center gap-3 border-b border-black pb-1 text-base text-[#171717]"
            >
              Read Our Story
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </a>
          </div>
        </div>

        {/* Animated Statistics */}
        <div
          ref={statsRef}
          className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-6 lg:mt-24"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="transition-all duration-700"
              style={{
                transitionDelay: `${index * 150}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
              }}
            >
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                active={isVisible}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
