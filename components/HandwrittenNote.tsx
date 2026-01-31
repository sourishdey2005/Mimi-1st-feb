
import React, { useState, useEffect, useRef } from 'react';

const useTypewriter = (text: string, speed: number = 50, start: boolean = false) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!start) return;
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed, start]);

  return displayedText;
};

export const HandwrittenNote: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const fullText = `শুভ জন্মদিন আমার প্রাণের প্রদীপ,

আজকের এই বিশেষ রাতে, যখন আকাশ জুড়ে মাঘী পূর্ণিমার সেই মায়াবী আলো খেলা করছে, আমার কেবলই মনে পড়ছে সেই মুহূর্তের কথা যেদিন তুমি প্রথম এই পৃথিবীতে এসেছিলে। বিধাতা হয়তো সেদিন খুব যত্ন করে নিজের হাতে তোমায় গড়েছিলেন, আর পাঠিয়েছিলেন আমার জীবনের অন্ধকার দূর করতে।

তুমি জানো কি? তোমার ওই চোখের কোণে যখন হাসি ফুটে ওঠে, তখন আমার মনে হয় সমস্ত পৃথিবী বুঝি থমকে দাঁড়িয়েছে। তোমার প্রতিটি কথা, প্রতিটি স্পর্শ আর প্রতিটি মুহূর্ত আমার কাছে এক একটি অমূল্য রত্ন। তুমি শুধু আমার প্রেমিকা নও, তুমি আমার নীরব প্রার্থনার উত্তর।

আজ তোমার জন্মদিনে আমি প্রতিশ্রুতি দিচ্ছি— যতদিন এই আকাশে চাঁদ উঠবে, যতদিন এই হৃদয়ে স্পন্দন থাকবে, ততদিন আমি তোমার হয়েই থাকব। তোমার সব দুঃখ আমি নিজের করে নেব, আর তোমার মুখে হাসি ফোটানোই হবে আমার একমাত্র সাধনা।

ভালো থেকো আমার মাঘী পূর্ণিমার চাঁদ, আরও হাজার বছর এভাবেই আমার আকাশকে আলোয় রাঙিয়ে দিও। ভালোবাসি, তোমায় অনেক ভালোবাসি।`;

  const displayedContent = useTypewriter(fullText, 40, isVisible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 flex justify-center relative">
      {/* Decorative floating ink drops or sparkles */}
      <div className="absolute top-10 left-10 text-pink-200 animate-pulse">✨</div>
      <div className="absolute bottom-10 right-10 text-yellow-200 animate-bounce">✨</div>

      <div className="max-w-3xl w-full bg-[#fffcf0] p-10 md:p-20 shadow-[0_20px_60px_rgba(0,0,0,0.15)] rounded-sm relative border-l-[15px] border-[#e6ccb2] transform rotate-1 hover:rotate-0 transition-all duration-700 overflow-hidden group">
        
        {/* Paper texture overlay */}
        <div className="absolute inset-0 opacity-15 pointer-events-none" 
             style={{ 
               backgroundImage: 'repeating-linear-gradient(rgba(0,0,0,0.05) 0 1px, transparent 1px 36px)', 
               backgroundSize: '100% 36px' 
             }}>
        </div>

        {/* Subtle candle flickering effect light */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-orange-100/20 blur-[80px] rounded-full animate-flicker pointer-events-none"></div>
        
        <div className="relative z-10 font-poetic text-[#5d4037]">
          <div className="flex justify-between items-start mb-10">
            <div className="text-4xl text-red-300 opacity-60">🖋️</div>
            <p className="text-right text-sm opacity-60 italic">মাঘী পূর্ণিমার প্রহর, ২০২৫</p>
          </div>
          
          <h3 className="text-2xl md:text-4xl font-bold mb-10 border-b-2 border-pink-200 inline-block pb-3 text-[#7d3c3c]">
            আমার হিয়া-মণি,
          </h3>
          
          <div className="space-y-8 text-xl md:text-2xl leading-[2.6rem] italic whitespace-pre-wrap min-h-[400px]">
            {displayedContent}
            <span className="inline-block w-1 h-8 bg-pink-400 ml-1 animate-caret"></span>
          </div>
          
          <div className="mt-16 pt-10 border-t border-pink-100 flex flex-col items-end">
            <p className="text-lg opacity-70 mb-2">চিরদিনের জন্য তোমারই,</p>
            <p className="text-3xl font-bold text-[#7d3c3c] drop-shadow-sm">
              তোমার জীবনের ধ্রুবতারা
            </p>
          </div>
        </div>
        
        {/* Floating animated hearts */}
        <div className="absolute -bottom-8 -left-8 text-6xl group-hover:scale-125 transition-transform duration-500">🌹</div>
        <div className="absolute top-10 right-10 text-xl opacity-20">🕊️</div>
      </div>

      <style>{`
        @keyframes flicker {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.1); }
        }
        .animate-flicker {
          animation: flicker 4s ease-in-out infinite;
        }
        @keyframes caret {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        .animate-caret {
          animation: caret 1s step-end infinite;
        }
      `}</style>
    </section>
  );
};
