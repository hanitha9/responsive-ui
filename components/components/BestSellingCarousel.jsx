import React, { useRef } from 'react';
import { gsap } from 'gsap';

export default function BestSellingCarousel() {
  const carouselRef = useRef();

  const scrollLeft = () => {
    gsap.to(carouselRef.current, { scrollLeft: '-=300', duration: 0.5 });
  };
  const scrollRight = () => {
    gsap.to(carouselRef.current, { scrollLeft: '+=300', duration: 0.5 });
  };

  return (
    <section className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Best Selling Products</h3>
        <div className="space-x-2">
          <button onClick={scrollLeft}>◀️</button>
          <button onClick={scrollRight}>▶️</button>
        </div>
      </div>
      <div ref={carouselRef} className="flex gap-4 overflow-x-auto scrollbar-hide">
        {["alya", "ritual", "body"].map((item, index) => (
          <div key={index} className="min-w-[200px] bg-white p-4 rounded shadow hover:scale-105 transition">
            <img src={`/assets/${item}.png`} alt={item} />
            <p className="mt-2 font-medium">{item.toUpperCase()}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
