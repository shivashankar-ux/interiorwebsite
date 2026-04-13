"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#1a1410] flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <p className="font-display text-6xl text-[#c9a96e] font-semibold leading-none mb-6">
          Oops
        </p>
        <h2 className="font-display text-3xl text-white mb-4">
          Something went wrong
        </h2>
        <p className="text-white/50 leading-relaxed mb-10">
          We hit an unexpected error. Please try again or contact us directly at{" "}
          <a
            href="tel:+919876543210"
            className="text-[#c9a96e] hover:underline"
          >
            +91 98765 43210
          </a>
          .
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={reset}
            className="bg-[#c9a96e] hover:bg-[#a07840] text-[#1a1410] hover:text-white text-xs font-medium px-7 py-3.5 rounded-sm uppercase tracking-widest transition-all duration-300"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="border border-white/30 hover:border-[#c9a96e] text-white/70 hover:text-[#c9a96e] text-xs font-medium px-7 py-3.5 rounded-sm uppercase tracking-widest transition-all duration-300"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
