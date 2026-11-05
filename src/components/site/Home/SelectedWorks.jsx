import { ProjectCard } from "../../ui/ProjectCard";
import { projects } from "../../../utils/appData";

export default function SelectedWorks() {
  return (
    <section className="bg-[#F7F5F0] px-6 py-20 md:px-10 lg:px-24 lg:py-28">
      <div className="mx-auto max-w-[1500px]">
        {/* Section Header */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="mb-4 flex items-center gap-3 text-sm text-[#858585]">
              <span className="h-2.5 w-2.5 rounded-full bg-black" />
              Projects
            </div>

            <h2 className="max-w-xl text-4xl font-medium leading-[1.08] tracking-[-0.055em] text-[#171717] md:text-5xl lg:text-6xl">
              Selected Works
            </h2>
          </div>

          <p className="max-w-[320px] text-base leading-6 text-[#858585]">
            A collection of spaces defined by simplicity and intention.
          </p>
        </div>

        {/* First Row: Large + Small */}
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[1fr_1fr_1fr] md:h-full md:gap-10">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Second Row: Small + Large
        <div className="mt-12 grid grid-cols-1 items-start gap-10 md:mt-20 md:grid-cols-[1fr_1.8fr] md:gap-10">
          {projects.slice(2, 4).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div> */}

        {/* View All */}
        <div className="mt-16 flex justify-center">
          <a
            href="/projects"
            className="group inline-flex items-center gap-5 border-b border-[#252525] pb-3 text-xs uppercase tracking-[0.18em] text-[#252525]"
          >
            Explore All Projects
            <span className="transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
