import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export function Navbar() {
  const { state, dispatch } = useCart();
  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="fixed w-full z-50 bg-black text-gray-300 py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2 hover:scale-105 transition-transform">
          <div className="relative">
            <ShoppingCart size={28} className="text-green-500" />
            <span className="absolute -top-1 -right-1 bg-green-500 text-black text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold">C</span>
          </div>
          <span className="text-2xl font-bold text-gray-200">
            CampusCart
          </span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link to="/books" className="text-gray-400 hover:text-green-500 transition-colors">Books</Link>
          <Link to="/clothing" className="text-gray-400 hover:text-green-500 transition-colors">Clothing</Link>
          <Link to="#about" className="text-gray-400 hover:text-green-500 transition-colors">About</Link>
        </div>

        <button 
          className="relative text-gray-400 hover:text-green-500 transition-colors"
          onClick={() => dispatch({ type: 'TOGGLE_CART' })}
        >
          <ShoppingCart size={24} />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-green-500 text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
              {itemCount}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}