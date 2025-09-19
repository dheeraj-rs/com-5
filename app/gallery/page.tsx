'use client';

import { useState, useEffect } from 'react';
import { ForestBackground } from '@/components/ForestBackground';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Search, Filter, Grid, List } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Traditional Kerala Dining Set',
    category: 'Furniture',
    year: '2024',
    description: 'Handcrafted teak dining set featuring traditional Kerala motifs and modern comfort.',
    image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg',
    tags: ['Traditional', 'Dining', 'Teak']
  },
  {
    id: 2,
    title: 'Temple Door Restoration',
    category: 'Heritage',
    year: '2023',
    description: 'Restoration of 200-year-old temple doors with intricate carvings.',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    tags: ['Heritage', 'Carving', 'Restoration']
  },
  {
    id: 3,
    title: 'Modern Office Suite',
    category: 'Commercial',
    year: '2024',
    description: 'Contemporary office furniture combining functionality with elegant design.',
    image: 'https://images.pexels.com/photos/1350560/pexels-photo-1350560.jpeg',
    tags: ['Modern', 'Office', 'Commercial']
  },
  {
    id: 4,
    title: 'Custom Kitchen Cabinets',
    category: 'Kitchen',
    year: '2023',
    description: 'Bespoke kitchen storage solution maximizing space and style.',
    image: 'https://images.pexels.com/photos/1107717/pexels-photo-1107717.jpeg',
    tags: ['Kitchen', 'Custom', 'Storage']
  },
  {
    id: 5,
    title: 'Bedroom Collection',
    category: 'Furniture',
    year: '2024',
    description: 'Complete bedroom set with wardrobe, bed frame, and nightstands.',
    image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg',
    tags: ['Bedroom', 'Collection', 'Wardrobe']
  },
  {
    id: 6,
    title: 'Artistic Wall Panel',
    category: 'Decor',
    year: '2023',
    description: 'Hand-carved decorative panel showcasing traditional woodworking artistry.',
    image: 'https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg',
    tags: ['Artistic', 'Carving', 'Decor']
  }
];

const categories = ['All', 'Furniture', 'Heritage', 'Commercial', 'Kitchen', 'Decor'];

export default function GalleryPage() {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    let filtered = projects;
    
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(project => project.category === selectedCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    setFilteredProjects(filtered);
  }, [selectedCategory, searchTerm]);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <ForestBackground 
          image="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg"
        />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-wood-gold mb-4">
            Gallery of Craftsmanship
          </h1>
          <p className="text-xl text-forest-light/90">
            Four decades of masterful woodworking, showcasing the evolution of our craft
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-forest-green/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-forest-light/60" />
              <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 glass-effect border-forest-green/30 text-forest-light placeholder:text-forest-light/60"
              />
            </div>
            
            {/* Categories */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`cursor-pointer transition-all ${
                    selectedCategory === category 
                      ? 'bg-wood-gold text-forest-dark' 
                      : 'glass-effect border-wood-gold/30 text-wood-gold hover:bg-wood-gold/20'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
            
            {/* View Toggle */}
            <div className="flex gap-2">
              <Button
                size="sm"
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                onClick={() => setViewMode('grid')}
                className={viewMode === 'grid' ? 'bg-wood-gold text-forest-dark' : 'glass-effect border-wood-gold text-wood-gold'}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant={viewMode === 'list' ? 'default' : 'outline'}
                onClick={() => setViewMode('list')}
                className={viewMode === 'list' ? 'bg-wood-gold text-forest-dark' : 'glass-effect border-wood-gold text-wood-gold'}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'md:grid-cols-2 lg:grid-cols-3' 
              : 'grid-cols-1 max-w-4xl mx-auto'
          }`}>
            {filteredProjects.map((project) => (
              <Card 
                key={project.id} 
                className={`glass-effect border-forest-green/30 hover:border-wood-gold/50 transition-all duration-300 group cursor-pointer overflow-hidden ${
                  viewMode === 'list' ? 'md:flex' : ''
                }`}
                onClick={() => setSelectedProject(project)}
              >
                <div className={`relative overflow-hidden ${
                  viewMode === 'list' ? 'md:w-1/2' : 'h-64'
                }`}>
                  <img 
                    src={project.image}
                    alt={project.title}
                    className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
                      viewMode === 'list' ? 'h-full' : 'h-full'
                    }`}
                  />
                  <div className="absolute inset-0 bg-forest-dark/40 group-hover:bg-forest-dark/20 transition-colors" />
                  <Badge className="absolute top-4 left-4 bg-wood-gold text-forest-dark">
                    {project.category}
                  </Badge>
                </div>
                
                <div className={`p-6 ${viewMode === 'list' ? 'md:w-1/2 flex flex-col justify-center' : ''}`}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-playfair font-semibold text-wood-gold group-hover:text-wood-light transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-sm text-forest-light/60">{project.year}</span>
                  </div>
                  
                  <p className="text-forest-light/80 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs border-wood-gold/30 text-wood-gold/80">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-playfair text-wood-gold mb-2">No projects found</h3>
              <p className="text-forest-light/80">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-forest-dark/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="glass-effect rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img 
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-96 object-cover rounded-t-2xl"
              />
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-8 h-8 bg-forest-dark/80 backdrop-blur-sm rounded-full flex items-center justify-center text-forest-light hover:bg-forest-dark/90 transition-colors"
              >
                ✕
              </button>
            </div>
            
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-3xl font-playfair font-bold text-wood-gold">
                  {selectedProject.title}
                </h2>
                <Badge className="bg-wood-gold text-forest-dark">
                  {selectedProject.category}
                </Badge>
              </div>
              
              <p className="text-forest-light/90 mb-6 leading-relaxed">
                {selectedProject.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="border-wood-gold/30 text-wood-gold">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-4">
                <Button className="wood-gradient text-forest-dark font-semibold">
                  Request Similar Project
                </Button>
                <Button variant="outline" className="glass-effect border-wood-gold text-wood-gold">
                  View More Details
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}