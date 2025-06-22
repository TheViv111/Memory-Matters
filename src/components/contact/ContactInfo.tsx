
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Shield } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';

const ContactInfo = () => {
  const contactItems = [
    { icon: Phone, title: "Phone", content: "+91 9867739963", subtitle: "Main Office" },
    { icon: Mail, title: "Email", content: "info@memorymattersmd.com", subtitle: "General Inquiries" },
    { icon: MapPin, title: "Location", content: "4, Wind Tunnel Rd", subtitle: "Murugeshpalya, Bengaluru" },
    { icon: Shield, title: "Emergency", content: "+91 9867739963", subtitle: "24/7 for Patients" }
  ];

  return (
    <section className="py-16 bg-medical-beige">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactItems.map((item, index) => (
            <ScrollReveal key={index} direction="up" delay={0.1 + index * 0.1}>
              <Card className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-6">
                  <div className="transform transition-transform duration-200 hover:scale-110">
                    <item.icon className="w-12 h-12 text-medical-teal mx-auto mb-4" />
                  </div>
                  <h3 className="font-playfair text-lg text-medical-charcoal mb-2">{item.title}</h3>
                  <p className="font-inter text-medical-deep-blue font-semibold">{item.content}</p>
                  <p className="font-inter text-sm text-gray-600 mt-1">{item.subtitle}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
