'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { galleryItems, GalleryItem } from '@/data/gallery';
import { X } from 'lucide-react';

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <section id="gallery" className="bg-transparent py-24 sm:py-32 border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">

        {/* Section header */}
        <div className="mb-16 sm:mb-20 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-[#B07040]" />
              <span className="text-[10px] uppercase tracking-[0.28em] text-[#B07040] font-normal">The Sanctuary</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F9F6F1] font-light tracking-tight leading-[1.1]">
              Ambience &amp; <span className="italic text-[#B07040]">Moments.</span>
            </h2>
          </div>
          <p className="text-sm text-white/60 font-light max-w-xs leading-relaxed">
            Glimpses into our quiet corner of natural blonde oak, gentle steam, hand-thrown ceramics, and warm company.
          </p>
        </div>

        {/* Editorial asymmetric masonry — CSS grid with mixed spans */}
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4 auto-rows-[220px] sm:auto-rows-[260px] lg:auto-rows-[300px]">

          {/* Item 0 — tall spanning 2 rows on the left */}
          {galleryItems[0] && (
            <div
              onClick={() => setSelectedItem(galleryItems[0])}
              className="col-span-1 lg:col-span-5 row-span-2 relative overflow-hidden cursor-pointer group"
            >
              <Image src={galleryItems[0].imageUrl} alt={galleryItems[0].title} fill sizes="40vw" className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
              <div className="absolute inset-0 bg-[#1A1208]/0 group-hover:bg-[#1A1208]/45 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-[9px] uppercase tracking-[0.22em] text-[#C98A50]">{galleryItems[0].category}</p>
                <h3 className="font-serif text-lg text-white font-light mt-1">{galleryItems[0].title}</h3>
              </div>
            </div>
          )}

          {/* Items 1, 2 — top right two squares */}
          {galleryItems[1] && (
            <div
              onClick={() => setSelectedItem(galleryItems[1])}
              className="col-span-1 lg:col-span-4 row-span-1 relative overflow-hidden cursor-pointer group"
            >
              <Image src={galleryItems[1].imageUrl} alt={galleryItems[1].title} fill sizes="33vw" className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
              <div className="absolute inset-0 bg-[#1A1208]/0 group-hover:bg-[#1A1208]/45 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-[9px] uppercase tracking-[0.22em] text-[#C98A50]">{galleryItems[1].category}</p>
                <h3 className="font-serif text-base text-white font-light mt-0.5">{galleryItems[1].title}</h3>
              </div>
            </div>
          )}

          {/* Item 5 — top right */}
          {galleryItems[5] && (
            <div
              onClick={() => setSelectedItem(galleryItems[5])}
              className="hidden lg:block lg:col-span-3 row-span-1 relative overflow-hidden cursor-pointer group"
            >
              <Image src={galleryItems[5].imageUrl} alt={galleryItems[5].title} fill sizes="25vw" className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
              <div className="absolute inset-0 bg-[#1A1208]/0 group-hover:bg-[#1A1208]/45 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-[9px] uppercase tracking-[0.22em] text-[#C98A50]">{galleryItems[5].category}</p>
                <h3 className="font-serif text-sm text-white font-light mt-0.5">{galleryItems[5].title}</h3>
              </div>
            </div>
          )}

          {/* Item 2 — wider bottom right */}
          {galleryItems[2] && (
            <div
              onClick={() => setSelectedItem(galleryItems[2])}
              className="col-span-1 lg:col-span-4 row-span-1 relative overflow-hidden cursor-pointer group"
            >
              <Image src={galleryItems[2].imageUrl} alt={galleryItems[2].title} fill sizes="33vw" className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
              <div className="absolute inset-0 bg-[#1A1208]/0 group-hover:bg-[#1A1208]/45 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-[9px] uppercase tracking-[0.22em] text-[#C98A50]">{galleryItems[2].category}</p>
                <h3 className="font-serif text-base text-white font-light mt-0.5">{galleryItems[2].title}</h3>
              </div>
            </div>
          )}

          {/* Item 6 */}
          {galleryItems[6] && (
            <div
              onClick={() => setSelectedItem(galleryItems[6])}
              className="hidden lg:block lg:col-span-3 row-span-1 relative overflow-hidden cursor-pointer group"
            >
              <Image src={galleryItems[6].imageUrl} alt={galleryItems[6].title} fill sizes="25vw" className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
              <div className="absolute inset-0 bg-[#1A1208]/0 group-hover:bg-[#1A1208]/45 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-[9px] uppercase tracking-[0.22em] text-[#C98A50]">{galleryItems[6].category}</p>
                <h3 className="font-serif text-sm text-white font-light mt-0.5">{galleryItems[6].title}</h3>
              </div>
            </div>
          )}

          {/* Items 3, 4 — bottom row */}
          {galleryItems[3] && (
            <div
              onClick={() => setSelectedItem(galleryItems[3])}
              className="col-span-1 lg:col-span-4 row-span-1 relative overflow-hidden cursor-pointer group"
            >
              <Image src={galleryItems[3].imageUrl} alt={galleryItems[3].title} fill sizes="33vw" className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
              <div className="absolute inset-0 bg-[#1A1208]/0 group-hover:bg-[#1A1208]/45 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-[9px] uppercase tracking-[0.22em] text-[#C98A50]">{galleryItems[3].category}</p>
                <h3 className="font-serif text-base text-white font-light mt-0.5">{galleryItems[3].title}</h3>
              </div>
            </div>
          )}

          {galleryItems[4] && (
            <div
              onClick={() => setSelectedItem(galleryItems[4])}
              className="col-span-1 lg:col-span-4 row-span-1 relative overflow-hidden cursor-pointer group"
            >
              <Image src={galleryItems[4].imageUrl} alt={galleryItems[4].title} fill sizes="33vw" className="object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" />
              <div className="absolute inset-0 bg-[#1A1208]/0 group-hover:bg-[#1A1208]/45 transition-colors duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-[9px] uppercase tracking-[0.22em] text-[#C98A50]">{galleryItems[4].category}</p>
                <h3 className="font-serif text-base text-white font-light mt-0.5">{galleryItems[4].title}</h3>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ── Lightbox ── */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#100C08]/92 backdrop-blur-sm p-4 sm:p-10"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-[#100e0b] border border-white/15 overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full">
              <Image
                src={selectedItem.imageUrl}
                alt={selectedItem.title}
                fill
                sizes="90vw"
                className="object-cover"
              />
              <button
                onClick={() => setSelectedItem(null)}
                aria-label="Close Lightbox"
                className="absolute top-4 right-4 w-9 h-9 bg-[#100e0b]/80 text-white flex items-center justify-center hover:bg-[#100e0b] border border-white/15 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="p-6 sm:p-8 flex items-start justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#C98A50]">{selectedItem.category}</span>
                <h3 className="font-serif text-2xl text-[#F9F6F1] font-light mt-1">{selectedItem.title}</h3>
                <p className="text-sm text-white/60 font-light mt-1.5 max-w-lg">{selectedItem.description}</p>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="px-6 py-2.5 border border-white/20 text-[11px] uppercase tracking-[0.18em] text-white hover:bg-white hover:text-[#100e0b] transition-colors shrink-0"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
