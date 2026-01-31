
import React from 'react';

export const MemoryCorner: React.FC = () => {
  const memories = [
    { url: "https://picsum.photos/400/500?random=1", caption: "আমাদের প্রথম দেখা হওয়ার সেই লাজুক মুহূর্ত।" },
    { url: "https://picsum.photos/400/500?random=2", caption: "একসাথে কাটানো সেই অলস বিকেলের হাসি।" },
    { url: "https://picsum.photos/400/500?random=3", caption: "বৃষ্টির দিনে রিক্সার সেই ছোট পথ চলা।" },
    { url: "https://picsum.photos/400/500?random=4", caption: "তোমার প্রতিটি জন্মদিন আমার কাছে এক নতুন স্বপ্ন।" }
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold font-poetic text-center text-[#6b4e4e] mb-16">
        আমাদের ছোট ছোট মুহূর্ত
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {memories.map((memo, index) => (
          <div key={index} className="group relative bg-white p-3 rounded-xl shadow-lg transform rotate-[-2deg] transition-all hover:rotate-0 hover:scale-105">
            <img 
              src={memo.url} 
              alt="স্মৃতি" 
              className="w-full h-64 object-cover rounded-lg mb-4 filter sepia-[0.2]"
            />
            <p className="text-center text-sm font-poetic text-[#7d3c3c] italic py-2">
              {memo.caption}
            </p>
            <div className="absolute top-2 right-2 w-6 h-6 bg-red-400 rounded-full flex items-center justify-center text-white text-[10px] shadow-inner">
              ❤
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
