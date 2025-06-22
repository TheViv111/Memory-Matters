
import React from 'react';
import ScrollReveal from '@/components/animations/ScrollReveal';

const ContactHero = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal direction="up" delay={0.1}>
          <h1 className="font-playfair text-4xl md:text-5xl text-medical-charcoal mb-6">
            Contact Memory Matters
          </h1>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.2}>
          <p className="font-inter text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
            We're here to help answer your questions and support you on your journey to better 
            neurological health. Reach out to our compassionate team today.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ContactHero;
