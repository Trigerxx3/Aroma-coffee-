'use client';

import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Clock, MapPin, Calendar } from 'lucide-react';

interface NavbarProps {
  onOpenReservation: () => void;
}

export default function Navbar({ onOpenReservation }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Coffee', href: '#coffee' },
    { name: 'Menu', href: '#menu' },
    { name: 'Experience', href: '#features' },
    { name: 'Our Story', href: '#story' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Visit Us', href: '#visit' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
          scrolled
            ? 'bg-[#100e0b]/85 backdrop-blur-md border-b border-white/10 py-4'
            : 'bg-transparent py-7'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 flex items-center justify-between">

          {/* Brand — text-only minimal wordmark */}
          <a
            href="#hero"
            className="focus:outline-none"
            aria-label="Aroma Coffee Roasters Home"
          >
            <span className="font-serif tracking-[0.28em] font-light text-[#F9F6F1] text-xl sm:text-2xl">
              AROMA
            </span>
          </a>

          {/* Desktop Nav Links — spaced, minimal */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[11px] tracking-[0.18em] uppercase font-normal transition-all duration-300 relative group text-white/75 hover:text-white"
              >
                {link.name}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 group-hover:w-full transition-all duration-500 ease-out bg-[#B07040]" />
              </a>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3 sm:gap-4">

            {/* Reserve Table CTA */}
            <button
              onClick={onOpenReservation}
              id="reserve-table-nav-btn"
              className={`hidden sm:inline-flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase font-medium transition-all duration-500 px-5 py-2.5 ${
                scrolled
                  ? 'bg-[#B07040] text-white hover:bg-[#C98A50]'
                  : 'bg-white/12 text-white border border-white/25 hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Reserve Table</span>
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 transition-colors text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen overlay drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden flex">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          <div className="relative ml-auto w-full max-w-sm bg-[#100e0b] border-l border-white/15 h-full flex flex-col justify-between p-8 pt-24 z-50 overflow-y-auto text-[#F9F6F1]">
            <div>
              {/* Brand in drawer */}
              <div className="pb-8 border-b border-white/10">
                <span className="font-serif text-2xl tracking-[0.28em] font-light text-[#F9F6F1]">AROMA</span>
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#B07040] mt-1 font-normal">
                  Specialty Coffee Roasters
                </p>
              </div>

              {/* Links */}
              <nav className="flex flex-col mt-8 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-serif font-light text-[#F9F6F1] hover:text-[#B07040] tracking-wide transition-colors py-2 flex items-center justify-between border-b border-white/10"
                  >
                    <span>{link.name}</span>
                    <span className="text-[#C98A50] text-base">→</span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Drawer footer details */}
            <div className="pt-8 border-t border-white/10 space-y-4">
              <div className="flex items-start gap-3 text-xs text-white/70">
                <Clock className="w-3.5 h-3.5 text-[#B07040] mt-0.5 shrink-0" />
                <div className="space-y-0.5">
                  <p className="text-[#F9F6F1] font-medium">Mon – Fri · 8:00 AM – 9:00 PM</p>
                  <p>Sat – Sun · 8:00 AM – 10:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-3 text-xs text-white/70">
                <MapPin className="w-3.5 h-3.5 text-[#B07040] mt-0.5 shrink-0" />
                <span>14 Bloom Street, Roastery Quarter</span>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => { setMobileMenuOpen(false); onOpenReservation(); }}
                  className="w-full py-3.5 text-[11px] uppercase tracking-[0.18em] font-medium bg-[#B07040] text-white hover:bg-[#C98A50] transition-colors flex items-center justify-center gap-2"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Reserve Table</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
