
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQs = () => {
  const faqs = [
    {
      id: "01",
      question: "What is the length and frequency of our sessions?",
      answer: "Each session will be 50 minutes to an hour. We typically schedule our appointments once a week or every two weeks."
    },
    {
      id: "02", 
      question: "Are sessions in-person or online?",
      answer: "We offer both in-person consultations at our clinic and online sessions via secure video conferencing, depending on your preference and needs."
    },
    {
      id: "03",
      question: "How much is the fee?",
      answer: "Consultation fees vary based on the type of session and duration. Please contact our office at 89044 18172 for detailed pricing information."
    },
    {
      id: "04",
      question: "Is there a sliding fee scale?",
      answer: "We understand that mental health care should be accessible. Please discuss your financial situation with our office, and we will work with you to find a suitable arrangement."
    },
    {
      id: "05",
      question: "What happens typically during a session?",
      answer: "During a typical session, we will discuss your concerns, review your medical history, assess your cognitive function if needed, and develop a personalized treatment plan. Each session is tailored to your specific needs."
    },
    {
      id: "06",
      question: "How long does the therapy process take?",
      answer: "The duration of treatment varies significantly depending on individual needs, the complexity of the condition, and treatment goals. Some patients see improvement in a few sessions, while others may require longer-term care."
    },
    {
      id: "07",
      question: "How do I know if it's a good fit?",
      answer: "A good therapeutic relationship is built on trust, comfort, and effective communication. If you feel heard, understood, and see positive changes in your well-being, it's likely a good fit. We encourage open discussion about your comfort level."
    },
    {
      id: "08",
      question: "Do you prescribe medication?",
      answer: "Yes, as a qualified psychiatrist, Dr. Soumya Hegde can prescribe medication when appropriate. She takes a comprehensive approach, considering both medication and therapeutic interventions based on individual patient needs."
    }
  ];

  return (
    <div className="min-h-screen bg-medical-beige">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-medical-beige via-white to-medical-teal/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-medical-teal/5 to-medical-deep-blue/5" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-medical-teal/10 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-medical-charcoal mb-8 leading-tight">
            Frequently Asked Questions
          </h1>
          <div className="w-20 h-1 bg-medical-teal mx-auto mb-8"></div>
          <p className="font-inter text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our services, appointments, and treatment approach.
          </p>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq) => (
              <AccordionItem 
                key={faq.id} 
                value={faq.id}
                className="bg-gradient-to-r from-gray-50 to-white rounded-lg border-0 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <AccordionTrigger className="px-8 py-6 text-left hover:no-underline">
                  <div className="flex items-center space-x-6 w-full">
                    <div className="bg-medical-teal/10 text-medical-teal font-playfair text-xl font-bold w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0">
                      {faq.id}
                    </div>
                    <h3 className="font-inter text-lg font-medium text-medical-charcoal text-left">
                      {faq.question}
                    </h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6">
                  <div className="ml-22">
                    <p className="font-inter text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-br from-medical-beige to-medical-teal/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl text-medical-charcoal mb-6">
            Still Have Questions?
          </h2>
          <p className="font-inter text-lg text-gray-600 mb-8">
            We're here to help. Contact us directly for personalized answers to your concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:8904418172"
              className="inline-flex items-center justify-center bg-medical-teal hover:bg-medical-teal/90 text-white px-8 py-3 rounded-lg font-inter font-medium transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Call Us: 89044 18172
            </a>
            <a 
              href="mailto:memorymattersindia@gmail.com"
              className="inline-flex items-center justify-center border-2 border-medical-teal text-medical-teal hover:bg-medical-teal hover:text-white px-8 py-3 rounded-lg font-inter font-medium transition-all duration-300 hover:scale-105"
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQs;
