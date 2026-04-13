"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, staggerItem, fadeUp } from "@/lib/motion";

const values = [
  { icon: "🎨", title: "Creativity First", description: "Every project starts with a blank canvas. Fresh ideas tailored to you — never cookie-cutter templates." },
  { icon: "🔨", title: "Quality Craftsmanship", description: "We use only trusted materials and skilled workers. Our work is built to last — not just look good on day one." },
  { icon: "🤝", title: "Client Partnership", description: "We listen, then design. Your preferences drive every decision — we're here to execute your vision." },
  { icon: "⏱", title: "On-Time Delivery", description: "Timelines are promises. We plan meticulously and deliver on schedule — no excuses, no delays." },
];

export default function ValuesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 bg-[#fff9f2] dark:bg-[#1a1410]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <span className="text-[#c9a96e] text-[11px] font-medium uppercase tracking-[0.2em] mb-3 block">
            What Drives Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-[#1a1410] dark:text-[#e8d5b0]">
            Our Core Values
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((v) => (
            <motion.div
              key={v.title}
              variants={staggerItem}
              className="text-center p-8 bg-[#faf7f2] dark:bg-[#2d2520] border border-[#c9a96e]/20 rounded-sm"
            >
              <span className="text-4xl block mb-4">{v.icon}</span>
              <h3 className="font-display text-xl text-[#1a1410] dark:text-[#e8d5b0] mb-3">
                {v.title}
              </h3>
              <p className="text-[#7a6e65] dark:text-[#b5956a] text-sm leading-relaxed">
                {v.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
