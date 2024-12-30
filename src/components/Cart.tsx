import React from 'react';
import { X, Minus, Plus, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function Cart() {
  const { state, dispatch } = useCart();
  
  const subtotal = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (!state.isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" 
           onClick={() => dispatch({ type: 'TOGGLE_CART' })} />
      
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-gray-900 shadow-xl">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between px-4 py-6 border-b border-gray-800">
            <h2 className="text-lg font-semibold text-white">Shopping Cart</h2>
            <button onClick={() => dispatch({ type: 'TOGGLE_CART' })}>
              <X className="h-6 w-6 text-gray-400 hover:text-white" />
            </button>
          </div>

          {state.items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center">
              <ShoppingBag className="h-16 w-16 text-gray-600 mb-4" />
              <p className="text-gray-400">Your cart is empty</p>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto px-4 py-6">
                {state.items.map((item) => (
                  <div key={item.id} className="flex py-6 border-b border-gray-800">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-24 w-24 rounded-md object-cover"
                    />
                    <div className="ml-4 flex flex-1 flex-col">
                      <div className="flex justify-between">
                        <h3 className="text-sm font-medium text-white">{item.title}</h3>
                        <button
                          onClick={() =>
                            dispatch({ type: 'REMOVE_ITEM', payload: item.id })
                          }
                        >
                          <X className="h-5 w-5 text-gray-400 hover:text-white" />
                        </button>
                      </div>
                      <p className="mt-1 text-sm text-gray-400">
                        ${item.price.toFixed(2)}
                      </p>
                      <div className="mt-2 flex items-center">
                        <button
                          className="rounded-md p-1 hover:bg-gray-800"
                          onClick={() =>
                            dispatch({
                              type: 'UPDATE_QUANTITY',
                              payload: {
                                id: item.id,
                                quantity: Math.max(0, item.quantity - 1),
                              },
                            })
                          }
                        >
                          <Minus className="h-4 w-4 text-gray-400" />
                        </button>
                        <span className="mx-2 min-w-[2rem] text-center text-white">
                          {item.quantity}
                        </span>
                        <button
                          className="rounded-md p-1 hover:bg-gray-800"
                          onClick={() =>
                            dispatch({
                              type: 'UPDATE_QUANTITY',
                              payload: {
                                id: item.id,
                                quantity: item.quantity + 1,
                              },
                            })
                          }
                        >
                          <Plus className="h-4 w-4 text-gray-400" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-800 px-4 py-6">
                <div className="flex justify-between text-base font-medium text-white">
                  <p>Subtotal</p>
                  <p>${subtotal.toFixed(2)}</p>
                </div>
                <p className="mt-1 text-sm text-gray-400">
                  Shipping and taxes calculated at checkout.
                </p>
                <button
                  className="mt-6 w-full rounded-md bg-green-500 px-4 py-3 text-black font-semibold hover:bg-green-400 transition-colors"
                  onClick={() => {
                    alert('Proceeding to checkout...');
                    dispatch({ type: 'CLEAR_CART' });
                    dispatch({ type: 'TOGGLE_CART' });
                  }}
                >
                  Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}