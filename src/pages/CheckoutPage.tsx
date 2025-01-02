import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { CheckoutForm } from '../components/checkout/CheckoutForm';
import { formatCurrency } from '../utils/formatCurrency';
import { transformCartItemsForOrder } from '../utils/orderTransform';
import { validatePhone, validateEmail } from '../utils/validation';
import { supabase } from '../lib/supabase';

export function CheckoutPage() {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const subtotal = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const isFormValid = formData.name && 
    formData.phone && 
    formData.email && 
    validatePhone(formData.phone) && 
    validateEmail(formData.email);

  const handleSubmitOrder = async () => {
    if (!isFormValid || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const orderItems = transformCartItemsForOrder(state.items);
      
      const { error } = await supabase
        .from('campus_cart')
        .insert({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          total_amount: subtotal,
          cart_items: orderItems
        });

      if (error) throw error;

      setSubmitSuccess(true);
      setTimeout(() => {
        dispatch({ type: 'CLEAR_CART' });
        navigate('/');
      }, 2000);
    } catch (error) {
      console.error('Error submitting order:', error);
      alert('Failed to submit order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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

          <CheckoutForm 
            formData={formData} 
            setFormData={setFormData}
            onSubmit={handleSubmitOrder}
            isValid={isFormValid}
            isSubmitting={isSubmitting}
            submitSuccess={submitSuccess}
          />
        </div>
      </div>
    </div>
  );
}