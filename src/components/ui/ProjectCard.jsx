export function ProjectCard({ project }) {
  return (
    <a
      href={`/projects/${project.title.toLowerCase().replaceAll(" ", "-")}`}
      className="group block min-w-0"
    >
      {/* Project Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-[#E8E6E1]">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover
          transition-transform duration-700 ease-out
          group-hover:scale-[1.04]"
        />

        {/* Optional Category */}
        {project.category && (
          <div className="absolute left-4 top-4 md:left-5 md:top-5">
            <span
              className="rounded-full bg-white/90 px-3 py-1.5
            text-xs font-medium text-[#252525] backdrop-blur-sm"
            >
              {project.category}
            </span>
          </div>
        )}

        {/* Explore Indicator */}
        <div
          className="absolute bottom-4 right-4 flex h-10 w-10
          items-center justify-center rounded-full bg-white text-black
          opacity-100 transition-all duration-300
          md:translate-y-3 md:opacity-0
          md:group-hover:translate-y-0 md:group-hover:opacity-100
          md:group-hover:rotate-45"
        >
          <span className="text-lg">↗</span>
        </div>
      </div>

      {/* Project Information */}
      <div className="mt-4 md:mt-5">
        {/* Title & Year */}
        <div className="flex items-start justify-between gap-4">
          <h3
            className="text-base font-medium tracking-tight text-[#656565]
            transition-colors duration-300
            md:text-xl md:group-hover:text-[#232323]"
          >
            {project.title}
          </h3>

          <span className="shrink-0 pt-1 text-xs tabular-nums text-[#888] md:text-sm">
            {project.year}
          </span>
        </div>

        {/* Description */}
        <p className="mt-2 max-w-[95%] text-sm leading-relaxed text-[#777] md:mt-2.5 md:text-[15px]">
          {project.desc}
        </p>
      </div>
    </a>
  );
}
