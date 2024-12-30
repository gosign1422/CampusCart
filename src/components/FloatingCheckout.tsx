import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function FloatingCheckout() {
  const { state, dispatch } = useCart();
  
  if (state.items.length === 0) return null;
  
  const subtotal = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={() => dispatch({ type: 'TOGGLE_CART' })}
        className="flex items-center space-x-3 bg-green-500 text-black px-6 py-3 rounded-full shadow-lg hover:bg-green-400 transition-colors font-semibold"
      >
        <ShoppingBag size={20} />
        <span>${subtotal.toFixed(2)}</span>
        <span className="border-l border-black pl-3">Checkout</span>
      </button>
    </div>
  );
}