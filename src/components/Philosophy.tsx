import React from 'react';
import Image from 'next/image';
import { Compass, Feather } from 'lucide-react';

export default function Philosophy() {
  return (
    <section id="philosophy" className="bg-transparent relative border-b border-white/10">

      {/* ── Top full-width narrow image band ── */}
      <div className="relative w-full h-[55vh] sm:h-[65vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=90&w=2400&auto=format&fit=crop"
          alt="Aroma slow pour-over coffee ritual"
          fill
          sizes="100vw"
          className="object-cover object-center"
          style={{ transform: 'scale(1.04)' }}
        />
        <div className="absolute inset-0 bg-[#100e0b]/45" />

        {/* Floating quote over image */}
        <div className="absolute inset-0 flex items-end p-8 sm:p-14">
          <blockquote className="max-w-xl">
            <p className="font-serif text-xl sm:text-2xl lg:text-3xl text-white font-light italic leading-snug">
              &ldquo;A deliberate pause<br />in an accelerating world.&rdquo;
            </p>
            <div className="mt-3 flex items-center gap-3">
              <div className="w-5 h-px bg-[#B07040]" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-white/60">The Slow Ritual</span>
            </div>
          </blockquote>
        </div>
      </div>

      {/* ── Content below image ── */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">

          {/* Left: label + heading */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-6 h-px bg-[#B07040]" />
              <span className="text-[10px] uppercase tracking-[0.28em] text-[#B07040] font-normal">Our Philosophy</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F9F6F1] font-light tracking-tight leading-[1.1]">
              More Than<br />
              Just <span className="italic text-[#B07040]">Coffee.</span>
            </h2>

            {/* Extraction detail card — refined */}
            <div className="mt-12 border-l-2 border-[#B07040]/50 pl-5 space-y-1">
              <p className="text-[10px] uppercase tracking-[0.22em] text-[#B07040] font-normal">Extraction Detail</p>
              <p className="text-sm text-white/80 font-light">Temperature: 93.2°C</p>
              <p className="text-sm text-white/80 font-light">Duration: 3 min 45 s</p>
              <p className="text-sm text-white/80 font-light">Process: Natural Anaerobic</p>
            </div>
          </div>

          {/* Right: body text + pillars */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            <p className="text-lg sm:text-xl text-white/90 font-light leading-relaxed">
              We believe great coffee is about more than what's in the cup. It's about the aroma, the conversation, the craft, and the moments that happen around it.
            </p>

            <div className="h-px w-full bg-white/10" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-2">
                <h3 className="text-[11px] uppercase tracking-[0.2em] text-[#F9F6F1] font-medium">Mindful Sourcing</h3>
                <p className="text-sm text-white/60 font-light leading-relaxed">
                  Direct trade micro-lots harvested at peak sweetness from single-estate regenerative farms.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-[11px] uppercase tracking-[0.2em] text-[#F9F6F1] font-medium">Unhurried Brewing</h3>
                <p className="text-sm text-white/60 font-light leading-relaxed">
                  Every cup calibrated to the gram, second, and water mineral composition.
                </p>
              </div>
            </div>

            {/* Founders signature */}
            <div className="pt-4 flex items-center gap-4">
              <div className="w-10 h-10 bg-white/10 border border-white/15 flex items-center justify-center font-serif text-lg font-light text-[#F9F6F1]">
                A
              </div>
              <div>
                <p className="font-serif text-sm text-[#F9F6F1] font-normal">Aura &amp; Soren Lindqvist</p>
                <p className="text-[10px] uppercase tracking-[0.22em] text-[#B07040]">Founders · Head Roasters</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
