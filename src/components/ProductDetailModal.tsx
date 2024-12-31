import React from 'react';
import { X, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { ImageGallery } from './ImageGallery';
import { formatCurrency } from '../utils/formatCurrency';

interface ProductDetailModalProps {
  product: {
    id: string;
    image: string;
    title: string;
    price: number;
    originalPrice: number;
    description: string;
    type?: string;
    sellerId?: string;
    sellerName?: string;
  };
  onClose: () => void;
}

export function ProductDetailModal({ product, onClose }: ProductDetailModalProps) {
  const { dispatch } = useCart();
  const discountPercentage = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
  
  const productImages = [product.image];
  if (product.type === 'Hoodie') {
    productImages.push(
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=800&q=80'
    );
  } else if (product.type === 'T-shirt') {
    productImages.push(
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?auto=format&fit=crop&w=800&q=80'
    );
  }

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        image: product.image,
        title: product.title,
        price: product.price,
        quantity: 1,
      },
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" onClick={onClose}>
          <div className="absolute inset-0 bg-black opacity-75"></div>
        </div>

        <div className="inline-block align-bottom bg-spotify-darkgray rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-5xl w-full">
          <div className="absolute right-4 top-4 z-10">
            <button
              onClick={onClose}
              className="text-spotify-lightgray hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            <ImageGallery images={productImages} />

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
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
                  <span className="text-3xl font-bold text-spotify-green">
                    {formatCurrency(product.price)}
                  </span>
                  <span className="text-xl text-gray-400 line-through">
                    {formatCurrency(product.originalPrice)}
                  </span>
                </div>
                <span className="text-sm text-red-400 font-medium">
                  {discountPercentage}% OFF
                </span>
              </div>

              <div className="prose prose-invert">
                <h4 className="text-lg font-semibold text-white">About this product</h4>
                <p className="text-spotify-lightgray">{product.description}</p>
                <p className="text-spotify-lightgray mt-4">
                  Experience unparalleled comfort and style with our premium campus wear. Each piece is 
                  carefully crafted using high-quality materials and features unique designs that make 
                  a statement. Perfect for everyday wear, our clothing combines durability with 
                  contemporary fashion.
                </p>
                <ul className="list-disc list-inside text-spotify-lightgray mt-4">
                  <li>Premium quality materials</li>
                  <li>Comfortable fit for all-day wear</li>
                  <li>Machine washable</li>
                  <li>Designed and printed in India</li>
                </ul>
              </div>

              <button
                onClick={handleAddToCart}
                className="w-full flex items-center justify-center space-x-2 bg-spotify-green text-black px-6 py-3 rounded-full hover:bg-green-400 transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                <ShoppingCart size={20} />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}