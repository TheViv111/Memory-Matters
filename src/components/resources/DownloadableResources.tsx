
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const DownloadableResources = () => {
  const downloadableResources = [
    {
      title: "Memory Care Planning Checklist",
      description: "Comprehensive checklist for families planning memory care",
      type: "PDF Guide",
      pages: "12 pages"
    },
    {
      title: "Medication Management Tracker",
      description: "Printable tracker for organizing multiple medications",
      type: "PDF Form",
      pages: "2 pages"
    },
    {
      title: "Emergency Contact Information Sheet",
      description: "Template for organizing important emergency contacts",
      type: "PDF Template",
      pages: "1 page"
    },
    {
      title: "Daily Care Activity Log",
      description: "Log for tracking daily activities and behaviors",
      type: "PDF Form",
      pages: "4 pages"
    }
  ];

  return (
    <section className="py-16 bg-medical-beige">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-playfair text-3xl md:text-4xl text-medical-charcoal text-center mb-12">
          Downloadable Resources
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {downloadableResources.map((resource, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Download className="w-8 h-8 text-medical-teal flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="font-playfair text-xl text-medical-charcoal mb-2">
                      {resource.title}
                    </h3>
                    <p className="font-inter text-gray-700 mb-3 text-sm">
                      {resource.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-4">
                        <span className="font-inter text-xs text-gray-500">{resource.type}</span>
                        <span className="font-inter text-xs text-gray-500">{resource.pages}</span>
                      </div>
                      <Button size="sm" className="bg-medical-deep-blue hover:bg-medical-deep-blue/90">
                        Download PDF
                      </Button>
                    </div>
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

export default DownloadableResources;
