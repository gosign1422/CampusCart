import React from 'react';
import { Hero } from '../components/Hero';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { SellerBanner } from '../components/SellerBanner';

export function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <SellerBanner />
    </>
  );
}