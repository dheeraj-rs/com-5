'use client';

import { useEffect, useState } from 'react';
import { ArrowDown, Award, Clock, MapPin } from 'lucide-react';
import { ForestBackground } from './ForestBackground';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ForestBackground 
        image="https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg" 
        className="scale-105"
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold mb-6 text-shadow-glow">
            <span className="text-wood-gold">Crafting</span>
            <br />
            <span className="text-forest-light">Legacy</span>
            <br />
            <span className="text-wood-light">in Wood</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-forest-light/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Journey through four decades of masterful woodworking in the heart of Kerala, 
            where nature's gifts transform into timeless creations.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
            <div className="glass-effect rounded-xl p-6">
              <Award className="h-8 w-8 text-wood-gold mx-auto mb-2" />
              <div className="text-3xl font-bold text-wood-gold">40+</div>
              <div className="text-forest-light/80">Years Experience</div>
            </div>
            <div className="glass-effect rounded-xl p-6">
              <Clock className="h-8 w-8 text-wood-gold mx-auto mb-2" />
              <div className="text-3xl font-bold text-wood-gold">1000+</div>
              <div className="text-forest-light/80">Projects Completed</div>
            </div>
            <div className="glass-effect rounded-xl p-6">
              <MapPin className="h-8 w-8 text-wood-gold mx-auto mb-2" />
              <div className="text-lg font-bold text-wood-gold">Koyilandy</div>
              <div className="text-forest-light/80">Kerala, India</div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="wood-gradient text-forest-dark font-semibold hover:scale-105 transition-transform">
              <Link href="/gallery">Explore Our Work</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="glass-effect border-wood-gold text-wood-gold hover:bg-wood-gold hover:text-forest-dark">
              <Link href="/contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-wood-gold" />
        </div>
      </div>
    </section>
  );
}