
import React, { useState, useEffect, useCallback } from 'react';
import { Hero } from './components/Hero';
import { MoonSection } from './components/MoonSection';
import { MyEyes } from './components/MyEyes';
import { MemoryCorner } from './components/MemoryCorner';
import { BirthdayMessage } from './components/BirthdayMessage';
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
    <div className="relative min-h-screen alpana-bg overflow-hidden selection:bg-pink-200">
      <BackgroundDecor />
      <MusicPlayer />
      
      <main className="relative z-10 space-y-24 md:space-y-32 pb-20">
        <Hero />
        <MoonSection />
        <MyEyes />
        <MemoryCorner />
        <BirthdayMessage />
        <Proposal onAccept={handleAccept} isAccepted={isAccepted} />
        <Footer />
      </main>
    </div>
  );
};

export default App;
