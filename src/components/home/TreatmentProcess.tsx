
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Stethoscope, FileText, Users, ArrowRight, Clock, Shield, Heart } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';

const TreatmentProcess = () => {
  const processSteps = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "Comprehensive evaluation of your concerns, medical history, and current symptoms with dedicated time for questions.",
      duration: "60-90 minutes",
      icon: <Calendar className="w-8 h-8 text-medical-teal" />,
      details: [
        "Detailed medical and psychiatric history",
        "Current medication review",
        "Cognitive screening assessment",
        "Family history evaluation",
        "Goals and expectations discussion"
      ]
    },
    {
      step: "02",
      title: "Diagnostic Assessment",
      description: "Thorough testing and evaluation using advanced diagnostic tools to understand your specific condition.",
      duration: "2-3 hours",
      icon: <Stethoscope className="w-8 h-8 text-medical-deep-blue" />,
      details: [
        "Neuropsychological testing",
        "Cognitive function evaluation",
        "Laboratory work coordination",
        "Brain imaging referrals if needed",
        "Specialty consultations as required"
      ]
    },
    {
      step: "03",
      title: "Treatment Planning",
      description: "Personalized care plan developed collaboratively with your input, goals, and family considerations.",
      duration: "45-60 minutes",
      icon: <FileText className="w-8 h-8 text-medical-orange" />,
      details: [
        "Customized treatment strategy",
        "Medication management plan",
        "Therapy recommendations",
        "Lifestyle modification guidance",
        "Family involvement planning"
      ]
    },
    {
      step: "04",
      title: "Ongoing Support",
      description: "Regular follow-ups and adjustments to ensure optimal care with continuous monitoring and support.",
      duration: "30-45 minutes",
      icon: <Users className="w-8 h-8 text-medical-teal" />,
      details: [
        "Progress monitoring visits",
        "Medication adjustments",
        "Family support sessions",
        "Crisis intervention available",
        "Care coordination with other providers"
      ]
    }
  ];

  const supportFeatures = [
    {
      icon: <Clock className="w-6 h-6 text-medical-teal" />,
      title: "Flexible Scheduling",
      description: "Appointments available Monday through Saturday with emergency support available 24/7"
    },
    {
      icon: <Shield className="w-6 h-6 text-medical-deep-blue" />,
      title: "Privacy & Security",
      description: "Complete HIPAA compliance with secure patient portal for confidential communication"
    },
    {
      icon: <Heart className="w-6 h-6 text-medical-orange" />,
      title: "Family-Centered Care",
      description: "Involving family members in treatment planning and providing caregiver support resources"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-medical-beige/30 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-medical-teal/10 rounded-full mb-6">
              <span className="text-medical-teal font-inter text-sm font-medium">Treatment Journey</span>
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl text-medical-charcoal mb-6">
              Your Path to Better Health
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-medical-teal to-medical-orange mx-auto mb-6"></div>
            <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive, step-by-step approach to understanding and treating your neurological health concerns
            </p>
          </div>
        </ScrollReveal>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-medical-teal via-medical-deep-blue to-medical-orange opacity-30"></div>
          
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <ScrollReveal key={index} direction={index % 2 === 0 ? "left" : "right"} delay={0.2 + index * 0.1}>
                <div className={`flex flex-col lg:flex-row items-center gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  {/* Step Card */}
                  <div className="flex-1 max-w-2xl">
                    <Card className="hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white border-0 shadow-lg relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-medical-teal/5 to-medical-deep-blue/5 rounded-full blur-2xl"></div>
                      
                      <CardContent className="p-8 relative">
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 bg-gradient-to-br from-medical-teal to-medical-deep-blue rounded-full flex items-center justify-center text-white font-bold text-xl mr-4 shadow-lg">
                            {step.step}
                          </div>
                          <div className="p-3 bg-gradient-to-br from-medical-teal/10 to-medical-deep-blue/10 rounded-2xl">
                            {step.icon}
                          </div>
                        </div>
                        
                        <h3 className="font-playfair text-2xl font-semibold text-medical-charcoal mb-4">
                          {step.title}
                        </h3>
                        
                        <p className="font-inter text-gray-700 mb-6 leading-relaxed text-lg">
                          {step.description}
                        </p>
                        
                        <div className="mb-6">
                          <div className="flex items-center mb-4">
                            <Clock className="w-5 h-5 text-medical-teal mr-2" />
                            <span className="font-inter text-sm font-medium text-medical-deep-blue">
                              Duration: {step.duration}
                            </span>
                          </div>
                          
                          <div className="space-y-2">
                            <h4 className="font-inter font-semibold text-medical-charcoal mb-3">What to Expect:</h4>
                            <ul className="space-y-2">
                              {step.details.map((detail, detailIndex) => (
                                <li key={detailIndex} className="flex items-start space-x-3">
                                  <div className="w-2 h-2 bg-medical-teal rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="font-inter text-gray-700 text-sm">{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Arrow Connector */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block">
                      <div className="w-12 h-12 bg-gradient-to-br from-medical-teal to-medical-deep-blue rounded-full flex items-center justify-center shadow-lg">
                        <ArrowRight className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Support Features */}
        <ScrollReveal direction="up" delay={0.6}>
          <div className="mt-20">
            <div className="bg-gradient-to-br from-white to-medical-beige/20 rounded-3xl p-8 shadow-xl">
              <div className="text-center mb-12">
                <h3 className="font-playfair text-3xl text-medical-charcoal mb-4">
                  Comprehensive Support Throughout Your Journey
                </h3>
                <div className="w-16 h-0.5 bg-gradient-to-r from-medical-teal to-medical-orange mx-auto"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {supportFeatures.map((feature, index) => (
                  <div key={index} className="text-center group">
                    <div className="mb-4 p-4 bg-white rounded-2xl w-fit mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                      {feature.icon}
                    </div>
                    <h4 className="font-playfair text-xl font-semibold text-medical-charcoal mb-3">
                      {feature.title}
                    </h4>
                    <p className="font-inter text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default TreatmentProcess;
