import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blogs", href: "/blog" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: scrolled
          ? "rgba(255,255,255,0.96)"
          : "rgba(255,255,255,0)",
        color: scrolled ? "#252525" : "#FFFFFF",
        boxShadow: scrolled
          ? "0 2px 20px rgba(0,0,0,0.05)"
          : "0 0px 0px rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed inset-x-0 top-0 z-50 w-full"
    >
      <div className="mx-auto flex h-20 max-w-[1600px] items-center justify-between px-6 md:px-12 lg:px-20">
        {/* Logo */}
        <a href="/" className="relative z-50">
          <span className="font-serif text-2xl font-semibold tracking-tight">
            Interio<span className="font-light">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative text-xs uppercase tracking-[0.12em] transition-opacity hover:opacity-60"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Contact CTA */}
        <a
          href="/contact"
          className={`hidden border px-6 py-3 text-[11px] uppercase tracking-[0.15em] transition-all duration-300 lg:block ${
            scrolled
              ? "border-[#252525] hover:bg-[#252525] hover:text-white"
              : "border-white hover:bg-white hover:text-black"
          }`}
        >
          Let's Talk
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="relative z-50 flex flex-col gap-[6px] lg:hidden"
        >
          <span
            className={`h-[1px] w-7 transition-all duration-300 ${
              menuOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
            style={{
              backgroundColor: scrolled || menuOpen ? "#252525" : "#FFFFFF",
            }}
          />
          <span
            className={`h-[1px] w-7 transition-all duration-300 ${
              menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
            style={{
              backgroundColor: scrolled || menuOpen ? "#252525" : "#FFFFFF",
            }}
          />
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 top-0 flex min-h-screen w-full flex-col justify-center bg-[#F7F5F0] px-8 text-[#252525] lg:hidden"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.07 }}
                  onClick={() => setMenuOpen(false)}
                  className="font-serif text-4xl"
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            <a
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-10 w-fit border border-[#252525] px-7 py-4 text-xs uppercase tracking-widest"
            >
              Let's Talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
