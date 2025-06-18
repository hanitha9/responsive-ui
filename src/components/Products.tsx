'use client'; // Added to ensure it works as a Client Component (though not strictly needed here unless state/effects are added)
import Image from 'next/image';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { PRODUCTS } from '@/util/constants'; // Try alias first

export default function Products() {
  const productRef = useRef(null);

  const slideProduct = (direction) => {
    gsap.to(productRef.current, {
      x: direction === 'left' ? '-=300' : '+=300',
      duration: 0.5,
      ease: 'power2.inOut',
    });
  };

  return (
    <section className="py-12 px-4 bg-[#F5F1E9]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">Skincare That Brings Out Your Natural Radiance</h2>
        <div ref={productRef} className="flex overflow-hidden space-x-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="w-64 flex-shrink-0 border rounded-lg overflow-hidden shadow-sm">
              <div className="h-64 relative">
                <Image src={product.image} alt={product.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{product.name}</h3>
                <p className="text-gray-600 my-2">{product.description}</p>
                <p className="text-lg font-medium">{product.price}</p>
                <button className="mt-4 w-full py-2 border border-[#1A2E2E] rounded-full hover:bg-[#1A2E2E] hover:text-white transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4 space-x-4">
          <button onClick={() => slideProduct('left')} className="p-2 bg-[#1A2E2E] text-white rounded-full hover:bg-gray-800">←</button>
          <button onClick={() => slideProduct('right')} className="p-2 bg-[#1A2E2E] text-white rounded-full hover:bg-gray-800">→</button>
        </div>
      </div>
    </section>
  );
}
