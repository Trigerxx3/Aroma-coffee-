'use client';

import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from './Icons';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => { setSubscribed(false); setEmail(''); }, 3000);
    }
  };

  return (
    <footer className="bg-transparent text-[#F9F6F1] border-t border-white/10">

      {/* ── Main footer grid ── */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/8">

          {/* Brand column */}
          <div className="md:col-span-4 space-y-6">
            {/* Large wordmark */}
            <a href="#hero" className="block">
              <span className="font-serif text-4xl tracking-[0.28em] font-light text-[#F9F6F1]">
                AROMA
              </span>
              <p className="text-[9px] uppercase tracking-[0.32em] text-[#B07040] mt-1 font-normal">
                Specialty Coffee Roasters
              </p>
            </a>

            <p className="text-sm text-[#F9F6F1]/45 font-light leading-relaxed max-w-xs">
              A modern specialty coffee shop inspired by Scandinavian warmth, unhurried rituals, and ethically sourced single-origin micro-lots.
            </p>

            {/* Social icons — minimal, line-weight */}
            <div className="flex items-center gap-4 pt-2">
              {[
                { icon: <InstagramIcon className="w-4 h-4" />, href: 'https://instagram.com', label: 'Instagram' },
                { icon: <FacebookIcon className="w-4 h-4" />, href: 'https://facebook.com', label: 'Facebook' },
                { icon: <WhatsAppIcon className="w-4 h-4" />, href: 'https://whatsapp.com', label: 'WhatsApp' },
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-white/40 hover:text-[#B07040] transition-colors duration-300"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-1" />

          {/* Navigation */}
          <div className="md:col-span-3 space-y-5">
            <h4 className="text-[10px] uppercase tracking-[0.26em] text-[#B07040] font-normal">Navigation</h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', href: '#hero' },
                { label: 'Menu', href: '#menu' },
                { label: 'Our Story', href: '#story' },
                { label: 'Coffee Sourcing', href: '#coffee' },
                { label: 'Gallery', href: '#gallery' },
                { label: 'Contact & Location', href: '#visit' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-[#F9F6F1]/50 hover:text-[#F9F6F1] transition-colors duration-300 font-light"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-4 space-y-5">
            <h4 className="text-[10px] uppercase tracking-[0.26em] text-[#B07040] font-normal">Roastery Dispatch</h4>
            <p className="text-sm text-[#F9F6F1]/45 font-light leading-relaxed">
              Subscribe for first access to seasonal single-origin releases, cupping workshops, and slow brewing guides.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="flex-1 bg-transparent border border-white/15 text-xs text-white placeholder-white/30 px-4 py-3 focus:outline-none focus:border-[#B07040] transition-colors"
                />
                <button
                  type="submit"
                  aria-label="Subscribe to newsletter"
                  className="w-11 flex items-center justify-center bg-[#B07040] text-white hover:bg-[#C98A50] transition-colors shrink-0"
                >
                  {subscribed ? <Check className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] text-[#B07040] font-light">
                  Welcome to the Roastery dispatch. First drop coming soon.
                </p>
              )}
            </form>

            {/* Quick hours summary */}
            <div className="pt-2 border-t border-white/8 space-y-1.5">
              <p className="text-[10px] uppercase tracking-[0.22em] text-white/35">Opening Hours</p>
              <p className="text-xs text-white/40 font-light">Mon – Fri · 8:00 AM – 9:00 PM</p>
              <p className="text-xs text-white/40 font-light">Sat – Sun · 8:00 AM – 10:00 PM</p>
            </div>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] text-[#F9F6F1]/25 font-light">
          <p>© 2026 Aroma Specialty Coffee Roasters. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms</a>
            <a href="#" className="hover:text-white/60 transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
