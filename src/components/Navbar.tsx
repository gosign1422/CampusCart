import React, { useState } from 'react';
import { ShoppingBag, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { MobileMenu } from './MobileMenu';

export function Navbar() {
  const { state, dispatch } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="fixed w-full z-50 bg-spotify-black text-white py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2 hover:scale-105 transition-transform">
          <div className="relative">
            <ShoppingBag size={32} className="text-spotify-green" />
            <span className="absolute -top-1 -right-1 bg-spotify-green text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">C</span>
          </div>
          <span className="text-2xl font-bold text-white">
            CampusCart
          </span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-12">
          <Link 
            to="/" 
            className="text-lg font-bold tracking-wide hover:text-spotify-green transition-all duration-300 hover:scale-105 transform"
          >
            HOME
          </Link>
          <Link 
            to="/clothing" 
            className="text-lg font-bold tracking-wide hover:text-spotify-green transition-all duration-300 hover:scale-105 transform"
          >
            CLOTHING
          </Link>
          <Link 
            to="/accessories" 
            className="text-lg font-bold tracking-wide hover:text-spotify-green transition-all duration-300 hover:scale-105 transform"
          >
            ACCESSORIES
          </Link>
          <Link 
            to="/about" 
            className="text-lg font-bold tracking-wide hover:text-spotify-green transition-all duration-300 hover:scale-105 transform"
          >
            ABOUT
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <button 
            className="relative text-white hover:text-spotify-green transition-colors"
            onClick={() => dispatch({ type: 'TOGGLE_CART' })}
          >
            <ShoppingBag size={28} />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-spotify-green text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {itemCount}
              </span>
            )}
          </button>

          <button 
            className="md:hidden text-white hover:text-spotify-green transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      <MobileMenu 
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </nav>
  );
}