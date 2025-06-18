// components/FAQ.tsx
'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "Are your products safe for sensitive skin?",
    answer: "Yes, our products are formulated to be gentle and suitable for sensitive skin types."
  },
  {
    question: "Are your products cruelty-free?",
    answer: "Absolutely! Our products are cruelty-free, and most are vegan."
  },
  {
    question: "What's your return policy?",
    answer: "We offer a 30-day return policy for unused products with original packaging."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship to most countries worldwide."
  },
  {
    question: "How do I choose the right product?",
    answer: "Visit our product guide or contact our skincare specialists for personalized recommendations."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Answers to Your Skincare Questions, All in One Place.
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left py-4"
              >
                <h3 className="text-lg font-medium">{faq.question}</h3>
                <span className="text-xl ml-4">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </button>
              
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-4 text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Join The Skincare Community Now.</h3>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-black">Facebook</a>
            <a href="#" className="text-gray-700 hover:text-black">Instagram</a>
            <a href="#" className="text-gray-700 hover:text-black">YouTube</a>
          </div>
        </div>
      </div>
    </section>
  );
}
