import React from 'react';
import { ProductImage } from '../../../types/product';

interface ImageGalleryThumbnailsProps {
  images: ProductImage[];
  currentIndex: number;
  onSelect: (index: number) => void;
}

export function ImageGalleryThumbnails({ images, currentIndex, onSelect }: ImageGalleryThumbnailsProps) {
  return (
    <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
      {images.map((image, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className={`relative flex-shrink-0 w-20 h-20 rounded-md overflow-hidden transition-all duration-200 ${
            currentIndex === index ? 'ring-2 ring-spotify-green' : 'opacity-70 hover:opacity-100'
          }`}
        >
          <img
            src={image.url}
            alt={image.alt}
            className="w-full h-full object-cover"
          />
        </button>
      ))}
    </div>
  );
}