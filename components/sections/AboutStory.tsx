"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { slideInLeft, slideInRight } from "@/lib/motion";

export default function AboutStory() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 bg-[#faf7f2] dark:bg-[#2d2520]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <span className="text-[#c9a96e] text-[11px] font-medium uppercase tracking-[0.2em] mb-3 block">
              Our Beginning
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-[#1a1410] dark:text-[#e8d5b0] leading-[1.15] mb-6">
              Started in Hyderabad,
              <br />
              <em className="text-[#a07840] dark:text-[#c9a96e]">Serving All of It</em>
            </h2>
            <p className="text-[#7a6e65] dark:text-[#b5956a] leading-relaxed mb-4">
              Sahitya Interiors was founded with one simple idea — that great
              design shouldn&apos;t be reserved for the wealthy. Every home, every
              office, every space deserves thoughtfulness and craft.
            </p>
            <p className="text-[#7a6e65] dark:text-[#b5956a] leading-relaxed mb-4">
              Starting from humble beginnings in a small studio in Banjara
              Hills, we&apos;ve grown into one of Hyderabad&apos;s most trusted interior
              design firms — completing 250+ projects across residential,
              commercial, and hospitality spaces.
            </p>
            <p className="text-[#7a6e65] dark:text-[#b5956a] leading-relaxed">
              Our name &ldquo;Sahitya&rdquo; — meaning literature, art, and knowledge in
              Sanskrit — reflects our belief that interior design is a form of
              storytelling. Every space has a story; we help you tell yours.
            </p>
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative h-[480px]"
          >
            <div
              className="absolute top-0 right-0 w-4/5 h-[380px] rounded-sm bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80')",
              }}
            />
            <div
              className="absolute bottom-0 left-0 w-1/2 h-52 rounded-sm bg-cover bg-center border-4 border-[#faf7f2] dark:border-[#2d2520]"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=500&q=80')",
              }}
            />
            <div className="absolute top-6 -left-4 bg-[#1a1410] text-white px-5 py-4 rounded-sm text-center shadow-xl">
              <span className="block font-display text-3xl text-[#c9a96e] leading-none font-semibold">
                250+
              </span>
              <span className="text-[10px] uppercase tracking-widest text-white/50 mt-1 block">
                Projects Completed
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
