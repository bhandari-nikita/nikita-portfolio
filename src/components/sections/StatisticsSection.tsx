"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { FadeIn } from "@/components/ui/motion";
import { stats } from "@/lib/data";

function AnimatedValue({ value }: { value: string }) {
  const [displayed, setDisplayed] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    // Extract numeric part and suffix
    const match = value.match(/^(\d+)(.*)$/);
    if (!match) {
      setDisplayed(value);
      return;
    }

    const target = parseInt(match[1]);
    const suffix = match[2];
    const duration = 1500;
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);
      setDisplayed(`${current}${suffix}`);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, value]);

  return <span ref={ref}>{displayed}</span>;
}

export function StatisticsSection() {
  return (
    <section className="py-20 px-4" aria-label="Statistics">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.1}>
              <div className="p-6 rounded-2xl glass border border-white/[0.07] text-center group hover:border-blue-500/20 transition-all duration-300">
                <div className="text-3xl sm:text-4xl font-bold text-gradient-blue mb-1">
                  <AnimatedValue value={stat.value} />
                </div>
                <div className="text-sm font-semibold text-white/80 mb-0.5">
                  {stat.label}
                </div>
                <div className="text-xs text-white/35">{stat.description}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
