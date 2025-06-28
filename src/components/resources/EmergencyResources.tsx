
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Phone } from 'lucide-react';

const EmergencyResources = () => {
  return (
    <section className="py-16 bg-medical-deep-blue text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Phone className="w-16 h-16 text-medical-teal mx-auto mb-6" />
        <h2 className="font-playfair text-3xl md:text-4xl mb-6">
          Crisis & Emergency Resources
        </h2>
        <p className="font-inter text-xl mb-8 opacity-90">
          If you're experiencing a medical emergency or crisis situation, 
          these resources are available 24/7.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-white/10 border-white/20">
            <CardContent className="p-6 text-center">
              <h3 className="font-inter font-semibold mb-2">Medical Emergency</h3>
              <p className="font-inter text-2xl font-bold text-medical-teal">911</p>
              <p className="font-inter text-sm opacity-80">Life-threatening situations</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 border-white/20">
            <CardContent className="p-6 text-center">
              <h3 className="font-inter font-semibold mb-2">Crisis Hotline</h3>
              <p className="font-inter text-lg font-bold text-medical-teal">988</p>
              <p className="font-inter text-sm opacity-80">Mental health emergencies</p>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 border-white/20">
            <CardContent className="p-6 text-center">
              <h3 className="font-inter font-semibold mb-2">Our Emergency Line</h3>
              <p className="font-inter text-lg font-bold text-medical-teal">(555) 123-4567</p>
              <p className="font-inter text-sm opacity-80">For existing patients</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EmergencyResources;
