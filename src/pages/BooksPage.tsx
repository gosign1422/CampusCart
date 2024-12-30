import React from 'react';
import { ProductGrid } from '../components/ProductGrid';
import { books } from '../data/books';

export function BooksPage() {
  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <h1 className="text-4xl font-bold text-white mb-8">Books</h1>
      <ProductGrid products={books} />
    </div>
  );
}