
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Shield, Star } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';

const PhilosophySection = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "Every patient receives individualized attention with empathy and understanding at the core of treatment."
    },
    {
      icon: Users,
      title: "Family-Centered Approach",
      description: "We involve families in the care process, providing support and education throughout the journey."
    },
    {
      icon: Shield,
      title: "Evidence-Based Treatment",
      description: "Our treatments are grounded in the latest research and proven medical practices."
    },
    {
      icon: Star,
      title: "Excellence in Care",
      description: "Committed to the highest standards of medical excellence and patient satisfaction."
    }
  ];

  return (
    <section className="py-16 bg-medical-beige">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl text-medical-charcoal mb-4">
              Our Philosophy of Care
            </h2>
            <div className="w-20 h-1 bg-medical-teal mx-auto mb-6"></div>
            <p className="font-inter text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              "I believe that treating neurological conditions requires not just medical expertise, 
              but also deep compassion and understanding. Every patient's journey is unique, and 
              I'm committed to providing personalized care that addresses both the medical and 
              emotional aspects of their condition."
            </p>
            <div className="mt-6">
              <span className="font-playfair text-lg text-medical-deep-blue">- Dr. Soumya Hegde</span>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <ScrollReveal key={index} direction="up" delay={0.1 * (index + 2)}>
              <Card className="h-full text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="bg-medical-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-medical-teal" />
                  </div>
                  <h3 className="font-playfair text-lg text-medical-charcoal mb-3">
                    {value.title}
                  </h3>
                  <p className="font-inter text-sm text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
