
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
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-medical-charcoal mb-4">
            Downloadable Resources
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Access our collection of helpful guides, forms, and templates designed to support you and your family.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {downloadableResources.map((resource, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-medical-charcoal mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 mb-3">
                      {resource.description}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span>{resource.type}</span>
                      <span>•</span>
                      <span>{resource.pages}</span>
                    </div>
                  </div>
                </div>
                <Button className="w-full bg-medical-teal hover:bg-medical-deep-blue text-white">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DownloadableResources;
