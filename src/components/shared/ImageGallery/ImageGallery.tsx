import React, { useState } from 'react';
import { ProductImage } from '../../../types/product';
import { ImageGalleryMain } from './ImageGalleryMain';
import { ImageGalleryThumbnails } from './ImageGalleryThumbnails';

interface ImageGalleryProps {
  images: ProductImage[];
  title: string;
}

export function ImageGallery({ images, title }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = (direction: 'prev' | 'next') => {
    setCurrentIndex(prev => {
      if (direction === 'prev') {
        return prev === 0 ? images.length - 1 : prev - 1;
      }
      return prev === images.length - 1 ? 0 : prev + 1;
    });
  };

  return (
    <div className="w-full">
      <ImageGalleryMain
        images={images}
        currentIndex={currentIndex}
        onNavigate={navigate}
      />
      <ImageGalleryThumbnails
        images={images}
        currentIndex={currentIndex}
        onSelect={setCurrentIndex}
      />
    </div>
  );
}