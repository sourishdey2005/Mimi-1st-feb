
import React from 'react';

export const MyEyes: React.FC = () => {
  const qualities = [
    { title: "তোমার হাসি", desc: "হাজারো দুঃখের মাঝে এক চিলতে শান্তির ছোঁয়া।" },
    { title: "তোমার যত্ন", desc: "যেন শ্রাবণ মেঘের পর শীতল এক প্রশান্তি।" },
    { title: "তোমার উপস্থিতি", desc: "আমার মরুভূমি জীবনে এক স্নিগ্ধ বসন্তের আগমন।" }
  ];

  return (
    <section className="py-20 bg-pink-50/30 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold font-poetic text-center text-[#6b4e4e] mb-16">
          আমার চোখে তুমি
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {qualities.map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-md border-b-4 border-[#f9a8d4] transform transition-all hover:-translate-y-2">
              <h3 className="text-xl font-bold text-[#7d3c3c] mb-4 font-poetic">{item.title}</h3>
              <p className="text-[#8c6b6b] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-2xl font-poetic text-[#6b4e4e] italic leading-relaxed">
            "তুমি কেবল আমার ভালোবাসা নও,<br/>তুমি আমার বেঁচে থাকার কারণ।"
          </p>
        </div>
      </div>
    </section>
  );
};
