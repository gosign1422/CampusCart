import React from 'react';
import { ProductDetails as ProductDetailsType } from '../../types/product';

interface ProductDetailsProps {
  details: ProductDetailsType;
  description: string;
}

export function ProductDetails({ details, description }: ProductDetailsProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold text-white mb-2">About this product</h3>
        <p className="text-spotify-lightgray">{description}</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Features</h3>
        <ul className="list-disc list-inside space-y-2 text-spotify-lightgray">
          {details.features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Materials</h3>
        <ul className="list-disc list-inside space-y-2 text-spotify-lightgray">
          {details.materials.map((material, index) => (
            <li key={index}>{material}</li>
          ))}
        </ul>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-white">Care Instructions</h3>
        <ul className="list-disc list-inside space-y-2 text-spotify-lightgray">
          {details.care.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}