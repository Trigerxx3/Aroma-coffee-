'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface CTASectionProps {
  onVisitUs: () => void;
  onExploreMenu: () => void;
}

export default function CTASection({ onVisitUs, onExploreMenu }: CTASectionProps) {
  return (
    <section className="relative w-full min-h-[75vh] overflow-hidden bg-transparent border-b border-white/10 flex flex-col justify-end">

      {/* Full-bleed cinematic background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=90&w=2400&auto=format&fit=crop"
          alt="Specialty coffee cup — Aroma"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-30"
        />
        {/* Subtle vignette letting Blood Aurora glow through */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#100e0b]/90 via-[#100e0b]/40 to-transparent" />
      </div>

      {/* Top thin rule */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/8 z-10" />

      {/* Content — left-aligned, large, uncluttered */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 sm:px-10 pb-20 sm:pb-28 lg:pb-36">

        {/* Small label */}
        <div className="mb-8 flex items-center gap-3">
          <div className="w-6 h-px bg-[#B07040]" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/50 font-normal">
            Find Your Moment
          </span>
        </div>

        {/* Large heading */}
        <h2 className="font-serif font-light text-white tracking-tight leading-[1.04]">
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
            Stay
          </span>
          <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl italic text-[#D9B98A]">
            Awhile.
          </span>
        </h2>

        {/* Subtext + CTAs row */}
        <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row sm:items-end justify-between gap-8 max-w-4xl">
          <p className="text-sm sm:text-base text-white/55 font-light leading-relaxed max-w-sm">
            Good coffee, quiet moments, and conversations worth having.
          </p>

          <div className="flex items-center gap-6">
            <button
              onClick={onVisitUs}
              className="flex items-center gap-3 text-[11px] uppercase tracking-[0.22em] font-medium text-white border border-white/30 px-7 py-3.5 hover:bg-white hover:text-[#1A1208] transition-all duration-500"
            >
              Visit Our Café
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onExploreMenu}
              className="text-[11px] uppercase tracking-[0.22em] font-normal text-white/55 hover:text-white transition-colors duration-300"
            >
              Explore Menu →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
