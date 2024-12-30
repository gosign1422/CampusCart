import React from 'react';
import { ProductGrid } from '../components/ProductGrid';
import { sellers } from '../data/clothing';

export function ClothingPage() {
  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <h1 className="text-4xl font-bold text-white mb-8">Campus Clothing</h1>
      
      {sellers.map((seller) => (
        <div key={seller.id} className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-2xl font-semibold text-white">{seller.name}</h2>
            <div className="h-px flex-grow bg-gray-800"></div>
          </div>
          <ProductGrid products={seller.products} />
        </div>
      ))}
    </div>
  );
}