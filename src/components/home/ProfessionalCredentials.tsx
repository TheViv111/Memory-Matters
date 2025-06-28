
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Award, GraduationCap, Users, Shield, Star, BookOpen } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';

const ProfessionalCredentials = () => {
  const certifications = [
    {
      icon: <Award className="w-8 h-8 text-medical-teal" />,
      title: "Board Certified",
      subtitle: "American Board of Psychiatry & Neurology",
      year: "2008"
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-medical-deep-blue" />,
      title: "Fellowship Training",
      subtitle: "Geriatric Psychiatry - Johns Hopkins",
      year: "2009"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-medical-orange" />,
      title: "Research Publications",
      subtitle: "25+ Peer-Reviewed Articles",
      year: "2024"
    },
    {
      icon: <Users className="w-8 h-8 text-medical-teal" />,
      title: "Professional Memberships",
      subtitle: "American Geriatrics Society",
      year: "Active"
    }
  ];

  const achievements = [
    {
      icon: <Star className="w-6 h-6 text-yellow-500" />,
      title: "Top Doctor Award",
      organization: "Bangalore Medical Association",
      year: "2023"
    },
    {
      icon: <Shield className="w-6 h-6 text-medical-deep-blue" />,
      title: "Excellence in Patient Care",
      organization: "Karnataka Medical Council",
      year: "2022"
    },
    {
      icon: <Award className="w-6 h-6 text-medical-orange" />,
      title: "Research Excellence",
      organization: "International Geriatric Society",
      year: "2021"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-medical-beige/30 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-medical-teal/10 rounded-full mb-6">
              <span className="text-medical-teal font-inter text-sm font-medium">Professional Excellence</span>
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl text-medical-charcoal mb-6">
              Credentials & Recognition
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-medical-teal to-medical-orange mx-auto mb-6"></div>
            <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
              Recognized expertise in geriatric psychiatry with extensive training and continuous professional development
            </p>
          </div>
        </ScrollReveal>

        {/* Medical Certifications */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {certifications.map((cert, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white border-0 shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 p-4 bg-gradient-to-br from-medical-teal/10 to-medical-deep-blue/10 rounded-2xl w-fit mx-auto group-hover:scale-110 transition-transform duration-300">
                    {cert.icon}
                  </div>
                  <h3 className="font-playfair text-lg font-semibold text-medical-charcoal mb-2">
                    {cert.title}
                  </h3>
                  <p className="font-inter text-sm text-gray-600 mb-2">
                    {cert.subtitle}
                  </p>
                  <span className="inline-block px-3 py-1 bg-medical-teal/10 text-medical-teal font-inter text-xs font-medium rounded-full">
                    {cert.year}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollReveal>

        {/* Awards & Recognition */}
        <ScrollReveal direction="up" delay={0.3}>
          <div className="bg-gradient-to-br from-white to-medical-beige/20 rounded-3xl p-8 shadow-xl">
            <div className="text-center mb-12">
              <h3 className="font-playfair text-3xl text-medical-charcoal mb-4">
                Awards & Recognition
              </h3>
              <div className="w-16 h-0.5 bg-gradient-to-r from-medical-teal to-medical-orange mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center group">
                  <div className="mb-4 p-3 bg-white rounded-full w-fit mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    {achievement.icon}
                  </div>
                  <h4 className="font-playfair text-lg font-semibold text-medical-charcoal mb-2">
                    {achievement.title}
                  </h4>
                  <p className="font-inter text-sm text-gray-600 mb-1">
                    {achievement.organization}
                  </p>
                  <span className="font-inter text-xs text-medical-teal font-medium">
                    {achievement.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProfessionalCredentials;
