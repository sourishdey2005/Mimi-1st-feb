
import React from 'react';

export const BirthdayMessage: React.FC = () => {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/handmade-paper.png')]"></div>
      
      <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm p-10 md:p-16 rounded-[3rem] border-2 border-pink-100 shadow-2xl relative text-center">
        <div className="mb-10 text-4xl">🕯️</div>
        
        <h2 className="text-3xl md:text-4xl font-bold font-poetic text-[#6b4e4e] mb-10">
          এই পূর্ণিমায় তোমার জন্য
        </h2>
        
        <div className="space-y-8 text-[#5d4037]">
          <div className="text-xl md:text-2xl font-poetic leading-loose italic">
            "মাঘী পূর্ণিমার সেই স্নিগ্ধ রাতে,<br/>
            তুমি এলে এই ধরণীর হাতে।<br/>
            চাঁদ হাসে ঐ আকাশের কোণে,<br/>
            তুমি হাসো মোর হৃদয়ের গহনে।"
          </div>
          
          <div className="h-px bg-pink-200 w-1/2 mx-auto"></div>
          
          <p className="text-lg leading-relaxed">
            শুভ জন্মদিন আমার হৃদস্পন্দন! তোমার এই বিশেষ দিনে প্রার্থনা করি, তোমার জীবন যেন ঐ মাঘী পূর্ণিমার মতোই পূর্ণতায় ভরে থাকে। কোনো দুঃখ যেন তোমায় স্পর্শ করতে না পারে, কোনো আঁধার যেন তোমার হাসি কেড়ে না নেয়। 
          </p>
          
          <p className="text-lg leading-relaxed font-semibold">
            তুমি আমার জীবনে বসন্তের মতো এসেছো, আর আমার এই ধূসর জগতকে রঙিন করে তুলেছ। আমি প্রতিশ্রুতি দিচ্ছি, প্রতিটি পূর্ণিমায় আর প্রতিটি অমাবস্যায়, আমি তোমার হাতটি এভাবেই ধরে থাকব।
          </p>
        </div>

        <div className="mt-12 flex justify-center space-x-2">
          {[1,2,3].map(i => <span key={i} className="text-pink-300">🌸</span>)}
        </div>
      </div>
    </section>
  );
};
