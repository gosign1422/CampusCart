import React from 'react';
import { ShoppingBag, Instagram, MessageCircle } from 'lucide-react';

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
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-spotify-lightgray mb-8">
              To provide a unified platform enabling students of UPES to sell their creations to their peers and achieve financial independence.
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

            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-spotify-lightgray mb-4">
              For any Queries, Issues, Suggestions, DM here :-
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/upes_campuscart/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-spotify-green text-black px-6 py-3 rounded-full hover:bg-green-400 transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                <Instagram size={24} />
                <span>Instagram</span>
              </a>
              <a
                href="https://wa.me/917906853634"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-spotify-green text-black px-6 py-3 rounded-full hover:bg-green-400 transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                <MessageCircle size={24} />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}