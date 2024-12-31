import React from 'react';
import { sellers } from '../data/clothing';
import { ClothingGrid } from '../components/clothing/ClothingGrid';

export function ClothingPage() {
  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Clothing</h1>
        <div className="h-1 w-24 bg-spotify-green rounded-full"></div>
      </div>
      
      {sellers.map((seller) => (
        <div key={seller.id} className="mb-16">
          <div className="flex flex-col items-center mb-12">
            <h2 className="relative inline-block text-3xl md:text-4xl font-bold text-white mb-6 group">
              {seller.name}
              <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-spotify-green transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </h2>
            <p className="text-spotify-lightgray text-center max-w-2xl mt-4">
              A premium collection of Hoodies and T-shirts, crafted with care and designed for style.
            </p>
          </div>
          <ClothingGrid products={seller.products} />
        </div>
      ))}
    </div>
  );
}