import React from 'react';
import { ProductCard } from './ProductCard';
import { featuredProducts } from '../data/products';

export function FeaturedProducts() {
  return (
    <div id="featured-products" className="container mx-auto px-4 py-20">
      <div className="flex flex-col items-center mb-16">
        <span className="text-spotify-green text-lg font-medium mb-2">Handpicked For You</span>
        <h2 className="text-4xl font-bold text-white mb-4">Featured Products</h2>
        <div className="h-1 w-24 bg-spotify-green rounded-full"></div>
        <p className="mt-4 text-spotify-lightgray text-center max-w-2xl">
          Discover our curated selection of premium campus essentials, from trendy apparel to stylish accessories.
          All at exclusive student-friendly prices.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}