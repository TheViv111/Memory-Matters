
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
    <section className="py-16 bg-medical-beige">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-medical-charcoal mb-4">
            Support Groups
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Connect with others who understand your journey. Our support groups provide a safe space to share experiences and learn from one another.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {supportGroups.map((group, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start mb-4">
                  <Heart className="w-6 h-6 text-medical-orange mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-medical-charcoal mb-2">
                      {group.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {group.description}
                    </p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2 text-medical-teal" />
                    <span className="text-sm">{group.schedule}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-2 text-medical-teal" />
                    <span className="text-sm">{group.format}</span>
                  </div>
                </div>

                <Button className="w-full bg-medical-teal hover:bg-medical-deep-blue text-white">
                  Join Group
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportGroups;
