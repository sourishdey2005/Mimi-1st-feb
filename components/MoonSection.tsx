
import React from 'react';

export const MoonSection: React.FC = () => {
  return (
    <section id="moon-section" className="py-20 px-6 max-w-5xl mx-auto text-center">
      <div className="mb-12 relative inline-block">
        <div className="w-40 h-40 bg-white rounded-full shadow-[0_0_50px_rgba(255,255,255,0.8)] mx-auto float-animation relative overflow-hidden">
          <div className="absolute inset-0 bg-yellow-50 opacity-20"></div>
          <div className="absolute top-4 left-6 w-8 h-8 bg-gray-100 rounded-full opacity-30"></div>
          <div className="absolute bottom-8 right-10 w-6 h-6 bg-gray-100 rounded-full opacity-30"></div>
        </div>
        <div className="absolute -top-4 -right-10 text-3xl opacity-50">🌕</div>
      </div>
      
      <h2 className="text-3xl md:text-5xl font-bold font-poetic text-[#6b4e4e] mb-8">
        মাঘী পূর্ণিমা – যেদিন চাঁদও ঈর্ষা করেছিল
      </h2>
      
      <div className="bg-white/40 backdrop-blur-md p-8 rounded-3xl border border-pink-100 shadow-sm leading-loose">
        <p className="text-lg md:text-xl text-[#5d4037] font-poetic italic mb-6">
          "শীতের সেই শান্ত রাতে, মাঘী পূর্ণিমার স্নিগ্ধ জ্যোৎস্নায় যখন প্রকৃতি এক মায়াবী চাদরে ঢাকা পড়েছিল, ঠিক তখনই পৃথিবীর বুকে তোমার আগমন। ঐ আকাশের চাঁদ হয়তো সেদিন অবাক হয়ে তাকিয়ে ছিল, কারণ সে দেখল—তার চেয়েও উজ্জ্বল এক আলোর বিন্দু ধুলোর ধরণীতে ফুটে উঠেছে।"
        </p>
        <p className="text-lg text-[#795548]">
          তোমার হাসি যেন সেই পূর্ণিমার আলোর চেয়েও পবিত্র, যা আমার অন্ধকার দিনগুলোকে ভালোবাসার আলোয় রাঙিয়ে দেয়। মাঘী পূর্ণিমার এই তিথিটি কেবল ক্যালেন্ডারের পাতা নয়, এটি আমার কাছে একটি উৎসব—তোমাকে পাওয়ার উৎসব।
        </p>
      </div>
    </section>
  );
};
