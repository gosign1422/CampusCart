import React from 'react';
import { Truck, CreditCard, ShieldCheck } from 'lucide-react';
import { getDeliveryDate } from '../../utils/dateUtils';

export function DeliveryInfo() {
  return (
    <div className="space-y-4 border-t border-gray-800 pt-4 mt-4">
      <div className="flex items-center space-x-2 text-spotify-lightgray">
        <Truck size={20} className="text-spotify-green" />
        <div>
          <p className="text-white">Get it by {getDeliveryDate()}</p>
          <p className="text-sm">Pickup Point: MAC Auditorium, UPES Bidholi</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 pt-2">
        <div className="flex flex-col items-center text-center">
          <CreditCard size={24} className="text-spotify-green mb-1" />
          <span className="text-xs text-spotify-lightgray">Secure Transaction</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <Truck size={24} className="text-spotify-green mb-1" />
          <span className="text-xs text-spotify-lightgray">Free Delivery</span>
        </div>
        <div className="flex flex-col items-center text-center">
          <ShieldCheck size={24} className="text-spotify-green mb-1" />
          <span className="text-xs text-spotify-lightgray">Delivery Guaranteed</span>
        </div>
      </div>
    </div>
  );
}