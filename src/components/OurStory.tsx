import React from 'react';
import Image from 'next/image';

export default function OurStory() {
  return (
    <section id="story" className="bg-transparent border-b border-white/10">

      {/* ── Full-bleed split: image | text ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">

        {/* Left: Large atmospheric photograph — no rounded corners, edge-to-edge */}
        <div className="relative min-h-[60vw] lg:min-h-0 overflow-hidden group">
          <Image
            src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=90&w=1600&auto=format&fit=crop"
            alt="Aroma cafe interior, Scandinavian oak table and gentle light"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-[#100e0b]/30" />

          {/* Small roastery accent image — offset bottom right */}
          <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 w-28 h-28 sm:w-36 sm:h-36 overflow-hidden border-2 border-white/20">
            <Image
              src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=400&auto=format&fit=crop"
              alt="Coffee beans roasting"
              fill
              sizes="(max-width: 640px) 112px, 144px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Right: editorial text panel */}
        <div className="flex flex-col justify-center p-10 sm:p-14 lg:p-16 xl:p-20 space-y-10">

          {/* Section label */}
          <div className="flex items-center gap-3">
            <div className="w-6 h-px bg-[#B07040]" />
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#B07040] font-normal">Our Story</span>
          </div>

          {/* Large serif heading */}
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-5xl xl:text-6xl text-[#F9F6F1] font-light tracking-tight leading-[1.1]">
            Made With<br />
            <span className="italic text-[#B07040]">Intention.</span>
          </h2>

          {/* Story body */}
          <div className="space-y-5 text-base text-white/70 font-light leading-relaxed max-w-md">
            <p>
              AROMA was founded with a quiet, singular vision: to build a sanctuary where the world slows down. We wanted to strip away the noisy speed of commercial cafés and return to the reverent ritual of specialty coffee.
            </p>
            <p>
              From curating micro-lots grown in volcanic Ethiopian soils to testing roast profiles down to half-degree increments, everything we do is deliberate.
            </p>
            <p className="font-serif italic text-lg text-white leading-snug">
              &ldquo;A cup of coffee should never be an afterthought. It is a moment of stillness in an otherwise hurried life.&rdquo;
            </p>
          </div>

          {/* Statistic row — large type, no boxes */}
          <div className="pt-6 border-t border-white/10">
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="font-serif text-3xl sm:text-4xl font-light text-[#F9F6F1]">100%</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#C98A50] mt-1">Quality Beans</div>
                <div className="text-[11px] text-white/45 mt-0.5 hidden sm:block">Single-origin direct trade</div>
              </div>
              <div>
                <div className="font-serif text-3xl sm:text-4xl font-light text-[#F9F6F1]">Fresh</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#C98A50] mt-1">Freshly Brewed</div>
                <div className="text-[11px] text-white/45 mt-0.5 hidden sm:block">Roasted every 48 hours</div>
              </div>
              <div>
                <div className="font-serif text-3xl sm:text-4xl font-light text-[#F9F6F1]">15k+</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-[#C98A50] mt-1">Locally Loved</div>
                <div className="text-[11px] text-white/45 mt-0.5 hidden sm:block">Cups poured with care</div>
              </div>
            </div>
          </div>

          {/* Roastery accent text */}
          <div className="border-l-2 border-[#B07040]/40 pl-4 space-y-0.5">
            <p className="text-[10px] uppercase tracking-[0.22em] text-[#B07040]">Roastery Lab</p>
            <p className="text-sm text-white/60 font-light">Small-batch micro roasting in-house weekly</p>
          </div>
        </div>
      </div>
    </section>
  );
}
