import { useRef, useState } from "react";

const categories = ["All Projects", "Residential", "Commercial", "Hospitality"];

const projects = [
  {
    id: 1,
    title: "The Quiet Residence",
    category: "Residential",
    location: "Mumbai, India",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200",
    size: "large",
  },
  {
    id: 2,
    title: "Modern Serenity",
    category: "Residential",
    location: "Bangalore, India",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1000",
    size: "normal",
  },
  {
    id: 3,
    title: "The Urban Office",
    category: "Commercial",
    location: "Pune, India",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1000",
    size: "normal",
  },
  {
    id: 4,
    title: "Earth & Elements",
    category: "Residential",
    location: "Goa, India",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200",
    size: "large",
  },
  {
    id: 5,
    title: "The Sunday Café",
    category: "Hospitality",
    location: "Delhi, India",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1000",
    size: "normal",
  },
  {
    id: 6,
    title: "Minimal Living",
    category: "Residential",
    location: "Hyderabad, India",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1000",
    size: "normal",
  },
];

export default function Gallery() {
  const imageRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const [selectedImage, setSelectedImage] = useState(null);

  const filteredProjects =
    activeCategory === "All Projects"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const closePreview = () => setSelectedImage(null);

  return (
    <main className="min-h-screen bg-[#F7F6F2] text-[#252525]">
      <section className="relative px-6 md:px-16 isolate min-h-[50vh] item-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            ref={imageRef}
            src="hero-bg.jpg"
            alt="Luxury contemporary interior design"
            className="h-full w-full object-cover scale-[1.05]"
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute w-full bottom-0 left-0 p-8 md:p-16">
          <div className="flex flex-col w-full justify-between gap-6 md:flex-row md:items-end">
            <h1 className="max-w-xl text-4xl font-medium leading-[1.08] tracking-[-0.055em] text-[#FAFAFA] md:text-5xl lg:text-6xl">
              Spaces that
              <br />
              <span className="">inspire living.</span>
            </h1>

            <p className="max-w-xs text-sm leading-7 text-[#FFF]">
              A collection of thoughtfully designed spaces, crafted around
              people, purpose and the beauty of everyday living.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="px-6 pb-24 mt-10 md:px-16">
        <div className="mx-auto max-w-[1500px]">
          {/* Category filters */}
          <div className="mb-10 flex flex-wrap gap-3 border-b border-[#252525]/10 pb-6">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "border-black bg-black text-white"
                    : "border-black/[0.07] bg-white text-[#252525] hover:border-black/30 hover:bg-[#EAE9E5]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <article key={project.id} className="group">
                <button
                  onClick={() => setSelectedImage(project)}
                  aria-label={`Preview ${project.title}`}
                  className="relative block w-full cursor-zoom-in overflow-hidden bg-[#E8E6E1] text-left"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/20">
                    <span className="flex h-12 w-12 translate-y-3 items-center justify-center rounded-full bg-white text-xl opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      ↗
                    </span>
                  </div>
                </button>

                <div className="mt-4 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-base font-medium">{project.title}</h3>
                    <p className="mt-1 text-xs text-[#999]">
                      {project.location}
                    </p>
                  </div>

                  <span className="pt-1 text-xs text-[#999]">
                    {project.category}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Image Preview Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 md:p-10"
          onClick={closePreview}
        >
          {/* Close */}
          <button
            onClick={closePreview}
            aria-label="Close preview"
            className="absolute right-6 top-6 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-2xl text-white transition hover:bg-white hover:text-black"
          >
            ×
          </button>

          {/* Preview Content */}
          <div
            className="flex max-h-full w-full max-w-6xl flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.image
                .replace("w=1200", "w=2000")
                .replace("w=1000", "w=2000")}
              alt={selectedImage.title}
              className="max-h-[78vh] max-w-full object-contain"
            />

            <div className="mt-5 flex w-full items-center justify-between text-white">
              <div>
                <h2 className="text-lg font-medium">{selectedImage.title}</h2>
                <p className="mt-1 text-xs text-white/50">
                  {selectedImage.location} — {selectedImage.category}
                </p>
              </div>

              <span className="text-sm text-white/50">
                {String(selectedImage.id).padStart(2, "0")} /{" "}
                {String(filteredProjects.length).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
