import React from 'react';
import { Instagram } from 'lucide-react';

export function SellerBanner() {
  return (
    <div className="relative w-full bg-spotify-darkgray py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Tired of Buying?
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-spotify-green mb-8">
            Want to sell your craft too?
          </p>
          <a
            href="https://instagram.com/celestia.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-spotify-green text-black px-6 py-3 rounded-full hover:bg-green-400 transition-all duration-300 transform hover:scale-105 font-semibold"
          >
            <Instagram size={24} />
            <span>DM here</span>
          </a>
        </div>
      </div>
    </div>
  );
}