
import React, { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { format } from 'date-fns';
import { Phone, Video, Clock } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import ScrollReveal from '@/components/animations/ScrollReveal';
import FadeInButton from '@/components/animations/FadeInButton';
import AppointmentHero from '@/components/appointment/AppointmentHero';
import AppointmentTypes from '@/components/appointment/AppointmentTypes';
import BookingForm from '@/components/appointment/BookingForm';
import PersonalInfoForm from '@/components/appointment/PersonalInfoForm';
import MedicalInfoForm from '@/components/appointment/MedicalInfoForm';
import EmergencyContactForm from '@/components/appointment/EmergencyContactForm';

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [appointmentType, setAppointmentType] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    reason: '',
    insurance: '',
    previousPatient: '',
    medications: '',
    emergencyContact: '',
    emergencyPhone: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime || !appointmentType) {
      toast({
        title: "Incomplete Information",
        description: "Please fill in all required fields including date, time, and appointment type.",
        variant: "destructive"
      });
      return;
    }

    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.reason) {
      toast({
        title: "Missing Required Information",
        description: "Please fill in all required personal and medical information fields.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('submit-appointment', {
        body: {
          ...formData,
          date: format(selectedDate, 'yyyy-MM-dd'),
          time: selectedTime,
          type: appointmentType
        }
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Appointment Requested Successfully! ✨",
        description: "Thank you! We'll confirm your appointment within 24 hours and send you a confirmation email.",
      });
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        dateOfBirth: '',
        reason: '',
        insurance: '',
        previousPatient: '',
        medications: '',
        emergencyContact: '',
        emergencyPhone: ''
      });
      setSelectedDate(undefined);
      setSelectedTime('');
      setAppointmentType('');

    } catch (error) {
      console.error('Error submitting appointment:', error);
      toast({
        title: "Submission Error",
        description: "There was an error submitting your appointment. Please try again or call us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-medical-beige via-white to-medical-teal/5">
      <Navigation />
      
      <AppointmentHero />
      
      <AppointmentTypes 
        appointmentType={appointmentType}
        setAppointmentType={setAppointmentType}
      />

      {/* Main Booking Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            <BookingForm
              selectedDate={selectedDate}
              setSelectedDate={setSelectedDate}
              selectedTime={selectedTime}
              setSelectedTime={setSelectedTime}
            />

            <PersonalInfoForm
              formData={formData}
              handleInputChange={handleInputChange}
            />

            <MedicalInfoForm
              formData={formData}
              handleInputChange={handleInputChange}
            />

            <EmergencyContactForm
              formData={formData}
              handleInputChange={handleInputChange}
            />

            <ScrollReveal direction="up" delay={0.6}>
              <div className="text-center pt-6">
                <FadeInButton 
                  type="submit" 
                  loading={isSubmitting}
                  className="bg-gradient-to-r from-medical-deep-blue to-medical-teal hover:from-medical-teal hover:to-medical-deep-blue text-white px-12 py-4 text-lg font-inter shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  {isSubmitting ? 'Submitting Request...' : 'Request Appointment'}
                </FadeInButton>
                <p className="font-inter text-sm text-gray-600 mt-4">
                  We'll contact you within 24 hours to confirm your appointment
                </p>
              </div>
            </ScrollReveal>
          </form>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gradient-to-br from-medical-beige to-medical-teal/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up" delay={0.1}>
            <h2 className="font-playfair text-3xl text-medical-charcoal mb-8">
              Need Help Scheduling?
            </h2>
            <p className="font-inter text-gray-600 mb-8 max-w-2xl mx-auto">
              Our friendly staff is here to help you with any questions about scheduling or preparing for your visit
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                icon: Phone, 
                title: "Call Us", 
                content: "89044 18172", 
                subtitle: "Mon-Fri: 8AM-5PM", 
                action: "Call Now" 
              },
              { 
                icon: Video, 
                title: "Video Consult", 
                content: "Available for follow-ups", 
                subtitle: "Same day available", 
                action: "Learn More" 
              },
              { 
                icon: Clock, 
                title: "Emergency", 
                content: "24/7 Support", 
                subtitle: "For existing patients", 
                action: "Emergency Line" 
              }
            ].map((item, index) => (
              <ScrollReveal key={index} direction="up" delay={0.2 + index * 0.1}>
                <Card className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-medical-teal to-medical-deep-blue rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-playfair text-lg font-semibold text-medical-charcoal mb-2">{item.title}</h3>
                    <p className="font-inter text-medical-deep-blue font-medium mb-1">{item.content}</p>
                    <p className="font-inter text-sm text-gray-600 mb-3">{item.subtitle}</p>
                    <button className="font-inter text-sm text-medical-teal hover:text-medical-deep-blue transition-colors duration-200 font-medium">
                      {item.action}
                    </button>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Appointment;
