'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-[24px] py-[16px]">
        <div className="flex justify-between items-center">
          {/* Logo - exact 32px height from Figma */}
          <div className="h-[32px]">
            <span className="text-[20px] font-bold tracking-[-0.5px]">SKINCARE</span>
          </div>

          {/* Desktop Nav - exact spacing from Figma */}
          <nav className="hidden md:flex space-x-[32px]">
            <Link href="#" className="text-[14px] leading-[20px] hover:text-figma-primary-light transition-colors">
              All Products
            </Link>
            <Link href="#" className="text-[14px] leading-[20px] hover:text-figma-primary-light transition-colors">
              Serum
            </Link>
            <Link href="#" className="text-[14px] leading-[20px] hover:text-figma-primary-light transition-colors">
              Sunscreen
            </Link>
            <Link href="#" className="text-[14px] leading-[20px] hover:text-figma-primary-light transition-colors">
              Bundle
            </Link>
            <Link href="#" className="text-[14px] leading-[20px] hover:text-figma-primary-light transition-colors">
              Cart
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-[8px]"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M3 12H21" stroke="#2A2A2A" strokeWidth="2" strokeLinecap="round"/>
              <path d="M3 6H21" stroke="#2A2A2A" strokeWidth="2" strokeLinecap="round"/>
              <path d="M3 18H21" stroke="#2A2A2A" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Mobile Menu - exact styling from Figma */}
        {isOpen && (
          <div className="md:hidden mt-[16px] space-y-[16px] pb-[16px]">
            <Link href="#" className="block text-[14px] leading-[20px]">All Products</Link>
            <Link href="#" className="block text-[14px] leading-[20px]">Serum</Link>
            <Link href="#" className="block text-[14px] leading-[20px]">Sunscreen</Link>
            <Link href="#" className="block text-[14px] leading-[20px]">Bundle</Link>
            <Link href="#" className="block text-[14px] leading-[20px]">Cart</Link>
          </div>
        )}
      </div>
    </header>
  );
}
