"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/ui/motion";
import { projects } from "@/lib/data";
import type { Project } from "@/types";
import Image from "next/image";

type Filter = "all" | "backend" | "analytics";

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "All Projects" },
  { value: "backend", label: "Backend" },
  { value: "analytics", label: "Analytics" },
];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="py-28 px-4 relative"
      aria-labelledby="projects-heading"
    >
      <div
        className="absolute top-1/3 left-0 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-white/30 tracking-widest uppercase">
              03 / Projects
            </span>
            <div className="h-px flex-1 bg-white/[0.06] max-w-xs" />
          </div>
          <h2
            id="projects-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4"
          >
            Work I&apos;m proud
            <br />
            <span className="text-gradient-blue">to put my name on</span>
          </h2>
          <p className="text-white/40 text-base max-w-xl mb-8">
            Real systems built for real problems — from e-commerce backends to
            manufacturing analytics.
          </p>

          {/* Filter tabs */}
          <div className="flex gap-2 flex-wrap" role="tablist" aria-label="Filter projects">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                role="tab"
                aria-selected={activeFilter === f.value}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${activeFilter === f.value
                  ? "bg-blue-500/20 border border-blue-500/40 text-blue-300"
                  : "glass border border-white/[0.07] text-white/50 hover:text-white/80 hover:border-white/15"
                  }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Project cards */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {

  const projectLink = project.liveUrl || project.githubUrl;

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group relative p-6 rounded-2xl glass border border-white/[0.07] hover:border-white/[0.14] transition-all duration-300 overflow-hidden"
      aria-label={project.title}
    >
      {/* Gradient overlay on hover */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}
        aria-hidden="true"
      />

      <div className="relative z-10">

        <div className="mb-4 flex items-center justify-between">
          <span className="text-xs uppercase tracking-widest text-blue-400">
            Featured Project
          </span>

          <span className="text-xs text-white/40">
            {project.category}
          </span>
        </div>

        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
        >

          {/* Project image */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden rounded-xl mb-5"
          >
            <div className="relative h-56 overflow-hidden rounded-xl">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </motion.div>

        </a>

        {/* Top row */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div>
              <h3 className="text-lg font-semibold text-white">
                {project.title}
              </h3>
              <span className="text-xs text-white/40 capitalize">
                {project.category}
              </span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-2">
            {/* GitHub */}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub - ${project.title}`}
              className="p-2 rounded-lg glass border border-white/[0.08] hover:border-white/20 hover:bg-white/5 text-white/50 hover:text-white transition-all"
            >
              <Github size={15} />
            </a>

            {/* Live Demo */}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live Demo - ${project.title}`}
                className="p-2 rounded-lg glass border border-blue-500/20 hover:border-blue-500/50 hover:bg-blue-500/10 text-blue-300 transition-all"
              >
                <ExternalLink size={15} />
              </a>
            )}

            {/* Documentation */}
            {project.docsUrl && (
              <a
                href={project.docsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Documentation - ${project.title}`}
                className="px-3 py-2 rounded-lg glass border border-white/[0.08] hover:border-white/20 text-xs font-medium text-white/70 hover:text-white transition-all"
              >
                Docs
              </a>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-white/70 leading-relaxed mb-4">
          {project.description}
        </p>

        {/* Problem Solved */}
        <div className="mb-4 rounded-lg border border-blue-500/15 bg-blue-500/5 p-3">
          <p className="text-xs uppercase tracking-wide text-blue-400 mb-1">
            Problem Solved
          </p>

          <p className="text-sm text-white/70">
            {project.problemSolved}
          </p>
        </div>

        {/* Features */}
        <ul className="flex flex-col gap-1.5 mb-5">
          {project.features.slice(0, 3).map((feat) => (
            <li key={feat} className="flex items-start gap-2 text-xs text-white/45">
              <CheckCircle2 size={12} className="text-emerald-400/60 mt-0.5 flex-shrink-0" />
              {feat}
            </li>
          ))}
        </ul>


        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-md text-sm font-medium glass border border-white/[0.07] text-white/60"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
