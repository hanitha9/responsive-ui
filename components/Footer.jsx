import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#23332c] text-white text-sm p-6 mt-12">
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <p className="font-semibold mb-2">Join The Skincare Community Now.</p>
          <p className="text-gray-300">Facebook | Instagram | YouTube</p>
        </div>
        <div>
          <p>contact.skincare.com</p>
          <p className="text-gray-300">Terms | Privacy | Cookies</p>
        </div>
      </div>
    </footer>
  );
}
