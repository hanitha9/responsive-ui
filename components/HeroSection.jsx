import React from 'react';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

export default function HeroSection() {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(textRef.current, { opacity: 0 }, { opacity: 1, duration: 1.5 });
  }, []);

  return (
    <section className="bg-[#f5f7e8] p-6 text-center">
      <h2 ref={textRef} className="text-4xl font-bold leading-snug">GLOW NATURALLY</h2>
      <p className="mt-4 text-gray-700">Transform your skincare routine with premium products that enhance your natural glow.</p>
      <button className="mt-6 px-6 py-2 bg-[#23332c] text-white rounded hover:scale-105 transition">Shop Now</button>
    </section>
  );
}
