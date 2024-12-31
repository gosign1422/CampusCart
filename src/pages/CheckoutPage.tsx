import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { PaymentOptions } from '../components/checkout/PaymentOptions';
import { CheckoutForm } from '../components/checkout/CheckoutForm';
import { formatCurrency } from '../utils/formatCurrency';

export function CheckoutPage() {
  const { state } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const subtotal = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (state.items.length === 0) {
    navigate('/');
    return null;
  }

  return (
    <div className="min-h-screen pt-20 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-spotify-darkgray rounded-lg p-6">
          <h1 className="text-2xl font-bold text-white mb-6">Checkout</h1>
          
          <div className="mb-6">
            <h2 className="text-xl text-white mb-4">Order Summary</h2>
            <div className="flex justify-between items-center text-lg">
              <span>Total Amount:</span>
              <span className="font-bold text-spotify-green">
                {formatCurrency(subtotal)}
              </span>
            </div>
          </div>

          <CheckoutForm formData={formData} setFormData={setFormData} />
          <PaymentOptions amount={subtotal} formData={formData} />
        </div>
      </div>
    </div>
  );
}