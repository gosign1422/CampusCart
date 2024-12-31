import React, { useState } from 'react';
import { Product } from '../../types/product';
import { ClothingModal } from './ClothingModal';
import { formatCurrency } from '../../utils/formatCurrency';

interface ClothingCardProps {
  product: Product;
}

export function ClothingCard({ product }: ClothingCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const discountPercentage = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <>
      <div className="group relative bg-spotify-darkgray rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div 
          className="aspect-square cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <img 
            src={product.images[0].url} 
            alt={product.images[0].alt}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">{product.title}</h3>
              {product.type && (
                <span className="inline-block bg-spotify-green/20 text-spotify-green px-2 py-0.5 rounded-full text-sm">
                  {product.type}
                </span>
              )}
            </div>
            {product.sellerName && (
              <span className="text-sm text-spotify-lightgray">by {product.sellerName}</span>
            )}
          </div>

          <p className="text-sm text-spotify-lightgray mt-2 line-clamp-2">
            {product.description}
          </p>
          
          <div className="mt-6 flex items-center justify-between">
            <div className="flex flex-col space-y-1.5">
              <div className="flex items-center space-x-3">
                <span className="text-lg font-bold text-spotify-green">
                  {formatCurrency(product.price)}
                </span>
                <span className="text-sm text-gray-400 line-through">
                  {formatCurrency(product.originalPrice)}
                </span>
              </div>
              <span className="text-xs text-red-400 font-medium">
                {discountPercentage}% OFF
              </span>
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-1.5 text-sm border border-spotify-green text-spotify-green rounded-md hover:bg-spotify-green hover:text-black transition-all duration-300 transform active:scale-95 font-medium"
            >
              View
            </button>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <ClothingModal
          product={product}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}