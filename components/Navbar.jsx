import React from 'react';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-[#f5f7e8]">
      <h1 className="text-xl font-bold">SKINCARE</h1>
      <ul className="hidden md:flex gap-6 text-sm">
        <li>All Products</li>
        <li>Serum</li>
        <li>Sunscreen</li>
        <li>Bundle</li>
      </ul>
      <div className="flex gap-4">
        <span>Cart (1)</span>
        <span className="hidden md:inline">👤</span>
      </div>
    </nav>
  );
}
