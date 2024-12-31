import React from 'react';
import { Truck, ShieldCheck, Wallet } from 'lucide-react';

export function DeliveryInfo() {
  return (
    <div className="flex items-center justify-between py-6 border-t border-b border-gray-800">
      <div className="flex flex-col items-center gap-2">
        <Wallet className="w-6 h-6 text-spotify-green" />
        <span className="text-xs text-center text-gray-400">Pay on Delivery</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Truck className="w-6 h-6 text-spotify-green" />
        <span className="text-xs text-center text-gray-400">Free Delivery</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <ShieldCheck className="w-6 h-6 text-spotify-green" />
        <span className="text-xs text-center text-gray-400">Secure Transaction</span>
      </div>
    </div>
  );
}