export default function MarqueeBand() {
  const items =
    "Residential Interiors \u00a0·\u00a0 Office Spaces \u00a0·\u00a0 Modular Kitchens \u00a0·\u00a0 Aluminium Works \u00a0·\u00a0 False Ceilings \u00a0·\u00a0 Wardrobes \u00a0·\u00a0";

  return (
    <div className="bg-[#c9a96e] py-3.5 overflow-hidden">
      <div className="marquee-track">
        {[items, items].map((text, i) => (
          <span
            key={i}
            className="text-[#1a1410] text-[11px] font-medium uppercase tracking-[0.15em] pr-8 shrink-0"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
