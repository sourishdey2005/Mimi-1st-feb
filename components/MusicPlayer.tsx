
import React, { useState, useRef } from 'react';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log("User interaction needed for audio"));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio 
        ref={audioRef} 
        loop 
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" // Placeholder for romantic background music
      />
      <button
        onClick={toggleMusic}
        className={`p-4 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center ${
          isPlaying ? 'bg-[#fbcfe8] text-[#7d3c3c]' : 'bg-white text-gray-400'
        }`}
        title={isPlaying ? "মিউজিক বন্ধ করুন" : "মিউজিক চালান"}
      >
        {isPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            <line x1="1" y1="1" x2="23" y2="23" stroke="currentColor" strokeWidth="2" />
          </svg>
        )}
      </button>
      <div className="absolute bottom-full right-0 mb-2 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-poetic text-[#7d3c3c] opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        {isPlaying ? "সুর বাজছে..." : "গান শুনতে এখানে চাপ দিন"}
      </div>
    </div>
  );
};
