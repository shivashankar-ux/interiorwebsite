import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#1a1410] flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <p className="font-display text-8xl text-[#c9a96e] font-semibold leading-none mb-6">
          404
        </p>
        <h1 className="font-display text-3xl md:text-4xl text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-white/50 leading-relaxed mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s
          get you back on track.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#c9a96e] hover:bg-[#a07840] text-[#1a1410] hover:text-white text-xs font-medium px-8 py-4 rounded-sm uppercase tracking-widest transition-all duration-300"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}
