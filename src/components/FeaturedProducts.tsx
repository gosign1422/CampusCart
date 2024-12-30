import React from 'react';
import { ProductCard } from './ProductCard';
import { featuredProducts } from '../data/products';

export function FeaturedProducts() {
  return (
    <div className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredProducts.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
}