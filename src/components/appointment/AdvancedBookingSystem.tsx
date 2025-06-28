
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, Phone, Mail, FileText, CheckCircle, AlertCircle } from 'lucide-react';
import { format, addDays, isSameDay, isAfter, isBefore } from 'date-fns';
import ScrollReveal from '@/components/animations/ScrollReveal';

const AdvancedBookingSystem = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [appointmentType, setAppointmentType] = useState<string>('');
  const [currentStep, setCurrentStep] = useState(1);

  // Generate available dates (next 30 days, excluding Sundays)
  const generateAvailableDates = () => {
    const dates = [];
    let current = new Date();
    let count = 0;
    
    while (count < 30) {
      if (current.getDay() !== 0) { // Exclude Sundays
        dates.push(new Date(current));
        count++;
      }
      current = addDays(current, 1);
    }
    return dates;
  };

  const availableDates = generateAvailableDates();

  // Generate time slots
  const timeSlots = [
    { time: '9:00 AM', available: true, type: 'morning' },
    { time: '9:45 AM', available: true, type: 'morning' },
    { time: '10:30 AM', available: false, type: 'morning' },
    { time: '11:15 AM', available: true, type: 'morning' },
    { time: '12:00 PM', available: true, type: 'morning' },
    { time: '1:00 PM', available: true, type: 'afternoon' },
    { time: '1:45 PM', available: true, type: 'afternoon' },
    { time: '2:30 PM', available: false, type: 'afternoon' },
    { time: '3:15 PM', available: true, type: 'afternoon' },
    { time: '4:00 PM', available: true, type: 'afternoon' }
  ];

  const appointmentTypes = [
    {
      id: 'initial',
      title: 'Initial Consultation',
      duration: '90 minutes',
      description: 'Comprehensive first visit with detailed evaluation',
      price: 'Covered by Insurance'
    },
    {
      id: 'followup',
      title: 'Follow-up Visit',
      duration: '45 minutes',
      description: 'Regular check-up and treatment adjustment',
      price: 'Covered by Insurance'
    },
    {
      id: 'assessment',
      title: 'Memory Assessment',
      duration: '2-3 hours',
      description: 'Detailed cognitive and neuropsychological testing',
      price: 'Insurance Pre-auth Required'
    },
    {
      id: 'family',
      title: 'Family Consultation',
      duration: '60 minutes',
      description: 'Family meeting to discuss care planning',
      price: 'Covered by Insurance'
    }
  ];

  const steps = [
    { number: 1, title: 'Select Service', icon: <FileText className="w-5 h-5" /> },
    { number: 2, title: 'Choose Date & Time', icon: <Calendar className="w-5 h-5" /> },
    { number: 3, title: 'Personal Information', icon: <User className="w-5 h-5" /> },
    { number: 4, title: 'Confirmation', icon: <CheckCircle className="w-5 h-5" /> }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <ScrollReveal direction="up" delay={0.1}>
        <div className="text-center mb-12">
          <h2 className="font-playfair text-4xl text-medical-charcoal mb-6">
            Advanced Booking System
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-medical-teal to-medical-orange mx-auto mb-6"></div>
          <p className="font-inter text-xl text-gray-600">
            Schedule your appointment with our enhanced booking experience
          </p>
        </div>
      </ScrollReveal>

      {/* Progress Steps */}
      <ScrollReveal direction="up" delay={0.2}>
        <div className="mb-12">
          <div className="flex items-center justify-center space-x-4 md:space-x-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center space-x-2 ${
                  currentStep >= step.number 
                    ? 'text-medical-teal' 
                    : 'text-gray-400'
                }`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    currentStep >= step.number
                      ? 'bg-medical-teal text-white'
                      : 'bg-gray-200 text-gray-400'
                  }`}>
                    {currentStep > step.number ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      step.icon
                    )}
                  </div>
                  <span className="hidden md:block font-inter text-sm font-medium">
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-8 h-0.5 mx-4 ${
                    currentStep > step.number ? 'bg-medical-teal' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Step Content */}
      <div className="space-y-8">
        {/* Step 1: Service Selection */}
        {currentStep === 1 && (
          <ScrollReveal direction="up" delay={0.3}>
            <Card className="shadow-2xl border-0 bg-white">
              <CardHeader>
                <CardTitle className="font-playfair text-2xl text-medical-charcoal text-center">
                  Select Your Appointment Type
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {appointmentTypes.map((type) => (
                    <div
                      key={type.id}
                      onClick={() => {
                        setAppointmentType(type.id);
                        setCurrentStep(2);
                      }}
                      className={`p-6 rounded-xl border-2 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                        appointmentType === type.id
                          ? 'border-medical-teal bg-medical-teal/5'
                          : 'border-gray-200 hover:border-medical-teal/50'
                      }`}
                    >
                      <h3 className="font-playfair text-xl font-semibold text-medical-charcoal mb-2">
                        {type.title}
                      </h3>
                      <div className="flex items-center space-x-2 mb-3">
                        <Clock className="w-4 h-4 text-medical-teal" />
                        <span className="font-inter text-sm text-gray-600">{type.duration}</span>
                      </div>
                      <p className="font-inter text-gray-700 mb-4">{type.description}</p>
                      <div className="inline-block px-3 py-1 bg-medical-deep-blue/10 text-medical-deep-blue font-inter text-sm font-medium rounded-full">
                        {type.price}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        )}

        {/* Step 2: Date & Time Selection */}
        {currentStep === 2 && (
          <ScrollReveal direction="up" delay={0.3}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Date Selection */}
              <Card className="shadow-2xl border-0 bg-white">
                <CardHeader>
                  <CardTitle className="font-playfair text-xl text-medical-charcoal flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-medical-teal" />
                    Select Date
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-7 gap-2 mb-4">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                      <div key={day} className="text-center font-inter text-sm font-medium text-gray-600 p-2">
                        {day}
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-2">
                    {availableDates.slice(0, 21).map((date, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedDate(date)}
                        className={`p-2 text-sm font-inter rounded-lg transition-colors ${
                          selectedDate && isSameDay(date, selectedDate)
                            ? 'bg-medical-teal text-white'
                            : 'hover:bg-medical-teal/10 text-gray-700'
                        }`}
                      >
                        {format(date, 'd')}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Time Selection */}
              <Card className="shadow-2xl border-0 bg-white">
                <CardHeader>
                  <CardTitle className="font-playfair text-xl text-medical-charcoal flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-medical-teal" />
                    Available Times
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  {selectedDate ? (
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-inter font-medium text-medical-charcoal mb-3">Morning</h3>
                        <div className="grid grid-cols-2 gap-2">
                          {timeSlots.filter(slot => slot.type === 'morning').map((slot) => (
                            <button
                              key={slot.time}
                              onClick={() => {
                                if (slot.available) {
                                  setSelectedTime(slot.time);
                                  setCurrentStep(3);
                                }
                              }}
                              disabled={!slot.available}
                              className={`p-3 text-sm font-inter rounded-lg transition-colors ${
                                selectedTime === slot.time
                                  ? 'bg-medical-teal text-white'
                                  : slot.available
                                  ? 'bg-gray-50 hover:bg-medical-teal/10 text-gray-700'
                                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                              }`}
                            >
                              {slot.time}
                              {!slot.available && (
                                <div className="text-xs mt-1">Unavailable</div>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="font-inter font-medium text-medical-charcoal mb-3">Afternoon</h3>
                        <div className="grid grid-cols-2 gap-2">
                          {timeSlots.filter(slot => slot.type === 'afternoon').map((slot) => (
                            <button
                              key={slot.time}
                              onClick={() => {
                                if (slot.available) {
                                  setSelectedTime(slot.time);
                                  setCurrentStep(3);
                                }
                              }}
                              disabled={!slot.available}
                              className={`p-3 text-sm font-inter rounded-lg transition-colors ${
                                selectedTime === slot.time
                                  ? 'bg-medical-teal text-white'
                                  : slot.available
                                  ? 'bg-gray-50 hover:bg-medical-teal/10 text-gray-700'
                                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                              }`}
                            >
                              {slot.time}
                              {!slot.available && (
                                <div className="text-xs mt-1">Unavailable</div>
                              )}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <Calendar className="w-12 h-12 mx-auto mb-4 opacity-50" />
                      <p className="font-inter">Please select a date first</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between pt-6">
          <Button
            variant="outline"
            onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
            disabled={currentStep === 1}
            className="border-medical-teal text-medical-teal hover:bg-medical-teal hover:text-white"
          >
            Previous Step
          </Button>
          
          <div className="text-center">
            <p className="font-inter text-sm text-gray-600">
              Step {currentStep} of {steps.length}
            </p>
          </div>
          
          <Button
            onClick={() => setCurrentStep(Math.min(steps.length, currentStep + 1))}
            disabled={
              (currentStep === 1 && !appointmentType) ||
              (currentStep === 2 && (!selectedDate || !selectedTime))
            }
            className="bg-medical-teal hover:bg-medical-teal/90 text-white"
          >
            Next Step
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdvancedBookingSystem;
