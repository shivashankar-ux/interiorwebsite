"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { staggerContainer, staggerItem, fadeUp } from "@/lib/motion";

const projects = [
  { tag: "Residential Interiors", title: "Modern 3BHK Home — Jubilee Hills", description: "Complete home interior with custom furniture, false ceiling & modular kitchen for a family of four.", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80" },
  { tag: "Office Interiors", title: "IT Startup Office — Madhapur", description: "Open-plan office with glass partitions, reception, and brand-aligned interiors for a 40-person team.", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80" },
  { tag: "Modular Kitchen", title: "L-Shape Modular Kitchen — Kondapur", description: "High-gloss acrylic finish kitchen with integrated chimney, soft-close cabinets, and quartz countertop.", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80" },
  { tag: "False Ceiling", title: "Cove Lighting Ceiling — Gachibowli", description: "Layered gypsum false ceiling with warm cove lighting and recessed spots for a 1800 sqft living area.", image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80" },
  { tag: "Aluminium Works", title: "Commercial Glazing — Banjara Hills Showroom", description: "Full aluminium curtain wall, sliding doors, and ACP cladding for a 3-floor commercial showroom.", image: "https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=600&q=80" },
  { tag: "Wardrobe & Furniture", title: "Walk-in Wardrobe — Hitech City Villa", description: "Custom walk-in wardrobe with island dresser, LED internal lighting, and veneer finish.", image: "https://images.unsplash.com/photo-1558997519-83ea9252eeb6?w=600&q=80" },
  { tag: "Residential Interiors", title: "Minimalist Villa — Shamshabad", description: "Full villa interior with Japandi-inspired aesthetics, natural materials, and neutral warm palette.", image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80" },
  { tag: "Office Interiors", title: "CA Firm Office — Begumpet", description: "Professional office with cabin rooms, waiting area, and custom woodwork for a 10-member firm.", image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80" },
  { tag: "Residential Interiors", title: "2BHK Budget Home — Kukatpally", description: "Complete interior for first-home buyers — stylish, functional, and delivered under ₹7L budget.", image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80" },
];

export default function ProjectsGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="py-24 bg-[#fff9f2] dark:bg-[#1a1410]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((p) => (
            <motion.div
              key={p.title}
              variants={staggerItem}
              className="group border border-[#c9a96e]/20 rounded-sm overflow-hidden bg-[#faf7f2] dark:bg-[#2d2520] hover:-translate-y-1.5 hover:shadow-[0_15px_40px_rgba(201,169,110,0.12)] transition-all duration-300"
            >
              <div
                className="h-56 bg-cover bg-center relative overflow-hidden"
                style={{ backgroundImage: `url('${p.image}')` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#c9a96e] mb-2 block">
                  {p.tag}
                </span>
                <h3 className="font-display text-lg text-[#1a1410] dark:text-[#e8d5b0] mb-2">
                  {p.title}
                </h3>
                <p className="text-[#7a6e65] dark:text-[#b5956a] text-sm leading-relaxed">
                  {p.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
