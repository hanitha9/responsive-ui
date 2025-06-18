// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">SKINCARE</h3>
          <p className="text-gray-400">
            Premium skincare products that restore, protect, and enhance your natural glow.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold mb-4">Shop</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">All Products</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Serum</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Sunscreen</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Bundle</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-4">About</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Our Story</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Ingredients</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Sustainability</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold mb-4">Legal</h4>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Cookies Policy</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-gray-800 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Skincare. All rights reserved.</p>
      </div>
    </footer>
  );
}
