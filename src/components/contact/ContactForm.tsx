
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import ScrollReveal from '@/components/animations/ScrollReveal';
import FadeInButton from '@/components/animations/FadeInButton';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    contactPreference: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Incomplete Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('submit-contact', {
        body: formData
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Message Sent Successfully! ✨",
        description: "Thank you for contacting us. We'll respond within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        contactPreference: ''
      });

    } catch (error) {
      console.error('Error submitting contact form:', error);
      toast({
        title: "Submission Error",
        description: "There was an error sending your message. Please try again or call us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full">
      <ScrollReveal direction="left" delay={0.1}>
        <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-gray-50">
          <CardHeader>
            <CardTitle className="font-playfair text-2xl text-medical-charcoal">
              Send Us a Message
            </CardTitle>
            <p className="text-gray-600 font-inter">
              We'd love to hear from you. Send us a message and we'll respond within 24 hours.
            </p>
          </CardHeader>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="font-inter font-medium text-medical-charcoal">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                    className="mt-1 hover:border-medical-teal focus:border-medical-teal transition-colors duration-200"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="font-inter font-medium text-medical-charcoal">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="mt-1 hover:border-medical-teal focus:border-medical-teal transition-colors duration-200"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="email" className="font-inter font-medium text-medical-charcoal">
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  required
                  className="mt-1 hover:border-medical-teal focus:border-medical-teal transition-colors duration-200"
                  placeholder="Enter your email address"
                />
              </div>
              
              <div>
                <Label className="font-inter font-medium text-medical-charcoal">
                  Subject *
                </Label>
                <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                  <SelectTrigger className="mt-1 hover:border-medical-teal transition-colors duration-200">
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-2 border-medical-teal/20 shadow-xl">
                    <SelectItem value="appointment">Schedule Appointment</SelectItem>
                    <SelectItem value="insurance">Insurance Questions</SelectItem>
                    <SelectItem value="records">Medical Records</SelectItem>
                    <SelectItem value="services">Services Information</SelectItem>
                    <SelectItem value="billing">Billing Inquiry</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label className="font-inter font-medium text-medical-charcoal">
                  Preferred Contact Method
                </Label>
                <Select value={formData.contactPreference} onValueChange={(value) => handleInputChange('contactPreference', value)}>
                  <SelectTrigger className="mt-1 hover:border-medical-teal transition-colors duration-200">
                    <SelectValue placeholder="How would you like us to respond?" />
                  </SelectTrigger>
                  <SelectContent className="bg-white border-2 border-medical-teal/20 shadow-xl">
                    <SelectItem value="email">Email</SelectItem>
                    <SelectItem value="phone">Phone Call</SelectItem>
                    <SelectItem value="either">Either Email or Phone</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="message" className="font-inter font-medium text-medical-charcoal">
                  Message *
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Please describe your question or concern..."
                  required
                  className="mt-1 hover:border-medical-teal focus:border-medical-teal transition-colors duration-200"
                  rows={5}
                />
              </div>
              
              <FadeInButton 
                type="submit" 
                loading={isSubmitting}
                className="bg-medical-deep-blue hover:bg-medical-deep-blue/90 text-white w-full font-inter shadow-lg"
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
              </FadeInButton>
              
              <p className="font-inter text-sm text-gray-600 text-center">
                We'll respond to your message within 24 hours during business days.
              </p>
            </form>
          </CardContent>
        </Card>
      </ScrollReveal>
    </div>
  );
};

export default ContactForm;
