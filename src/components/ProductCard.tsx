import React, { useState } from 'react';
import { ProductDetailModal } from './ProductDetailModal';
import { formatCurrency } from '../utils/formatCurrency';
import { Product } from '../types/product';

interface ProductCardProps extends Product {}

export function ProductCard(props: ProductCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const originalPrice = props.price * 2.5;

  if (!props.images?.[0]) {
    return null;
  }

  return (
    <>
      <div className="group relative bg-spotify-darkgray rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div 
          className="aspect-square cursor-pointer"
          onClick={() => setIsModalOpen(true)}
        >
          <img 
            src={props.images[0].url} 
            alt={props.images[0].alt} 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <div className="p-6">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">{props.title}</h3>
              {props.type && (
                <span className="inline-block bg-spotify-green/20 text-spotify-green px-2 py-0.5 rounded-full text-sm">
                  {props.type}
                </span>
              )}
            </div>
            {props.sellerName && (
              <span className="text-sm text-spotify-lightgray">by {props.sellerName}</span>
            )}
          </div>

          <p className="text-sm text-spotify-lightgray mt-2 line-clamp-2">
            {props.description}
          </p>
          
          <div className="mt-6 flex items-center justify-between">
            <div className="flex flex-col space-y-1.5">
              <div className="flex items-center space-x-3">
                <span className="text-lg font-bold text-spotify-green">
                  {formatCurrency(props.price)}
                </span>
                <span className="text-sm text-gray-400 line-through">
                  {formatCurrency(originalPrice)}
                </span>
              </div>
              <span className="text-xs text-red-400 font-medium">
                {Math.round(((originalPrice - props.price) / originalPrice) * 100)}% OFF
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
        <ProductDetailModal
          product={props}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
}