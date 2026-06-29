"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/motion";
import { skillCategories } from "@/lib/data";

const colorMap = {
  blue: {
    dot: "bg-blue-400",
    text: "text-blue-400",
    header: "text-blue-400/70",
    bg: "hover:border-blue-500/30",
    bar: "from-blue-500 to-cyan-400",
  },
  purple: {
    dot: "bg-blue-400",
    text: "text-blue-400",
    header: "text-blue-400/70",
    bg: "hover:border-blue-500/30",
    bar: "from-blue-500 to-cyan-400",
  },
  cyan: {
    dot: "bg-blue-400",
    text: "text-blue-400",
    header: "text-blue-400/70",
    bg: "hover:border-blue-500/30",
    bar: "from-blue-500 to-cyan-400",
  },
};

type ColorKey = keyof typeof colorMap;

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-28 px-4 relative"
      aria-labelledby="skills-heading"
    >
      {/* bg accent */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 50%, rgba(6,182,212,0.04) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-white/30 tracking-widest uppercase">
              02 / Skills
            </span>
            <div className="h-px flex-1 bg-white/[0.06] max-w-xs" />
          </div>
          <h2
            id="skills-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
          >
            Technologies I work
            <br />
            <span className="text-gradient-cyan">confidently with</span>
          </h2>
          <p className="text-white/40 text-base max-w-xl">
            A focused stack rather than a sprawling one — chosen for real-world
            effectiveness.
          </p>
        </FadeIn>

        {/* Skills grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category) => {
            const colors = colorMap[category.color as ColorKey];
            return (
              <StaggerItem key={category.title}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className={`p-6 rounded-2xl glass border border-white/[0.07] ${colors.bg} transition-all duration-300 h-full`}
                >
                  {/* Category header */}
                  <div className="flex items-center gap-2 mb-5">
                    <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                    <h3 className={`text-xs font-semibold uppercase tracking-widest ${colors.header}`}>
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills list */}
                  <div className="flex flex-col gap-5">
                    {category.skills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-sm font-medium text-white/80">
                            {skill.name}
                          </span>
                          <span className={`text-xs font-mono ${colors.text}`}>
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                          <motion.div
                            className={`h-full rounded-full shadow-[0_0_10px_rgba(59,130,246,0.4)] bg-gradient-to-r ${colors.bar}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1,
                              delay: 0.2,
                              ease: [0.21, 0.47, 0.32, 0.98],
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
