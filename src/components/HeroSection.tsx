// src/components/HeroSection.tsx
'use client';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/images/hero-bg.png" // Your skincare product shot
          alt="Skincare products"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/10" /> {/* Overlay */}
      </div>

      <div className="max-w-4xl px-6 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 tracking-tight">
          GLOW NATURALLY
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Transform your delicate outline with premium products that restore, protect, and enhance your natural glow every day.
        </p>
        <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-opacity-90 transition-all">
          Shop Now
        </button>
      </div>
    </section>
  );
}
