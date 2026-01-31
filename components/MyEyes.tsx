
import React from 'react';

export const MyEyes: React.FC = () => {
  const qualities = [
    { 
      title: "তোমার হাসি", 
      icon: "✨",
      desc: "তোমার ঐ স্নিগ্ধ হাসি যেন শরতের শান্ত নীল আকাশে এক ঝলক রোদ্দুর, যা আমার ক্লান্ত মনের সব বিষণ্ণতা ধুয়ে মুছে দিয়ে এক নতুন আশার আলো জ্বালায়।" 
    },
    { 
      title: "তোমার যত্ন", 
      icon: "🌸",
      desc: "তোমার মায়াবী সেই যত্ন যেন শ্রাবণের ধারায় ভিজে আসা কদম ফুলের সুবাস; যা আমার রুক্ষ অস্তিত্বকে এক অপার্থিব প্রশান্তির চাদরে জড়িয়ে রাখে।" 
    },
    { 
      title: "তোমার উপস্থিতি", 
      icon: "🦋",
      desc: "আমার এই ধূসর জীবনের মরুপ্রান্তরে তোমার পদধূলি ঠিক যেন মরীচিকার ভিড়ে এক পরম শীতল মরূদ্যান, যেখানে আমি খুঁজে পাই আমার একান্ত আশ্রয়।" 
    },
    { 
      title: "তোমার কণ্ঠস্বর", 
      icon: "🎶",
      desc: "তোমার প্রতিটি কথা যেন এক একটি সুরের লহরী, যা আমার হৃদয়ের প্রতিটি কোণে এক মায়াবী ঝংকার তুলে আমার রুক্ষ পৃথিবীটাকে সুরে সুরে ভরিয়ে দেয়।" 
    },
    { 
      title: "তোমার চোখ", 
      icon: "🌌",
      desc: "তোমার ওই কাজলমাখা চোখের মায়ায় যেন সারা জাহানের নিবিড় মমতা লুকিয়ে আছে; যেখানে এক পলক তাকালে আমি আমার সমস্ত অস্তিত্ব হারিয়ে এক মহাজাগতিক প্রশান্তি খুঁজে পাই।" 
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-pink-50/20 to-transparent px-6 relative overflow-hidden">
      {/* Decorative floating icons */}
      <div className="absolute top-10 left-10 opacity-20 animate-bounce text-3xl">💝</div>
      <div className="absolute bottom-10 right-10 opacity-20 animate-pulse text-3xl">💖</div>

      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold font-poetic text-center text-[#6b4e4e] mb-20 tracking-wide">
          আমার চোখে তুমি
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {qualities.map((item, index) => (
            <div 
              key={index} 
              className={`group bg-white/70 backdrop-blur-md p-10 rounded-[2.5rem] shadow-xl border border-white/50 transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:bg-white ${index >= 3 ? 'lg:col-span-1 md:col-span-1' : ''}`}
            >
              <div className="w-16 h-16 bg-[#fff0f3] rounded-full flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#7d3c3c] mb-6 font-poetic">
                {item.title}
              </h3>
              <p className="text-[#8c6b6b] leading-[2rem] text-lg font-light italic">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <div className="inline-block p-1 bg-gradient-to-r from-transparent via-pink-200 to-transparent w-full max-w-md mb-8"></div>
          <p className="text-3xl md:text-4xl font-poetic text-[#6b4e4e] italic leading-loose font-medium px-4">
            "তুমি কেবল আমার জীবনের বসন্ত নও,<br className="hidden md:block" /> তুমি আমার প্রতিটি মুহূর্তের বেঁচে থাকার পূর্ণতা।"
          </p>
          <div className="mt-8 text-pink-300 text-2xl animate-pulse">❦</div>
        </div>
      </div>
    </section>
  );
};
