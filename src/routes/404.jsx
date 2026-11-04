import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#101010] px-6 text-[#252525]">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="select-none text-[45vw] font-bold leading-none tracking-tighter text-[#1a1a1a]">
          404
        </span>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center">
        <span className="mb-8 rounded-full border border-[#f5f5f5]/40 px-4 py-2 text-white text-xs uppercase tracking-[0.2em]">
          Error 404
        </span>

        <h1 className="text-4xl text-white font-semibold tracking-tight sm:text-6xl md:text-7xl">
          Lost your way?
        </h1>

        <p className="mt-5 max-w-md text-sm leading-7 text-[#888] sm:text-base">
          Looks like this page has wandered off. The page you're looking for
          doesn't exist or may have been moved.
        </p>

        <Link
          to="/"
          className="hidden border mt-10 text-white px-6 py-3 text-[11px] uppercase tracking-[0.15em] transition-all duration-300 lg:block border-white hover:bg-white hover:text-black"
        >
          Back to Homepage
          <span className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
            ↗
          </span>
        </Link>
      </div>

      {/* Footer */}
      <div className="absolute bottom-7 left-0 right-0 flex justify-center">
        <p className="text-xs tracking-wide text-[#999]">
          © {new Date().getFullYear()} — Lost, but not forgotten.
        </p>
      </div>
    </main>
  );
}
