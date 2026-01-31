
import React from 'react';

interface ProposalProps {
  onAccept: () => void;
  isAccepted: boolean;
}

export const Proposal: React.FC<ProposalProps> = ({ onAccept, isAccepted }) => {
  return (
    <section className="py-24 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-6xl animate-pulse">💍</div>
        
        <h2 className="text-4xl md:text-6xl font-bold font-poetic text-[#6b4e4e] mb-12">
          একটি প্রশ্ন, একটি সারাজীবন
        </h2>
        
        {!isAccepted ? (
          <div className="bg-[#fff0f3] p-12 rounded-[2rem] shadow-xl border border-pink-200">
            <p className="text-2xl md:text-3xl text-[#7d3c3c] font-poetic mb-12 leading-relaxed">
              "এই মাঘী পূর্ণিমার সাক্ষী রেখে আমি তোমায় বলছি— <br/> 
              তুমি কি সারাজীবনের জন্য আমার হবে? <br/>
              আমার অগোছালো জীবনের একটুখানি শান্তি হয়ে থাকবে?"
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <button 
                onClick={onAccept}
                className="px-10 py-5 bg-red-400 hover:bg-red-500 text-white rounded-full shadow-lg transform hover:scale-110 transition-all font-bold text-xl flex items-center"
              >
                <span className="mr-2">❤</span> হ্যাঁ, সারাজীবনের জন্য
              </button>
              <button 
                className="px-8 py-4 bg-gray-200 text-gray-500 rounded-full cursor-not-allowed text-lg opacity-60"
                disabled
              >
                না (অপশনটি নেই!)
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-green-50 p-12 rounded-[2rem] shadow-xl border border-green-200 animate-[fadeIn_1s_ease-in]">
            <h3 className="text-3xl font-bold text-green-700 mb-6 font-poetic">আমি জানতাম তুমি আমারই!</h3>
            <p className="text-xl text-green-600 font-poetic leading-loose">
              আমাদের এই ভালোবাসার বন্ধন অটুট থাকুক অনন্তকাল। <br/> 
              ধন্যবাদ আমার পৃথিবী হওয়ার জন্য।
            </p>
            <div className="mt-8 text-5xl">🥂✨</div>
          </div>
        )}
      </div>
    </section>
  );
};
