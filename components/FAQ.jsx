import React, { useState } from 'react';

const faqs = [
  { q: 'Are your products safe for sensitive skin?', a: 'Yes, dermatologically tested.' },
  { q: 'Are your products cruelty-free?', a: 'Absolutely! All products are cruelty-free and vegan.' },
  { q: 'What’s your return policy?', a: 'Returns within 30 days accepted.' },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="p-6">
      <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
      {faqs.map((item, idx) => (
        <div key={idx} className="mb-2">
          <button onClick={() => setOpenIndex(openIndex === idx ? null : idx)} className="w-full text-left font-medium py-2 bg-gray-100 px-4">
            {item.q}
          </button>
          {openIndex === idx && <p className="bg-gray-50 px-4 py-2 text-sm">{item.a}</p>}
        </div>
      ))}
    </section>
  );
}
