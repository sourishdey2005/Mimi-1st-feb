
import React, { useEffect, useState } from 'react';

export const BackgroundDecor: React.FC = () => {
  const [elements, setElements] = useState<{ id: number; type: 'petal' | 'star' | 'lantern' }[]>([]);

  useEffect(() => {
    const items = [
      ...Array.from({ length: 15 }, (_, i) => ({ id: i, type: 'petal' as const })),
      ...Array.from({ length: 25 }, (_, i) => ({ id: i + 100, type: 'star' as const })),
      ...Array.from({ length: 5 }, (_, i) => ({ id: i + 200, type: 'lantern' as const }))
    ];
    setElements(items);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Soft Romantic Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-pink-100/30 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-yellow-50/20 blur-[120px] rounded-full"></div>
      <div className="absolute top-[40%] right-[-5%] w-[30%] h-[40%] bg-pink-50/20 blur-[100px] rounded-full"></div>
      
      {elements.map((el) => {
        if (el.type === 'petal') {
          return (
            <div
              key={el.id}
              className="absolute text-pink-200/50 select-none"
              style={{
                left: `${Math.random() * 100}%`,
                top: `-5%`,
                fontSize: `${Math.random() * 20 + 10}px`,
                animation: `fall ${Math.random() * 15 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 10}s`,
              }}
            >
              🌸
            </div>
          );
        } else if (el.type === 'star') {
          return (
            <div
              key={el.id}
              className="absolute bg-yellow-200/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                animation: `twinkle ${Math.random() * 5 + 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></div>
          );
        } else {
          return (
            <div
              key={el.id}
              className="absolute text-yellow-500/30 text-2xl"
              style={{
                left: `${Math.random() * 100}%`,
                bottom: `-5%`,
                animation: `rise ${Math.random() * 20 + 15}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 15}s`,
              }}
            >
              🕯️
            </div>
          );
        }
      })}

      <style>{`
        @keyframes fall {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          100% { transform: translateY(110vh) rotate(360deg); opacity: 0; }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.5); box-shadow: 0 0 10px white; }
        }
        @keyframes rise {
          0% { transform: translateY(0) translateX(0) scale(1); opacity: 0; }
          20% { opacity: 0.6; }
          80% { opacity: 0.6; }
          100% { transform: translateY(-110vh) translateX(50px) scale(1.2); opacity: 0; }
        }
      `}</style>
    </div>
  );
};
