import React, { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  description: string;
  sizes?: string[];
  sellerId?: string;
  sellerName?: string;
}

export function ProductCard({ image, title, price, description, sizes, sellerName }: ProductCardProps) {
  const { dispatch } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>(sizes ? sizes[0] : '');

  const handleAddToCart = () => {
    if (sizes && !selectedSize) {
      alert('Please select a size');
      return;
    }

    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: `${title}-${selectedSize || ''}`,
        image,
        title: sizes ? `${title} - ${selectedSize}` : title,
        price,
        quantity: 1,
      },
    });
  };

  return (
    <div className="group relative bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="aspect-w-3 aspect-h-2">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          {sellerName && (
            <span className="text-sm text-gray-500">by {sellerName}</span>
          )}
        </div>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        
        {sizes && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Size
            </label>
            <div className="flex gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-colors
                    ${selectedSize === size 
                      ? 'bg-green-500 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}
        
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-green-500">${price}</span>
          <button 
            onClick={handleAddToCart}
            className="flex items-center space-x-2 bg-green-500 text-black px-4 py-2 rounded-lg hover:bg-green-400 transition-colors font-semibold"
          >
            <ShoppingCart size={18} />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}