"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, staggerItem, fadeUp } from "@/lib/motion";

const testimonials = [
  {
    initials: "SR",
    name: "Sravanthi Reddy",
    location: "Jubilee Hills, Hyderabad",
    review:
      "Sahitya Interiors completely transformed our 3BHK. The modular kitchen is a dream — so functional and beautiful. Highly recommend them to anyone in Hyderabad!",
    rating: 5,
  },
  {
    initials: "RK",
    name: "Ravi Kumar",
    location: "Madhapur, Hyderabad",
    review:
      "Got our entire office done by them — from aluminium partitions to false ceilings. Professional team, clean work, delivered on time. Our clients are always impressed!",
    rating: 5,
  },
  {
    initials: "LP",
    name: "Lakshmi Prasad",
    location: "Banjara Hills, Hyderabad",
    review:
      "The wardrobe designs for our master bedroom are simply stunning. Great attention to detail and the team was very polite and clean throughout the work.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-24 bg-[#1a1410] dark:bg-[#1a1410]"
      aria-label="Testimonials"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <span className="text-[#c9a96e] text-[11px] font-medium uppercase tracking-[0.2em] mb-3 block">
            Client Love
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-white">
            What Our Clients Say
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={staggerItem}
              className="bg-white/5 border border-white/10 rounded-sm p-8"
            >
              <div className="text-[#c9a96e] tracking-widest mb-4 text-sm">
                {"★".repeat(t.rating)}
              </div>
              <p className="text-white/65 text-sm leading-relaxed mb-6">
                &ldquo;{t.review}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 min-w-[40px] bg-[#a07840] rounded-full flex items-center justify-center text-white text-xs font-medium">
                  {t.initials}
                </div>
                <div>
                  <strong className="block text-white font-display text-base">
                    {t.name}
                  </strong>
                  <span className="text-white/40 text-xs">{t.location}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
