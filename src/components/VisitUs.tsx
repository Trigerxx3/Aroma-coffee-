'use client';

import React, { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Navigation, Calendar, Check, Copy } from 'lucide-react';

interface VisitUsProps {
  onOpenReservation: () => void;
}

export default function VisitUs({ onOpenReservation }: VisitUsProps) {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText('14 Bloom Street, Arts & Roastery Quarter, Bengaluru, KA 560001');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="visit" className="bg-transparent py-24 sm:py-32 border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">

        {/* Section header */}
        <div className="mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-px bg-[#B07040]" />
            <span className="text-[10px] uppercase tracking-[0.28em] text-[#B07040] font-normal">Find Your Sanctuary</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F9F6F1] font-light tracking-tight leading-[1.1]">
            Come In, <span className="italic text-[#B07040]">Stay Awhile.</span>
          </h2>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

          {/* Left: details */}
          <div className="lg:col-span-4 space-y-12">

            {/* Live status */}
            <div className="flex items-center gap-3 text-sm text-[#C98A50] font-light">
              <span className="w-2 h-2 rounded-full bg-[#C98A50] animate-pulse shrink-0" />
              Currently Open · Brewing Fresh Roasts
            </div>

            {/* Hours */}
            <div className="space-y-4">
              <h3 className="text-[10px] uppercase tracking-[0.25em] text-[#B07040] font-normal flex items-center gap-2">
                <Clock className="w-3.5 h-3.5" />
                Opening Hours
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-baseline border-b border-white/10 pb-3">
                  <span className="text-[11px] uppercase tracking-[0.15em] text-[#F9F6F1] font-medium">Monday – Friday</span>
                  <span className="text-sm text-white/70 font-light tabular-nums">8:00 AM – 9:00 PM</span>
                </div>
                <div className="flex justify-between items-baseline border-b border-white/10 pb-3">
                  <span className="text-[11px] uppercase tracking-[0.15em] text-[#F9F6F1] font-medium">Saturday – Sunday</span>
                  <span className="text-sm text-white/70 font-light tabular-nums">8:00 AM – 10:00 PM</span>
                </div>
                <p className="text-[11px] text-[#C98A50] font-light">*Kitchen closes 45 min before closing.</p>
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-[10px] uppercase tracking-[0.25em] text-[#B07040] font-normal flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5" />
                Location &amp; Contact
              </h3>
              <div className="space-y-3 text-sm text-white/70 font-light">
                <p className="leading-relaxed">
                  14 Bloom Street, Arts &amp; Roastery Quarter<br />
                  Bengaluru, Karnataka 560001
                </p>
                <a href="tel:+919876543210" className="flex items-center gap-2 text-white/60 hover:text-[#C98A50] transition-colors text-xs">
                  <Phone className="w-3 h-3" />+91 98765 43210
                </a>
                <a href="mailto:hello@aromacoffee.com" className="flex items-center gap-2 text-white/60 hover:text-[#C98A50] transition-colors text-xs">
                  <Mail className="w-3 h-3" />hello@aromacoffee.com
                </a>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3 pt-2">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 py-3 px-6 bg-[#B07040] text-white text-[11px] uppercase tracking-[0.18em] font-medium hover:bg-[#C98A50] transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                Get Directions
              </a>
              <button
                onClick={onOpenReservation}
                className="inline-flex items-center justify-center gap-2 py-3 px-6 border border-white/25 text-white text-[11px] uppercase tracking-[0.18em] font-medium hover:bg-white hover:text-[#100e0b] transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" />
                Reserve Table
              </button>
            </div>
          </div>

          {/* Right: stylised dark map panel */}
          <div className="lg:col-span-8 relative min-h-[420px] bg-[#100C08] overflow-hidden flex flex-col justify-between p-8 sm:p-10">

            {/* Subtle grid texture */}
            <div className="absolute inset-0 opacity-30">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="map-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                    <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#F9F6F1" strokeWidth="0.4" strokeOpacity="0.08" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="#100C08" />
                <rect width="100%" height="100%" fill="url(#map-grid)" />
                {/* Street lines */}
                <path d="M -50 280 Q 250 200 600 340 T 1100 200" fill="none" stroke="#B07040" strokeWidth="5" strokeOpacity="0.3" />
                <path d="M 120 -20 Q 350 250 430 700" fill="none" stroke="#F9F6F1" strokeWidth="2.5" strokeOpacity="0.08" />
                <path d="M 480 -20 Q 450 320 650 700" fill="none" stroke="#F9F6F1" strokeWidth="2" strokeOpacity="0.07" />
              </svg>
            </div>

            {/* Header row */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#B07040]" />
                <span className="text-[10px] uppercase tracking-[0.25em] text-white/60 font-normal">Arts &amp; Roastery Quarter, Bengaluru</span>
              </div>
              <button
                onClick={copyAddress}
                className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-white/50 hover:text-white/80 transition-colors"
                title="Copy Address"
              >
                {copied ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
                {copied ? 'Copied' : 'Copy'}
              </button>
            </div>

            {/* Pin + tooltip */}
            <div className="relative z-10 flex justify-center items-center flex-1 py-8">
              <div className="relative group cursor-pointer">
                <div className="w-10 h-10 bg-[#B07040] text-white flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#F9F6F1] px-4 py-2 text-center">
                  <p className="font-serif text-xs font-normal text-[#1A1208]">AROMA CAFÉ &amp; ROASTERY</p>
                  <p className="text-[9px] text-[#B07040] uppercase tracking-wider">14 Bloom Street</p>
                </div>
                {/* Subtle pulse rings */}
                <div className="absolute inset-0 bg-[#B07040]/20 animate-ping scale-150" />
              </div>
            </div>

            {/* Footer transit row */}
            <div className="relative z-10 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-0.5">
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#C98A50] font-normal">Transit &amp; Parking</p>
                <p className="text-xs text-white/55 font-light">5 min walk from MG Road Metro · Valet parking available weekends</p>
              </div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] uppercase tracking-[0.18em] bg-[#F9F6F1] text-[#1A1208] px-4 py-2.5 hover:bg-[#C98A50] hover:text-white transition-colors whitespace-nowrap font-medium"
              >
                Open Maps ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
