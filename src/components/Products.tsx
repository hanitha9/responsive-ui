// components/Products.tsx
'use client';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    name: "ALYA SKIN CLEANSER",
    price: "FROM $25.00",
    description: "Chair of the Health Training Committee"
  },
  {
    name: "RITUAL OF SAKURA",
    price: "FROM $25.00",
    description: "HIGHWAY: 20-30 days"
  },
  {
    name: "THE BODY LOTION",
    price: "FROM $25.00",
    description: "Natural skin texture"
  }
];

export default function Products() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.from(sectionRef.current.querySelectorAll('.product-card'), {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          toggleActions: "play none none none"
        },
        ease: "power3.out"
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Skincare That Brings Out Your Natural Radiance</h2>
      </div>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div key={index} className="product-card bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-bold mb-2">{product.name}</h3>
            <p className="text-gray-500 mb-4">{product.description}</p>
            <p className="text-lg font-medium">{product.price}</p>
            <button className="mt-6 w-full py-2 border border-black rounded-full hover:bg-black hover:text-white transition-colors duration-300">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <h3 className="text-2xl font-bold mb-4">Feel Beautiful Inside and Out with Every Product.</h3>
        <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300">
          Shop Now
        </button>
      </div>
    </section>
  );
}
