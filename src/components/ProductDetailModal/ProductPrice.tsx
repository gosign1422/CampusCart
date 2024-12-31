import React from 'react';
import { formatCurrency } from '../../utils/formatCurrency';

interface ProductPriceProps {
  price: number;
  originalPrice: number;
}

export function ProductPrice({ price, originalPrice }: ProductPriceProps) {
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <div className="flex items-center gap-3">
      <span className="text-2xl text-white font-bold">
        {formatCurrency(price)}
      </span>
      {originalPrice && (
        <>
          <span className="text-lg text-gray-500 line-through">
            {formatCurrency(originalPrice)}
          </span>
          <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-600 rounded">
            {discount}% OFF
          </span>
        </>
      )}
    </div>
  );
}