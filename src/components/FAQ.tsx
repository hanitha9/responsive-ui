'use client';
import { useState, useRef } from 'react';
import { gsap } from 'gsap';
import { useAnimation } from '@/hooks/useAnimation';

const faqs = [
  { question: "Are your products safe for sensitive skin?", answer: "Yes, our products are gentle for sensitive skin." },
  { question: "Are your products cruelty-free?", answer: "Absolutely, all are cruelty-free." },
  { question: "What's your return policy?", answer: "30-day return for unused products." },
  { question: "Do you ship internationally?", answer: "Yes, to most countries." },
  { question: "How do I choose the right product?", answer: "Visit our guide or contact us." },
];

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
    const answer = answerRefs.current[index];
    useAnimation(
      (target) => gsap.to(target, {
        height: openFaq === index ? 0 : 'auto',
        opacity: openFaq === index ? 0 : 1,
        duration: 0.5,
        ease: 'power2.inOut',
      }),
      answer
    );
  };

  return (
    <section className="py-20 px-6 bg-[#F5F1E9]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">Answers to Your Skincare Questions, All in One Place.</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <button
                onClick={() => toggleFaq(index)}
                className="flex justify-between items-center w-full text-left py-4"
              >
                <h3 className="text-lg font-medium">{faq.question}</h3>
                <span className="text-xl">{openFaq === index ? '−' : '+'}</span>
              </button>
              <div ref={(el) => (answerRefs.current[index] = el)} className="overflow-hidden" style={{ height: 0, opacity: 0 }}>
                <p className="pb-4 text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Join The Skincare Community Now.</h3>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-[#1A2E2E]">Facebook</a>
            <a href="#" className="text-gray-700 hover:text-[#1A2E2E]">Instagram</a>
            <a href="#" className="text-gray-700 hover:text-[#1A2E2E]">YouTube</a>
          </div>
        </div>
      </div>
    </section>
  );
}
