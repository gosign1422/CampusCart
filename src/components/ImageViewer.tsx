import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { ProductImage } from '../types/product';

interface ImageViewerProps {
  images: ProductImage[];
  onClose?: () => void;
}

export function ImageViewer({ images, onClose }: ImageViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const navigate = (direction: 'prev' | 'next') => {
    setCurrentIndex(prev => {
      if (direction === 'prev') {
        return prev === 0 ? images.length - 1 : prev - 1;
      }
      return prev === images.length - 1 ? 0 : prev + 1;
    });
  };

  const NavigationButton = ({ direction }: { direction: 'prev' | 'next' }) => (
    <button
      onClick={() => navigate(direction)}
      className="absolute top-1/2 -translate-y-1/2 bg-black/50 p-3 rounded-full text-white hover:bg-black/75 transition-all duration-300 z-10"
      style={{ [direction === 'prev' ? 'left' : 'right']: '1rem' }}
    >
      {direction === 'prev' ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
    </button>
  );

  const mainContent = (
    <div className={`relative ${isFullscreen ? 'h-screen' : 'h-full'}`}>
      <img
        src={images[currentIndex].url}
        alt={images[currentIndex].alt}
        className={`w-full h-full object-contain ${isFullscreen ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
        onClick={() => setIsFullscreen(!isFullscreen)}
      />
      
      {images.length > 1 && (
        <>
          <NavigationButton direction="prev" />
          <NavigationButton direction="next" />
        </>
      )}
      
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-black/50 p-2 rounded-full text-white hover:bg-black/75 transition-all duration-300 z-10"
        >
          <X size={24} />
        </button>
      )}
    </div>
  );

  if (isFullscreen) {
    return (
      <div className="fixed inset-0 z-50 bg-black">
        {mainContent}
      </div>
    );
  }

  return (
    <div className="relative h-full">
      {mainContent}
      
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'bg-spotify-green w-4' : 'bg-white/50 hover:bg-white'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}