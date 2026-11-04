import { useMemo, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  "All Articles",
  "Interior Design",
  "Space Planning",
  "Materials & Finishes",
  "Small Spaces",
  "Renovation",
  "Studio Notes",
];

const articles = [
  {
    id: 1,
    category: "Studio Notes",
    readTime: "5 min read",
    title: "The Art of a Quiet Palette",
    description:
      "How warm neutrals, natural texture and subtle contrast can create a space that feels layered rather than plain.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=85&w=1000&auto=format&fit=crop",
    date: "October 24, 2026",
    slug: "the-art-of-a-quiet-palette",
  },
  {
    id: 2,
    category: "Space Planning",
    readTime: "4 min read",
    title: "A Better Layout Starts with Better Questions",
    description:
      "Before choosing furniture, consider movement, daily routines and the way each room connects.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=85&w=1000&auto=format&fit=crop",
    date: "October 18, 2026",
    slug: "better-layout-better-questions",
  },
  {
    id: 3,
    category: "Materials & Finishes",
    readTime: "6 min read",
    title: "Choosing Materials That Age Well",
    description:
      "A practical look at tactile finishes, honest materials and choices that become more beautiful with use.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=85&w=1000&auto=format&fit=crop",
    date: "October 12, 2026",
    slug: "choosing-materials-that-age-well",
  },
  {
    id: 4,
    category: "Interior Design",
    readTime: "7 min read",
    title: "Designing Homes Around Everyday Living",
    description:
      "Explore how thoughtful interiors balance visual simplicity, comfort and the needs of modern living.",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=85&w=1000&auto=format&fit=crop",
    date: "October 08, 2026",
    slug: "designing-homes-around-everyday-living",
  },
  {
    id: 5,
    category: "Small Spaces",
    readTime: "5 min read",
    title: "Making More of Less",
    description:
      "Smart storage, multifunctional furniture and visual techniques that make compact spaces feel generous.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=85&w=1000&auto=format&fit=crop",
    date: "September 29, 2026",
    slug: "making-more-of-less",
  },
  {
    id: 6,
    category: "Renovation",
    readTime: "8 min read",
    title: "A Thoughtful Approach to Renovation",
    description:
      "What to consider before renovating, from initial planning and material selection to the finishing details.",
    image:
      "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=85&w=1000&auto=format&fit=crop",
    date: "September 20, 2026",
    slug: "thoughtful-approach-to-renovation",
  },
];

function ArticleCard({ article, index }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="group min-w-0"
    >
      <a href={`/blogs/${article.slug}`} className="block">
        {/* Article Image */}
        <div className="relative aspect-[1.35/1] overflow-hidden rounded-[20px] bg-[#E5E3DE]">
          <img
            src={article.image}
            alt={article.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />

          <span className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white text-xl text-black opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            ↗
          </span>
        </div>

        {/* Article Metadata */}
        <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] font-medium uppercase tracking-[0.1em] text-[#777772]">
          <span>{article.category}</span>
          <span className="h-1 w-1 rounded-full bg-[#F15A32]" />
          <span>{article.readTime}</span>
        </div>

        {/* Article Title */}
        <h3 className="mt-4 text-xl font-semibold leading-snug tracking-[-0.04em] text-[#171717] transition-opacity group-hover:opacity-60 md:text-2xl">
          {article.title}
        </h3>

        {/* Article Description */}
        <p className="mt-4 text-sm leading-6 text-[#858580] md:text-base">
          {article.description}
        </p>
      </a>
    </motion.article>
  );
}

export default function Blog() {
  const imageRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState("All Articles");

  const filteredArticles = useMemo(() => {
    if (activeCategory === "All Articles") return articles;

    return articles.filter((article) => article.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="min-h-screen bg-[#F7F5F0]">
      <div className="relative">
        <section className="sticky top-0 z-0 h-[50vh] overflow-hidden">
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
          <div className="absolute w-full bottom-20 md:bottom-10 left-0 md:left-6 right-6 p-8 md:p-16">
            <h1 className="max-w-xl text-4xl font-medium leading-[1.08] tracking-[-0.055em] text-[#FAFAFA] md:text-5xl lg:text-6xl">
              Ideas for spaces
              <br />
              <span className="text-[#FAFAFA]  ">that feel considered.</span>
            </h1>
          </div>

          {/* Bottom Information */}
          <div className="absolute bottom-10 left-6 right-6 z-10 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-white/80 md:left-16 md:right-16 lg:left-24 lg:right-24">
            <span>Designing Experiences</span>
            <span>Scroll to Explore ↓</span>
          </div>
        </section>
      </div>
      <section className="px-6 pb-24 mt-10 md:px-16">
        <div className="mx-auto max-w-[1500px]">
          {/* Editorial Header */}
          {/* <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <div className="mb-9 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#333333]">
              <span className="h-2 w-2 rounded-full bg-[#F15A32]" />
              The Studio Journal
              <span className="text-[#92928D]">01</span>
            </div>

            <h1 className="text-5xl font-medium leading-[0.98] tracking-[-0.065em] text-[#171717] sm:text-6xl md:text-7xl lg:text-[76px]">
              Ideas for spaces
              <br />
              <span className="text-[#C5C5BF]">that feel considered.</span>
            </h1>
          </div>

          <p className="max-w-md pb-1 text-base leading-7 text-[#858580] md:text-lg lg:justify-self-end">
            Design notes, practical guidance and material inspiration to help
            you make more thoughtful choices for the spaces you live and work
            in.
          </p>
        </div> */}

          {/* Quick Category Filters */}
          <div className="mt-16 flex flex-wrap gap-2.5">
            {categories.map((category) => {
              const isActive = activeCategory === category;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={isActive}
                  className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "border-black bg-black text-white"
                      : "border-black/[0.07] bg-white text-[#252525] hover:border-black/30 hover:bg-[#EAE9E5]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Article Count */}
          <div className="mt-8 flex items-center justify-between">
            <p className="text-xs text-[#858580]">
              Showing {filteredArticles.length} articles
            </p>

            {activeCategory !== "All Articles" && (
              <button
                onClick={() => setActiveCategory("All Articles")}
                className="text-xs text-[#555550] underline underline-offset-4"
              >
                Clear filter
              </button>
            )}
          </div>

          {/* Blog Grid */}
          <motion.div
            layout
            className="mt-7 grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-16"
          >
            <AnimatePresence mode="popLayout">
              {filteredArticles.map((article, index) => (
                <ArticleCard key={article.id} article={article} index={index} />
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty State */}
          {filteredArticles.length === 0 && (
            <div className="py-24 text-center">
              <h3 className="text-2xl font-medium text-[#171717]">
                No articles found.
              </h3>
              <p className="mt-3 text-sm text-[#858580]">
                Try selecting another category.
              </p>
              <button
                onClick={() => setActiveCategory("All Articles")}
                className="mt-6 rounded-full bg-[#F15A32] px-6 py-3 text-sm text-white"
              >
                View All Articles
              </button>
            </div>
          )}

          {/* Bottom CTA */}
          <div className="mt-24 border-t border-black/10 pt-8">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
              <p className="text-sm text-[#858580]">
                Enjoyed reading? Explore our design projects.
              </p>

              <a
                href="/projects"
                className="group inline-flex w-fit items-center gap-3 border-b border-black pb-2 text-sm font-medium text-[#171717]"
              >
                Explore Projects
                <span className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
