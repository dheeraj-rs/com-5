import { Hero } from '@/components/Hero';
import { ForestBackground } from '@/components/ForestBackground';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TreePine, Hammer, Heart, Users } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* About Preview Section */}
      <section className="relative py-20 overflow-hidden">
        <ForestBackground 
          image="https://images.pexels.com/photos/1107717/pexels-photo-1107717.jpeg" 
          className="opacity-20"
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-wood-gold">
                From Forest to Family
              </h2>
              <p className="text-lg text-forest-light/90 leading-relaxed">
                In the lush landscapes of Koyilandy, Kerala, Rajan K K has spent four decades 
                transforming nature's finest timber into heirloom pieces that tell stories 
                across generations. Each creation carries the soul of the forest and the 
                precision of masterful craftsmanship.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <TreePine className="h-5 w-5 text-wood-gold" />
                  <span className="text-forest-light">Sustainable Sourcing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Hammer className="h-5 w-5 text-wood-gold" />
                  <span className="text-forest-light">Traditional Techniques</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-wood-gold" />
                  <span className="text-forest-light">Passion-Driven</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-wood-gold" />
                  <span className="text-forest-light">Family Legacy</span>
                </div>
              </div>
              <Button asChild className="wood-gradient text-forest-dark font-semibold">
                <Link href="/about">Meet the Master</Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="glass-effect rounded-2xl p-1">
                <img 
                  src="https://images.pexels.com/photos/1350560/pexels-photo-1350560.jpeg"
                  alt="Master woodworker crafting"
                  className="w-full h-96 object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-wood-gold mb-4">
              Crafted with Nature's Wisdom
            </h2>
            <p className="text-lg text-forest-light/80 max-w-3xl mx-auto">
              From timeless furniture to custom architectural elements, every piece 
              reflects our deep connection to both forest and craft.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Custom Furniture',
                description: 'Bespoke pieces crafted to perfection for your unique space',
                image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg',
                features: ['Dining Sets', 'Bedroom Collections', 'Living Room Suites']
              },
              {
                title: 'Traditional Woodwork',
                description: 'Kerala\'s rich woodworking heritage brought to life',
                image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
                features: ['Temple Work', 'Carved Doors', 'Heritage Restoration']
              },
              {
                title: 'Modern Designs',
                description: 'Contemporary aesthetics meets traditional craftsmanship',
                image: 'https://images.pexels.com/photos/1350560/pexels-photo-1350560.jpeg',
                features: ['Modular Units', 'Office Furniture', 'Artistic Pieces']
              }
            ].map((service, index) => (
              <Card key={index} className="glass-effect border-forest-green/30 hover:border-wood-gold/50 transition-all duration-300 group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-forest-dark/40 group-hover:bg-forest-dark/20 transition-colors" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-playfair font-semibold text-wood-gold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-forest-light/80 mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-forest-light/70 flex items-center">
                        <span className="w-1 h-1 bg-wood-gold rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="glass-effect border-wood-gold text-wood-gold hover:bg-wood-gold hover:text-forest-dark">
              <Link href="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Gallery Teaser */}
      <section className="relative py-20 overflow-hidden">
        <ForestBackground 
          image="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg"
          className="opacity-30"
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-wood-gold mb-8">
            Four Decades of Masterpieces
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg',
              'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
              'https://images.pexels.com/photos/1350560/pexels-photo-1350560.jpeg',
              'https://images.pexels.com/photos/1107717/pexels-photo-1107717.jpeg'
            ].map((image, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="glass-effect rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                  <img 
                    src={image}
                    alt={`Gallery preview ${index + 1}`}
                    className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
          
          <Button asChild size="lg" className="wood-gradient text-forest-dark font-semibold">
            <Link href="/gallery">Explore Complete Gallery</Link>
          </Button>
        </div>
      </section>
    </>
  );
}