
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Play } from 'lucide-react';

const EducationalVideos = () => {
  const educationalVideos = [
    {
      title: "Understanding Memory Loss",
      videoId: "hF81KFUUHyY",
      description: "Comprehensive guide to recognizing and understanding memory loss symptoms and when to seek help."
    },
    {
      title: "Neurological Health Basics",
      videoId: "7ocAVulSUw8", 
      description: "Essential information about maintaining brain health and neurological wellness."
    },
    {
      title: "Dementia Care Strategies",
      videoId: "mt_-GIwBRd0",
      description: "Practical approaches to caring for loved ones with dementia and memory disorders."
    },
    {
      title: "Movement Disorders Overview",
      videoId: "rSMVthBsBG0",
      description: "Understanding Parkinson's disease and other movement disorders - symptoms and treatments."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-playfair text-3xl md:text-4xl text-medical-charcoal mb-6">
            Educational Videos
          </h2>
          <p className="font-inter text-lg text-gray-600 max-w-2xl mx-auto">
            Watch our collection of educational videos covering important topics in neurology and memory care.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationalVideos.map((video, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="aspect-video mb-4 bg-gray-100 rounded-lg overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  ></iframe>
                </div>
                <div className="flex items-start space-x-3 mb-3">
                  <Play className="w-5 h-5 text-medical-teal flex-shrink-0 mt-1" />
                  <h3 className="font-playfair text-xl text-medical-charcoal">
                    {video.title}
                  </h3>
                </div>
                <p className="font-inter text-gray-700 text-sm leading-relaxed">
                  {video.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationalVideos;
