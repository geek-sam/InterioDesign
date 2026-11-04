export function ProjectCard({ project }) {
  return (
    <a
      // href={`/projects/${project.title.toLowerCase().replaceAll(" ", "-")}`}
      className="group block min-w-0"
    >
      <div className="relative h-100 w-full overflow-hidden bg-[#E8E6E1]">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100" />
        <div className="absolute bottom-5 left-5 flex w-auto md:max-w-[calc(100%-2.5rem)] gap-4">
          <div className=" items-center justify-center rounded bg-black/60 px-4 py-2 text-sm font-regular text-white opacity-100 translate-y-0 transition-all duration-300 md:bg-transparent md:px-0 md:text-white md:opacity-0 md:translate-y-3 md:group-hover:translate-y-0 md:group-hover:opacity-100">
            {project.desc}
          </div>
          <div className="flex mt-3 h-8 w-16 md:translate-y-3 items-center justify-center rounded-full bg-white text-black opacity-0 transition-all duration-300 md:group-hover:translate-y-0 md:group-hover:opacity-100">
            ↗
          </div>
        </div>
      </div>

      <div className="mt-3 flex items-center justify-between gap-4 text-sm text-[#252525] md:text-base">
        <span className="transition-opacity duration-300 group-hover:opacity-60">
          {project.title}
        </span>
        <span>{project.year}</span>
      </div>
    </a>
  );
}
