"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { fadeUp } from "@/lib/motion";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonHref?: string;
}

export default function CTASection({
  title = "Ready to Transform Your Space?",
  subtitle = "Book a free consultation today. No obligation, just ideas.",
  buttonText = "Get Free Estimate",
  buttonHref = "/contact",
}: CTASectionProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-r from-[#a07840] to-[#c9a96e]"
      aria-label="Call to action"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center"
        >
          <h2 className="font-display text-4xl md:text-5xl text-[#1a1410] mb-4">
            {title}
          </h2>
          <p className="text-[#1a1410]/70 text-lg mb-8 max-w-lg mx-auto">
            {subtitle}
          </p>
          <Link
            href={buttonHref}
            className="inline-block bg-[#1a1410] hover:bg-[#2d2520] text-[#c9a96e] text-xs font-medium px-10 py-4 rounded-sm uppercase tracking-widest transition-colors duration-300"
          >
            {buttonText}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
