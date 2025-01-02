import React from 'react';
import { validatePhone, validateEmail } from '../../utils/validation';

interface CheckoutFormProps {
  formData: {
    name: string;
    phone: string;
    email: string;
  };
  setFormData: React.Dispatch<React.SetStateAction<{
    name: string;
    phone: string;
    email: string;
  }>>;
  onSubmit: () => void;
  isValid: boolean;
  isSubmitting: boolean;
  submitSuccess?: boolean;
}

export function CheckoutForm({ 
  formData, 
  setFormData, 
  onSubmit, 
  isValid,
  isSubmitting,
  submitSuccess
}: CheckoutFormProps) {
  const isPhoneValid = validatePhone(formData.phone);
  const isEmailValid = validateEmail(formData.email);

  return (
    <div className="space-y-4 mb-8">
      <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-4 mb-6">
        <p className="text-red-500 text-sm">
          ⚠️ Please fill this form carefully. The status of your order will be updated via these contact details.
        </p>
      </div>

      <div>
        <label htmlFor="name" className="block text-white mb-2">Name</label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          className="w-full px-4 py-2 rounded-md bg-spotify-black text-white border border-gray-700 focus:border-spotify-green focus:outline-none"
          required
        />
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-white mb-2">Phone Number</label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
          className={`w-full px-4 py-2 rounded-md bg-spotify-black text-white border focus:outline-none ${
            formData.phone && !isPhoneValid 
              ? 'border-red-500 focus:border-red-500' 
              : 'border-gray-700 focus:border-spotify-green'
          }`}
          required
        />
        {formData.phone && !isPhoneValid && (
          <p className="mt-1 text-red-500 text-sm">Phone number must be exactly 10 digits</p>
        )}
      </div>
      
      <div>
        <label htmlFor="email" className="block text-white mb-2">Email</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          className={`w-full px-4 py-2 rounded-md bg-spotify-black text-white border focus:outline-none ${
            formData.email && !isEmailValid 
              ? 'border-red-500 focus:border-red-500' 
              : 'border-gray-700 focus:border-spotify-green'
          }`}
          required
        />
        {formData.email && !isEmailValid && (
          <p className="mt-1 text-red-500 text-sm">Please enter a valid email address</p>
        )}
      </div>

      <button
        onClick={onSubmit}
        disabled={!isValid || isSubmitting || !isPhoneValid || !isEmailValid}
        className={`w-full py-3 px-4 rounded-full font-medium transition-all duration-300 ${
          isValid && !isSubmitting && isPhoneValid && isEmailValid
            ? 'bg-spotify-green text-black hover:bg-green-400 transform hover:scale-105'
            : 'bg-gray-600 text-gray-300 cursor-not-allowed'
        }`}
      >
        {isSubmitting ? 'Submitting...' : 'Submit Order Details'}
      </button>

      {submitSuccess && (
        <p className="mt-4 text-spotify-green text-center font-medium">
          ✓ User details submitted successfully
        </p>
      )}
    </div>
  );
}