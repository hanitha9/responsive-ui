import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function LoadingScreen() {
  const loaderRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    setVh();
    window.addEventListener('resize', setVh);

    const tl = gsap.timeline({ defaults: { ease: 'power3.inOut' } });
    tl.to(progressRef.current, { width: '100%', duration: 2.3 })
      .to(loaderRef.current, { opacity: 0, duration: 0.7 }, '+=0.15')
      .set(loaderRef.current, { display: 'none' });

    return () => {
      window.removeEventListener('resize', setVh);
      tl.kill();
    };
  }, []);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 bg-[#1A2E2E] z-[9999] flex flex-col items-center justify-center"
      style={{ height: 'calc(var(--vh, 1vh) * 100)' }}
    >
      <div className="mb-6 w-12 h-12">
        <svg viewBox="0 0 48 48" fill="none">
          <path d="M24 4L6 14L24 24L42 14L24 4Z" stroke="white" strokeWidth="2" />
          <path d="M6 24L24 34L42 24" stroke="white" strokeWidth="2" />
          <path d="M6 34L24 44L42 34" stroke="white" strokeWidth="2" />
        </svg>
      </div>
      <div className="w-80 h-1 bg-gray-300 rounded-full overflow-hidden">
        <div ref={progressRef} className="h-full bg-white w-0 rounded-full" />
      </div>
      <p className="mt-6 text-white text-sm font-light opacity-80">Loading your skincare experience...</p>
    </div>
  );
}
