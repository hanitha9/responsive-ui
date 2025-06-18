'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Testimonials() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".testimonial-card", {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.15,
      scrollTrigger: {
        trigger: container.current,
        start: "top 70%"
      }
    });
  }, { scope: container });

  return (
    <section ref={container} className="py-[64px] px-[24px] bg-figma-secondary">
      <div className="container mx-auto">
        <h2 className="text-[32px] leading-[40px] font-serif font-bold mb-[48px] text-center">
          What Our Customers Say
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
          {[1, 2, 3].map((item) => (
            <div key={item} className="testimonial-card p-[32px] bg-white rounded-[8px] shadow-sm">
              <div className="flex items-center mb-[16px]">
                <div className="w-[48px] h-[48px] bg-gray-200 rounded-full mr-[16px]"></div>
                <div>
                  <h3 className="text-[16px] leading-[24px] font-medium">Customer {item}</h3>
                  <p className="text-[14px] leading-[20px] text-figma-primary-light">Verified Buyer</p>
                </div>
              </div>
              <p className="text-[16px] leading-[24px]">
                "This product transformed my skin! I've never felt more confident."
              </p>
              <div className="mt-[16px] flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FFD700" className="mr-[4px]">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
