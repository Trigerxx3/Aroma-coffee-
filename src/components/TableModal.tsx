'use client';

import React, { useState } from 'react';
import { X, Calendar, Clock, CheckCircle2 } from 'lucide-react';

interface TableModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TableModal({ isOpen, onClose }: TableModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '2026-09-22',
    time: '10:30 AM',
    guests: '2 Guests',
    experience: 'Casual Coffee & Bakery',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  const inputClass =
    'w-full text-xs text-white placeholder-white/40 bg-white/5 border border-white/15 px-4 py-3 focus:outline-none focus:border-[#B07040] transition-colors font-light';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal card — no rounded corners, refined */}
      <div
        className="relative max-w-lg w-full bg-[#100e0b] border border-white/15 z-10 overflow-hidden text-[#F9F6F1]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top accent bar */}
        <div className="h-0.5 bg-[#B07040] w-full" />

        {/* Close button */}
        <button
          onClick={handleClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 w-7 h-7 flex items-center justify-center text-white/50 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="p-7 sm:p-9">
          {submitted ? (
            /* ── Confirmation view ── */
            <div className="text-center py-4 space-y-5">
              <CheckCircle2 className="w-10 h-10 text-[#C98A50] mx-auto" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.26em] text-[#B07040] font-normal mb-2">Table Reserved</p>
                <h3 className="font-serif text-3xl font-light text-[#F9F6F1]">
                  See You Soon, {formData.name || 'Guest'}
                </h3>
              </div>

              <div className="border border-white/10 divide-y divide-white/10 text-left bg-white/4">
                {[
                  ['Date & Time', `${formData.date} at ${formData.time}`],
                  ['Party Size', formData.guests],
                  ['Experience', formData.experience],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between px-5 py-3">
                    <span className="text-xs text-white/50 font-light">{k}</span>
                    <span className="text-xs text-white font-medium">{v}</span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-white/60 font-light leading-relaxed">
                Your quiet table will be prepared with fresh chilled mountain water and a menu placed for you.
              </p>

              <button
                onClick={handleClose}
                className="w-full py-3.5 bg-[#B07040] text-white text-[11px] uppercase tracking-[0.18em] font-medium hover:bg-[#C98A50] transition-colors"
              >
                Done
              </button>
            </div>

          ) : (
            /* ── Booking form ── */
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Header */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-5 h-px bg-[#B07040]" />
                  <span className="text-[10px] uppercase tracking-[0.28em] text-[#B07040] font-normal">Sanctuary Reservation</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-light text-[#F9F6F1]">
                  Reserve a Quiet Table
                </h3>
                <p className="text-xs text-white/60 font-light mt-2 leading-relaxed">
                  Book a tranquil corner for reading, working, or a curated multi-origin cupping flight.
                </p>
              </div>

              {/* Name + Phone */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/80 font-medium">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Liam Vance"
                    className={inputClass}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/80 font-medium">Phone</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 00000"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Date, Time, Guests */}
              <div className="grid grid-cols-3 gap-3">
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/80 font-medium">Date</label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className={inputClass}
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/80 font-medium">Time</label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className={inputClass}
                  >
                    {['09:00 AM', '10:30 AM', '12:00 PM', '02:30 PM', '04:00 PM', '06:00 PM', '07:30 PM'].map((t) => (
                      <option key={t} className="bg-[#100e0b] text-white">{t}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-white/80 font-medium">Guests</label>
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                    className={inputClass}
                  >
                    {['1 Guest', '2 Guests', '3-4 Guests', '5+ Guests (Private Nook)'].map((g) => (
                      <option key={g} className="bg-[#100e0b] text-white">{g}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Experience */}
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase tracking-[0.2em] text-white/80 font-medium">Preferred Experience</label>
                <select
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  className={inputClass}
                >
                  <option className="bg-[#100e0b] text-white">Casual Coffee &amp; Bakery</option>
                  <option className="bg-[#100e0b] text-white">Guided Single-Origin Cupping Flight</option>
                  <option className="bg-[#100e0b] text-white">Quiet Reading &amp; Work Session</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#B07040] text-white text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-[#C98A50] transition-colors duration-300"
              >
                Confirm Reservation
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
