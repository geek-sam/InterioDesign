import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your vision, lifestyle, and spatial requirements.",
    type: "text",
  },
  {
    number: "02",
    title: "Concept",
    description:
      "We define the layout, atmosphere, and overall design direction.",
    type: "text",
  },
  {
    number: "03",
    title: "Development",
    description:
      "We refine materials, lighting, furniture, and spatial details.",
    type: "text",
  },
  {
    number: "04",
    title: "Execution",
    description:
      "We execute the design with consistency and attention to detail.",
    type: "text",
  },
];

const illustrations = [
  {
    image: "/images/process1.avif",
    alt: "Architectural floor plan drawing",
  },
  {
    image: "/images/process2.avif",
    alt: "Architectural planning and construction",
  },
  {
    image: "/images/process3.avif",
    alt: "Interior design development",
  },
  {
    image: "/images/process4.avif",
    alt: "Completed interior design project",
  },
];

// Blueprint-style illustration card
function ProcessImage({ image, alt }) {
  return (
    <div className="group relative aspect-square overflow-hidden border border-white/10 bg-[#101010]">
      <img
        src={image}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
      />

      {/* <div className="pointer-events-none absolute inset-0 bg-black/10" /> */}

      <span className="absolute bottom-4 right-4 text-[10px] uppercase tracking-[0.2em] text-white/50">
        Design / Studio
      </span>
    </div>
  );
}

function ProcessText({ step }) {
  return (
    <div className="flex aspect-square flex-col justify-between border border-white/10 bg-[#101010] p-4 sm:p-5 lg:p-6">
      <span className="text-sm text-white/80">/{step.number}</span>

      <div>
        <h3 className="text-2xl font-medium tracking-tight text-white md:text-3xl">
          {step.title}
        </h3>

        <p className="mt-4 max-w-sm text-sm leading-6 text-white/60 md:text-base">
          {step.description}
        </p>
      </div>
    </div>
  );
}

export default function ProcessSection() {
  return (
    <section className="bg-[#101010] px-6 py-24 text-white md:px-10 lg:px-20 lg:py-32">
      <div className="mx-auto max-w-[1500px]">
        {/* Section Header */}
        <div className="mb-12 flex flex-col justify-between gap-8 md:mb-14 md:flex-row md:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3 text-sm text-white/50">
              <span className="h-2.5 w-2.5 rounded-full bg-white" />
              Process
            </div>

            <h2 className="text-5xl font-medium tracking-[-0.055em] md:text-6xl lg:text-7xl">
              How We Work
            </h2>

            <p className="mt-5 max-w-md text-sm leading-6 text-white/60 md:text-base">
              We follow a clear process to keep every step simple, structured,
              and easy to manage.
            </p>
          </div>

          <a
            href="/contact"
            className="group flex w-fit items-center gap-3 border-b border-white/50 pb-2 text-sm text-white transition-all hover:border-white"
          >
            Start a Project
            <span className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
              ↗
            </span>
          </a>
        </div>

        {/* Process Grid */}
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: (index % 2) * 0.1,
              }}
              className="contents"
            >
              {/* First row: Text / Image / Text / Image */}
              {index < 2 ? (
                <>
                  <ProcessText step={step} />
                  <ProcessImage
                    image={illustrations[index].image}
                    alt={illustrations[index].alt}
                  />
                </>
              ) : (
                <>
                  {/* Second row: Image / Text / Image / Text */}
                  <ProcessImage
                    image={illustrations[index].image}
                    alt={illustrations[index].alt}
                  />
                  <ProcessText step={step} />
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
