"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

const roles = ["Python", "SQL", "Data Analysis", "Excel", "Power BI", "FastAPI", "Backend Development", "Docker", "PostgreSQL"];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen lg:h-screen flex items-center overflow-x-hidden"
      aria-label="Hero"
    >
      {/* Background mesh */}
      <div className="absolute inset-0 bg-hero-gradient" aria-hidden="true" />

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
        aria-hidden="true"
      />

      {/* Floating particles */}
      <Particles />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20 pb-16">
        <div
className="
grid
grid-cols-1
lg:grid-cols-2
gap-10
md:gap-12
lg:gap-16
items-start
lg:items-center
"
>
          {/* Left: Text content */}
          <div
className="
flex
flex-col
gap-6
order-1
items-center
text-center
lg:items-start
lg:text-left
"
>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 w-fit"
            >
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-medium text-emerald-400/80 tracking-widest uppercase">
                Available for work
              </span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-none">
                <span className="text-white">Nikita</span>
                <br />
                <span className="text-gradient-blue">Bhandari</span>
              </h1>
            </motion.div>

            {/* Roles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap gap-2"
            >
              {roles.map((role) => (
                <span
                  key={role}
                  className="px-3 py-1 rounded-full text-xs font-medium glass border border-white/[0.08] text-white/70"
                >
                  {role}
                </span>
              ))}
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="text-white/55 text-base sm:text-lg leading-relaxed max-w-lg"
            >
              I build scalable backend APIs with Python, FastAPI, and PostgreSQL while transforming business data into actionable insights using Excel and Power BI.
              I enjoy solving real-world problems through clean engineering and data-driven decision making.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="
flex
flex-wrap
justify-start
max-sm:justify-center
gap-3
mt-2
"
            >
              <a
                href="#projects"
                className="group flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold transition-all duration-200 shadow-lg shadow-blue-500/25 hover:shadow-blue-400/30 hover:-translate-y-0.5"
              >
                View Projects
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-3 rounded-xl glass border border-white/[0.10] hover:border-white/20 text-white/80 hover:text-white text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
              >
                <FileText size={14} />
                Resume
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-5 py-3 rounded-xl glass border border-white/[0.08] hover:border-purple-500/40 text-white/70 hover:text-white text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
              >
                <Mail size={14} />
                Contact
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="
flex
flex-wrap
items-center
justify-center
lg:justify-start
gap-3
mt-1
"
            >
              <a
                href="https://github.com/bhandari-nikita"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-xl glass border border-white/[0.08] hover:border-white/20 text-white/50 hover:text-white transition-all duration-200 hover:-translate-y-0.5"
              >
                <Github size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/nikita-b-8b186a336"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-xl glass border border-white/[0.08] hover:border-blue-400/40 text-white/50 hover:text-blue-400 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Linkedin size={16} />
              </a>
              <div className="w-px h-4 bg-white/10 mx-1" />
              <span className="text-xs text-white/30 font-mono">
                Umbergaon • Gujarat • India
              </span>
            </motion.div>
          </div>

          {/* Right: Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="
relative
flex
justify-center
items-center
order-2
mt-6
sm:mt-8
lg:mt-0
"
          >
            <PortraitComposition />
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/30 tracking-widest uppercase font-medium">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown size={16} className="text-white/30" />
        </motion.div>
      </motion.div>
    </section>
  );
}

function PortraitComposition() {
  return (
    <motion.div
  whileHover={{ scale: 1.02 }}
  transition={{ duration: 0.25 }}
  className="
relative
w-full
max-w-[270px]
sm:max-w-[330px]
md:max-w-[390px]
lg:max-w-[440px]
xl:max-w-[480px]
mx-auto
"
>
      {/* Outer glow rings */}
      <div
        className="absolute inset-0 rounded-3xl"
        style={{
          background:
            "radial-gradient(ellipse at 50% 80%, rgba(59,130,246,0.18) 0%, transparent 70%)",
          filter: "blur(30px)",

        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 rounded-3xl"
        style={{
          background:
            "radial-gradient(ellipse at 80% 30%, rgba(139,92,246,0.14) 0%, transparent 60%)",
          filter: "blur(24px)",
        }}
        aria-hidden="true"

      />

      {/* Floating glass card behind portrait */}
      <div
        className="
absolute
left-2
sm:left-2
md:-left-5
lg:-left-6

top-2
sm:top-4
md:top-14
lg:top-16

w-20
sm:w-24
md:w-28

px-3
sm:px-4

py-2
sm:py-3

scale-90
md:scale-90
lg:scale-100

rounded-xl
glass
border
border-white/[0.08]
animate-float-slow
z-20
"
        aria-hidden="true"
      >
        <p className="text-[10px] text-white/40 mb-1">Experience</p>
        <p className="text-base font-bold text-white">4+ Projects</p>
        <p className="text-[10px] text-blue-400/70">Backend & Analytics</p>
      </div>

      <div
        className="
absolute

right-2
sm:-right-1
md:-right-3
lg:-right-4

top-10
sm:top-16
md:top-20
lg:top-24

w-20
sm:w-24
md:w-28

px-3
sm:px-4

py-2
sm:py-3

scale-90
md:scale-90
lg:scale-100

rounded-xl
glass
border
border-white/[0.08]
animate-float-delayed
z-20
"
        aria-hidden="true"
      >
        <p className="text-[10px] text-white/40 mb-1">Tech stack</p>
        <p className="text-sm font-semibold text-white">Python · FastAPI</p>
        <p className="text-[10px] text-purple-400/70">SQL · Power BI</p>
      </div>

      <div
        className="
absolute

left-1/2
-translate-x-1/2

md:left-auto
md:translate-x-0
md:right-2

bottom-2
sm:bottom-4
md:bottom-20
lg:bottom-24

w-[72px]
sm:w-24
md:w-28

px-3
sm:px-4

py-2
sm:py-3

scale-90
md:scale-90
lg:scale-100

rounded-xl
glass
border
border-white/[0.08]
animate-float
z-20
"
        aria-hidden="true"
      >
        <div className="flex items-center gap-1.5 mb-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <p className="text-[10px] text-emerald-400/80">Open to Work</p>
        </div>
        <p className="text-xs text-white/60">
          Backend Developer
          Data Analyst</p>
      </div>

      {/* Glass frame behind portrait */}
      <div className="relative z-10 rounded-3xl glass gradient-border">
        {/* Gradient mesh background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 30% 60%, rgba(59,130,246,0.12) 0%, transparent 60%), radial-gradient(ellipse at 70% 20%, rgba(139,92,246,0.10) 0%, transparent 50%)",
          }}
          aria-hidden="true"
        />

        {/* Portrait image */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          whileHover={{ scale: 1.02 }}
          transition={{
            repeat: Infinity,
            duration: 7,
            ease: "easeInOut",
          }}
          className="relative z-10"
        >
          <Image
            src="/nikita.png"
            alt="Nikita Bhandari — Python Backend Developer"
            width={560}
            height={700}
            priority
            className="
w-full
h-auto
max-h-[620px]
object-contain
object-bottom
"
          />
        </motion.div>

        {/* Bottom glow */}
        <div
          className="absolute bottom-0 left-0 right-0 h-32"
          style={{
            background:
              "linear-gradient(to top, rgba(5,5,5,0.6) 0%, transparent 100%)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Decorative dots */}
      <div
        className="absolute -bottom-4 -left-4 w-24 h-24 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(59,130,246,0.6) 1px, transparent 1px)",
          backgroundSize: "8px 8px",
        }}
        aria-hidden="true"
      />
    </motion.div>
  );
}

function Particles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${5 + (i * 4.7) % 90}%`,
    animationDelay: `${(i * 0.7) % 10}s`,
    animationDuration: `${12 + (i * 1.3) % 10}s`,
    size: i % 3 === 0 ? 2 : 1,
    color: i % 3 === 0 ? "rgba(59,130,246,0.5)" : i % 3 === 1 ? "rgba(139,92,246,0.4)" : "rgba(6,182,212,0.4)",
  }));

  return (
    <div className="absolute inset-0 overflow-x-hidden pointer-events-none" aria-hidden="true">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: p.left,
            bottom: "-10px",
            width: `${p.size * 2}px`,
            height: `${p.size * 2}px`,
            background: p.color,
            animation: `particle-rise ${p.animationDuration} linear ${p.animationDelay} infinite`,
          }}
        />
      ))}
    </div>
  );
}
