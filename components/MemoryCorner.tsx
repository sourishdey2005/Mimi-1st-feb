
import React from 'react';

export const MemoryCorner: React.FC = () => {
  // এখানে আপনি আপনার নিজের ছবির লিঙ্ক (URL) বসাতে পারেন
  const memories = [
    { 
      url: "https://res.cloudinary.com/dodhvvewu/image/upload/v1769251855/20260123_140909_jo63yn.jpg", 
      caption: "আমাদের প্রথম দেখা হওয়ার সেই লাজুক মুহূর্ত।",
      rotation: "rotate-[-3deg]"
    },
    { 
      url: "https://res.cloudinary.com/dodhvvewu/image/upload/v1769251826/20260123_142728_swynsq.jpg", 
      caption: "একসাথে কাটানো সেই অলস বিকেলের মিষ্টি হাসি।",
      rotation: "rotate-[2deg]"
    },
    { 
      url: "https://res.cloudinary.com/dodhvvewu/image/upload/v1769251820/20260123_143607_dpxou9.jpg", 
      caption: "বৃষ্টির দিনে রিক্সার সেই ছোট পথ চলা আর এক চিলতে সুখ।",
      rotation: "rotate-[-1deg]"
    },
    { 
      url: "https://res.cloudinary.com/dodhvvewu/image/upload/v1769251823/20260123_143854_puiqwt.jpg", 
      caption: "তোমার প্রতিটি জন্মদিন আমার কাছে এক নতুন স্বপ্নের শুরু।",
      rotation: "rotate-[4deg]"
    }
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5">
        <div className="absolute top-10 left-10 text-9xl">📸</div>
        <div className="absolute bottom-10 right-10 text-9xl">🎞️</div>
      </div>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-poetic text-center text-[#6b4e4e] mb-20">
          আমাদের হৃদয়ের অ্যালবামে...
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {memories.map((memo, index) => (
            <div 
              key={index} 
              className={`group relative bg-[#fdfdfd] p-4 pb-12 shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-all duration-500 hover:scale-105 hover:z-20 hover:shadow-[0_20px_50px_rgba(244,114,182,0.2)] ${memo.rotation}`}
            >
              {/* Tape effect on top */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-24 h-8 bg-pink-100/60 backdrop-blur-sm border border-white/30 rotate-[-1deg] z-10 hidden group-hover:block transition-all"></div>
              
              <div className="relative overflow-hidden aspect-[4/5] rounded-sm mb-6">
                <img 
                  src={memo.url} 
                  alt="স্মৃতি" 
                  className="w-full h-full object-cover filter sepia-[0.1] group-hover:sepia-0 transition-all duration-700"
                />
                {/* Overlay shine */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              <p className="text-center text-lg font-poetic text-[#7d3c3c] italic px-2 leading-relaxed">
                "{memo.caption}"
              </p>

              {/* Little decorative heart */}
              <div className="absolute bottom-3 right-3 text-pink-200 opacity-40 group-hover:opacity-100 group-hover:scale-125 transition-all text-xl">
                ♥
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-[#a38b8b] font-poetic italic">
            "প্রতিটি ছবি কথা বলে, প্রতিটি ছবিতেই মিশে আছে এক একটি না বলা গল্প..."
          </p>
        </div>
      </div>
    </section>
  );
};
