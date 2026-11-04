const services = [
  {
    number: "01",
    title: "Interior Design",
    description:
      "We design interiors that are simple, functional, and aligned with how the space is used every day.",
    details: "Layout planning · Material selection · Furniture guidance",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=85&w=1200&auto=format&fit=crop",
  },
  {
    number: "02",
    title: "Architecture",
    description:
      "We create structures that are practical, well-planned, and built to last.",
    details: "Concept development · Space planning · Architectural design",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=85&w=1200&auto=format&fit=crop",
  },
  {
    number: "03",
    title: "Space Planning",
    description:
      "We transform spaces through intelligent layouts that improve movement, comfort, and functionality.",
    details: "Space optimization · Layout design · Functional zoning",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=85&w=1200&auto=format&fit=crop",
  },
  {
    number: "04",
    title: "Turnkey Solutions",
    description:
      "From initial concepts to final execution, we manage every detail to deliver a seamless experience.",
    details: "Project management · Execution · Final styling",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=85&w=1200&auto=format&fit=crop",
  },
];

export default function StickyServices() {
  return (
    <section className="relative bg-[#101010] text-white px-6 py-24 md:px-10 lg:px-24">
      <div className="mx-auto grid max-w-[1500px] grid-cols-1 gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        {/* Left Sticky Content */}
        <div className="lg:sticky lg:top-28 lg:h-fit">
          <div className="mb-5 flex items-center gap-3 text-sm text-white/50">
            <span className="h-2.5 w-2.5 rounded-full bg-white" />
            Services
          </div>

          <h2 className="max-w-xl text-4xl font-medium leading-[1.08] tracking-[-0.055em] md:text-5xl lg:text-6xl">
            What we design
          </h2>

          <p className="mt-7 max-w-sm text-base leading-7 text-white/60">
            We follow a clear process to keep every step simple, structured, and
            easy to manage.
          </p>
        </div>

        {/* Right Stacking Cards */}
        <div className="relative flex flex-col gap-16">
          {services.map((service, index) => (
            <article
              key={service.number}
              className="sticky top-24 grid min-h-[300px] grid-cols-1 gap-6 border border-white/10 bg-[#101010] p-4 sm:grid-cols-2 sm:p-5 md:min-h-[340px]"
              style={{
                zIndex: index + 1,
              }}
            >
              {/* Card Information */}
              <div className="flex flex-col justify-between">
                <div>
                  <span className="text-base text-white/70">
                    /{service.number}
                  </span>

                  <h3 className="mt-8 text-3xl font-medium tracking-tight md:text-4xl">
                    {service.title}
                  </h3>

                  <p className="mt-5 max-w-sm text-base leading-6 text-white/60">
                    {service.description}
                  </p>
                </div>

                <p className="mt-10 text-sm leading-6 text-white/80">
                  {service.details}
                </p>
              </div>

              {/* Card Image */}
              <div className="relative min-h-[200px] overflow-hidden sm:min-h-0">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
