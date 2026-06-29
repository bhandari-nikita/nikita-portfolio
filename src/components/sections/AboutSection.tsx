"use client";

import { motion } from "framer-motion";
import { Code2, BarChart3, Database, Zap } from "lucide-react";
import { FadeIn } from "@/components/ui/motion";

const pillars = [
  {
    icon: Code2,
    title: "Backend Engineering",
    description:
      "I architect clean, scalable APIs using FastAPI and Python. From database schema design to authentication flows, I build systems that can grow with your business.",
    color: "blue",
    gradient: "from-blue-500/10 to-blue-600/5",
    border: "border-blue-500/20",
    iconBg: "bg-blue-500/10 text-blue-400",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description:
      "PostgreSQL and MySQL aren't just databases to me — they're the backbone of every system I build. I design schemas that stay performant as your data scales.",
    color: "purple",
    gradient: "from-purple-500/10 to-purple-600/5",
    border: "border-purple-500/20",
    iconBg: "bg-purple-500/10 text-purple-400",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description:
      "I turn spreadsheets and raw data into Power BI dashboards that actually drive decisions. From KPI tracking to trend analysis, insights become actions.",
    color: "cyan",
    gradient: "from-cyan-500/10 to-cyan-600/5",
    border: "border-cyan-500/20",
    iconBg: "bg-cyan-500/10 text-cyan-400",
  },
  {
    icon: Zap,
    title: "Business Tools",
    description:
      "I bridge the gap between technical systems and business operations with TallyPrime integration and automated reporting workflows.",
    color: "blue",
    gradient: "from-blue-500/10 to-purple-500/5",
    border: "border-blue-500/20",
    iconBg: "bg-blue-500/10 text-blue-300",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-28 px-4 relative" aria-labelledby="about-heading">
      {/* Subtle background glow */}
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 rounded-full opacity-30 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <FadeIn className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-white/30 tracking-widest uppercase">
              01 / About
            </span>
            <div className="h-px flex-1 bg-white/[0.06] max-w-xs" />
          </div>
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
          >
            Building at the intersection of
            <br />
            <span className="text-gradient-blue">code and data</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl leading-relaxed">
            I&apos;m passionate about building backend applications that are reliable, scalable, and easy to maintain. 
            Alongside backend development, 
            I enjoy transforming business data into clear dashboards using Excel and Power BI to help drive better decisions.
          </p>
        </FadeIn>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {pillars.map((pillar, i) => (
            <FadeIn key={pillar.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className={`p-6 rounded-2xl bg-gradient-to-br ${pillar.gradient} border ${pillar.border} glass h-full`}
              >
                <div className={`inline-flex p-2.5 rounded-xl ${pillar.iconBg} mb-4`}>
                  <pillar.icon size={20} />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
