import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-white/40">
          © {currentYear} Designed & Developed by Nikita Bhandari.
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/bhandari-nikita"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-lg text-white/40 hover:text-white hover:bg-white/[0.06] transition-all"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/nikita-b-8b186a336"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-lg text-white/40 hover:text-white hover:bg-white/[0.06] transition-all"
          >
            <Linkedin size={18} />
          </a>
          <a
            href= "https://mail.google.com/mail/?view=cm&fs=1&to=nikitabhandari018@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
            className="p-2 rounded-lg text-white/40 hover:text-white hover:bg-white/[0.06] transition-all"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
