import { ForestBackground } from '@/components/ForestBackground';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, Award, Users, Heart, TreePine } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ForestBackground 
          image="https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg"
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 fade-in-up">
              <div>
                <Badge className="bg-wood-gold/20 text-wood-gold border-wood-gold/30 mb-4">
                  Master Craftsman
                </Badge>
                <h1 className="text-5xl md:text-6xl font-playfair font-bold text-wood-gold mb-4">
                  Rajan K K
                </h1>
                <p className="text-2xl text-wood-light font-light">
                  Four Decades of Woodworking Excellence
                </p>
              </div>
              
              <p className="text-lg text-forest-light/90 leading-relaxed">
                Born into a family where wood shavings were as familiar as morning dew, 
                Rajan K K has spent over four decades perfecting the ancient art of 
                woodworking in the cultural heart of Koyilandy, Kerala. His journey began 
                as a young apprentice, learning from the whispers of the forest and the 
                wisdom of traditional masters.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-wood-gold" />
                  <span className="text-forest-light">Koyilandy, Kerala</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-wood-gold" />
                  <span className="text-forest-light">Since 1984</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-wood-gold" />
                  <span className="text-forest-light">Master Craftsman</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-wood-gold" />
                  <span className="text-forest-light">Family Legacy</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="glass-effect rounded-2xl p-2">
                <img 
                  src="https://images.pexels.com/photos/1350560/pexels-photo-1350560.jpeg"
                  alt="Rajan K K at work"
                  className="w-full h-96 object-cover rounded-xl"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 glass-effect rounded-lg p-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-wood-gold">40+</div>
                  <div className="text-sm text-forest-light">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-wood-gold mb-4">
              Philosophy & Values
            </h2>
            <p className="text-lg text-forest-light/80 max-w-3xl mx-auto">
              Every piece of wood tells a story. Our role is to listen, understand, 
              and help that story find its perfect expression.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TreePine,
                title: 'Respect for Nature',
                description: 'We believe in sustainable practices, honoring the forest that provides our materials and ensuring every piece of wood serves its highest purpose.'
              },
              {
                icon: Heart,
                title: 'Passion-Driven Craft',
                description: 'Each project is infused with genuine love for the craft, treating every commission as a canvas for artistic expression and functional beauty.'
              },
              {
                icon: Users,
                title: 'Family Heritage',
                description: 'Our craft is passed down through generations, blending time-honored techniques with contemporary innovation and customer-focused service.'
              }
            ].map((value, index) => (
              <Card key={index} className="glass-effect border-forest-green/30 hover:border-wood-gold/50 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 glass-effect rounded-full flex items-center justify-center group-hover:bg-wood-gold/20 transition-colors">
                    <value.icon className="h-8 w-8 text-wood-gold" />
                  </div>
                  <h3 className="text-xl font-playfair font-semibold text-wood-gold mb-3">
                    {value.title}
                  </h3>
                  <p className="text-forest-light/80 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="relative py-20 overflow-hidden">
        <ForestBackground 
          image="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg"
          className="opacity-20"
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-playfair font-bold text-wood-gold text-center mb-16">
            The Journey Through Time
          </h2>
          
          <div className="space-y-12">
            {[
              {
                year: '1984',
                title: 'The Beginning',
                description: 'Started as an apprentice, learning traditional Kerala woodworking techniques from master craftsmen.',
                image: 'https://images.pexels.com/photos/1107717/pexels-photo-1107717.jpeg'
              },
              {
                year: '1990s',
                title: 'Mastering the Craft',
                description: 'Established expertise in furniture making, temple woodwork, and architectural elements.',
                image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg'
              },
              {
                year: '2000s',
                title: 'Innovation & Growth',
                description: 'Blended traditional techniques with modern design sensibilities, expanding clientele across Kerala.',
                image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg'
              },
              {
                year: '2024',
                title: 'Legacy Continues',
                description: 'Four decades later, still crafting with the same passion, now mentoring the next generation.',
                image: 'https://images.pexels.com/photos/1350560/pexels-photo-1350560.jpeg'
              }
            ].map((milestone, index) => (
              <div key={index} className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center gap-12`}>
                <div className="flex-1 space-y-4">
                  <div className="flex items-center space-x-4">
                    <Badge className="bg-wood-gold text-forest-dark font-bold text-lg px-4 py-2">
                      {milestone.year}
                    </Badge>
                  </div>
                  <h3 className="text-2xl font-playfair font-semibold text-wood-gold">
                    {milestone.title}
                  </h3>
                  <p className="text-forest-light/90 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
                
                <div className="flex-1">
                  <div className="glass-effect rounded-xl overflow-hidden">
                    <img 
                      src={milestone.image}
                      alt={milestone.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="glass-effect rounded-2xl p-12">
            <h2 className="text-3xl font-playfair font-bold text-wood-gold mb-4">
              Ready to Create Something Timeless?
            </h2>
            <p className="text-lg text-forest-light/90 mb-8">
              Let's bring your vision to life with the same passion and expertise 
              that has defined our craft for four decades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="wood-gradient text-forest-dark font-semibold">
                <Link href="/contact">Start Your Project</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="glass-effect border-wood-gold text-wood-gold hover:bg-wood-gold hover:text-forest-dark">
                <Link href="/gallery">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}