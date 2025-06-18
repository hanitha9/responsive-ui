'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins once (better to do this in a layout/provider)
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<GSAPTimeline>();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create a timeline for better control
      animationRef.current = gsap.timeline({
        defaults: { ease: "power3.out" }
      });
      
      // Background animation
      animationRef.current.from(heroRef.current, {
        opacity: 0,
        y: 40,
        duration: 1.2
      }, 0.3); // Exact 0.3s delay

      // Text stagger animation
      animationRef.current.from(".hero-text", {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.1
      }, 0.5); // Exact 0.5s delay

    }, heroRef); // Scope selector

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative h-[100dvh] flex items-center justify-center px-6 md:px-12 bg-figma-secondary"
    >
      {/* Background with exact 8% opacity */}
      <div 
        className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-[0.08]"
        aria-hidden="true"
      />
      
      <div className="relative z-10 max-w-[1200px] w-full text-center">
        <h1 
          className="hero-text text-4xl md:text-[64px] leading-[44px] md:leading-[72px] font-serif font-bold mb-6 md:mb-8 tracking-[-0.5px] text-figma-primary"
        >
          GLOW NATURALLY
        </h1>
        
        <p 
          className="hero-text text-base md:text-lg leading-6 md:leading-[28px] mb-4 md:mb-6 text-figma-primary/90"
        >
          Transform your delicate outline with premium products that restore, protect, and enhance your natural glow every day.
        </p>
        
        <button 
          className="hero-text bg-figma-accent text-white px-8 py-3 rounded-[24px] hover:bg-figma-accent-light transition-colors duration-300 mt-4 text-sm leading-5 tracking-[0.5px]"
        >
          Shop Now
        </button>
      </div>
    </section>
  );
}
