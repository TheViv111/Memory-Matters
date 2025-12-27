import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, BookOpen } from 'lucide-react';

interface EducationalArticlesProps {
  searchQuery?: string;
}

const EducationalArticles = ({ searchQuery = '' }: EducationalArticlesProps) => {
  const articles = [
    {
      title: "Caring for a Person with Alzheimer's Disease",
      source: "National Institute on Aging",
      description: "An easy-to-use guide from the NIA covering daily care, safety, and financing care for Alzheimer's patients.",
      url: "https://order.nia.nih.gov/publication/caring-for-a-person-with-alzheimers-disease",
      category: "Caregiving"
    },
    {
      title: "10 Symptoms of Early Dementia",
      source: "Alzheimer's Association",
      description: "Learn about the 10 early signs and symptoms of Alzheimer's and dementia to help with early detection.",
      url: "https://www.alz.org/alzheimers-dementia/10_signs?utm_source=google-grant&utm_medium=paidsearch&utm_campaign=google_grant&gad_source=1",
      category: "Diagnosis"
    },
    {
      title: "Behavioral Changes in Dementia",
      source: "UCSF Health",
      description: "Understanding and managing behavioral and personality changes that often accompany dementia progression.",
      url: "https://memory.ucsf.edu/caregiving-support/behavior-personality-changes",
      category: "Symptom Management"
    },
    {
      title: "Geriatric Psychiatry: A Comprehensive Guide",
      source: "American Association for Geriatric Psychiatry",
      description: "Insights into how geriatric psychiatrists diagnose and treat mental health conditions in older adults.",
      url: "https://aagponline.org/?src=gendocs&ref=GeriatricPsychiatry",
      category: "Treatment"
    },
    {
      title: "Depression in Older Adults",
      source: "National Institute on Aging",
      description: "Distinguishing between normal aging and depression, and exploring treatment options for seniors.",
      url: "https://www.nia.nih.gov/health/depression-and-older-adults",
      category: "Mental Health"
    },
    {
      title: "Caregiver Stress: Tips for Taking Care of Yourself",
      source: "Mayo Clinic",
      description: "Practical strategies for caregivers to manage stress and prevent burnout while caring for a loved one.",
      url: "https://www.mayoclinic.org/healthy-lifestyle/stress-management/in-depth/caregiver-stress/art-20044784",
      category: "Caregiver Support"
    }
  ];

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (filteredArticles.length === 0) return null;

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <BookOpen className="w-6 h-6 text-medical-teal mr-3" />
          <h2 className="font-playfair text-3xl text-medical-charcoal">
            Educational Articles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 border-medical-teal/10">
              <CardHeader>
                <div className="text-sm font-medium text-medical-teal mb-2">
                  {article.category}
                </div>
                <CardTitle className="font-playfair text-xl text-medical-charcoal mb-2">
                  {article.title}
                </CardTitle>
                <CardDescription className="font-inter text-gray-500">
                  Source: {article.source}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="font-inter text-gray-600 mb-6 line-clamp-3">
                  {article.description}
                </p>
                <Button
                  variant="outline"
                  className="w-full group hover:bg-medical-teal hover:text-white transition-colors duration-300"
                  onClick={() => window.open(article.url, '_blank')}
                >
                  Read Article
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationalArticles;