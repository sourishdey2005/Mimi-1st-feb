
import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { MoonSection } from './components/MoonSection';
import { MyEyes } from './components/MyEyes';
import { MemoryCorner } from './components/MemoryCorner';
import { BirthdayMessage } from './components/BirthdayMessage';
import { HandwrittenNote } from './components/HandwrittenNote';
import { Proposal } from './components/Proposal';
import { Footer } from './components/Footer';
import { BackgroundDecor } from './components/BackgroundDecor';
import { MusicPlayer } from './components/MusicPlayer';

const App: React.FC = () => {
  const [isAccepted, setIsAccepted] = useState(false);

  const handleAccept = () => {
    setIsAccepted(true);
  };

  return (
    <div className="relative min-h-screen alpana-bg overflow-hidden selection:bg-pink-200 transition-colors duration-1000">
      <BackgroundDecor />
      <MusicPlayer />
      
      <main className="relative z-10 space-y-24 md:space-y-32 pb-20">
        <Hero />
        <MoonSection />
        <MyEyes />
        <MemoryCorner />
        <BirthdayMessage />
        <HandwrittenNote />
        <Proposal onAccept={handleAccept} isAccepted={isAccepted} />
        <Footer />
      </main>
      
      {isAccepted && (
        <div className="fixed inset-0 pointer-events-none z-[60] flex items-center justify-center overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute text-red-500 animate-float-heart"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 40 + 20}px`,
                animationDelay: `${Math.random() * 2}s`,
                opacity: 0
              }}
            >
              ❤
            </div>
          ))}
        </div>
      )}

      <style>{`
        @keyframes float-heart {
          0% { transform: translateY(0) scale(0); opacity: 0; }
          50% { opacity: 0.8; }
          100% { transform: translateY(-200px) scale(1.5); opacity: 0; }
        }
        .animate-float-heart {
          animation: float-heart 3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;
