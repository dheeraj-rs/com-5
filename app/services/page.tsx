import { ForestBackground } from '@/components/ForestBackground';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, Clock, Users, Award, TreePine, Hammer } from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    category: 'Custom Furniture',
    icon: Hammer,
    description: 'Bespoke furniture crafted to your exact specifications',
    services: [
      { name: 'Dining Sets', price: '₹45,000 - ₹1,20,000', duration: '4-6 weeks' },
      { name: 'Bedroom Collections', price: '₹65,000 - ₹2,00,000', duration: '6-8 weeks' },
      { name: 'Living Room Suites', price: '₹55,000 - ₹1,80,000', duration: '5-7 weeks' },
      { name: 'Office Furniture', price: '₹25,000 - ₹80,000', duration: '3-5 weeks' }
    ],
    features: ['Custom Design', 'Premium Wood', 'Lifetime Support', 'Home Delivery']
  },
  {
    category: 'Traditional Woodwork',
    icon: TreePine,
    description: 'Kerala\'s rich heritage brought to life through traditional craftsmanship',
    services: [
      { name: 'Temple Woodwork', price: '₹80,000 - ₹3,00,000', duration: '8-12 weeks' },
      { name: 'Carved Doors', price: '₹35,000 - ₹1,50,000', duration: '4-8 weeks' },
      { name: 'Heritage Restoration', price: 'Quote on Assessment', duration: 'Varies' },
      { name: 'Decorative Panels', price: '₹15,000 - ₹60,000', duration: '2-4 weeks' }
    ],
    features: ['Traditional Techniques', 'Authentic Designs', 'Master Craftsmanship', 'Cultural Heritage']
  },
  {
    category: 'Ready-to-Build Items',
    icon: Award,
    description: 'Pre-designed pieces ready for immediate production',
    services: [
      { name: 'Standard Dining Table', price: '₹28,000 - ₹45,000', duration: '2-3 weeks' },
      { name: 'Wardrobe (2-door)', price: '₹35,000 - ₹55,000', duration: '3-4 weeks' },
      { name: 'Study Table', price: '₹12,000 - ₹25,000', duration: '1-2 weeks' },
      { name: 'Bookshelf', price: '₹18,000 - ₹35,000', duration: '2-3 weeks' }
    ],
    features: ['Quick Delivery', 'Proven Designs', 'Quality Assured', 'Cost Effective']
  }
];

const woodTypes = [
  { name: 'Teak', price: '₹8,000 - ₹12,000/cubic ft', description: 'Premium hardwood, water-resistant' },
  { name: 'Rosewood', price: '₹6,000 - ₹10,000/cubic ft', description: 'Beautiful grain, aromatic' },
  { name: 'Mahogany', price: '₹4,000 - ₹7,000/cubic ft', description: 'Durable, excellent finish' },
  { name: 'Jackfruit Wood', price: '₹2,500 - ₹4,500/cubic ft', description: 'Local favorite, sustainable' }
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <ForestBackground 
          image="https://images.pexels.com/photos/1350560/pexels-photo-1350560.jpeg"
        />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-wood-gold mb-4">
            Our Services
          </h1>
          <p className="text-xl text-forest-light/90">
            From custom designs to traditional craftsmanship, we bring your vision to life
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-wood-gold mb-4">
              Craftsmanship Categories
            </h2>
            <p className="text-lg text-forest-light/80 max-w-3xl mx-auto">
              Each service category represents decades of expertise and passion for the craft
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((serviceCategory, index) => (
              <Card key={index} className="glass-effect border-forest-green/30 hover:border-wood-gold/50 transition-all duration-300 group">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 glass-effect rounded-full flex items-center justify-center group-hover:bg-wood-gold/20 transition-colors">
                    <serviceCategory.icon className="h-8 w-8 text-wood-gold" />
                  </div>
                  <CardTitle className="text-2xl font-playfair text-wood-gold">
                    {serviceCategory.category}
                  </CardTitle>
                  <p className="text-forest-light/80">
                    {serviceCategory.description}
                  </p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    {serviceCategory.services.map((service, idx) => (
                      <div key={idx} className="flex justify-between items-start p-3 glass-effect rounded-lg">
                        <div className="flex-1">
                          <h4 className="font-semibold text-forest-light mb-1">
                            {service.name}
                          </h4>
                          <div className="flex items-center space-x-2 text-sm text-forest-light/70">
                            <Clock className="h-3 w-3" />
                            <span>{service.duration}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-wood-gold font-semibold text-sm">
                            {service.price}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-forest-light">Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {serviceCategory.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-wood-gold" />
                          <span className="text-sm text-forest-light/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Wood Types & Rates */}
      <section className="relative py-16 overflow-hidden">
        <ForestBackground 
          image="https://images.pexels.com/photos/1107717/pexels-photo-1107717.jpeg"
          className="opacity-20"
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-wood-gold mb-4">
              Premium Wood Selection
            </h2>
            <p className="text-lg text-forest-light/80 max-w-3xl mx-auto">
              We source only the finest quality wood, ensuring each piece meets our 
              rigorous standards for beauty and durability
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {woodTypes.map((wood, index) => (
              <Card key={index} className="glass-effect border-forest-green/30 hover:border-wood-gold/50 transition-all duration-300 text-center">
                <CardContent className="p-6">
                  <h3 className="text-xl font-playfair font-semibold text-wood-gold mb-2">
                    {wood.name}
                  </h3>
                  <div className="text-lg font-bold text-wood-light mb-2">
                    {wood.price}
                  </div>
                  <p className="text-sm text-forest-light/80">
                    {wood.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-playfair font-bold text-wood-gold mb-4">
              Our Process
            </h2>
            <p className="text-lg text-forest-light/80 max-w-3xl mx-auto">
              From consultation to delivery, every step is carefully orchestrated 
              to ensure your complete satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'Initial discussion about your needs, preferences, and budget'
              },
              {
                step: '02',
                title: 'Design & Quote',
                description: 'Custom design creation with detailed pricing and timeline'
              },
              {
                step: '03',
                title: 'Crafting',
                description: 'Skilled artisans bring your vision to life with precision'
              },
              {
                step: '04',
                title: 'Delivery',
                description: 'Professional installation and lifetime support guarantee'
              }
            ].map((process, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 glass-effect rounded-full flex items-center justify-center group-hover:bg-wood-gold/20 transition-colors">
                  <span className="text-2xl font-bold text-wood-gold">{process.step}</span>
                </div>
                <h3 className="text-xl font-playfair font-semibold text-wood-gold mb-2">
                  {process.title}
                </h3>
                <p className="text-forest-light/80">
                  {process.description}
                </p>
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
              Ready to Begin Your Project?
            </h2>
            <p className="text-lg text-forest-light/90 mb-8">
              Let's discuss your vision and create something truly exceptional together. 
              Get a free consultation and detailed quote for your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="wood-gradient text-forest-dark font-semibold">
                <Link href="/contact">Get Free Quote</Link>
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