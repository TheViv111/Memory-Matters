
import React from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';

const ResourcesHero = () => {
  return (
    <section className="py-16 pb-8 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal direction="up" delay={0.1}>
          <h1 className="font-playfair text-4xl md:text-5xl text-medical-charcoal mb-6">
            Patient & Family Resources
          </h1>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.2}>
          <p className="font-inter text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
            Comprehensive educational materials, support resources, and tools to help you 
            navigate your neurological health journey with confidence and knowledge.
          </p>
        </ScrollReveal>
        
        <ScrollReveal direction="up" delay={0.3}>
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input 
              placeholder="Search resources..." 
              className="pl-10 py-3 text-lg"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ResourcesHero;
