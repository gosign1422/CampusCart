import React from 'react';
import { Link } from 'react-router-dom';
import { X, Instagram } from 'lucide-react';
import { useActiveRoute } from '../hooks/useActiveRoute';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { isActive } = useActiveRoute();

  if (!isOpen) return null;

  const navLinkClass = (path: string) =>
    `block text-lg font-bold tracking-wide transition-colors relative ${
      isActive(path) ? 'text-spotify-green' : 'text-white hover:text-spotify-green'
    } ${
      isActive(path) ? 'after:content-[""] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-spotify-green' : ''
    }`;

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
            className={navLinkClass('/')}
          >
            HOME
          </Link>
          <Link 
            to="/clothing" 
            onClick={onClose}
            className={navLinkClass('/clothing')}
          >
            CLOTHING
          </Link>
          <Link 
            to="/room-decor" 
            onClick={onClose}
            className={navLinkClass('/room-decor')}
          >
            ROOM DECOR
          </Link>
          <Link 
            to="/about" 
            onClick={onClose}
            className={navLinkClass('/about')}
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