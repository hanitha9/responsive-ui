// src/components/Products.tsx
import Image from 'next/image';

export default function Products() {
  return (
    <div className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-serif font-bold text-center mb-12">
          Skincare That Brings Out Your Natural Radiance
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="border rounded-lg overflow-hidden shadow-sm">
              <div className="h-64 relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold">{product.name}</h3>
                <p className="text-gray-600 my-2">{product.description}</p>
                <p className="text-lg font-medium">{product.price}</p>
                <button className="mt-4 w-full py-2 border border-black rounded-full hover:bg-black hover:text-white transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const products = [
  {
    id: 1,
    name: "ALYA SKIN CLEANSER",
    description: "Chair of the Health Training Committee",
    price: "FROM $25.00",
    image: "/assets/images/product-1.jpg" // Your product image
  },
  // Add more products
];
