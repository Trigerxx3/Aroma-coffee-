'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { signatureCoffees } from '@/data/coffee';

export default function CoffeeBeans() {
  const [activeIdx, setActiveIdx] = useState(0);

  const active = signatureCoffees[activeIdx];

  return (
    <section id="coffee" className="bg-transparent relative overflow-hidden border-b border-white/10">

      {/* ── Full-bleed editorial layout: image LEFT, text RIGHT ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[90vh]">

        {/* Left: large photograph with subtle parallax atmosphere */}
        <div className="relative min-h-[55vw] lg:min-h-0 overflow-hidden">
          {signatureCoffees.map((coffee, i) => (
            <div
              key={coffee.id}
              className={`absolute inset-0 transition-opacity duration-700 ${i === activeIdx ? 'opacity-100' : 'opacity-0'}`}
            >
              <Image
                src={coffee.image}
                alt={coffee.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-[#1A1208]/40" />
            </div>
          ))}

          {/* Overlay bottom text */}
          <div className="absolute bottom-8 left-8 sm:left-12 z-10">
            <p className="text-[10px] uppercase tracking-[0.28em] text-white/50 mb-1">{active.origin}</p>
            <p className="text-[11px] text-white/40">{active.elevation} · {active.process}</p>
          </div>
        </div>

        {/* Right: dark editorial content panel */}
        <div className="flex flex-col justify-between p-10 sm:p-14 lg:p-16 xl:p-20">

          {/* Header */}
          <div>
            <div className="flex items-center gap-3 mb-12">
              <div className="w-6 h-px bg-[#B07040]" />
              <span className="text-[10px] uppercase tracking-[0.28em] text-[#B07040] font-normal">Origin &amp; Craft</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-5xl xl:text-6xl text-white font-light tracking-tight leading-[1.1] mb-6">
              Good Coffee Starts<br />
              With <span className="italic text-[#C98A50]">Good Beans.</span>
            </h2>

            <p className="text-sm text-white/50 font-light leading-relaxed max-w-sm">
              We partner directly with high-elevation micro-lot farmers. Roasted in small 5 kg batches every Tuesday and Thursday, extracted precisely to express each origin's distinct terroir.
            </p>
          </div>

          {/* ── Coffee selector tabs ── */}
          <div className="mt-12 space-y-1">
            {signatureCoffees.map((coffee, i) => (
              <div
                key={coffee.id}
                role="button"
                tabIndex={0}
                onClick={() => setActiveIdx(i)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setActiveIdx(i);
                  }
                }}
                className={`w-full text-left py-5 border-b transition-all duration-300 group cursor-pointer focus:outline-none ${
                  i === activeIdx
                    ? 'border-[#B07040]/50'
                    : 'border-white/10 hover:border-white/25'
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${i === activeIdx ? 'bg-[#B07040]' : 'bg-white/20'}`} />
                      <span className={`text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-300 ${i === activeIdx ? 'text-white' : 'text-white/50 group-hover:text-white/70'}`}>
                        {coffee.name}
                      </span>
                      <span className={`text-[10px] transition-colors ${i === activeIdx ? 'text-[#C98A50]' : 'text-white/30'}`}>
                        {coffee.tagline}
                      </span>
                    </div>

                    {i === activeIdx && (
                      <div className="ml-4.5 mt-2 space-y-2">
                        <p className="text-sm text-white/60 font-light leading-relaxed max-w-md">
                          {coffee.description}
                        </p>
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {coffee.notes.map((note) => (
                            <span key={note} className="text-[10px] uppercase tracking-wider text-[#C98A50] border border-[#B07040]/30 px-2.5 py-1">
                              {note}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col items-end shrink-0">
                    <span className={`font-serif text-lg font-light transition-colors ${i === activeIdx ? 'text-white' : 'text-white/35'}`}>
                      ₹{coffee.price}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider text-white/35 font-light">
                      250g
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10">
            <a
              href="#menu"
              className="text-[11px] uppercase tracking-[0.22em] text-white/40 hover:text-[#C98A50] transition-colors duration-300 flex items-center gap-3"
            >
              <div className="w-6 h-px bg-current" />
              Explore Complete Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
