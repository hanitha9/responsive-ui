export default function Footer() {
  return (
    <footer className="bg-[#1A2E2E] text-white py-12 px-6 relative">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">Join The Skincare Community Now.</h3>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
          <p>contact.skincare.com</p>
        </div>
      </div>
      <div className="mt-4 flex justify-between text-sm">
        <div className="space-x-4">
          <a href="#" className="text-gray-300 hover:text-white">Facebook</a>
          <a href="#" className="text-gray-300 hover:text-white">Instagram</a>
          <a href="#" className="text-gray-300 hover:text-white">YouTube</a>
        </div>
        <div className="space-x-4">
          <a href="#" className="text-gray-300 hover:text-white">Terms of Service</a>
          <a href="#" className="text-gray-300 hover:text-white">Privacy Policy</a>
          <a href="#" className="text-gray-300 hover:text-white">Cookies Policy</a>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-4 text-center text-4xl font-bold text-gray-200 opacity-20 pointer-events-none">
        SKINCARE
      </div>
    </footer>
  );
}
