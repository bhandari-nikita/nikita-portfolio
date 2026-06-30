"use client";

import { motion } from "framer-motion";
import { FileText, Download, ExternalLink } from "lucide-react";
import { FadeIn } from "@/components/ui/motion";

export function ResumeSection() {
  return (
    <section id="resume" className="py-20 px-4" aria-labelledby="resume-heading">
      <div className="max-w-7xl mx-auto">
        <FadeIn>
          <div className="p-8 sm:p-12 rounded-3xl glass border border-white/[0.08] gradient-border relative overflow-hidden">
            {/* Background decoration */}
            <div
              className="absolute top-0 right-0 w-96 h-96 opacity-20 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle at 80% 20%, rgba(59,130,246,0.3) 0%, transparent 60%)",
              }}
              aria-hidden="true"
            />

            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
              <div className="flex items-start gap-5">
                <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20">
                  <FileText size={28} className="text-blue-400" />
                </div>
                <div>
                  <h2 id="resume-heading" className="text-xl font-bold text-white mb-1">
                    Resume
                  </h2>
                  <p className="text-white/50 text-sm max-w-md">
                    Download my resume for a full overview of my skills,
                    experience, and projects.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 flex-shrink-0">
                <motion.a
                  href="/resume.pdf"
                  download="Nikita_Bhandari_Resume.pdf"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold transition-colors shadow-lg shadow-blue-500/20"
                >
                  <Download size={15} />
                  Download Resume
                </motion.a>
                <motion.a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-5 py-3 rounded-xl glass border border-white/[0.10] hover:border-white/20 text-white/70 hover:text-white text-sm font-semibold transition-all"
                >
                  <ExternalLink size={15} />
                  View
                </motion.a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
