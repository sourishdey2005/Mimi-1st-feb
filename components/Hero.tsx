
import React from 'react';

export const Hero: React.FC = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('moon-section');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="h-screen flex flex-col items-center justify-center text-center px-4 relative">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-yellow-100/30 blur-3xl rounded-full -z-10"></div>
      
      <h1 className="text-4xl md:text-7xl font-bold font-poetic text-[#6b4e4e] mb-6 tracking-wide glow-text">
        দুটি তারিখ নয়, একটাই ভালোবাসা
      </h1>
      
      <p className="text-lg md:text-2xl text-[#8c6b6b] italic mb-10 max-w-2xl font-light">
        “মাঘী পূর্ণিমার আলোয় জন্ম, আমার জীবনের আলো হয়ে ওঠা”
      </p>
      
      <button 
        onClick={scrollToNext}
        className="px-8 py-4 bg-[#fbcfe8] hover:bg-[#f9a8d4] text-[#7d3c3c] rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 font-medium text-lg border-2 border-white/50"
      >
        ভালোবাসার গল্প শুরু হোক
      </button>

      <div className="absolute bottom-10 animate-bounce cursor-pointer" onClick={scrollToNext}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#f9a8d4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};
