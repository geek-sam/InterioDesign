import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const teamMembers = [
  {
    id: 1,
    name: "Alexandra Morgan",
    role: "Founder & Creative Director",
    bio: "Leading the creative vision of the studio, Alexandra brings together architectural thinking, refined aesthetics, and a deep understanding of how people experience spaces.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=85&w=900&auto=format&fit=crop",
    social: {
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 2,
    name: "Daniel Roberts",
    role: "Lead Interior Designer",
    bio: "Daniel specializes in creating thoughtful interiors through material exploration, spatial planning, and a balance of timeless design and modern functionality.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=85&w=900&auto=format&fit=crop",
    social: {
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 3,
    name: "Sophia Bennett",
    role: "Architect",
    bio: "Sophia approaches architecture with a focus on proportion, natural light, and the relationship between built environments and everyday living.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=85&w=900&auto=format&fit=crop",
    social: {
      instagram: "#",
      linkedin: "#",
    },
  },
  {
    id: 4,
    name: "Oliver James",
    role: "Project Manager",
    bio: "Oliver coordinates project development and execution, ensuring every design detail translates into a carefully delivered space.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=85&w=900&auto=format&fit=crop",
    social: {
      instagram: "#",
      linkedin: "#",
    },
  },
];

function TeamCard({ member, index, active, onToggle }) {
  const isActive = active === member.id;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group min-w-0"
    >
      {/* Portrait */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[#E7E3DD]">
        <img
          src={member.image}
          alt={member.name}
          loading="lazy"
          className={`h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
            isActive ? "scale-105" : ""
          }`}
        />

        {/* Image Overlay */}
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-500 ${
            isActive
              ? "opacity-100"
              : "opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"
          }`}
        />

        {/* Expand Button */}
        <button
          onClick={() => onToggle(isActive ? null : member.id)}
          aria-expanded={isActive}
          aria-label={`${isActive ? "Hide" : "View"} ${member.name}'s biography`}
          className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center border border-white/70 text-xl text-white transition-all duration-300 hover:bg-white hover:text-black"
        >
          <motion.span
            animate={{ rotate: isActive ? 45 : 0 }}
            transition={{ duration: 0.25 }}
          >
            +
          </motion.span>
        </button>

        {/* Member Details Overlay */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-x-0 bottom-0 z-10 p-6 text-white md:p-7"
            >
              <span className="text-[10px] uppercase tracking-[0.2em] text-white/60">
                About the member
              </span>

              <p className="mt-3 text-sm leading-6 text-white/90">
                {member.bio}
              </p>

              <div className="mt-5 flex gap-5 text-xs uppercase tracking-widest">
                <a
                  href={member.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="border-b border-white/60 pb-1 hover:border-white"
                >
                  Instagram ↗
                </a>

                <a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="border-b border-white/60 pb-1 hover:border-white"
                >
                  LinkedIn ↗
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hover Hint */}
        {!isActive && (
          <div className="pointer-events-none absolute bottom-5 left-5 text-xs uppercase tracking-[0.18em] text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Meet the member ↗
          </div>
        )}
      </div>

      {/* Member Information */}
      <div className="mt-5 flex items-start justify-between gap-3">
        <div>
          <h3 className="text-xl font-medium tracking-tight text-[#171717]">
            {member.name}
          </h3>

          <p className="mt-1 text-sm text-[#858585]">{member.role}</p>
        </div>

        <span className="pt-1 text-xs text-[#858585]">/0{member.id}</span>
      </div>
    </motion.article>
  );
}

export default function TeamSection() {
  const [activeMember, setActiveMember] = useState(null);

  return (
    <section className="bg-[#F7F5F0] py-16 md:py-20">
      <div className="mx-auto max-w-[1500px]">
        {/* Section Heading */}
        <div className="mb-14 flex flex-col justify-between gap-6 md:mb-20 md:flex-row md:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3 text-sm text-[#858585]">
              <span className="h-2.5 w-2.5 rounded-full bg-black" />
              Our Team
            </div>

            <h2 className="max-w-xl text-4xl font-medium leading-[1.08] tracking-[-0.055em] text-[#171717] md:text-5xl lg:text-6xl">
              The People Behind
              <br />
              The Spaces.
            </h2>
          </div>

          <p className="max-w-xs text-base leading-7 text-[#858585]">
            A team of creative thinkers, designers, and architects bringing
            thoughtful spaces to life.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-7">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={member.id}
              member={member}
              index={index}
              active={activeMember}
              onToggle={setActiveMember}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 flex flex-col justify-between gap-5 border-t border-black/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-[#858585]">
            Have a project in mind? Let's work together.
          </p>

          <a
            href="/contact"
            className="group inline-flex w-fit items-center gap-3 border-b border-black pb-2 text-sm text-[#171717]"
          >
            Work With Us
            <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
