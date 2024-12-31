import React from 'react';
import { ShoppingBag } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center mb-12">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="relative">
                <ShoppingBag size={48} className="text-spotify-green" />
                <span className="absolute -top-1 -right-1 bg-spotify-green text-black text-sm rounded-full w-6 h-6 flex items-center justify-center font-bold">C</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">CampusCart</h1>
            </div>
            <div className="h-1 w-24 bg-spotify-green rounded-full mb-8"></div>
          </div>

          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-spotify-lightgray leading-relaxed mb-8">
              CampusCart is your premier destination for campus fashion and accessories at UPES, Dehradun. 
              We understand the unique style needs of college students and provide carefully curated collections 
              that blend comfort, style, and affordability.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-spotify-lightgray mb-8">
              To provide UPES students with high-quality, trendy, and affordable fashion choices that help them 
              express their unique personality while maintaining comfort for their academic journey.
            </p>

            <h2 className="text-2xl font-bold text-white mb-4">Why Choose Us?</h2>
            <ul className="list-none space-y-4 text-spotify-lightgray mb-8">
              <li className="flex items-start">
                <span className="text-spotify-green mr-2">•</span>
                <span>Exclusive student-friendly prices</span>
              </li>
              <li className="flex items-start">
                <span className="text-spotify-green mr-2">•</span>
                <span>Premium quality products</span>
              </li>
              <li className="flex items-start">
                <span className="text-spotify-green mr-2">•</span>
                <span>Curated collections for campus life</span>
              </li>
              <li className="flex items-start">
                <span className="text-spotify-green mr-2">•</span>
                <span>Convenient on-campus delivery</span>
              </li>
            </ul>

            <h2 className="text-2xl font-bold text-white mb-4">Visit Us</h2>
            <p className="text-spotify-lightgray">
              Find us at UPES Bidholi Campus, Dehradun. We're here to help you discover your perfect campus style!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}