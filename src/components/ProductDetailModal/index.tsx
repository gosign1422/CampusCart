import React, { useState } from 'react';
import { X, ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Product } from '../../types/product';
import { ImageGallery } from '../shared/ImageGallery/ImageGallery';
import { ProductDetails } from '../shared/ProductDetails';
import { SizeSelector } from '../shared/SizeSelector';
import { formatCurrency } from '../../utils/formatCurrency';
import { DeliveryInfo } from '../shared/DeliveryInfo';

interface ProductDetailModalProps {
  product: Product;
  onClose: () => void;
}

export function ProductDetailModal({ product, onClose }: ProductDetailModalProps) {
  const { dispatch } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [sizeError, setSizeError] = useState(false);
  const discountPercentage = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  const handleAddToCart = () => {
    if (product.sizes && !selectedSize) {
      setSizeError(true);
      return;
    }
    setSizeError(false);

    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        title: product.title,
        price: product.price,
        size: selectedSize,
        quantity: 1,
        images: product.images
      },
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen">
        <div className="fixed inset-0 bg-black opacity-75" onClick={onClose} />
        
        <div className="relative w-full max-w-7xl mx-auto flex flex-col lg:flex-row bg-spotify-black shadow-xl">
          <div className="w-full lg:w-3/5 bg-[#111111] p-8">
            <ImageGallery images={product.images} title={product.title} />
          </div>

          <div className="w-full lg:w-2/5 p-6 lg:p-8 space-y-6 overflow-y-auto max-h-screen">
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

            <DeliveryInfo />

            {product.sizes && (
              <>
                <SizeSelector
                  sizes={product.sizes}
                  selectedSize={selectedSize}
                  onSizeSelect={setSelectedSize}
                />
                {sizeError && (
                  <p className="text-red-500 text-sm">Please select a size</p>
                )}
              </>
            )}

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