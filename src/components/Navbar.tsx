import React, { useState } from 'react';
import { ShoppingBag, Menu, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { MobileMenu } from './MobileMenu';
import { useActiveRoute } from '../hooks/useActiveRoute';

export function Navbar() {
  const { state, dispatch } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isActive } = useActiveRoute();
  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  const navLinkClass = (path: string) =>
    `text-lg font-bold tracking-wide transition-all duration-300 hover:scale-105 transform relative ${
      isActive(path) ? 'text-spotify-green' : 'text-white hover:text-spotify-green'
    } ${
      isActive(path) ? 'after:content-[""] after:absolute after:left-0 after:bottom-[-4px] after:w-full after:h-[2px] after:bg-spotify-green' : ''
    }`;

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
        
        <div className="hidden lg:flex items-center space-x-12">
          <Link to="/" className={navLinkClass('/')}>
            HOME
          </Link>
          <Link to="/clothing" className={navLinkClass('/clothing')}>
            CLOTHING
          </Link>
          <Link to="/room-decor" className={navLinkClass('/room-decor')}>
            ROOM DECOR
          </Link>
          <Link to="/about" className={navLinkClass('/about')}>
            ABOUT
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="https://www.instagram.com/upes_campuscart/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center space-x-2 bg-spotify-green text-black px-4 py-2 rounded-full hover:bg-green-400 transition-all duration-300 transform hover:scale-105 font-semibold"
          >
            <span>Want to Sell?</span>
          </a>

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
            className="lg:hidden text-white hover:text-spotify-green transition-colors"
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