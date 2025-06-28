
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Phone } from 'lucide-react';

const EmergencyResources = () => {
  return (
    <section className="py-16 bg-medical-deep-blue text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Phone className="w-12 h-12 text-medical-orange mx-auto mb-4" />
          <h2 className="text-3xl font-playfair font-bold mb-4">
            Emergency Resources
          </h2>
          <p className="text-lg text-blue-100 max-w-3xl mx-auto">
            Important contacts and resources for urgent situations and crisis support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-colors duration-300">
            <CardContent className="p-6 text-center">
              <Phone className="w-8 h-8 text-medical-orange mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Emergency Line</h3>
              <p className="text-2xl font-bold text-medical-orange mb-2">911</p>
              <p className="text-sm text-blue-100">For immediate medical emergencies</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-colors duration-300">
            <CardContent className="p-6 text-center">
              <Phone className="w-8 h-8 text-medical-orange mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Crisis Helpline</h3>
              <p className="text-xl font-bold text-medical-orange mb-2">988</p>
              <p className="text-sm text-blue-100">24/7 mental health crisis support</p>
            </CardContent>
          </Card>

          <Card className="bg-white/10 border-white/20 hover:bg-white/20 transition-colors duration-300">
            <CardContent className="p-6 text-center">
              <Phone className="w-8 h-8 text-medical-orange mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Dr. Hegde</h3>
              <p className="text-xl font-bold text-medical-orange mb-2">89044 18172</p>
              <p className="text-sm text-blue-100">For urgent medical concerns</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-blue-100">
            If you're experiencing a medical emergency, call 911 immediately. For non-emergency concerns, 
            contact our office during business hours or leave a message for urgent matters.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmergencyResources;
