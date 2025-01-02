import React from 'react';
import { Link } from 'react-router-dom';
import { X, Instagram } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      
      <div className="fixed right-0 top-0 h-full w-64 bg-spotify-darkgray p-6 shadow-xl">
        <div className="flex justify-end mb-8">
          <button onClick={onClose} className="text-gray-400 hover:text-white">
            <X size={24} />
          </button>
        </div>

        <nav className="space-y-6">
          <Link 
            to="/" 
            onClick={onClose}
            className="block text-lg font-bold tracking-wide hover:text-spotify-green transition-colors"
          >
            HOME
          </Link>
          <Link 
            to="/clothing" 
            onClick={onClose}
            className="block text-lg font-bold tracking-wide hover:text-spotify-green transition-colors"
          >
            CLOTHING
          </Link>
          <Link 
            to="/accessories" 
            onClick={onClose}
            className="block text-lg font-bold tracking-wide hover:text-spotify-green transition-colors"
          >
            ACCESSORIES
          </Link>
          <Link 
            to="/about" 
            onClick={onClose}
            className="block text-lg font-bold tracking-wide hover:text-spotify-green transition-colors"
          >
            ABOUT
          </Link>

          <div className="pt-4 border-t border-gray-800">
            <a
              href="https://www.instagram.com/upes_campuscart/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-spotify-green text-black px-4 py-2 rounded-full hover:bg-green-400 transition-all duration-300 transform hover:scale-105 font-semibold"
              onClick={onClose}
            >
              <span>Want to Sell?</span>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}