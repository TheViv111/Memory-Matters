
import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Heart, Users, Calendar, Shield, Star, Phone, Clock, CheckCircle } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section with Professional Background */}
      <HeroSection />

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-white to-medical-beige/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-medical-teal/10 rounded-full mb-6">
              <span className="text-medical-teal font-inter text-sm font-medium">Comprehensive Care</span>
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl text-medical-charcoal mb-6">
              Specialized Mental Health Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-medical-teal to-medical-orange mx-auto mb-6"></div>
            <p className="font-inter text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We offer evidence-based psychiatric care tailored to the unique needs of older adults, 
              combining clinical expertise with compassionate understanding.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
              icon: <Heart className="w-8 h-8 text-medical-teal" />,
              title: "Memory Assessments",
              description: "Comprehensive cognitive evaluations and early detection of memory disorders using advanced neuropsychological testing and clinical expertise."
            }, {
              icon: <Users className="w-8 h-8 text-medical-teal" />,
              title: "Dementia Care",
              description: "Specialized treatment plans and ongoing support for dementia patients and families, including Alzheimer's disease management and care planning."
            }, {
              icon: <Shield className="w-8 h-8 text-medical-teal" />,
              title: "Mood Disorders",
              description: "Expert treatment for depression, anxiety, and other mood disorders in older adults with age-appropriate therapeutic approaches."
            }, {
              icon: <Calendar className="w-8 h-8 text-medical-teal" />,
              title: "Psychiatric Consultation",
              description: "Comprehensive psychiatric evaluations and medication management for complex mental health conditions in geriatric populations."
            }, {
              icon: <Heart className="w-8 h-8 text-medical-teal" />,
              title: "Family Support",
              description: "Guidance and support for families navigating mental health challenges in aging loved ones, including caregiver support programs."
            }, {
              icon: <Clock className="w-8 h-8 text-medical-teal" />,
              title: "Crisis Intervention",
              description: "Emergency psychiatric services and crisis intervention for urgent mental health situations requiring immediate professional attention."
            }].map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="mb-6 p-4 bg-gradient-to-br from-medical-teal/10 to-medical-deep-blue/10 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300 shadow-md">
                    {service.icon}
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-medical-charcoal mb-4">
                    {service.title}
                  </h3>
                  <p className="font-inter text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-6 w-12 h-0.5 bg-gradient-to-r from-medical-teal to-medical-orange group-hover:w-full transition-all duration-300"></div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <Link to="/services">
              <Button className="bg-gradient-to-r from-medical-deep-blue to-medical-teal hover:from-medical-teal hover:to-medical-deep-blue text-white px-12 py-4 text-lg font-inter shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-xl">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Dr. Hegde Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-br from-medical-teal/10 to-medical-deep-blue/10 rounded-3xl transform rotate-2 hover:rotate-3 transition-transform duration-500"></div>
              <div className="relative bg-white p-4 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                <img 
                  alt="Dr. Soumya Hegde - Professional portrait" 
                  className="w-full h-[500px] object-cover object-center rounded-2xl shadow-lg" 
                  src="/lovable-uploads/d2a52f41-086d-4bdd-b753-d979277c6651.png" 
                />
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center px-6 py-3 bg-medical-teal/10 rounded-full mb-8">
                <Star className="w-4 h-4 text-medical-teal mr-2" />
                <span className="text-medical-teal font-inter text-sm font-medium">15+ Years Clinical Excellence</span>
              </div>
              
              <h2 className="font-playfair text-4xl md:text-5xl text-medical-charcoal mb-8">
                Meet Dr. Soumya Hegde
              </h2>
              
              <div className="w-24 h-1 bg-gradient-to-r from-medical-teal to-medical-orange mb-8"></div>
              
              <p className="font-inter text-xl text-gray-700 mb-8 leading-relaxed">
                A compassionate and highly experienced geriatric psychiatrist dedicated to improving 
                the mental health and quality of life of older adults through evidence-based care 
                and personalized treatment approaches.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-gradient-to-br from-medical-teal/5 to-medical-deep-blue/5 p-6 rounded-xl shadow-md border border-medical-teal/10 hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl font-bold text-medical-deep-blue mb-2">15+</div>
                  <div className="font-inter text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="bg-gradient-to-br from-medical-orange/5 to-medical-teal/5 p-6 rounded-xl shadow-md border border-medical-teal/10 hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl font-bold text-medical-orange mb-2">1000+</div>
                  <div className="font-inter text-sm text-gray-600">Patients Helped</div>
                </div>
              </div>
              
              <div className="space-y-4 mb-10">
                {[
                  "Board-Certified Geriatric Psychiatrist",
                  "Memory Disorders & Cognitive Health Specialist", 
                  "Published Researcher in Geriatric Mental Health",
                  "Compassionate Patient-Centered Care Approach"
                ].map((credential, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-medical-teal flex-shrink-0" />
                    <span className="font-inter text-gray-700">{credential}</span>
                  </div>
                ))}
              </div>
              
              <Link to="/about">
                <Button className="bg-gradient-to-r from-medical-deep-blue to-medical-teal hover:from-medical-teal hover:to-medical-deep-blue text-white px-10 py-4 text-lg font-inter shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-xl">
                  Learn More About Dr. Hegde
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="py-20 bg-gradient-to-br from-medical-beige/30 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-block px-6 py-2 bg-medical-teal/10 rounded-full mb-6">
              <span className="text-medical-teal font-inter text-sm font-medium">Patient Stories</span>
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl text-medical-charcoal mb-6">
              What Our Families Say
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-medical-teal to-medical-orange mx-auto mb-6"></div>
            <p className="font-inter text-xl text-gray-600 max-w-2xl mx-auto">
              Real stories from patients and families we've had the privilege to serve on their mental health journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
              name: "Anonymous Patient Review",
              relation: "Verified Patient",
              content: "Excellent doctor. Very patient and gentle. Takes detailed history. Conservative in approach, patient-centric, and also provides a lot of education and advice to caregivers and family members. Truly a gem! M-S 9 to 4 at the clinic. Need to take prior appointment.",
              rating: 5,
              featured: true
            }, {
              name: "Margaret Thompson",
              relation: "Daughter of Patient",
              content: "Dr. Hegde's compassionate approach made such a difficult time more manageable. She took time to explain everything and helped us understand Dad's condition with patience and clarity.",
              rating: 5
            }, {
              name: "Robert Chen",
              relation: "Patient",
              content: "The memory assessment was thorough yet comfortable. Dr. Hegde and her team made me feel heard and respected throughout the entire process. Highly recommended.",
              rating: 5
            }].map((testimonial, index) => (
              <Card key={index} className={`border-l-4 border-medical-teal hover:shadow-2xl transition-all duration-300 hover:scale-105 ${testimonial.featured ? 'bg-gradient-to-br from-medical-teal/5 to-medical-deep-blue/5 ring-2 ring-medical-teal/20 shadow-xl' : 'bg-white shadow-lg'}`}>
                <CardContent className="p-8">
                  <div className="flex mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="font-inter text-gray-700 mb-6 italic leading-relaxed text-lg">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-medical-charcoal text-lg">{testimonial.name}</p>
                    <p className="text-sm text-gray-600 mb-2">{testimonial.relation}</p>
                    {testimonial.featured && (
                      <div className="inline-flex items-center px-3 py-1 bg-medical-teal/10 rounded-full">
                        <span className="text-xs text-medical-teal font-medium">Featured Review</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-medical-deep-blue to-medical-charcoal text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-medical-teal/10 to-transparent" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="font-playfair text-4xl md:text-5xl mb-8">
            Ready to Begin Your Journey to Better Mental Health?
          </h2>
          <p className="font-inter text-xl mb-12 opacity-90 leading-relaxed max-w-3xl mx-auto">
            Schedule your comprehensive consultation today and discover how specialized geriatric psychiatry 
            can enhance quality of life for you or your loved one.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link to="/appointment">
              <Button className="bg-medical-teal hover:bg-medical-teal/90 text-white px-12 py-4 text-lg font-inter shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-xl">
                Schedule Consultation
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-medical-deep-blue px-12 py-4 text-lg font-inter transition-all duration-300 hover:scale-105 rounded-xl shadow-lg">
                Contact Our Office
              </Button>
            </Link>
          </div>
          
          {/* Enhanced Office Hours */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Clock className="w-6 h-6 text-medical-teal" />
              <span className="font-inter font-semibold text-lg">Office Hours</span>
            </div>
            <p className="font-inter text-lg mb-2">Monday - Saturday: 9:00 AM - 4:00 PM</p>
            <p className="font-inter text-sm opacity-75 mb-4">Sunday: Closed</p>
            <div className="border-t border-white/20 pt-4">
              <p className="font-inter text-sm text-medical-teal font-medium">Prior appointment required</p>
              <p className="font-inter text-sm text-medical-orange font-medium">Emergency consultations available 24/7</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
