import React, { useEffect, useState } from 'react';
import { sellers } from '../data/clothing';
import { ClothingGrid } from '../components/clothing/ClothingGrid';

export function ClothingPage() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 500); // Small delay for better visual effect

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Clothing</h1>
        <div className="h-1 w-24 bg-spotify-green rounded-full"></div>
      </div>
      
      {sellers.map((seller) => (
        <div key={seller.id} className="mb-16">
          <div className="flex flex-col items-center mb-12">
            <style>
              {`
                @import url('https://fonts.googleapis.com/css2?family=Mrs+Saint+Delafield&display=swap');
                
                .celestia-underline {
                  transform: scaleX(0);
                  transition: transform 1s ease-out;
                }
                
                .celestia-underline.animate {
                  transform: scaleX(1);
                }
              `}
            </style>
            <h2 className="relative inline-block text-7xl md:text-7xl text-white mb-3" style={{ fontFamily: "'Mrs Saint Delafield', cursive" }}>
              Celestia
              <span className={`absolute -bottom-0 left-0 w-full h-0.5 bg-white celestia-underline ${animate ? 'animate' : ''}`}></span>
            </h2>
            <p className="text-spotify-lightgray text-center max-w-2xl mt-0">
              A premium collection of Hoodies and T-shirts, crafted with care and designed for style.
            </p>
          </div>
          <ClothingGrid products={seller.products} />
        </div>
      ))}
    </div>
  );
}