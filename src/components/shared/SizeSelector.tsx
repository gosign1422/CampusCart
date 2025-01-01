import React from 'react';

interface SizeSelectorProps {
  sizes: string[];
  selectedSize: string;
  onSizeSelect: (size: string) => void;
}

export function SizeSelector({ sizes, selectedSize, onSizeSelect }: SizeSelectorProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-white font-medium">Size</span>
      </div>
      <div className="flex gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            onClick={() => onSizeSelect(size)}
            className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-200 ${
              selectedSize === size
                ? 'bg-white text-black ring-2 ring-white'
                : 'bg-transparent text-white border border-gray-700 hover:border-white'
            }`}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}