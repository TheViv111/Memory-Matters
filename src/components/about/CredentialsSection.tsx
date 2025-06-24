
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award, Users, Heart } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';

const CredentialsSection = () => {
  const credentials = [
    {
      icon: GraduationCap,
      title: "Medical Education",
      details: [
        "MBBS - Grant Medical College & Sir JJ Hospital, Mumbai",
        "DPM (Psychiatry) - Lokmanya Tilak Municipal Medical College, Sion, Mumbai",
        "MRCPsych - Royal College of Psychiatrists"
      ]
    },
    {
      icon: Award,
      title: "Specialized Training",
      details: [
        "CCT in Old Age Psychiatry",
        "Certificate of Completion of Training",
        "Member of Royal College of Psychiatrists"
      ]
    },
    {
      icon: Users,
      title: "Professional Experience",
      details: [
        "Geriatric Psychiatrist",
        "Memory Disorders Specialist",
        "15+ Years Clinical Practice"
      ]
    },
    {
      icon: Heart,
      title: "Areas of Expertise",
      details: [
        "Old Age Psychiatry",
        "Memory Disorders & Dementia",
        "Cognitive Health Assessment"
      ]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl text-medical-charcoal mb-4">
              Professional Credentials
            </h2>
            <div className="w-20 h-1 bg-medical-teal mx-auto mb-6"></div>
            <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
              Extensive training and experience in geriatric psychiatry with a focus on compassionate, 
              evidence-based treatment approaches for older adults.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {credentials.map((credential, index) => (
            <ScrollReveal key={index} direction="up" delay={0.1 * (index + 2)}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 shadow-md">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-medical-teal/10 p-3 rounded-lg">
                      <credential.icon className="w-8 h-8 text-medical-teal" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-playfair text-xl text-medical-charcoal mb-4">
                        {credential.title}
                      </h3>
                      <ul className="space-y-2">
                        {credential.details.map((detail, detailIndex) => (
                          <li key={detailIndex} className="font-inter text-gray-700 flex items-start">
                            <span className="w-2 h-2 bg-medical-teal rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;
