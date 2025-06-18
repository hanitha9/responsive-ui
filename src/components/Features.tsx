import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.from(sectionRef.current.querySelectorAll('.feature-item'), {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          toggleActions: 'play none none none',
        },
        ease: 'power3.out',
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-[#F5F1E9]">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">YOUR SKIN DESERVES THE BEST CARE.</h2>
        <p className="text-lg text-gray-600">
          Discover a curated collection of skincare products designed to rejuvenate, protect, and pamper your skin.
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="feature-item p-6 rounded-lg bg-gray-50">
          <h3 className="text-xl font-bold mb-3">01 Bio Ingredients</h3>
          <p className="text-gray-600">Get naturally beautiful with bio ingredients.</p>
        </div>
        <div className="feature-item p-6 rounded-lg bg-gray-50">
          <h3 className="text-xl font-bold mb-3">02 Everything Natural</h3>
          <p className="text-gray-600">Pure ingredients for pure skin.</p>
        </div>
        <div className="feature-item p-6 rounded-lg bg-gray-50">
          <h3 className="text-xl font-bold mb-3">03 All Handmade</h3>
          <p className="text-gray-600">Made with love and care.</p>
        </div>
      </div>
      <div className="mt-16 text-center">
        <p className="text-gray-500">Best Skin Care Product Award Winner</p>
        <p className="text-gray-700 font-medium">SINCE 2001 <span className="underline cursor-pointer">LEARN MORE</span></p>
      </div>
    </section>
  );
}
