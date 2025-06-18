// components/HeroSection.tsx
'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Exact animation parameters from Figma
    gsap.from(heroRef.current, {
      opacity: 0,
      y: 40,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.3 // Exact delay after loading screen
    });

    // Text animation with exact timing
    gsap.from(".hero-text", {
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out",
      delay: 0.5
    });
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative h-screen flex items-center justify-center px-[24px] md:px-[48px]"
      style={{
        backgroundColor: '#FAFAFA' // Exact background color
      }}
    >
      {/* Background with exact opacity */}
      <div 
        className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center"
        style={{ opacity: 0.08 }} // Exact opacity from Figma
      />
      
      <div className="relative z-10 max-w-[1200px] w-full text-center">
        <h1 
          className="hero-text text-[36px] md:text-[64px] leading-[44px] md:leading-[72px] font-bold mb-[24px] md:mb-[32px] tracking-[-0.5px]"
          style={{
            fontFamily: 'Georgia, serif', // Exact font
            color: '#2A2A2A' // Exact color
          }}
        >
          GLOW NATURALLY
        </h1>
        
        <p 
          className="hero-text text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] mb-[16px] md:mb-[24px]"
          style={{
            fontFamily: 'Inter, sans-serif',
            color: '#2A2A2A',
            opacity: 0.9
          }}
        >
          Transform your delicate outline with premium products that restore, protect, and enhance your natural glow every day.
        </p>
        
        <button 
          className="hero-text bg-black text-white px-[32px] py-[12px] rounded-[24px] hover:bg-gray-800 transition-colors duration-300 mt-[16px]"
          style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px',
            letterSpacing: '0.5px',
            lineHeight: '20px'
          }}
        >
          Shop Now
        </button>
      </div>
    </section>
  );
}
