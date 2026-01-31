
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 text-center border-t border-pink-100 bg-white/30">
      <div className="max-w-2xl mx-auto px-6">
        <p className="text-2xl font-poetic text-[#6b4e4e] mb-6 italic">
          “এই চাঁদ, এই সময়, আর সারাজীবন—সবটাই তোমার”
        </p>
        <div className="w-24 h-px bg-[#f9a8d4] mx-auto mb-8"></div>
        <p className="text-xl font-bold font-poetic text-[#7d3c3c]">
          সবসময়ের জন্য, তোমারই
        </p>
        <p className="mt-12 text-sm text-[#a38b8b] tracking-widest font-light">
          ❤ চিরন্তন ভালোবাসায় রচিত ❤
        </p>
      </div>
    </footer>
  );
};
