'use client';
import Image from 'next/image';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useAnimation } from '@/hooks/useAnimation';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const heroRef = useRef(null);
  const paraRef = useRef(null);

  // Smooth Reveal Animation on Page Load
  useAnimation(
    (target) => gsap.fromTo(target, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' }),
    heroRef
  );

  // Text Fill Animation for First Paragraph
  useAnimation(
    (target) => {
      if (!target) return gsap.fromTo({}, {}, {}); // No-op Tween if target is null
      const element = target as HTMLElement; // Assert target as HTMLElement for querySelectorAll
      const words = element.querySelectorAll('.word');
      return gsap.fromTo(
        words,
        { opacity: 0.3 },
        {
          opacity: 1,
          duration: 0.5,
          delay: (index) => index * 0.1,
          scrollTrigger: {
            trigger: target,
            start: 'top 80%',
          },
        }
      );
    },
    paraRef
  );

  return (
    <section ref={heroRef} className="relative h-screen flex items-center justify-center bg-[#1A2E2E] text-white">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/assets/hero-bg.png"
          alt="Skincare hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="max-w-4xl px-6 text-center z-10">
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 tracking-tight">GLOW NATUR-ALLY</h1>
        <p ref={paraRef} className="text-lg md:text-xl mb-8">
          {`Transform your skincare routine with premium products that restore, protect, and enhance your natural glow every day.`.split(' ').map((word, index) => (
            <span key={index} className="word inline-block mx-1">{word}</span>
          ))}
        </p>
        <button className="btn-primary">Shop Now</button>
      </div>
    </section>
  );
}
