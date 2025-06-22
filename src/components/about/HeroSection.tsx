
import React from 'react';
import ScrollReveal from '@/components/animations/ScrollReveal';

const HeroSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-medical-beige to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-medical-teal/5 to-medical-deep-blue/5" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <ScrollReveal direction="left" delay={0.1}>
            <div>
              <h1 className="font-playfair text-4xl md:text-5xl text-medical-charcoal mb-6 leading-tight">
                Meet Dr. Soumya Hegde
              </h1>
              <div className="w-20 h-1 bg-medical-teal mb-6"></div>
              <p className="font-inter text-xl text-gray-700 leading-relaxed mb-8">
                A compassionate neurologist dedicated to providing comprehensive care for memory 
                disorders and neurological conditions with over a decade of specialized experience.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white px-6 py-3 rounded-full shadow-md border border-medical-teal/20">
                  <span className="font-inter text-medical-deep-blue font-semibold">MD Neurology</span>
                </div>
                <div className="bg-white px-6 py-3 rounded-full shadow-md border border-medical-teal/20">
                  <span className="font-inter text-medical-deep-blue font-semibold">10+ Years Experience</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right" delay={0.2}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-medical-teal/20 to-medical-deep-blue/20 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white p-2 rounded-2xl shadow-2xl">
                <img
                  src="/doctor-image.jpg"
                  alt="Dr. Soumya Hegde - Neurologist specializing in memory care"
                  className="w-full h-96 object-cover rounded-xl"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";
                  }}
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
