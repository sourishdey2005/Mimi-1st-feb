
import React from 'react';

interface ProposalProps {
  onAccept: () => void;
  isAccepted: boolean;
}

export const Proposal: React.FC<ProposalProps> = ({ onAccept, isAccepted }) => {
  return (
    <section className="py-32 px-6 text-center relative">
      <div className="max-w-4xl mx-auto">
        {!isAccepted ? (
          <>
            <div className="mb-10 text-7xl animate-bounce">💍</div>
            <h2 className="text-4xl md:text-6xl font-bold font-poetic text-[#6b4e4e] mb-12">
              একটি বিশেষ প্রশ্ন...
            </h2>
            <div className="bg-white/60 backdrop-blur-lg p-12 md:p-20 rounded-[3rem] shadow-2xl border-2 border-pink-100 relative overflow-hidden">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-100/30 rounded-full blur-3xl"></div>
              <p className="text-2xl md:text-4xl text-[#7d3c3c] font-poetic mb-16 leading-relaxed relative z-10 italic">
                "এই মাঘী পূর্ণিমার স্নিগ্ধ জ্যোৎস্নার নিচে দাঁড়িয়ে, <br className="hidden md:block"/> 
                হাজার তারার সাক্ষী রেখে আমি তোমায় জিজ্ঞেস করছি— <br className="my-4 block" />
                তুমি কি আজীবন আমার জীবনের ধ্রুবতারা হয়ে থাকবে?"
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 relative z-10">
                <button 
                  onClick={onAccept}
                  className="group px-12 py-6 bg-gradient-to-r from-pink-400 to-red-400 hover:from-pink-500 hover:to-red-500 text-white rounded-full shadow-[0_10px_30px_rgba(244,114,182,0.4)] transform hover:scale-110 active:scale-95 transition-all font-bold text-2xl flex items-center"
                >
                  <span className="mr-3 animate-pulse">❤</span> হ্যাঁ, আমি তোমারই
                </button>
                <button 
                  className="px-8 py-4 text-gray-400 border-2 border-gray-200 rounded-full cursor-not-allowed text-lg opacity-40 italic"
                  disabled
                >
                  অন্য অপশন নেই...
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="bg-gradient-to-br from-white to-pink-50 p-12 md:p-24 rounded-[4rem] shadow-2xl border-4 border-white animate-celebrate relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/hearts.png')] opacity-5"></div>
            <h3 className="text-4xl md:text-6xl font-bold text-pink-600 mb-8 font-poetic">আমার রাজকুমারী!</h3>
            <p className="text-2xl md:text-3xl text-[#7d3c3c] font-poetic leading-[3.5rem] italic">
              "আমি পৃথিবীর সবচেয়ে ভাগ্যবান মানুষ। <br />
              আজ থেকে আমার প্রতিটি নিঃশ্বাস তোমার নামে। <br />
              ভালোবাসি, অনেক ভালোবাসি।"
            </p>
            <div className="mt-12 text-7xl animate-pulse">♾️💖✨</div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes celebrate {
          0% { transform: scale(0.9); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-celebrate {
          animation: celebrate 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `}</style>
    </section>
  );
};
