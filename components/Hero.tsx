
import React from 'react';

export const Hero: React.FC = () => {
  const scrollToNext = () => {
    const nextSection = document.getElementById('moon-section');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="h-screen flex flex-col items-center justify-center text-center px-4 relative">
      {/* Dynamic moonlight backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-yellow-50/10 blur-[150px] rounded-full -z-10 animate-pulse-slow"></div>
      
      <div className="space-y-4 animate-fade-in-up">
        <h1 className="text-5xl md:text-8xl font-bold font-poetic text-[#6b4e4e] mb-6 tracking-wide glow-text drop-shadow-sm">
          দুটি তারিখ নয়, <br className="hidden md:block" /> একটাই ভালোবাসা
        </h1>
        
        <p className="text-xl md:text-3xl text-[#8c6b6b] italic mb-12 max-w-3xl mx-auto font-light leading-relaxed">
          “মাঘী পূর্ণিমার আলোয় জন্ম, আমার জীবনের আলো হয়ে ওঠা”
        </p>
      </div>
      
      <button 
        onClick={scrollToNext}
        className="group relative px-10 py-5 bg-[#fbcfe8] hover:bg-[#f9a8d4] text-[#7d3c3c] rounded-full shadow-2xl transition-all duration-500 transform hover:scale-105 font-bold text-xl border-4 border-white overflow-hidden"
      >
        <span className="relative z-10 flex items-center">
          ভালোবাসার গল্প শুরু হোক 
          <span className="ml-2 group-hover:translate-x-2 transition-transform">✨</span>
        </span>
        <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
      </button>

      <div className="absolute bottom-12 animate-bounce cursor-pointer opacity-40 hover:opacity-100 transition-opacity" onClick={scrollToNext}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#f9a8d4]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      <style>{`
        @keyframes pulse-slow {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.1; }
          50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.2; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fade-in-up 1.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};
