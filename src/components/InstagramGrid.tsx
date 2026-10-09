import React from 'react';
import Image from 'next/image';
import { instagramPosts } from '@/data/instagram';
import { InstagramIcon } from './Icons';
import { Heart, MessageCircle, ArrowUpRight } from 'lucide-react';

export default function InstagramGrid() {
  return (
    <section className="bg-transparent py-24 sm:py-32 border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 mb-14 sm:mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-[#B07040]" />
              <span className="text-[10px] uppercase tracking-[0.28em] text-[#B07040] font-normal">Community &amp; Journal</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F9F6F1] font-light tracking-tight leading-[1.1]">
              From Our Cup <span className="italic text-[#B07040]">to Your Feed.</span>
            </h2>
            <p className="text-sm text-white/60 font-light mt-3">
              Follow along at{' '}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C98A50] underline underline-offset-4 hover:text-white transition-colors"
              >
                @aromacoffee
              </a>
            </p>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 text-[11px] uppercase tracking-[0.2em] font-medium text-white border border-white/25 px-6 py-3 hover:bg-white hover:text-[#100e0b] transition-all duration-300 self-start sm:self-auto shrink-0"
          >
            <InstagramIcon className="w-3.5 h-3.5" />
            Follow Us
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 6-square grid — no rounded corners, clean hover overlay */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View Instagram post: ${post.caption}`}
              className="group relative aspect-square overflow-hidden block"
            >
              <Image
                src={post.imageUrl}
                alt={post.caption}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#100C08]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-between p-4">
                <div className="flex justify-end">
                  <InstagramIcon className="w-4 h-4 text-white/80" />
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-3 text-[11px] text-white font-light">
                    <span className="flex items-center gap-1"><Heart className="w-3 h-3 fill-current" />{post.likes}</span>
                    <span className="flex items-center gap-1"><MessageCircle className="w-3 h-3 fill-current" />{post.comments}</span>
                  </div>
                  <p className="text-[10px] text-white/70 line-clamp-2 leading-snug font-light">{post.caption}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
