'use client';

import { useState } from 'react';
import { ForestBackground } from '@/components/ForestBackground';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Mail, Clock, Upload, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: '',
    timeline: ''
  });
  const [uploadedImage, setUploadedImage] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  if (isSubmitted) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center max-w-2xl mx-auto px-4">
          <div className="glass-effect rounded-2xl p-12">
            <CheckCircle className="h-16 w-16 text-wood-gold mx-auto mb-6" />
            <h1 className="text-4xl font-playfair font-bold text-wood-gold mb-4">
              Thank You!
            </h1>
            <p className="text-lg text-forest-light/90 mb-6">
              Your project inquiry has been submitted successfully. We'll review your 
              requirements and get back to you within 24 hours with a detailed quote 
              and consultation schedule.
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)} 
              className="wood-gradient text-forest-dark font-semibold"
            >
              Submit Another Project
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <ForestBackground 
          image="https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg"
        />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-wood-gold mb-4">
            Let's Create Together
          </h1>
          <p className="text-xl text-forest-light/90">
            Share your vision and let us bring it to life with four decades of expertise
          </p>
        </div>
      </section>

      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="glass-effect border-forest-green/30">
                <CardHeader>
                  <CardTitle className="text-2xl font-playfair text-wood-gold">
                    Get in Touch
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-wood-gold mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-forest-light">Workshop Address</h3>
                      <p className="text-forest-light/80">
                        Rajan K K Woodworks<br />
                        Koyilandy, Kozhikode District<br />
                        Kerala 673305, India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-wood-gold mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-forest-light">Phone</h3>
                      <p className="text-forest-light/80">+91 98765 43210</p>
                      <p className="text-forest-light/80">+91 87654 32109</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-wood-gold mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-forest-light">Email</h3>
                      <p className="text-forest-light/80">info@rajankkwoodworks.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-wood-gold mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-forest-light">Working Hours</h3>
                      <p className="text-forest-light/80">
                        Monday - Saturday: 8:00 AM - 6:00 PM<br />
                        Sunday: By appointment only
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card className="glass-effect border-forest-green/30">
                <CardHeader>
                  <CardTitle className="text-xl font-playfair text-wood-gold">
                    Why Choose Us?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    '40+ years of expertise',
                    'Sustainable wood sourcing',
                    'Custom design service',
                    'Quality guarantee',
                    'Timely delivery',
                    'Lifetime support'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-wood-gold flex-shrink-0" />
                      <span className="text-forest-light/80">{benefit}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="glass-effect border-forest-green/30">
                <CardHeader>
                  <CardTitle className="text-2xl font-playfair text-wood-gold">
                    Start Your Custom Project
                  </CardTitle>
                  <p className="text-forest-light/80">
                    Fill out the form below and upload any reference images to help us 
                    understand your vision better.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Basic Information */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-forest-light mb-2">
                          Full Name *
                        </label>
                        <Input
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="glass-effect border-forest-green/30 text-forest-light"
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-forest-light mb-2">
                          Email Address *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="glass-effect border-forest-green/30 text-forest-light"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-forest-light mb-2">
                          Phone Number *
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="glass-effect border-forest-green/30 text-forest-light"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-forest-light mb-2">
                          Project Type *
                        </label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          required
                          className="w-full glass-effect border-forest-green/30 text-forest-light bg-transparent rounded-md px-3 py-2"
                        >
                          <option value="">Select project type</option>
                          <option value="furniture">Custom Furniture</option>
                          <option value="kitchen">Kitchen Cabinets</option>
                          <option value="bedroom">Bedroom Set</option>
                          <option value="office">Office Furniture</option>
                          <option value="traditional">Traditional Woodwork</option>
                          <option value="restoration">Heritage Restoration</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-forest-light mb-2">
                          Budget Range
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full glass-effect border-forest-green/30 text-forest-light bg-transparent rounded-md px-3 py-2"
                        >
                          <option value="">Select budget range</option>
                          <option value="25000-50000">₹25,000 - ₹50,000</option>
                          <option value="50000-100000">₹50,000 - ₹1,00,000</option>
                          <option value="100000-200000">₹1,00,000 - ₹2,00,000</option>
                          <option value="200000+">Above ₹2,00,000</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-forest-light mb-2">
                          Timeline
                        </label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full glass-effect border-forest-green/30 text-forest-light bg-transparent rounded-md px-3 py-2"
                        >
                          <option value="">Select timeline</option>
                          <option value="urgent">Within 1 month</option>
                          <option value="normal">1-3 months</option>
                          <option value="flexible">3+ months</option>
                          <option value="planning">Just planning</option>
                        </select>
                      </div>
                    </div>

                    {/* Image Upload */}
                    <div>
                      <label className="block text-sm font-medium text-forest-light mb-2">
                        Reference Images
                      </label>
                      <div className="glass-effect border-forest-green/30 border-2 border-dashed rounded-lg p-8 text-center">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                          id="image-upload"
                        />
                        <label htmlFor="image-upload" className="cursor-pointer">
                          {uploadedImage ? (
                            <div className="space-y-4">
                              <img 
                                src={uploadedImage} 
                                alt="Uploaded reference" 
                                className="max-h-32 mx-auto rounded-lg"
                              />
                              <p className="text-forest-light/80">
                                Image uploaded successfully. Click to change.
                              </p>
                            </div>
                          ) : (
                            <div className="space-y-4">
                              <Upload className="h-12 w-12 text-wood-gold mx-auto" />
                              <div>
                                <p className="text-forest-light/80 mb-1">
                                  Click to upload reference images
                                </p>
                                <p className="text-sm text-forest-light/60">
                                  PNG, JPG up to 10MB
                                </p>
                              </div>
                            </div>
                          )}
                        </label>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-forest-light mb-2">
                        Project Description *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="glass-effect border-forest-green/30 text-forest-light resize-none"
                        placeholder="Please describe your project in detail. Include dimensions, preferred wood type, style preferences, and any specific requirements..."
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="flex gap-4">
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="wood-gradient text-forest-dark font-semibold flex-1"
                      >
                        Submit Project Request
                      </Button>
                      <Button 
                        type="button" 
                        size="lg" 
                        variant="outline" 
                        className="glass-effect border-wood-gold text-wood-gold hover:bg-wood-gold hover:text-forest-dark"
                      >
                        Save Draft
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}