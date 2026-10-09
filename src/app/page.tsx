'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Philosophy from '@/components/Philosophy';
import CoffeeBeans from '@/components/CoffeeBeans';
import MenuSection from '@/components/MenuSection';
import OurStory from '@/components/OurStory';
import Gallery from '@/components/Gallery';
import InstagramGrid from '@/components/InstagramGrid';
import VisitUs from '@/components/VisitUs';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import TableModal from '@/components/TableModal';
import CoffeeFeatureCarousel from '@/components/CoffeeFeatureCarousel';
import { AuraBackground } from '@/components/ui/aura-background';

export default function Home() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-transparent text-[#F9F6F1] font-sans selection:bg-[#B07040] selection:text-white">
      {/* Blood Aurora Aura Gradient — persistent atmospheric backdrop all along the site */}
      <AuraBackground isFixed />

      {/* Content wrapper with position relative and z-index 1 above layers */}
      <div className="relative z-[1] flex flex-col min-h-screen">
        {/* Sticky Top Navigation */}
        <Navbar
          onOpenReservation={() => setIsReservationOpen(true)}
        />

        {/* Main Sections */}
        <main className="flex-grow">
          <Hero
            onExploreMenu={() => scrollToSection('menu')}
            onVisitUs={() => scrollToSection('visit')}
          />

          <Philosophy />

          <CoffeeBeans />

          <MenuSection
            onOpenReservation={() => setIsReservationOpen(true)}
          />

          <CoffeeFeatureCarousel />

          <OurStory />

          <Gallery />

          <InstagramGrid />

          <VisitUs onOpenReservation={() => setIsReservationOpen(true)} />

          <CTASection
            onVisitUs={() => scrollToSection('visit')}
            onExploreMenu={() => scrollToSection('menu')}
          />
        </main>

        {/* Minimal Footer */}
        <Footer />
      </div>

      {/* Interactive Table Reservation Modal */}
      <TableModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />
    </div>
  );
}
