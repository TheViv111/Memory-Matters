
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ResourcesFAQ = () => {
  const faqItems = [{
    question: "When should I be concerned about memory changes?",
    answer: "While some memory changes are normal with aging, be concerned if you notice significant changes in daily functioning, difficulty completing familiar tasks, confusion with time or place, or changes in judgment or decision-making."
  }, {
    question: "What should I expect during a memory assessment?",
    answer: "A comprehensive memory assessment typically includes a detailed medical history, cognitive testing, physical examination, and may include brain imaging. The process usually takes 2-3 hours and family members are encouraged to attend."
  }, {
    question: "How can I support a family member with dementia?",
    answer: "Focus on maintaining routines, creating a safe environment, using clear communication, being patient, and taking care of your own health. Consider joining support groups and utilizing respite care services."
  }, {
    question: "Are there treatments available for memory disorders?",
    answer: "While there's no cure for most memory disorders, various treatments can help manage symptoms, slow progression, and improve quality of life. These include medications, cognitive therapies, and lifestyle interventions."
  }, {
    question: "What resources are available for caregivers?",
    answer: "We offer caregiver education, support groups, respite care resources, and connections to community services. Our team can help you develop a comprehensive care plan and access available resources."
  }];

  return (
    <section className="py-16 bg-medical-beige">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-playfair font-bold text-medical-charcoal mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about memory care and our services.
          </p>
        </div>

        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-medical-charcoal mb-3">
                  {item.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.answer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesFAQ;
