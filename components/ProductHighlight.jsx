import React from 'react';

export default function ProductHighlight() {
  return (
    <section className="grid md:grid-cols-2 gap-10 p-6 items-center">
      <div>
        <h3 className="text-2xl font-semibold">YOUR SKIN DESERVES THE BEST CARE.</h3>
        <ul className="mt-4 space-y-4 text-sm text-gray-600">
          <li><strong>01 Bio Ingredients</strong> – Naturally beautiful results</li>
          <li><strong>02 Everything Natural</strong> – Pure skin care solution</li>
          <li><strong>03 All Handmade</strong> – Crafted with love and science</li>
        </ul>
      </div>
      <img src="/assets/model-mask.png" alt="Skin Care Woman" className="rounded-xl shadow-xl" />
    </section>
  );
}
