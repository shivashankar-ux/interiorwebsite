"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/motion";

const stats = [
  { value: "250+", label: "Projects Done" },
  { value: "10+", label: "Years Experience" },
  { value: "98%", label: "Happy Clients" },
];

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center bg-[#1a1410] overflow-hidden"
      aria-label="Hero"
    >
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1410]/95 via-[#2d2520]/80 to-[#1a1410]/90" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 50%, #c9a96e 0%, transparent 60%), repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(201,169,110,0.05) 40px, rgba(201,169,110,0.05) 41px)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.p
            variants={fadeUp}
            className="text-[#c9a96e] text-xs font-medium uppercase tracking-[0.25em] mb-6"
          >
            Hyderabad&apos;s Most Trusted Interior Studio
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="font-display text-5xl md:text-6xl lg:text-7xl text-white font-normal leading-[1.1] mb-6"
          >
            Where Every Space
            <br />
            <em className="text-[#c9a96e]">Tells Your Story</em>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-white/60 text-lg leading-relaxed max-w-xl mb-10"
          >
            From elegant homes to professional offices — we craft interiors that
            reflect who you are. Serving Hyderabad with craftsmanship and care.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="bg-[#c9a96e] hover:bg-[#a07840] text-[#1a1410] hover:text-white text-xs font-medium px-8 py-4 rounded-sm uppercase tracking-widest transition-all duration-300 hover:-translate-y-0.5"
            >
              Get Free Estimate
            </Link>
            <Link
              href="/projects"
              className="border border-white/30 hover:border-[#c9a96e] text-white/80 hover:text-[#c9a96e] text-xs font-medium px-8 py-4 rounded-sm uppercase tracking-widest transition-all duration-300"
            >
              View Our Work
            </Link>
          </motion.div>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="absolute bottom-12 right-6 hidden lg:flex gap-10"
        >
          {stats.map((s) => (
            <motion.div key={s.label} variants={fadeUp} className="text-right">
              <strong className="block font-display text-3xl text-[#c9a96e] font-semibold leading-none">
                {s.value}
              </strong>
              <span className="text-[10px] uppercase tracking-[0.15em] text-white/40 mt-1 block">
                {s.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile stats */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex lg:hidden gap-8 mt-12 pt-8 border-t border-white/10"
        >
          {stats.map((s) => (
            <motion.div key={s.label} variants={fadeUp}>
              <strong className="block font-display text-2xl text-[#c9a96e] font-semibold leading-none">
                {s.value}
              </strong>
              <span className="text-[10px] uppercase tracking-widest text-white/40 mt-1 block">
                {s.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-6 hidden lg:flex flex-col items-center gap-2 z-10">
        <span
          className="text-[10px] uppercase tracking-[0.2em] text-white/30"
          style={{ writingMode: "vertical-rl" }}
        >
          Scroll
        </span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
