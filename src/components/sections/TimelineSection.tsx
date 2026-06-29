"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Star } from "lucide-react";
import { FadeIn } from "@/components/ui/motion";
import { timelineItems } from "@/lib/data";
import type { TimelineItem } from "@/types";

const typeConfig = {
  work: { icon: Briefcase, color: "text-blue-400", border: "border-blue-500/30", dot: "bg-blue-500" },
  education: { icon: GraduationCap, color: "text-purple-400", border: "border-purple-500/30", dot: "bg-purple-500" },
  achievement: { icon: Star, color: "text-cyan-400", border: "border-cyan-500/30", dot: "bg-cyan-500" },
};

function TimelineCard({ item, index }: { item: TimelineItem; index: number }) {
  const config = typeConfig[item.type];
  const Icon = config.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      {/* Connector line for desktop */}
      <div className="hidden lg:flex absolute top-6 left-1/2 -translate-x-1/2 w-4 h-4 z-10">
        <span className={`w-3 h-3 rounded-full ${config.dot} ring-4 ring-background`} />
      </div>

      <div
        className={`lg:w-[calc(50%-2rem)] p-5 rounded-2xl glass border ${config.border} hover:shadow-lg transition-all duration-300 ${
          index % 2 === 0 ? "lg:mr-auto" : "lg:ml-auto"
        }`}
      >
        <div className="flex items-center gap-2 mb-2">
          <span className={`inline-flex p-1.5 rounded-lg bg-white/[0.04] ${config.color}`}>
            <Icon size={13} />
          </span>
          <span className="text-xs font-mono text-white/40">{item.year}</span>
          <span className={`ml-auto text-xs ${config.color} capitalize font-medium`}>
            {item.type}
          </span>
        </div>
        <h3 className="text-sm font-semibold text-white mb-0.5">{item.title}</h3>
        <p className={`text-xs font-medium mb-2 ${config.color}`}>{item.company}</p>
        <p className="text-xs text-white/45 leading-relaxed">{item.description}</p>
      </div>
    </motion.div>
  );
}

export function TimelineSection() {
  return (
    <section id="timeline" className="py-28 px-4 md:px-8 lg:px-0 relative" aria-labelledby="timeline-heading">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(139,92,246,0.04) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px flex-1 bg-white/[0.06] max-w-xs" />
            <span className="text-xs font-mono text-white/30 tracking-widest uppercase">
              05 / Timeline
            </span>
            <div className="h-px flex-1 bg-white/[0.06] max-w-xs" />
          </div>
          <h2 id="timeline-heading" className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            The path so far
          </h2>
          <p className="text-white/40 text-base max-w-md mx-auto">
            A focused journey from business computing to production engineering.
          </p>
        </FadeIn>

        {/* Timeline */}
        <div className="relative">
          {/* Center line for desktop */}
          <div
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/[0.06] -translate-x-1/2"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-6">
            {timelineItems.map((item, i) => (
              <TimelineCard key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
