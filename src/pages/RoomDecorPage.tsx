import React from 'react';
import { ProductGrid } from '../components/ProductGrid';
import { roomDecor } from '../data/roomDecor';

export function RoomDecorPage() {
  return (
    <div className="container mx-auto px-4 pt-24 pb-12">
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Room Decor</h1>
        <div className="h-1 w-24 bg-spotify-green rounded-full"></div>
        <p className="mt-4 text-spotify-lightgray text-center max-w-2xl">
          Transform your space with our curated collection of room decor.
          From ambient lighting to wall art, find the perfect pieces to make your room uniquely yours.
        </p>
      </div>
      <ProductGrid products={roomDecor} />
    </div>
  );
}