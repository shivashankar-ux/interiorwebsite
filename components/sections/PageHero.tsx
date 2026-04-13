"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/motion";

interface PageHeroProps {
  label: string;
  title: string;
  italicTitle?: string;
  subtitle?: string;
  breadcrumb: string;
}

export default function PageHero({
  label,
  title,
  italicTitle,
  subtitle,
  breadcrumb,
}: PageHeroProps) {
  return (
    <section className="relative bg-[#1a1410] pt-36 pb-20 text-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            background:
              "radial-gradient(circle at 50% 80%, #c9a96e 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.span
            variants={fadeUp}
            className="text-[#c9a96e] text-[11px] font-medium uppercase tracking-[0.2em] mb-4 block"
          >
            {label}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="font-display text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-4"
          >
            {title}
            {italicTitle && (
              <>
                <br />
                <em className="text-[#c9a96e]">{italicTitle}</em>
              </>
            )}
          </motion.h1>

          {subtitle && (
            <motion.p
              variants={fadeUp}
              className="text-white/50 text-lg max-w-lg mx-auto mb-6"
            >
              {subtitle}
            </motion.p>
          )}

          <motion.div
            variants={fadeUp}
            className="flex justify-center gap-2 text-xs text-white/30"
          >
            <Link href="/" className="text-[#c9a96e] hover:underline">
              Home
            </Link>
            <span>/</span>
            <span>{breadcrumb}</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
