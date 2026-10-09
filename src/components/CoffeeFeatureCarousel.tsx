'use client';

import { cn } from '@/lib/utils';
import { FeatureCarousel } from '@/components/ui/feature-carousel';

export default function CoffeeFeatureCarousel() {
  return (
    <section id="features" className="bg-transparent py-24 sm:py-32 border-b border-white/10">
      <div className="max-w-[1400px] mx-auto">
        <FeatureCarousel
          title="The AROMA Experience."
          description="From a single tap to your first sip — every detail of your visit, thoughtfully designed."
          bgClass="bg-[#100e0b]/80 border border-white/10"
          autoPlayInterval={5000}
          image={{
            // Step 1 — Menu browsing: espresso close-up + latte art
            step1light1:
              'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=85&w=1000&auto=format&fit=crop',
            step1light2:
              'https://images.unsplash.com/photo-1534778101976-62847782c213?q=85&w=900&auto=format&fit=crop',
            // Step 2 — Craft & brew: pour-over + cold brew glass
            step2light1:
              'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=85&w=1000&auto=format&fit=crop',
            step2light2:
              'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=85&w=900&auto=format&fit=crop',
            // Step 3 — Reservation: warm interior
            step3light:
              'https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=85&w=1400&auto=format&fit=crop',
            // Step 4 — Visit Us: café exterior / architecture
            step4light:
              'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?q=85&w=1400&auto=format&fit=crop',
            alt: 'AROMA Specialty Coffee experience',
          }}
          // ── Step 1: two images side-by-side ──
          step1img1Class={cn(
            'pointer-events-none w-[50%] overflow-hidden',
            'border border-white/8 transition-all duration-700',
            'left-[5%] top-[45%] md:left-[40px] md:top-[20%]',
            'md:group-hover:translate-y-2'
          )}
          step1img2Class={cn(
            'pointer-events-none w-[46%] overflow-hidden',
            'border border-white/8 transition-all duration-700',
            'left-[52%] top-[38%] md:top-[14%] md:left-[calc(50%+24px)]',
            'md:group-hover:-translate-y-4'
          )}
          // ── Step 2: two images offset vertically ──
          step2img1Class={cn(
            'pointer-events-none w-[52%] overflow-hidden',
            'border border-white/8 transition-all duration-700',
            'left-[4%] top-[50%] md:left-[40px] md:top-[22%]',
            'md:group-hover:translate-y-3'
          )}
          step2img2Class={cn(
            'pointer-events-none w-[42%] overflow-hidden',
            'border border-white/8 transition-all duration-700',
            'left-[55%] top-[38%] md:top-[17%] md:left-[calc(50%+28px)]',
            'md:group-hover:-translate-y-5'
          )}
          // ── Step 3: single wide image ──
          step3imgClass={cn(
            'pointer-events-none w-[86%] overflow-hidden',
            'border border-white/8 transition-all duration-700',
            'left-[7%] top-[40%] md:top-[22%] md:left-[60px]'
          )}
          // ── Step 4: single wide image ──
          step4imgClass={cn(
            'pointer-events-none w-[86%] overflow-hidden',
            'border border-white/8 transition-all duration-700',
            'left-[7%] top-[40%] md:top-[22%] md:left-[60px]'
          )}
        />
      </div>
    </section>
  );
}
