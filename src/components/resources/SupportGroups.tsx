
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Clock, Heart } from 'lucide-react';

const SupportGroups = () => {
  const supportGroups = [
    {
      name: "Alzheimer's Family Support Group",
      schedule: "First Thursday of every month, 6:00 PM",
      format: "In-person & Virtual",
      description: "Support and education for families affected by Alzheimer's disease"
    },
    {
      name: "Caregiver Wellness Circle",
      schedule: "Every other Tuesday, 2:00 PM",
      format: "In-person",
      description: "Focus on caregiver self-care and stress management"
    },
    {
      name: "Memory Loss Support Network",
      schedule: "Third Saturday of every month, 10:00 AM",
      format: "Virtual",
      description: "Open to all families dealing with memory-related conditions"
    },
    {
      name: "Young Onset Dementia Support",
      schedule: "Second Monday of every month, 7:00 PM",
      format: "Virtual",
      description: "Specialized support for families affected by early-onset dementia"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl text-medical-charcoal mb-6">
            Support Groups
          </h2>
          <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
            Connect with others who understand your journey. Our support groups provide 
            a safe space to share experiences and learn from one another.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {supportGroups.map((group, index) => (
            <Card key={index} className="border-l-4 border-medical-teal">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Users className="w-8 h-8 text-medical-teal flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="font-playfair text-xl text-medical-charcoal mb-2">
                      {group.name}
                    </h3>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-medical-teal" />
                        <span className="font-inter text-sm text-gray-700">{group.schedule}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Heart className="w-4 h-4 text-medical-teal" />
                        <span className="font-inter text-sm text-gray-700">{group.format}</span>
                      </div>
                    </div>
                    <p className="font-inter text-gray-700 mb-4 text-sm">
                      {group.description}
                    </p>
                    <Button variant="outline" className="border-medical-teal text-medical-teal hover:bg-medical-teal hover:text-white">
                      Join Group
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportGroups;
