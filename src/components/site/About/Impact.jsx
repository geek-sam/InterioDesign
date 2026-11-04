import { useEffect, useRef, useState } from "react";

const impactStats = [
  {
    value: 10,
    suffix: "+",
    description:
      "We bring over a decade of experience shaping thoughtful and functional spaces.",
  },
  {
    value: 120,
    suffix: "+",
    description:
      "We've delivered projects across residential and commercial environments with clarity and precision.",
  },
  {
    value: 95,
    suffix: "%",
    description:
      "We maintain long-term collaborations built on trust and reliable execution.",
  },
];

function AnimatedNumber({ value, suffix, active }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    const duration = 1800;
    let startTime;
    let frame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min((timestamp - startTime) / duration, 1);

      const eased = 1 - Math.pow(1 - progress, 4);

      setCount(Math.floor(eased * value));

      if (progress < 1) {
        frame = requestAnimationFrame(animate);
      }
    };

    frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, [active, value]);

  return (
    <span className="font-mono tabular-nums tracking-[-0.07em]">
      {count}
      {suffix}
    </span>
  );
}

export default function ImpactSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#F7F5F0] py-16 md:py-20">
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-12 lg:grid-cols-[1.15fr_0.65fr_0.75fr] lg:gap-10">
        {/* Left: Section Heading */}
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <div className="mb-6 flex items-center gap-3 text-sm text-[#858585]">
            <span className="h-2.5 w-2.5 rounded-full bg-black" />
            Impact
          </div>

          <h2 className="max-w-xl text-4xl font-medium leading-[1.08] tracking-[-0.055em] text-[#171717] md:text-5xl lg:text-6xl">
            Measured by experience and trust.
          </h2>
        </div>

        {/* Center: Statistics */}
        <div className="flex flex-col justify-between gap-14 md:flex-row md:gap-8 lg:flex-col lg:gap-0">
          {impactStats.map((stat, index) => (
            <div
              key={index}
              className="text-6xl text-[#111111] transition-all duration-700 sm:text-7xl lg:text-8xl xl:text-9xl"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(25px)",
                transitionDelay: `${index * 150}ms`,
              }}
            >
              <AnimatedNumber
                value={stat.value}
                suffix={stat.suffix}
                active={isVisible}
              />
            </div>
          ))}
        </div>

        {/* Right: Supporting Descriptions */}
        <div className="flex flex-col justify-between gap-10 md:flex-row md:gap-8 lg:flex-col lg:gap-16">
          {impactStats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center transition-all duration-700 lg:min-h-[130px]"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(25px)",
                transitionDelay: `${index * 150 + 200}ms`,
              }}
            >
              <p className="max-w-md text-base leading-7 text-[#858585] md:text-lg">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
