import React from 'react';
import { Product } from '../../types/product';
import { BookCard } from './BookCard';

interface BookGridProps {
  products: Product[];
}

export function BookGrid({ products }: BookGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {products.map((product) => (
        <BookCard key={product.id} product={product} />
      ))}
    </div>
  );
}