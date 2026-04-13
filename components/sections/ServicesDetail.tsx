"use client";

import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { slideInLeft, slideInRight } from "@/lib/motion";

const services = [
  {
    id: "residential",
    icon: "🏠",
    num: "01",
    title: "Residential Interiors",
    description:
      "Your home is your most personal space — and it deserves a design that reflects who you are. We create warm, functional, and beautiful homes that feel right from day one.",
    description2:
      "Whether you have a 2BHK in Kondapur or a luxury villa in Jubilee Hills, our team designs spaces that work for your lifestyle, budget, and taste.",
    features: [
      "Full home interior design & execution",
      "Living room, bedroom & dining design",
      "Vastu-friendly layouts available",
      "Premium & budget-friendly packages",
      "3D visualization before execution",
    ],
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=700&q=80",
    reverse: false,
  },
  {
    id: "office",
    icon: "🏢",
    num: "02",
    title: "Office Interiors",
    description:
      "A well-designed office drives productivity, reflects your brand, and makes a powerful first impression on clients and employees alike.",
    description2:
      "We've designed offices for startups, corporates, clinics, and retail showrooms across HITEC City, Madhapur, and Gachibowli.",
    features: [
      "Open plan & cabin office layouts",
      "Reception & lobby design",
      "Conference & meeting room setups",
      "Brand-aligned interior themes",
      "Electrical & lighting planning",
    ],
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80",
    reverse: true,
  },
  {
    id: "kitchen",
    icon: "🍳",
    num: "03",
    title: "Modular Kitchen",
    description:
      "The kitchen is the heart of every Indian home — and it has to work hard. Our modular kitchens are designed for how Hyderabadi families actually cook.",
    description2:
      "We use quality hardware from brands like Hettich and Hafele, with laminates, acrylic, and membrane finish options to suit every budget.",
    features: [
      "L-shape, U-shape & parallel layouts",
      "Acrylic, membrane & laminate finishes",
      "Soft-close drawers & hinges",
      "Chimney, hob & sink integration",
      "Storage-maximized design",
    ],
    image:
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=700&q=80",
    reverse: false,
  },
  {
    id: "ceiling",
    icon: "✨",
    num: "04",
    title: "False Ceiling",
    description:
      "A great false ceiling transforms the entire feel of a room — adding height, elegance, and the perfect lighting mood.",
    description2:
      "From simple recessed lighting setups to elaborate cove lighting designs, our ceiling work is clean, precise, and built to last.",
    features: [
      "Gypsum board & POP ceilings",
      "Cove lighting & LED strip work",
      "Office grid / T-bar ceilings",
      "Decorative coffered & tray designs",
      "Moisture-resistant options for wet areas",
    ],
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=700&q=80",
    reverse: true,
  },
  {
    id: "aluminium",
    icon: "🔩",
    num: "05",
    title: "Aluminium Works",
    description:
      "Aluminium is the material of choice for modern commercial and residential builds — lightweight, durable, weather-resistant, and low-maintenance.",
    description2:
      "From sleek office partitions to heavy-duty doors and windows, our aluminium work is precise, professional, and powder-coated for lasting finish.",
    features: [
      "Aluminium partitions & glazing",
      "Doors, windows & sliding systems",
      "Curtain wall / shopfront work",
      "Powder-coated & anodized finishes",
      "ACP (Aluminium Composite Panel) cladding",
    ],
    image:
      "https://images.unsplash.com/photo-1604014237800-1c9102c219da?w=700&q=80",
    reverse: false,
  },
  {
    id: "wardrobe",
    icon: "🚪",
    num: "06",
    title: "Wardrobe & Furniture",
    description:
      "Custom-built wardrobes and furniture that fit your exact space — because off-the-shelf solutions never quite work in Indian homes.",
    description2:
      "We build wardrobes, TV units, study tables, beds, and complete bedroom furniture sets using quality ply, laminates, and hardware.",
    features: [
      "Sliding, hinged & walk-in wardrobes",
      "TV units & entertainment walls",
      "Study, home-office & kids furniture",
      "Laminate, acrylic & wood veneer finishes",
      "Hettich / Hafele hardware",
    ],
    image:
      "https://images.unsplash.com/photo-1558997519-83ea9252eeb6?w=700&q=80",
    reverse: true,
  },
];

function ServiceItem({
  service,
}: {
  service: (typeof services)[0];
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div
      ref={ref}
      id={service.id}
      className="py-20 border-b border-[#c9a96e]/15 last:border-b-0"
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
          service.reverse ? "lg:flex lg:flex-row-reverse" : ""
        }`}
      >
        <motion.div
          variants={service.reverse ? slideInRight : slideInLeft}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="h-[380px] rounded-sm bg-cover bg-center"
          style={{ backgroundImage: `url('${service.image}')` }}
        />

        <motion.div
          variants={service.reverse ? slideInLeft : slideInRight}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <span className="text-4xl block mb-3">{service.icon}</span>
          <span className="text-[#c9a96e] text-[11px] font-medium uppercase tracking-[0.2em] mb-2 block">
            Service {service.num}
          </span>
          <h2 className="font-display text-3xl md:text-4xl text-[#1a1410] dark:text-[#e8d5b0] mb-4">
            {service.title}
          </h2>
          <p className="text-[#7a6e65] dark:text-[#b5956a] leading-relaxed mb-3">
            {service.description}
          </p>
          <p className="text-[#7a6e65] dark:text-[#b5956a] leading-relaxed mb-6">
            {service.description2}
          </p>
          <ul className="space-y-2 mb-8">
            {service.features.map((f) => (
              <li
                key={f}
                className="flex items-center gap-2 text-sm text-[#7a6e65] dark:text-[#b5956a]"
              >
                <span className="text-[#c9a96e] text-xs">→</span>
                {f}
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="inline-block bg-[#c9a96e] hover:bg-[#a07840] text-[#1a1410] hover:text-white text-xs font-medium px-7 py-3.5 rounded-sm uppercase tracking-widest transition-all duration-300"
          >
            Get a Quote
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default function ServicesDetail() {
  return (
    <section className="bg-[#faf7f2] dark:bg-[#2d2520]">
      <div className="max-w-7xl mx-auto px-6">
        {services.map((s) => (
          <ServiceItem key={s.id} service={s} />
        ))}
      </div>
    </section>
  );
}
