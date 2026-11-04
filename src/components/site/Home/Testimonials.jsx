import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

const testimonials = [
  {
    name: "Emma Carter",
    role: "Homeowner",
    image: "https://i.pravatar.cc/100?img=47",
    rating: "4.9/5",
    review:
      "The design decisions were practical and well thought out, making the space easy to use and maintain.",
  },
  {
    name: "James Anderson",
    role: "Villa Owner",
    image: "https://i.pravatar.cc/100?img=12",
    rating: "5.0/5",
    review:
      "From the initial concept to the final details, everything felt intentional. They transformed our house into a beautiful home.",
  },
  {
    name: "Sophia Williams",
    role: "Business Owner",
    image: "https://i.pravatar.cc/100?img=44",
    rating: "4.9/5",
    review:
      "Their attention to detail and understanding of functionality made our workspace feel completely different. The result exceeded our expectations.",
  },
  {
    name: "Oliver Brown",
    role: "Apartment Owner",
    image: "https://i.pravatar.cc/100?img=13",
    rating: "5.0/5",
    review:
      "They understood exactly what we wanted. The materials, lighting, and overall design came together beautifully.",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  }, []);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);

    return () => clearInterval(interval);
  }, [nextSlide, activeIndex]);

  const active = testimonials[activeIndex];

  return (
    <section className="bg-[#F7F5F0] px-6 py-24 md:px-10 lg:px-20 lg:py-32">
      <div className="mx-auto max-w-[1500px]">
        {/* Section Heading */}
        <div className="mb-16">
          <div className="mb-5 flex items-center gap-3 text-sm text-[#858585]">
            <span className="h-2.5 w-2.5 rounded-full bg-black" />
            Testimonials
          </div>

          <h2 className="max-w-xl text-4xl font-medium leading-[1.08] tracking-[-0.055em] text-[#171717] md:text-5xl lg:text-6xl">
            What Our Client Say
          </h2>
        </div>

        {/* Testimonial Content */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.3fr_0.7fr] md:gap-10">
          {/* Left: Review */}
          <div className="min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {/* Client Profile */}
                <div className="flex items-center gap-3">
                  <img
                    src={active.image}
                    alt={active.name}
                    className="h-11 w-11 rounded-none object-cover"
                  />

                  <div>
                    <p className="text-base font-medium text-[#171717]">
                      {active.name}
                    </p>
                    <p className="text-sm text-[#858585]">{active.role}</p>
                  </div>
                </div>

                {/* Review Text */}
                <h3 className="mt-8 max-w-[780px] text-3xl font-medium leading-[1.2] tracking-[-0.045em] text-[#171717] md:text-4xl lg:text-5xl">
                  "{active.review}"
                </h3>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Rating & Navigation */}
          <div className="flex flex-col justify-between md:items-end">
            {/* Rating */}
            <div className="md:text-right">
              <div className="flex items-center gap-2 text-xl text-[#171717] md:justify-end">
                <span>{active.rating}</span>

                <div className="flex gap-0.5 text-base">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star}>★</span>
                  ))}
                </div>
              </div>

              <p className="mt-2 text-sm text-[#858585]">
                Rated by 1200+ Verified Clients
              </p>
            </div>

            {/* Navigation */}
            <div className="mt-10 flex items-center gap-4 md:mt-0">
              <button
                onClick={prevSlide}
                aria-label="Previous testimonial"
                className="flex h-11 w-11 items-center justify-center border border-[#252525] text-xl text-[#252525] transition-all duration-300 hover:bg-[#252525] hover:text-white"
              >
                ←
              </button>

              <button
                onClick={nextSlide}
                aria-label="Next testimonial"
                className="flex h-11 w-11 items-center justify-center border border-[#252525] text-xl text-[#252525] transition-all duration-300 hover:bg-[#252525] hover:text-white"
              >
                →
              </button>
            </div>
          </div>
        </div>

        {/* Slide Progress */}
        <div className="mt-16 flex gap-2">
          {testimonials.map((item, index) => (
            <button
              key={item.name}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              className="h-[3px] flex-1 overflow-hidden bg-black/10"
            >
              <span
                className={`block h-full transition-all duration-500 ${
                  index === activeIndex ? "w-full bg-black" : "w-0 bg-black"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
