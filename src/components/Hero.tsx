import React from 'react';
import { Book, Shirt } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 bg-gray-900">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c')] opacity-5 mix-blend-overlay"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-200 mb-6 leading-tight animate-fade-in">
            Your Campus
            <span className="block text-green-500">
              Essentials Hub
            </span>
          </h1>
          
          <p className="text-xl text-gray-400 mb-12 max-w-2xl animate-fade-in-delay">
            Discover premium textbooks and trendy college merchandise at exclusive student prices.
            Join thousands of students making smart choices for their education.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
            <Link to="/books" 
                  className="group relative px-8 py-4 rounded-lg bg-green-500 hover:bg-green-400 text-gray-900 font-semibold transition-colors">
              <div className="flex items-center justify-center space-x-2">
                <Book />
                <span>Browse Books</span>
              </div>
            </Link>
            
            <Link to="/clothing"
                  className="group relative px-8 py-4 rounded-lg border-2 border-gray-700 hover:border-green-500 hover:text-green-500 transition-colors">
              <div className="flex items-center justify-center space-x-2 text-gray-400 group-hover:text-green-500">
                <Shirt />
                <span>Shop Clothing</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
    </div>
  );
}