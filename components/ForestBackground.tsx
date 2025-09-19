'use client';

import { useEffect, useState } from 'react';

interface ForestBackgroundProps {
  image: string;
  className?: string;
  overlay?: boolean;
}

export function ForestBackground({ image, className = '', overlay = true }: ForestBackgroundProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`absolute inset-0 ${className}`}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat parallax-bg"
        style={{
          backgroundImage: `url(${image})`,
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      
      {/* Overlay */}
      {overlay && (
        <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/40 via-forest-dark/60 to-forest-dark/80" />
      )}
      
      {/* Animated Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-wood-gold/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 1.2}s`,
            }}
          />
        ))}
        
        {/* Falling leaves */}
        {[...Array(4)].map((_, i) => (
          <div
            key={`leaf-${i}`}
            className="absolute w-3 h-3 bg-forest-medium/40 rounded-full animate-leaf-fall"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}