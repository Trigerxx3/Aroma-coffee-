'use client';

import React from 'react';
import Image from 'next/image';
import { MapPin } from 'lucide-react';

interface HeroProps {
  onExploreMenu: () => void;
  onVisitUs: () => void;
}

export default function Hero({ onExploreMenu, onVisitUs }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-end overflow-hidden bg-transparent border-b border-white/10"
    >
      {/* Full-bleed cinematic photograph */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=90&w=2400&auto=format&fit=crop"
          alt="Aroma Specialty Coffee Barista hand-crafting coffee"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-50"
          style={{ transform: 'scale(1.04)' }}
        />
        {/* Layered dark overlay — transparent at top to let Blood Aurora shine through */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#100e0b]/90 via-[#100e0b]/35 to-transparent" />
      </div>

      {/* Slim horizontal rule at very top — architectural detail */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/10 z-10" />

      {/* ── Hero content — left-aligned, editorial, large ── */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 sm:px-10 pb-20 sm:pb-28 lg:pb-36">

        {/* Origin label */}
        <div className="mb-8 flex items-center gap-3">
          <div className="w-6 h-px bg-[#B07040]" />
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-white/60 font-normal">
            Micro-Lot Roast Batch #42 · Single Origin
          </span>
        </div>

        {/* Main heading — enormous editorial serif */}
        <h1 className="font-serif font-light text-white leading-[1.02] tracking-tight">
          <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] xl:text-[10.5rem]">
            Coffee,
          </span>
          <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] xl:text-[10.5rem] italic text-[#D9B98A] mt-1 sm:mt-2">
            Crafted With
          </span>
          <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] xl:text-[10.5rem] mt-1 sm:mt-2">
            Intention.
          </span>
        </h1>

        {/* Divider + subtext row */}
        <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row sm:items-end justify-between gap-8">
          <div className="max-w-sm space-y-3">
            <p className="text-sm sm:text-base text-white/65 font-light leading-relaxed tracking-wide">
              Specialty coffee, freshly brewed and thoughtfully made.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-white/45">
              <MapPin className="w-3 h-3 text-[#B07040] shrink-0" />
              <span>14 Bloom Street · Open Today 8:00 AM – 9:00 PM</span>
            </div>
          </div>

          {/* CTA buttons — restrained, typographic */}
          <div className="flex items-center gap-5">
            <button
              onClick={onExploreMenu}
              className="text-[11px] uppercase tracking-[0.22em] font-medium text-white border border-white/30 px-8 py-3.5 hover:bg-white hover:text-[#1A1208] transition-all duration-500"
            >
              Explore Menu
            </button>
            <button
              onClick={onVisitUs}
              className="text-[11px] uppercase tracking-[0.22em] font-medium text-white/70 hover:text-white transition-colors duration-300"
            >
              Visit Us →
            </button>
          </div>
        </div>
      </div>

      {/* Scroll cue — vertical text */}
      <div className="absolute right-8 sm:right-12 bottom-12 z-10 flex flex-col items-center gap-4">
        <a
          href="#philosophy"
          aria-label="Scroll to Philosophy section"
          className="group flex flex-col items-center gap-3 text-white/40 hover:text-white/70 transition-colors duration-300"
        >
          <span
            className="text-[9px] tracking-[0.35em] uppercase font-normal"
            style={{ writingMode: 'vertical-rl' }}
          >
            Scroll to explore
          </span>
          <div className="w-px h-12 bg-white/20 group-hover:bg-white/50 transition-colors duration-300 relative overflow-hidden">
            <div className="absolute top-0 w-full bg-[#B07040] animate-[slideDown_2s_ease-in-out_infinite]" style={{ height: '40%' }} />
          </div>
        </a>
      </div>

      {/* Bottom horizontal rule */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/8 z-10" />
    </section>
  );
}
