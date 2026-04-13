import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#2d2520] dark:bg-[#1a1410] text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 pb-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="font-display text-3xl text-[#c9a96e] leading-none">स</span>
              <span className="font-display text-lg text-white">
                Sahitya <em className="text-[#c9a96e]">Interiors</em>
              </span>
            </Link>
            <p className="text-sm text-white/40 leading-relaxed mb-6">
              Transforming spaces across Hyderabad with thoughtful design and skilled craftsmanship since 2014.
            </p>
            <div className="flex gap-3">
              {["Inst", "Fb", "WA"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="bg-white/10 hover:bg-[#c9a96e] hover:text-[#1a1410] text-white/60 text-xs font-medium px-3 py-2 rounded-sm transition-colors"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-white text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Projects", href: "/projects" },
                { label: "Contact", href: "/contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/45 hover:text-[#c9a96e] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-white text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                "Residential Interiors",
                "Office Interiors",
                "Modular Kitchen",
                "False Ceiling",
                "Aluminium Works",
                "Wardrobe & Furniture",
              ].map((s) => (
                <li key={s}>
                  <Link href="/services" className="text-sm text-white/45 hover:text-[#c9a96e] transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-white text-lg mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm text-white/45">
              <p>📍 Banjara Hills, Hyderabad – 500034</p>
              <p>
                📞{" "}
                <a href="tel:+919876543210" className="hover:text-[#c9a96e] transition-colors">
                  +91 98765 43210
                </a>
              </p>
              <p>
                ✉{" "}
                <a href="mailto:hello@sahityainteriors.in" className="hover:text-[#c9a96e] transition-colors">
                  hello@sahityainteriors.in
                </a>
              </p>
              <p>🕐 Mon–Sat: 9AM – 7PM</p>
            </div>
          </div>
        </div>

        <div className="text-center space-y-1">
          <p className="text-xs text-white/25">
            © {year} Sahitya Interiors. All rights reserved. | Hyderabad, Telangana
          </p>
          <p className="text-xs text-white/20">
            Interior Designers in Hyderabad | Modular Kitchen | Office Interiors | Aluminium Works
          </p>
        </div>
      </div>
    </footer>
  );
}
