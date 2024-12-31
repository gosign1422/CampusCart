import React from 'react';
import { Product } from '../../types/product';
import { ClothingCard } from './ClothingCard';

interface ClothingGridProps {
  products: Product[];
}

export function ClothingGrid({ products }: ClothingGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <ClothingCard key={product.id} product={product} />
      ))}
    </div>
  );
}