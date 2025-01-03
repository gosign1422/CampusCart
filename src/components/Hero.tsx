import React from 'react';
import { Shirt, ShoppingBag, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BackgroundPattern } from './BackgroundPattern';

export function Hero() {
  const scrollToFeatured = () => {
    const featuredSection = document.getElementById('featured-products');
    featuredSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <BackgroundPattern />
      
      <div className="container mx-auto px-4 py-20 relative">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Campus Cart
            <span className="block text-spotify-green">
              Your Go-To for Campus Shopping
            </span>
            <span className="block text-white text-2xl md:text-3xl mt-4 relative inline-block">
              At UPES Bidholi, Dehradun
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-spotify-green animate-underline"></span>
            </span>
          </h1>
          
          <p className="text-2xl text-white mb-2 max-w-2xl animate-fade-in-delay">
            Purchase unique student-made products, all within campus.
          </p>
          <div className="relative inline-block">
            <span className="text-xl text-spotify-green mb-12 max-w-2xl animate-fade-in-delay font-bold">
              Made by Students for Students
            </span>
            <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-white transform origin-left animate-underline"></span>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-delay-2 mt-12">
            <Link to="/clothing"
                  className="flex-1 max-w-xs group relative inline-flex items-center justify-center px-8 py-4 rounded-full bg-spotify-green text-black font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-spotify-green/25">
              <div className="flex items-center justify-center space-x-3">
                <Shirt className="w-5 h-5" />
                <span>Shop Clothing</span>
              </div>
            </Link>
            
            <Link to="/room-decor" 
                  className="flex-1 max-w-xs group relative inline-flex items-center justify-center px-8 py-4 rounded-full bg-transparent text-spotify-green font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-spotify-green/25 border-2 border-spotify-green hover:bg-spotify-green hover:text-black">
              <div className="flex items-center justify-center space-x-3">
                <ShoppingBag className="w-5 h-5" />
                <span>Browse Room Decor</span>
              </div>
            </Link>
          </div>

          <div className="mt-16 flex flex-col items-center animate-float">
            <button 
              onClick={scrollToFeatured}
              className="text-spotify-green hover:text-spotify-lightgray transition-colors flex flex-col items-center gap-2"
            >
              <span className="text-sm font-medium">Discover Featured Products</span>
              <ChevronDown className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-spotify-black to-transparent"></div>
    </div>
  );
}