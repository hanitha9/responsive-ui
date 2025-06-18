'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function LoadingScreen() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // iPhone viewport height fix
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    
    setVh();
    window.addEventListener('resize', setVh);

    // Figma-specified animation timeline
    const tl = gsap.timeline({
      defaults: { ease: "power3.inOut" }
    });

    tl.to(progressRef.current, {
      width: '100%',
      duration: 2.3, // Exact from Figma
    })
    .to(loaderRef.current, {
      opacity: 0,
      duration: 0.7, // Exact fade duration
    }, "+=0.15") // Exact delay
    .set(loaderRef.current, { display: 'none' });

    return () => {
      window.removeEventListener('resize', setVh);
      tl.kill();
    };
  }, []);

  return (
    <div 
      ref={loaderRef}
      className="fixed inset-0 bg-figma-primary z-[9999] flex flex-col items-center justify-center"
      style={{ height: 'calc(var(--vh, 1vh) * 100)' }}
    >
      {/* Logo - exact 48x48px from Figma */}
      <div className="mb-[38px] w-[48px] h-[48px]">
        <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 4L6 14L24 24L42 14L24 4Z" stroke="white" strokeWidth="2"/>
          <path d="M6 24L24 34L42 24" stroke="white" strokeWidth="2"/>
          <path d="M6 34L24 44L42 34" stroke="white" strokeWidth="2"/>
        </svg>
      </div>
      
      {/* Progress bar - exact 320x2px */}
      <div className="w-[320px] h-[2px] bg-figma-primary-light rounded-full overflow-hidden">
        <div ref={progressRef} className="h-full bg-white w-0 rounded-full"/>
      </div>
      
      {/* Loading text - exact 14px/20px from Figma */}
      <p className="mt-[24px] text-white text-[14px] leading-[20px] font-light opacity-80">
        Loading your skincare experience...
      </p>
    </div>
  );
}
