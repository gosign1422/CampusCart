import React from 'react';

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
}

export function CheckoutForm({ formData, setFormData }: CheckoutFormProps) {
  return (
    <div className="space-y-4 mb-8">
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
          className="w-full px-4 py-2 rounded-md bg-spotify-black text-white border border-gray-700 focus:border-spotify-green focus:outline-none"
          required
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-white mb-2">Email</label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          className="w-full px-4 py-2 rounded-md bg-spotify-black text-white border border-gray-700 focus:border-spotify-green focus:outline-none"
          required
        />
      </div>
    </div>
  );
}