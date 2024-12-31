import React from 'react';
import { X, ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Product } from '../../types/product';
import { ImageViewer } from '../ImageViewer';
import { ProductDetails } from './ProductDetails';
import { formatCurrency } from '../../utils/formatCurrency';

interface ProductDetailModalProps {
  product: Product;
  onClose: () => void;
}

export function ProductDetailModal({ product, onClose }: ProductDetailModalProps) {
  const { dispatch } = useCart();
  const discountPercentage = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        images: product.images,
        title: product.title,
        price: product.price,
        quantity: 1,
      },
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen">
        <div className="fixed inset-0 bg-black opacity-75" onClick={onClose} />
        
        <div className="relative w-full max-w-6xl mx-auto flex flex-col lg:flex-row bg-spotify-black shadow-xl">
          <div className="w-full lg:w-1/2 bg-[#111111]">
            <div className="h-full">
              <ImageViewer images={product.images} />
            </div>
          </div>

          <div className="w-full lg:w-1/2 p-6 lg:p-8 space-y-6 overflow-y-auto max-h-screen">
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-white mb-2">{product.title}</h1>
              {product.sellerName && (
                <p className="text-spotify-lightgray">by {product.sellerName}</p>
              )}
              {product.type && (
                <span className="inline-block bg-spotify-green/20 text-spotify-green px-3 py-1 rounded-full text-sm font-medium mt-2">
                  {product.type}
                </span>
              )}
            </div>

            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-4">
                <span className="text-2xl lg:text-3xl font-bold text-spotify-green">
                  {formatCurrency(product.price)}
                </span>
                <span className="text-lg lg:text-xl text-gray-400 line-through">
                  {formatCurrency(product.originalPrice)}
                </span>
              </div>
              <span className="text-sm text-red-400 font-medium">
                {discountPercentage}% OFF
              </span>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full bg-spotify-green text-black font-medium py-3 px-4 rounded-full hover:bg-green-400 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center justify-center space-x-2">
                <ShoppingCart size={20} />
                <span>Add to Cart</span>
              </div>
            </button>

            <ProductDetails 
              details={product.details}
              description={product.description}
            />
          </div>
        </div>
      </div>
    </div>
  );
}