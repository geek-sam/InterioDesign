import { useState } from "react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    // Connect your newsletter API or service here.
    setMessage("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <footer className="overflow-hidden bg-[#101010] px-6 pt-16 text-white md:px-10 lg:px-20 lg:pt-24">
      <div className="mx-auto max-w-[1600px]">
        {/* Top Footer Content */}
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 lg:gap-10">
          {/* Newsletter */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-2xl font-medium tracking-tight md:text-3xl">
              Interio Studio
            </h3>

            <p className="mt-3 max-w-xs text-sm leading-6 text-white/50">
              Get design inspiration, studio updates, and ideas delivered to
              your inbox.
            </p>

            <form
              onSubmit={handleSubscribe}
              className="mt-8 flex max-w-[350px] items-center gap-5"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
                aria-label="Email address"
                required
                className="min-w-0 w-full border-b border-white/20 bg-transparent py-2 text-sm text-white outline-none placeholder:text-white/40 focus:border-white"
              />

              <button
                type="submit"
                className="group flex shrink-0 items-center gap-2 border-b border-white pb-2 text-sm font-medium transition-opacity hover:opacity-60"
              >
                Subscribe
                <span className="text-lg transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                  ↗
                </span>
              </button>
            </form>

            {message && (
              <p aria-live="polite" className="mt-3 text-xs text-white/60">
                {message}
              </p>
            )}
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-5 text-xs uppercase tracking-[0.2em] text-white/40">
              Explore
            </h4>

            <nav className="flex flex-col items-start gap-3">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-base text-white/60 transition-colors hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-5 text-xs uppercase tracking-[0.2em] text-white/40">
              Information
            </h4>

            <div className="flex flex-col items-start gap-3">
              <a
                href="/privacy-policy"
                className="text-base text-white/60 transition-colors hover:text-white"
              >
                Privacy Policy
              </a>

              <a
                href="/terms"
                className="text-base text-white/60 transition-colors hover:text-white"
              >
                Terms & Conditions
              </a>
            </div>
          </div>

          {/* Social & Contact */}
          <div>
            <h4 className="mb-5 text-xs uppercase tracking-[0.2em] text-white/40">
              Connect
            </h4>

            <div className="flex flex-col items-start gap-3">
              <a href="#" className="text-base text-white/60 hover:text-white">
                Instagram ↗
              </a>
              <a href="#" className="text-base text-white/60 hover:text-white">
                Pinterest ↗
              </a>
              <a href="#" className="text-base text-white/60 hover:text-white">
                LinkedIn ↗
              </a>
            </div>

            <h4 className="mb-4 mt-9 text-xs uppercase tracking-[0.2em] text-white/40">
              Get in touch
            </h4>

            <div className="flex flex-col gap-3 text-base text-white/60">
              <a href="mailto:hello@studio.com" className="hover:text-white">
                hello@interiostudio.com
              </a>
              <a href="tel:+911145678900" className="hover:text-white">
                +91 114 567 8900
              </a>
              <p>New Delhi, India</p>
            </div>
          </div>
        </div>

        {/* Oversized Brand Wordmark */}
        <div className="mt-24 overflow-hidden md:mt-24 lg:mt-32">
          <div className="whitespace-nowrap text-center m-auto text-[clamp(4rem,13.5vw,13rem)] font-semibold leading-[0.85] tracking-[-0.05em] text-[#F5F5F5]">
            <span className="inline-block ">Interio Studio.</span>
            <sup className="ml-2 inline-block translate-y-[-0.15em] align-top text-[0.25em] tracking-normal">
              ®
            </sup>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-white/15 py-7 text-sm text-white/40 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Studio. All rights reserved.</p>

          <p className="text-white/70">
            Designed & Developed by{" "}
            <a
              href="#"
              className="text-white transition-opacity hover:opacity-60"
            >
              Your Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
