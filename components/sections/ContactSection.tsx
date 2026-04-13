"use client";

import { useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { slideInLeft, slideInRight } from "@/lib/motion";
import type { ContactFormData } from "@/types";

const details = [
  { icon: "📍", title: "Visit Us", value: "Banjara Hills, Hyderabad – 500034, Telangana" },
  { icon: "📞", title: "Call Us", value: "+91 98765 43210", href: "tel:+919876543210" },
  { icon: "✉", title: "Email Us", value: "hello@sahityainteriors.in", href: "mailto:hello@sahityainteriors.in" },
  { icon: "🕐", title: "Working Hours", value: "Monday – Saturday: 9:00 AM to 7:00 PM" },
  { icon: "💬", title: "WhatsApp", value: "Chat with us on WhatsApp", href: "https://wa.me/919876543210" },
];

const serviceOptions = [
  "Residential Interiors",
  "Office Interiors",
  "Modular Kitchen",
  "False Ceiling",
  "Aluminium Works",
  "Wardrobe & Furniture",
  "Full Turnkey Project",
  "Other / Not Sure Yet",
];

const initialForm: ContactFormData = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  service: "",
  projectLocation: "",
  message: "",
};

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
      const endpoint = formspreeId
        ? `https://formspree.io/f/${formspreeId}`
        : "https://formspree.io/f/demo";

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("success");
        setForm(initialForm);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section ref={ref} className="py-24 bg-[#faf7f2] dark:bg-[#2d2520]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <span className="text-[#c9a96e] text-[11px] font-medium uppercase tracking-[0.2em] mb-3 block">
              Reach Us
            </span>
            <h2 className="font-display text-4xl text-[#1a1410] dark:text-[#e8d5b0] leading-[1.15] mb-4">
              We&apos;re Happy{" "}
              <em className="text-[#a07840] dark:text-[#c9a96e]">to Help</em>
            </h2>
            <p className="text-[#7a6e65] dark:text-[#b5956a] leading-relaxed mb-10">
              Whether you&apos;re planning a full home interior or just need a modular
              kitchen quote — reach out and we&apos;ll guide you. Our consultations are
              always free.
            </p>

            <div className="space-y-6">
              {details.map((d) => (
                <div key={d.title} className="flex gap-4 items-start">
                  <div className="w-10 h-10 min-w-[40px] bg-[#c9a96e] rounded-full flex items-center justify-center text-base">
                    {d.icon}
                  </div>
                  <div>
                    <strong className="block font-display text-base text-[#1a1410] dark:text-[#e8d5b0] mb-0.5">
                      {d.title}
                    </strong>
                    {d.href ? (
                      <a
                        href={d.href}
                        className="text-sm text-[#7a6e65] dark:text-[#b5956a] hover:text-[#c9a96e] transition-colors"
                      >
                        {d.value}
                      </a>
                    ) : (
                      <span className="text-sm text-[#7a6e65] dark:text-[#b5956a]">
                        {d.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="bg-white dark:bg-[#1a1410] border border-[#c9a96e]/20 rounded-sm p-8 md:p-10"
          >
            <h3 className="font-display text-2xl text-[#1a1410] dark:text-[#e8d5b0] mb-2">
              Get a Free Estimate
            </h3>
            <p className="text-[#7a6e65] dark:text-[#b5956a] text-sm mb-8">
              Fill this form and we&apos;ll call you back within 24 hours.
            </p>

            {status === "success" ? (
              <div className="text-center py-12">
                <div className="text-4xl mb-4">✅</div>
                <h4 className="font-display text-2xl text-[#1a1410] dark:text-[#e8d5b0] mb-2">
                  Message Sent!
                </h4>
                <p className="text-[#7a6e65] dark:text-[#b5956a] text-sm">
                  Thank you! We&apos;ll call you back within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "firstName", label: "First Name", placeholder: "Ravi" },
                    { name: "lastName", label: "Last Name", placeholder: "Kumar" },
                  ].map((f) => (
                    <div key={f.name}>
                      <label className="block text-[11px] font-medium uppercase tracking-widest text-[#3d3530] dark:text-[#b5956a] mb-1.5">
                        {f.label}
                      </label>
                      <input
                        type="text"
                        name={f.name}
                        value={form[f.name as keyof ContactFormData]}
                        onChange={handleChange}
                        placeholder={f.placeholder}
                        required
                        className="w-full px-4 py-3 border border-[#c9a96e]/30 rounded-sm bg-[#faf7f2] dark:bg-[#2d2520] text-[#3d3530] dark:text-[#e8d5b0] text-sm focus:outline-none focus:border-[#c9a96e] transition-colors"
                      />
                    </div>
                  ))}
                </div>

                {[
                  { name: "phone", label: "Phone Number", placeholder: "+91 98765 43210", type: "tel" },
                  { name: "email", label: "Email Address", placeholder: "ravi@example.com", type: "email" },
                  { name: "projectLocation", label: "Project Location", placeholder: "e.g. Kondapur, KPHB, Banjara Hills...", type: "text" },
                ].map((f) => (
                  <div key={f.name}>
                    <label className="block text-[11px] font-medium uppercase tracking-widest text-[#3d3530] dark:text-[#b5956a] mb-1.5">
                      {f.label}
                    </label>
                    <input
                      type={f.type}
                      name={f.name}
                      value={form[f.name as keyof ContactFormData]}
                      onChange={handleChange}
                      placeholder={f.placeholder}
                      required={f.name === "phone"}
                      className="w-full px-4 py-3 border border-[#c9a96e]/30 rounded-sm bg-[#faf7f2] dark:bg-[#2d2520] text-[#3d3530] dark:text-[#e8d5b0] text-sm focus:outline-none focus:border-[#c9a96e] transition-colors"
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-[11px] font-medium uppercase tracking-widest text-[#3d3530] dark:text-[#b5956a] mb-1.5">
                    Service You&apos;re Interested In
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#c9a96e]/30 rounded-sm bg-[#faf7f2] dark:bg-[#2d2520] text-[#3d3530] dark:text-[#e8d5b0] text-sm focus:outline-none focus:border-[#c9a96e] transition-colors"
                  >
                    <option value="">Select a service...</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-medium uppercase tracking-widest text-[#3d3530] dark:text-[#b5956a] mb-1.5">
                    Tell Us About Your Project
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="e.g. 2BHK flat, looking to do full interiors with modular kitchen and wardrobes..."
                    rows={4}
                    className="w-full px-4 py-3 border border-[#c9a96e]/30 rounded-sm bg-[#faf7f2] dark:bg-[#2d2520] text-[#3d3530] dark:text-[#e8d5b0] text-sm focus:outline-none focus:border-[#c9a96e] transition-colors resize-y"
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-500 text-sm">
                    Something went wrong. Please try again or call us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full bg-[#c9a96e] hover:bg-[#a07840] disabled:opacity-60 text-[#1a1410] hover:text-white font-medium text-xs px-6 py-4 rounded-sm uppercase tracking-widest transition-all duration-300"
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>

                <p className="text-center text-[11px] text-[#7a6e65] dark:text-[#b5956a]">
                  📞 Prefer a call? Ring us at +91 98765 43210
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
