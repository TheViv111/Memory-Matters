
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const NewsletterSignup = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-playfair text-3xl text-medical-charcoal mb-6">
          Stay Informed
        </h2>
        <p className="font-inter text-lg text-gray-600 mb-8">
          Subscribe to our newsletter for the latest research, tips, and resources 
          delivered directly to your inbox.
        </p>
        
        <Card className="max-w-md mx-auto">
          <CardContent className="p-6">
            <div className="space-y-4">
              <Input placeholder="Enter your email address" type="email" />
              <Button className="bg-medical-deep-blue hover:bg-medical-deep-blue/90 text-white w-full">
                Subscribe to Newsletter
              </Button>
              <p className="font-inter text-xs text-gray-500">
                We respect your privacy and will never share your information.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default NewsletterSignup;
