import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const faqs = [
  {
    question: "How long does a project take?",
    answer:
      "Most projects are completed within 4 to 12 weeks, depending on scope and requirements. Larger projects may require additional time for planning, material selection, and execution.",
  },
  {
    question: "What services do you offer?",
    answer:
      "We offer residential and commercial interior design, architectural planning, space planning, furniture selection, renovation, styling, and turnkey interior solutions.",
  },
  {
    question: "Do you handle both residential and commercial projects?",
    answer:
      "Yes. We work on a wide range of residential and commercial spaces, including apartments, villas, offices, retail spaces, and hospitality environments.",
  },
  {
    question: "What is included in the design process?",
    answer:
      "Our process includes initial consultation, understanding your requirements, space planning, concept development, 3D visualizations, material selection, design documentation, and execution guidance.",
  },
  {
    question: "How do we get started?",
    answer:
      "Simply contact us through our inquiry form or email. We will schedule an initial consultation to understand your requirements, budget, timeline, and design preferences.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="bg-[#F7F5F0] px-6 py-24 md:px-10 lg:px-20 lg:py-32">
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
        {/* Left: Section Introduction */}
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <div className="mb-5 flex items-center gap-3 text-sm text-[#858585]">
            <span className="h-2.5 w-2.5 rounded-full bg-black" />
            FAQ
          </div>

          <h2 className="max-w-xl text-4xl font-medium leading-[1.08] tracking-[-0.055em] text-[#171717] md:text-5xl lg:text-6xl">
            Your Questions,
            <br />
            Answered
          </h2>

          <p className="mt-7 max-w-sm text-base leading-7 text-[#858585]">
            Find quick answers to the most common questions about our services
            and process.
          </p>
        </div>

        {/* Right: Accordion */}
        <div className="border-t border-black/10">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <div key={index} className="border-b border-black/10">
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="flex w-full items-center justify-between gap-6 py-7 text-left md:py-8"
                >
                  <span className="text-lg font-medium tracking-tight text-[#252525] md:text-xl">
                    {faq.question}
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex h-7 w-7 shrink-0 items-center justify-center text-2xl font-light text-[#252525]"
                    aria-hidden="true"
                  >
                    +
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: {
                          duration: 0.35,
                          ease: [0.22, 1, 0.36, 1],
                        },
                        opacity: { duration: 0.25 },
                      }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-3xl pb-7 pr-8 text-base leading-7 text-[#858585] md:pb-8">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
