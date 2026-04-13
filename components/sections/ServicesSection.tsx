"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, staggerItem, fadeUp } from "@/lib/motion";

const services = [
  {
    icon: "🏠",
    title: "Residential Interiors",
    description:
      "From 2BHK flats to luxury villas — we design homes that feel warm, personal, and completely you.",
    href: "/services#residential",
  },
  {
    icon: "🏢",
    title: "Office Interiors",
    description:
      "Professional workspaces designed to boost productivity, impress clients, and reflect your brand.",
    href: "/services#office",
  },
  {
    icon: "🍳",
    title: "Modular Kitchen",
    description:
      "Smart layouts, premium finishes, and perfect storage — kitchens built for how Hyderabadi families actually cook.",
    href: "/services#kitchen",
  },
  {
    icon: "✨",
    title: "False Ceiling",
    description:
      "Gypsum, POP, and grid ceilings with integrated lighting that transform any room's mood instantly.",
    href: "/services#ceiling",
  },
  {
    icon: "🔩",
    title: "Aluminium Works",
    description:
      "Durable aluminium partitions, doors, windows, and glazing — sleek, weather-resistant, built to last.",
    href: "/services#aluminium",
  },
  {
    icon: "🚪",
    title: "Wardrobe & Furniture",
    description:
      "Custom wardrobes, TV units, and furniture crafted to fit your exact space and storage needs.",
    href: "/services#wardrobe",
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-24 bg-[#fff9f2] dark:bg-[#1a1410]"
      id="services"
      aria-label="Services"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <span className="text-[#c9a96e] text-[11px] font-medium uppercase tracking-[0.2em] mb-3 block">
            What We Do
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-[#1a1410] dark:text-[#e8d5b0] mb-4">
            Our Services
          </h2>
          <p className="text-[#7a6e65] dark:text-[#b5956a] max-w-xl mx-auto">
            Complete interior solutions under one roof — designed for Hyderabad
            homes and businesses.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((s) => (
            <motion.div key={s.title} variants={staggerItem}>
              <Link
                href={s.href}
                className="group block bg-[#faf7f2] dark:bg-[#2d2520] border border-[#c9a96e]/20 rounded-sm p-8 hover:-translate-y-1.5 hover:border-[#c9a96e] hover:shadow-[0_20px_50px_rgba(201,169,110,0.12)] transition-all duration-300"
              >
                <span className="text-3xl block mb-4">{s.icon}</span>
                <h3 className="font-display text-xl text-[#1a1410] dark:text-[#e8d5b0] mb-3">
                  {s.title}
                </h3>
                <p className="text-[#7a6e65] dark:text-[#b5956a] text-sm leading-relaxed mb-6">
                  {s.description}
                </p>
                <span className="text-[11px] font-medium uppercase tracking-widest text-[#a07840] dark:text-[#c9a96e] group-hover:gap-3 transition-all">
                  Explore →
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
