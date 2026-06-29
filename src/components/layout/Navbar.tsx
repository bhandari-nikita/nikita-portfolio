"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Timeline", href: "#timeline" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(entry.target.id);
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    navLinks.forEach((link) => {
      const section = document.querySelector(link.href);

      if (section) observer.observe(section);
    });

    const onScroll = () => setScrolled(window.scrollY > 40);

    window.addEventListener("scroll", onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "glass border-b border-white/[0.06] shadow-xl"
            : "bg-transparent"
        )}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={cn(
              "flex items-center justify-between transition-all duration-300",
              scrolled ? "h-14" : "h-16"
            )}
          >
            {/* Logo */}
            <a
              href="#"
              className="text-sm font-semibold tracking-widest text-white/80 hover:text-white transition-colors uppercase"
              aria-label="Nikita Bhandari — Home"
            >
              NB<span className="text-gradient-blue">.</span>
            </a>

            {/* Desktop links */}
            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "group relative text-sm font-medium transition-colors",
                    activeSection === link.href.substring(1)
                      ? "text-white"
                      : "text-white/60 hover:text-white"
                  )}
                >
                  <span>{link.label}</span>

                  <span
                    className={cn(
                      "absolute left-0 -bottom-1 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300",
                      activeSection === link.href.substring(1)
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    )}
                  />
                  {/* {link.label} */}

                </a>
              ))}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.06] hover:bg-blue-500 hover:text-white hover:border-blue-400 border border-white/[0.08] text-sm font-medium text-white transition-all duration-200 hover:border-blue-500/40"
            >
              Hire Me
            </a>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/[0.06] transition-all"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 glass border-b border-white/[0.06] lg:hidden"
          >
            <div className="px-4 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-white/70 hover:text-white transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-4 py-3 rounded-lg bg-blue-500/20 border border-blue-500/30 text-blue-300 font-medium text-center"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
