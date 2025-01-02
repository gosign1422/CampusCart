import React from 'react';
import { ProductGrid } from '../components/ProductGrid';
import { accessories } from '../data/accessories';

export function AccessoriesPage() {
  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Accessories</h1>
        <div className="h-1 w-24 bg-spotify-green rounded-full"></div>
        <p className="mt-4 text-spotify-lightgray text-center max-w-2xl">
          Complete your look with our curated collection of trendy accessories.
          From stylish bags to posters, find the perfect complement to your personality.
        </p>
      </div>
      <ProductGrid products={accessories} />
    </div>
  );
}