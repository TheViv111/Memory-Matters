
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';

const EducationalArticles = () => {
  const articles = [
    {
      title: "Understanding Early Signs of Memory Loss",
      category: "Memory Care",
      readTime: "5 min read",
      excerpt: "Learn to recognize the difference between normal aging and concerning memory changes.",
      featured: true
    },
    {
      title: "Caring for Someone with Alzheimer's Disease",
      category: "Caregiver Support",
      readTime: "8 min read",
      excerpt: "Practical tips and strategies for family caregivers supporting loved ones with Alzheimer's."
    },
    {
      title: "Nutrition and Brain Health: What You Need to Know",
      category: "Prevention",
      readTime: "6 min read",
      excerpt: "Evidence-based nutritional approaches to support cognitive function and brain health."
    },
    {
      title: "Creating a Safe Home Environment for Dementia",
      category: "Home Safety",
      readTime: "10 min read",
      excerpt: "Step-by-step guide to making your home safer and more comfortable for someone with dementia."
    },
    {
      title: "Managing Behavioral Changes in Dementia",
      category: "Caregiver Support",
      readTime: "7 min read",
      excerpt: "Understanding and responding to common behavioral changes in dementia patients."
    },
    {
      title: "The Importance of Regular Neurological Check-ups",
      category: "Prevention",
      readTime: "4 min read",
      excerpt: "Why routine neurological evaluations matter for maintaining cognitive health."
    }
  ];

  return (
    <>
      {/* Featured Article */}
      <section className="py-16 bg-medical-beige">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-medical-teal to-medical-lavender rounded-2xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <BookOpen className="w-6 h-6" />
                  <span className="font-inter text-sm uppercase tracking-wide">Featured Article</span>
                </div>
                <h2 className="font-playfair text-3xl md:text-4xl mb-4">
                  Understanding Early Signs of Memory Loss
                </h2>
                <p className="font-inter text-lg mb-6 opacity-90">
                  Learn to recognize the difference between normal aging and concerning memory changes. 
                  This comprehensive guide helps families understand when to seek professional evaluation.
                </p>
                <Button variant="secondary" className="bg-white text-medical-teal hover:bg-gray-100">
                  Read Full Article
                </Button>
              </div>
              <div>
                <img 
                  src="/placeholder.svg" 
                  alt="Memory care consultation"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Articles */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl md:text-4xl text-medical-charcoal text-center mb-12">
            Educational Articles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <span className="inline-block px-3 py-1 bg-medical-teal/10 text-medical-teal rounded-full text-sm font-inter">
                      {article.category}
                    </span>
                    <span className="text-gray-500 text-sm font-inter">{article.readTime}</span>
                  </div>
                  <h3 className="font-playfair text-xl text-medical-charcoal mb-3">
                    {article.title}
                  </h3>
                  <p className="font-inter text-gray-700 mb-4 text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                  <Button variant="outline" className="border-medical-teal text-medical-teal hover:bg-medical-teal hover:text-white w-full">
                    Read Article
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default EducationalArticles;
