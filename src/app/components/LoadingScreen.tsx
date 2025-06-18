// components/LoadingScreen.tsx
'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function LoadingScreen() {
  const loadingRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Exact timing from Figma animations
    const tl = gsap.timeline();
    tl.to(progressRef.current, {
      width: '100%',
      duration: 2.3, // Exact duration from design specs
      ease: "power2.inOut"
    });
    tl.to(loadingRef.current, {
      opacity: 0,
      duration: 0.7, // Exact fade duration
      ease: "power3.out"
    }, "+=0.15"); // Exact delay
    tl.to(loadingRef.current, { display: 'none' });

    return () => tl.kill();
  }, []);

  return (
    <div 
      ref={loadingRef}
      className="fixed inset-0 bg-figma-primary z-[9999] flex flex-col items-center justify-center"
      style={{
        // Exact background color from Figma
        backgroundColor: '#2A2A2A',
        // Handle iOS viewport units precisely
        height: 'calc(var(--vh, 1vh) * 100)'
      }}
    >
      {/* Logo with exact dimensions from Figma */}
      <div className="mb-[38px]"> {/* Exact margin from design */}
        <svg 
          width="48px" 
          height="48px" 
          viewBox="0 0 48 48"
          className="w-[48px] h-[48px]" // Exact size
        >
          {/* Exact SVG paths from Figma */}
        </svg>
      </div>
      
      {/* Progress bar with exact dimensions */}
      <div 
        className="w-[320px] h-[2px] bg-figma-secondary rounded-full overflow-hidden"
        style={{ backgroundColor: '#3D3D3D' }} // Exact color
      >
        <div 
          ref={progressRef}
          className="h-full bg-white rounded-full w-0"
          style={{ backgroundColor: '#FFFFFF' }} // Exact color
        />
      </div>
      
      {/* Loading text with exact styling */}
      <p 
        className="mt-[24px] text-white text-[14px] leading-[20px] font-light tracking-[0.25px]"
        style={{
          fontFamily: 'Inter, sans-serif', // Exact font
          color: '#FFFFFF', // Exact color
          opacity: 0.8 // Exact opacity
        }}
      >
        Loading your skincare experience...
      </p>
    </div>
  );
}
