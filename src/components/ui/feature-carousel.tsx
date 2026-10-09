'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

/* ────────────────────────────────────────────────────────────
   Types
──────────────────────────────────────────────────────────── */
export interface FeatureStep {
  id: number;
  label: string;
  title: string;
  description: string;
}

export interface FeatureCarouselImages {
  step1light1: string;
  step1light2: string;
  step2light1: string;
  step2light2: string;
  step3light: string;
  step4light: string;
  alt: string;
}

export interface FeatureCarouselProps {
  title?: string;
  description?: string;
  steps?: FeatureStep[];
  image: FeatureCarouselImages;
  bgClass?: string;
  // Per-step image positional classes
  step1img1Class?: string;
  step1img2Class?: string;
  step2img1Class?: string;
  step2img2Class?: string;
  step3imgClass?: string;
  step4imgClass?: string;
  autoPlayInterval?: number;
}

/* ────────────────────────────────────────────────────────────
   Default steps (coffee-site flavour)
──────────────────────────────────────────────────────────── */
const defaultSteps: FeatureStep[] = [
  {
    id: 1,
    label: 'Browse',
    title: 'Explore the Seasonal Menu',
    description:
      'Filter by coffee, pastries, tea, or breakfast. Every item is described with tasting notes, origins, and dietary information so you always know what awaits you.',
  },
  {
    id: 2,
    label: 'Craft',
    title: 'Artisanal Roasting & Craft',
    description:
      'Small-batch roasted micro-lots and precise extraction methods. Every beverage is hand-crafted with intention by our passionate baristas upon your visit.',
  },
  {
    id: 3,
    label: 'Reserve',
    title: 'Book a Quiet Table',
    description:
      'Reserve a corner seat, a private nook, or a curated single-origin cupping flight. Pick your date, time, and preferred experience.',
  },
  {
    id: 4,
    label: 'Visit',
    title: 'Find Your Sanctuary',
    description:
      'Get directions, check live opening hours, and discover transit options. Five minutes from MG Road Metro — unhurried and worth every step.',
  },
];

/* ────────────────────────────────────────────────────────────
   Component
──────────────────────────────────────────────────────────── */
export function FeatureCarousel({
  title = 'The AROMA Experience',
  description = 'Everything you need for a perfect coffee visit — from browsing to your first sip.',
  steps = defaultSteps,
  image,
  bgClass = 'bg-[#1A1208]',
  step1img1Class,
  step1img2Class,
  step2img1Class,
  step2img2Class,
  step3imgClass,
  step4imgClass,
  autoPlayInterval = 4500,
}: FeatureCarouselProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [progress, setProgress] = useState(0);

  const goToStep = useCallback(
    (idx: number) => {
      if (idx === activeStep || animating) return;
      setAnimating(true);
      setTimeout(() => {
        setActiveStep(idx);
        setProgress(0);
        setAnimating(false);
      }, 280);
    },
    [activeStep, animating]
  );

  /* Auto-advance */
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          const next = (activeStep + 1) % steps.length;
          goToStep(next);
          return 0;
        }
        return p + 100 / (autoPlayInterval / 80);
      });
    }, 80);
    return () => clearInterval(interval);
  }, [activeStep, autoPlayInterval, goToStep, steps.length]);

  const step = steps[activeStep];

  /* Image sets per step */
  const renders: Record<number, React.ReactNode> = {
    0: (
      <>
        <div className={cn('absolute', step1img1Class)}>
          <Image
            src={image.step1light1}
            alt={image.alt}
            width={600}
            height={400}
            className="w-full h-auto"
            unoptimized
          />
        </div>
        <div className={cn('absolute', step1img2Class)}>
          <Image
            src={image.step1light2}
            alt={image.alt}
            width={600}
            height={400}
            className="w-full h-auto"
            unoptimized
          />
        </div>
      </>
    ),
    1: (
      <>
        <div className={cn('absolute', step2img1Class)}>
          <Image
            src={image.step2light1}
            alt={image.alt}
            width={600}
            height={400}
            className="w-full h-auto"
            unoptimized
          />
        </div>
        <div className={cn('absolute', step2img2Class)}>
          <Image
            src={image.step2light2}
            alt={image.alt}
            width={600}
            height={400}
            className="w-full h-auto"
            unoptimized
          />
        </div>
      </>
    ),
    2: (
      <div className={cn('absolute', step3imgClass)}>
        <Image
          src={image.step3light}
          alt={image.alt}
          width={900}
          height={560}
          className="w-full h-auto"
          unoptimized
        />
      </div>
    ),
    3: (
      <div className={cn('absolute', step4imgClass)}>
        <Image
          src={image.step4light}
          alt={image.alt}
          width={900}
          height={560}
          className="w-full h-auto"
          unoptimized
        />
      </div>
    ),
  };

  return (
    <div className="w-full">
      {/* ── Section header ── */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 pb-12 sm:pb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-6 h-px bg-[#B07040]" />
          <span className="text-[10px] uppercase tracking-[0.28em] text-[#B07040] font-normal">
            How It Works
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#F9F6F1] font-light tracking-tight leading-[1.1]">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-white/60 font-light leading-relaxed md:max-w-sm">
            {description}
          </p>
        </div>
      </div>

      {/* ── Carousel card ── */}
      <div className={cn('relative w-full overflow-hidden', bgClass)}>
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 min-h-[500px] md:min-h-[560px]">

            {/* Left: step navigation panel */}
            <div className="md:col-span-4 flex flex-col justify-center px-8 sm:px-10 md:px-12 py-12 md:py-16 gap-2 border-b md:border-b-0 md:border-r border-white/8">
              {steps.map((s, i) => {
                const isActive = i === activeStep;
                return (
                  <button
                    key={s.id}
                    onClick={() => goToStep(i)}
                    className={cn(
                      'group text-left w-full transition-all duration-300 rounded-none',
                      'border-l-2 pl-5 pr-3 py-5',
                      isActive
                        ? 'border-[#B07040] bg-white/4'
                        : 'border-transparent hover:border-white/20'
                    )}
                  >
                    {/* Step label + number */}
                    <div className="flex items-center gap-3 mb-1.5">
                      <span
                        className={cn(
                          'text-[9px] uppercase tracking-[0.3em] font-normal transition-colors',
                          isActive ? 'text-[#B07040]' : 'text-white/30 group-hover:text-white/50'
                        )}
                      >
                        {String(s.id).padStart(2, '0')} · {s.label}
                      </span>
                    </div>

                    <h3
                      className={cn(
                        'font-serif text-lg font-light transition-colors leading-snug',
                        isActive ? 'text-white' : 'text-white/40 group-hover:text-white/60'
                      )}
                    >
                      {s.title}
                    </h3>

                    {/* Expanding description */}
                    <div
                      className={cn(
                        'overflow-hidden transition-all duration-500',
                        isActive ? 'max-h-24 mt-2 opacity-100' : 'max-h-0 opacity-0'
                      )}
                    >
                      <p className="text-xs text-white/55 font-light leading-relaxed">
                        {s.description}
                      </p>
                    </div>

                    {/* Progress bar under active step */}
                    {isActive && (
                      <div className="mt-4 h-px bg-white/10 relative overflow-hidden">
                        <div
                          className="absolute left-0 top-0 h-full bg-[#B07040] transition-none"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right: image display stage */}
            <div className="md:col-span-8 relative overflow-hidden min-h-[320px] md:min-h-0 group">
              {/* Subtle dark background */}
              <div className="absolute inset-0 bg-[#0D0906]" />

              {/* Grid pattern overlay */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="fc-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                      <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#F9F6F1" strokeWidth="0.3" strokeOpacity="0.12" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#fc-grid)" />
                </svg>
              </div>

              {/* Images — fade transition */}
              <div
                className={cn(
                  'absolute inset-0 transition-opacity duration-300',
                  animating ? 'opacity-0' : 'opacity-100'
                )}
              >
                {renders[activeStep]}
              </div>

              {/* Step counter bottom-right */}
              <div className="absolute bottom-5 right-6 flex items-center gap-1.5 z-10">
                {steps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goToStep(i)}
                    className={cn(
                      'transition-all duration-300',
                      i === activeStep
                        ? 'w-6 h-1 bg-[#B07040]'
                        : 'w-1 h-1 bg-white/25 hover:bg-white/50'
                    )}
                    aria-label={`Go to step ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
