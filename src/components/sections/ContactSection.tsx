"use client";

import emailjs from "@emailjs/browser";
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, CheckCircle } from "lucide-react";
import { FadeIn } from "@/components/ui/motion";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "nikitabhandari018@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=nikitabhandari018@gmail.com",
    color: "text-blue-400",
    border: "border-blue-500/20 hover:border-blue-500/40",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/bhandari-nikita",
    href: "https://github.com/bhandari-nikita",
    color: "text-white/70",
    border: "border-white/[0.08] hover:border-white/20",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/nikita-b-8b186a336",
    href: "https://www.linkedin.com/in/nikita-b-8b186a336",
    color: "text-blue-400",
    border: "border-blue-500/20 hover:border-blue-500/40",
  },
];

export function ContactSection() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setSent(true);

      setTimeout(() => {
        setSent(false);
      }, 5000);
      form.reset();
    } catch (error) {
      console.error(error);
      alert("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-28 px-4 relative" aria-labelledby="contact-heading">
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(59,130,246,0.08) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <FadeIn className="mb-14 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px flex-1 bg-white/[0.06] max-w-xs" />
            <span className="text-xs font-mono text-white/30 tracking-widest uppercase">
              07 / Contact
            </span>
            <div className="h-px flex-1 bg-white/[0.06] max-w-xs" />
          </div>
          <h2 id="contact-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Let&apos;s build something
            <br />
            <span className="text-gradient-blue">worth building</span>
          </h2>
          <p className="text-white/40 text-base max-w-md mx-auto">
            Open to backend roles, data projects, and interesting problems.
            Drop a message.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact links */}
          <FadeIn direction="left" className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-2">
              Reach me at
            </p>
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                className={`flex items-center gap-4 p-4 rounded-2xl glass border ${link.border} transition-all duration-200 group`}
              >
                <div className={`p-2.5 rounded-xl glass border border-white/[0.06] ${link.color}`}>
                  <link.icon size={16} />
                </div>
                <div>
                  <p className="text-xs text-white/40 mb-0.5">{link.label}</p>
                  <p className={`text-sm font-medium ${link.color}`}>{link.value}</p>
                </div>
              </a>
            ))}
          </FadeIn>

          {/* Contact form */}
          <FadeIn direction="right">
            {sent ? (
              <div className="h-full flex items-center justify-center p-8 rounded-2xl glass border border-emerald-500/20">
                <div className="text-center">
                  <CheckCircle size={40} className="text-emerald-400 mx-auto mb-3" />
                  <h3 className="text-base font-semibold text-white mb-1">
                    Thanks! Your message has been sent successfully.
                  </h3>

                  <p className="text-sm text-white/50">
                    I&apos;ll get back to you as soon as possible.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="p-6 rounded-2xl glass border border-white/[0.07] flex flex-col gap-4"
                noValidate
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="contact-name"
                      className="block text-xs text-white/40 mb-1.5"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      placeholder="Your name"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm text-white placeholder-white/25 focus:outline-none focus:border-blue-500/40 focus:bg-white/[0.06] transition-all"
                    />
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <label
                      htmlFor="contact-email"
                      className="block text-xs text-white/40 mb-1.5"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      placeholder="your@email.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm text-white placeholder-white/25 focus:outline-none focus:border-blue-500/40 focus:bg-white/[0.06] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs text-white/40 mb-1.5"
                  >
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    name="title"
                    placeholder="What's this about?"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm text-white placeholder-white/25 focus:outline-none focus:border-blue-500/40 focus:bg-white/[0.06] transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs text-white/40 mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-sm text-white placeholder-white/25 focus:outline-none focus:border-blue-500/40 focus:bg-white/[0.06] transition-all resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-blue-500 hover:bg-blue-400 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-semibold transition-colors shadow-lg shadow-blue-500/20"
                >
                  {loading ? (
                    <span className="animate-pulse">Sending…</span>
                  ) : (
                    <>
                      Send message
                      <Send size={14} />
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
