"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { slideInLeft, slideInRight, staggerContainer, staggerItem } from "@/lib/motion";

const points = [
  {
    title: "Turnkey Delivery",
    description:
      "Design, sourcing, execution — all under one roof. No running between vendors.",
  },
  {
    title: "Fixed Timelines",
    description:
      "We commit to deadlines and we keep them. Your home or office, on time.",
  },
  {
    title: "Transparent Pricing",
    description:
      "No hidden costs, no surprises. Clear quotes before work begins.",
  },
  {
    title: "Local Expertise",
    description:
      "10+ years in Hyderabad. We know the vendors, the materials, and the climate.",
  },
];

export default function WhyUsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-24 bg-[#faf7f2] dark:bg-[#2d2520]"
      aria-label="Why choose us"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="h-[520px] rounded-sm bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=700&q=80')",
            }}
          />

          {/* Text */}
          <div>
            <motion.div
              variants={slideInRight}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <span className="text-[#c9a96e] text-[11px] font-medium uppercase tracking-[0.2em] mb-3 block">
                Why Sahitya Interiors
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-[#1a1410] dark:text-[#e8d5b0] leading-[1.15] mb-10">
                We Don&apos;t Just Design Spaces.
                <br />
                <em className="text-[#a07840] dark:text-[#c9a96e]">
                  We Build Experiences.
                </em>
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="space-y-6 mb-10"
            >
              {points.map((p) => (
                <motion.div
                  key={p.title}
                  variants={staggerItem}
                  className="flex gap-4 items-start"
                >
                  <div className="w-7 h-7 min-w-[28px] bg-[#c9a96e] rounded-full flex items-center justify-center text-[#1a1410] text-xs font-bold mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong className="block font-display text-lg text-[#1a1410] dark:text-[#e8d5b0] mb-1">
                      {p.title}
                    </strong>
                    <p className="text-[#7a6e65] dark:text-[#b5956a] text-sm leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={slideInRight}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <Link
                href="/contact"
                className="inline-block bg-[#c9a96e] hover:bg-[#a07840] text-[#1a1410] hover:text-white text-xs font-medium px-8 py-4 rounded-sm uppercase tracking-widest transition-all duration-300"
              >
                Talk to Us
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
