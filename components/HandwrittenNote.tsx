
import React from 'react';

export const HandwrittenNote: React.FC = () => {
  return (
    <section className="py-20 px-6 flex justify-center">
      <div className="max-w-2xl w-full bg-[#fffcf0] p-10 md:p-16 shadow-[0_10px_50px_rgba(0,0,0,0.1)] rounded-sm relative border-l-[12px] border-[#e6ccb2] transform rotate-1 hover:rotate-0 transition-transform duration-500">
        {/* Paper texture and lines overlay */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(#000 0 1px, transparent 1px 32px)', backgroundSize: '100% 32px' }}></div>
        
        <div className="relative z-10 font-poetic text-[#5d4037]">
          <p className="text-right text-sm mb-8 opacity-60">মাঘী পূর্ণিমা, ২০২৫</p>
          
          <h3 className="text-2xl md:text-3xl font-bold mb-8 border-b-2 border-pink-200 inline-block pb-2">
            আমার প্রিয়তমার প্রতি,
          </h3>
          
          <div className="space-y-6 text-xl leading-[2.2rem] italic">
            <p>
              জানি না কতটা শব্দে প্রকাশ করতে পারব, কিন্তু তুমি আমার জীবনের সেই ধ্রুবতারা যা আমায় পথ হারানো থেকে বাঁচায়। তোমার হাসির এক ঝলক আমার সারাদিনের ক্লান্তি মুছে দিতে যথেষ্ট।
            </p>
            <p>
              আজ তোমার জন্মদিনে আমার কাছে দেওয়ার মতো কোনো দামি উপহার নেই, আছে শুধু এক বুক ভালোবাসা আর সারাজীবন পাশে থাকার এক নিটোল প্রতিশ্রুতি। 
            </p>
            <p>
              তুমি শুধু আমার প্রেমিকা নও, তুমি আমার অর্ধেক আত্মা। মাঘী পূর্ণিমার এই আলোয় যেমন পৃথিবী সেজেছে, তুমিও তেমনি আমার জীবনকে আলোকোজ্জ্বল করে রেখো।
            </p>
          </div>
          
          <div className="mt-12 pt-8 border-t border-pink-100 flex flex-col items-end">
            <p className="text-lg opacity-70">ইতি,</p>
            <p className="text-2xl font-bold mt-2 text-[#7d3c3c]">তোমারই ভালোবাসার মানুষ</p>
          </div>
        </div>
        
        {/* Decorative corner flower */}
        <div className="absolute -bottom-6 -left-6 text-5xl">🌸</div>
      </div>
    </section>
  );
};
