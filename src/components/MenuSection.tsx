'use client';

import React, { useState } from 'react';
import { menuCategories, menuItems } from '@/data/menu';

interface MenuSectionProps {
  onOpenReservation?: () => void;
}

export default function MenuSection({ onOpenReservation }: MenuSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('coffee');
  const [showAllItems, setShowAllItems] = useState(false);

  const filteredItems = menuItems.filter(
    (item) => activeCategory === 'all' || item.category === activeCategory
  );

  const displayedItems = showAllItems ? filteredItems : filteredItems.slice(0, 8);

  return (
    <section id="menu" className="bg-transparent py-24 sm:py-32 border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">

        {/* ── Section header ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 sm:mb-20">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-[#B07040]" />
              <span className="text-[10px] uppercase tracking-[0.28em] text-[#B07040] font-normal">
                Artisanal Roast &amp; Kitchen
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F9F6F1] font-light tracking-tight leading-[1.1]">
              Our Seasonal <span className="italic text-[#B07040]">Menu.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 lg:flex lg:items-end">
            <p className="text-sm sm:text-base text-white/60 font-light leading-relaxed">
              Thoughtfully prepared specialty coffees, slow-steeped cold brews, rare estate teas, and French butter pastries baked daily.
            </p>
          </div>
        </div>

        {/* ── Category tabs — inline text-based ── */}
        <div className="flex flex-wrap gap-x-8 gap-y-2 mb-16 border-b border-white/10 pb-6">
          {menuCategories.map((cat) => {
            const count = menuItems.filter((i) => i.category === cat.id).length;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => { setActiveCategory(cat.id); setShowAllItems(false); }}
                className={`group flex items-baseline gap-2 text-[11px] uppercase tracking-[0.18em] transition-all duration-300 pb-1 border-b-2 -mb-[25px] ${
                  isActive
                    ? 'border-[#B07040] text-white font-medium'
                    : 'border-transparent text-white/50 hover:text-white/80 font-normal'
                }`}
              >
                {cat.label}
                <span className={`text-[9px] transition-colors ${isActive ? 'text-[#C98A50]' : 'text-white/30'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── Menu items — typography-first, no heavy cards ── */}
        <div className="divide-y divide-white/10">
          {displayedItems.map((item) => (
            <div
              key={item.id}
              className="group py-6 flex items-start justify-between gap-6 hover:bg-white/4 -mx-4 px-4 transition-colors duration-200"
            >
              {/* Name + description */}
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-3 mb-1.5">
                  <h3 className="font-serif text-lg sm:text-xl text-[#F9F6F1] font-normal tracking-wide">
                    {item.name}
                  </h3>
                  {item.popular && (
                    <span className="text-[9px] uppercase tracking-[0.2em] text-[#C98A50] font-normal border border-[#B07040]/40 px-2 py-0.5">
                      Popular
                    </span>
                  )}
                </div>
                <p className="text-sm text-white/60 font-light leading-relaxed">
                  {item.description}
                </p>
                {/* Dietary tags */}
                {item.dietary && item.dietary.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {item.dietary.map((d) => (
                      <span
                        key={d}
                        className={`text-[9px] uppercase tracking-[0.18em] font-normal ${
                          d === 'Signature'
                            ? 'text-[#C98A50]'
                            : 'text-white/40'
                        }`}
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Price */}
              <div className="shrink-0 text-right">
                <span className="font-serif text-lg text-white font-light whitespace-nowrap">
                  ₹{item.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Actions ── */}
        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center gap-6">
          {filteredItems.length > 8 && (
            <button
              onClick={() => setShowAllItems(!showAllItems)}
              className="text-[11px] uppercase tracking-[0.2em] font-medium text-white border border-white/25 px-8 py-3 hover:bg-white hover:text-[#100e0b] transition-all duration-300"
            >
              {showAllItems ? 'Show Less' : 'View Full Menu'}
            </button>
          )}
          {onOpenReservation && (
            <button
              onClick={onOpenReservation}
              className="text-[11px] uppercase tracking-[0.2em] font-medium bg-[#B07040] text-white px-8 py-3 hover:bg-[#C98A50] transition-all duration-300 flex items-center gap-3"
            >
              Reserve a Table
              <span className="text-base leading-none">→</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
