// components/Navbar.tsx
'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-800">SKINCARE</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-gray-700 hover:text-gray-900">All Products</Link>
            <Link href="#" className="text-gray-700 hover:text-gray-900">Serum</Link>
            <Link href="#" className="text-gray-700 hover:text-gray-900">Sunscreen</Link>
            <Link href="#" className="text-gray-700 hover:text-gray-900">Bundle</Link>
            <Link href="#" className="text-gray-700 hover:text-gray-900">Cart</Link>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">All Products</Link>
            <Link href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Serum</Link>
            <Link href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Sunscreen</Link>
            <Link href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Bundle</Link>
            <Link href="#" className="block px-3 py-2 text-gray-700 hover:text-gray-900">Cart</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
