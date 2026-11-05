export function ProjectCard({ project }) {
  return (
    <a
      href={`/projects/${project.title.toLowerCase().replaceAll(" ", "-")}`}
      className="group block min-w-0"
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-[#E8E6E1]">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover
          transition-transform duration-700 ease-out
          group-hover:scale-[1.04]"
        />

        {/* Hover Overlay */}
        <div
          className="absolute inset-0 bg-black/35
          opacity-0 transition-opacity duration-500
          group-hover:opacity-100"
        />

        {/* Hover Content */}
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-6">
          <p
            className="max-w-[80%] text-sm leading-relaxed text-white
            opacity-0 translate-y-3
            transition-all duration-500 ease-out
            group-hover:translate-y-0 group-hover:opacity-100"
          >
            {project.desc}
          </p>

          <div
            className="flex h-10 w-10 shrink-0 items-center justify-center
            rounded-full bg-white text-black
            opacity-0 translate-y-3
            transition-all duration-500 ease-out
            group-hover:translate-y-0 group-hover:opacity-100
            group-hover:rotate-45"
          >
            <span className="text-lg">↗</span>
          </div>
        </div>

        {/* Project Category (optional) */}
        {project.category && (
          <div className="absolute left-5 top-5">
            <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-[#252525] backdrop-blur-sm">
              {project.category}
            </span>
          </div>
        )}
      </div>

      {/* Project Information */}
      <div className="mt-5 flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h3 className="text-lg font-medium tracking-tight text-[#565656] transition-colors duration-300 group-hover:text-[#252525] md:text-xl">
            {project.title}
          </h3>

          {project.subtitle && (
            <p className="mt-1 text-sm text-[#777]">{project.subtitle}</p>
          )}
        </div>

        <span className="shrink-0 pt-1 text-sm tabular-nums text-[#888]">
          {project.year}
        </span>
      </div>
    </a>
  );
}
