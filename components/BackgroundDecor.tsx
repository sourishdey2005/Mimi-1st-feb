
import React, { useEffect, useState } from 'react';

export const BackgroundDecor: React.FC = () => {
  const [petals, setPetals] = useState<number[]>([]);

  useEffect(() => {
    setPetals(Array.from({ length: 20 }, (_, i) => i));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Soft Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-pink-100/40 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-yellow-50/30 blur-[100px] rounded-full"></div>
      
      {/* Petals */}
      {petals.map((id) => (
        <div
          key={id}
          className="absolute text-pink-200/40 animate-fall select-none"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-5%`,
            fontSize: `${Math.random() * 20 + 10}px`,
            animation: `fall ${Math.random() * 10 + 5}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
            opacity: Math.random() * 0.5 + 0.2
          }}
        >
          🌸
        </div>
      ))}

      <style>{`
        @keyframes fall {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
};
