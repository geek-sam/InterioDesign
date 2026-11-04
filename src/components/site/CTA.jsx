import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="relative flex min-h-[360px] w-full items-center justify-center overflow-hidden bg-[#171717] md:min-h-[360px] lg:min-h-[400px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="hero-bg.jpg"
          alt="Contemporary architectural residence"
          className="h-full w-full object-cover"
          loading="lazy"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* CTA Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center text-white"
      >
        <h2 className="max-w-xl text-4xl font-medium leading-[1.08] tracking-[-0.055em] md:text-5xl lg:text-6xl">
          Ready to Elevate
          <br />
          Your Space?
        </h2>

        <p className="mt-7 text-base text-white/65 md:text-lg">
          Let's create something memorable together.
        </p>

        <Link
          to="/contact"
          className="group mt-12 inline-flex items-center gap-3 border-b border-white/80 pb-2 text-sm font-medium transition-all duration-300 hover:border-white hover:gap-5"
        >
          Start a Project
          <span className="text-lg transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
            ↗
          </span>
        </Link>
      </motion.div>
    </section>
  );
}
