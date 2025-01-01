import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProductImage } from '../../../types/product';

interface ImageGalleryMainProps {
  images: ProductImage[];
  currentIndex: number;
  onNavigate: (direction: 'prev' | 'next') => void;
}

export function ImageGalleryMain({ images, currentIndex, onNavigate }: ImageGalleryMainProps) {
  return (
    <div className="relative aspect-square w-full">
      <img
        src={images[currentIndex].url}
        alt={images[currentIndex].alt}
        className="w-full h-full object-contain rounded-lg"
      />
      
      {images.length > 1 && (
        <>
          <button
            onClick={() => onNavigate('prev')}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/75 transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => onNavigate('next')}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/75 transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </>
      )}
    </div>
  );
}