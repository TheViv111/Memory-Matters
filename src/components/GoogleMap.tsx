
import React from 'react';
import { Card } from '@/components/ui/card';
import { MapPin, Navigation, Clock, AlertCircle } from 'lucide-react';

const GoogleMap = () => {
  const clinicAddress = "4, Wind Tunnel Rd, Murugeshpalya, Kaveri Nagar, Bengaluru, Karnataka 560017";
  const encodedAddress = encodeURIComponent(clinicAddress);
  
  // Note: Replace 'YOUR_GOOGLE_MAPS_API_KEY' with actual API key
  const apiKey = 'YOUR_GOOGLE_MAPS_API_KEY';
  
  return (
    <div className="w-full">
      <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
        <div className="relative">
          {apiKey === 'YOUR_GOOGLE_MAPS_API_KEY' ? (
            // Fallback when API key is not configured
            <div className="w-full h-96 bg-gradient-to-br from-medical-beige to-medical-teal/10 flex items-center justify-center">
              <div className="text-center p-8 max-w-md">
                <AlertCircle className="w-16 h-16 text-medical-teal mx-auto mb-4" />
                <h3 className="font-playfair text-xl text-medical-charcoal mb-4">
                  Google Maps Integration
                </h3>
                <p className="font-inter text-gray-600 mb-4">
                  To enable the interactive map, please set up a Google Maps API key.
                </p>
                <div className="text-left bg-white/80 p-4 rounded-lg border">
                  <p className="font-inter text-sm text-gray-700 mb-2">
                    <strong>Setup Instructions:</strong>
                  </p>
                  <ol className="font-inter text-xs text-gray-600 space-y-1 list-decimal list-inside">
                    <li>Visit Google Cloud Console</li>
                    <li>Enable Maps JavaScript API</li>
                    <li>Create an API key</li>
                    <li>Replace 'YOUR_GOOGLE_MAPS_API_KEY' in GoogleMap.tsx</li>
                  </ol>
                </div>
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-medical-teal hover:bg-medical-teal/90 text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-200 hover:scale-105 mt-4"
                >
                  <Navigation className="w-4 h-4" />
                  <span className="font-inter text-sm font-medium">Get Directions</span>
                </a>
              </div>
            </div>
          ) : (
            // Google Maps Embed when API key is configured
            <iframe
              src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodedAddress}&zoom=16`}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-96"
              title="Memory Matters Clinic Location"
            />
          )}
          
          {/* Overlay with clinic info - only show when map is loaded */}
          {apiKey !== 'YOUR_GOOGLE_MAPS_API_KEY' ? null : (
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-lg max-w-xs">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-medical-teal mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-playfair font-semibold text-medical-charcoal mb-1">
                    Memory Matters Clinic
                  </h3>
                  <p className="font-inter text-sm text-gray-700">
                    {clinicAddress}
                  </p>
                  <div className="flex items-center space-x-1 mt-2">
                    <Clock className="w-4 h-4 text-medical-teal" />
                    <span className="font-inter text-xs text-gray-600">Mon-Fri: 8AM-5PM</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Directions button */}
          {apiKey !== 'YOUR_GOOGLE_MAPS_API_KEY' ? null : (
            <div className="absolute bottom-4 right-4">
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-medical-teal hover:bg-medical-teal/90 text-white px-4 py-2 rounded-lg shadow-lg transition-all duration-200 hover:scale-105"
              >
                <Navigation className="w-4 h-4" />
                <span className="font-inter text-sm font-medium">Get Directions</span>
              </a>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default GoogleMap;
