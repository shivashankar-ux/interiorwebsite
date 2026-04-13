"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { slideInLeft, slideInRight } from "@/lib/motion";

export default function IntroSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-24 bg-[#faf7f2] dark:bg-[#2d2520]"
      aria-label="About preview"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Text */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <span className="text-[#c9a96e] text-[11px] font-medium uppercase tracking-[0.2em] mb-3 block">
              Who We Are
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-[#1a1410] dark:text-[#e8d5b0] leading-[1.15] mb-6">
              Built on Trust,
              <br />
              <em className="text-[#a07840] dark:text-[#c9a96e]">Designed with Heart</em>
            </h2>
            <p className="text-[#7a6e65] dark:text-[#b5956a] leading-relaxed mb-4">
              Sahitya Interiors has been transforming spaces across Hyderabad
              for over a decade. We believe every home and office deserves an
              interior that&apos;s not just beautiful — but truly yours.
            </p>
            <p className="text-[#7a6e65] dark:text-[#b5956a] leading-relaxed mb-8">
              Our team of skilled designers and craftsmen work closely with every
              client, from first sketch to final nail, ensuring quality that
              lasts and design that delights.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-[#a07840] dark:text-[#c9a96e] font-medium text-sm tracking-wide hover:gap-4 transition-all duration-300"
            >
              Our Story →
            </Link>
          </motion.div>

          {/* Image stack */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative h-[480px]"
          >
            {/* Main image */}
            <div
              className="absolute top-0 right-0 w-4/5 h-[380px] rounded-sm bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=700&q=80')",
              }}
            />
            {/* Float image */}
            <div
              className="absolute bottom-0 left-0 w-1/2 h-56 rounded-sm bg-cover bg-center border-4 border-[#faf7f2] dark:border-[#2d2520]"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&q=80')",
              }}
            />
            {/* Badge */}
            <div className="absolute top-6 -left-4 bg-[#1a1410] text-white px-5 py-4 rounded-sm text-center shadow-xl">
              <span className="block font-display text-3xl text-[#c9a96e] leading-none font-semibold">
                10+
              </span>
              <span className="text-[10px] uppercase tracking-widest text-white/50 mt-1 block">
                Years in Hyderabad
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
