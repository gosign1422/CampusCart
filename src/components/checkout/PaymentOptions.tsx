import React, { useState } from 'react';
import { QrCode, Smartphone } from 'lucide-react';
import QRCode from 'react-qr-code';
import { isMobile, isIOS, isAndroid } from '../../utils/deviceDetection';

interface PaymentOptionsProps {
  amount: number;
  formData: {
    name: string;
    phone: string;
    email: string;
  };
}

export function PaymentOptions({ amount, formData }: PaymentOptionsProps) {
  const [showQR, setShowQR] = useState(false);
  const upiId = "7037155173@upi";
  
  // Create UPI payment URL with proper encoding
  const upiUrl = encodeURI(`upi://pay?pa=${upiId}&pn=CampusCart&am=${amount}&cu=INR&tn=Order Payment from ${formData.name}`);
  
  const handleUPIPayment = () => {
    if (!formData.name || !formData.phone || !formData.email) {
      alert('Please fill in all required fields');
      return;
    }

    if (isAndroid) {
      // For Android, try to open common UPI apps
      const intentUrl = `intent://pay?pa=${upiId}&pn=CampusCart&am=${amount}&cu=INR&tn=Order%20Payment#Intent;scheme=upi;package=com.google.android.apps.nbu.paisa.user;package=com.phonepe.app;package=net.one97.paytm;package=in.org.npci.upiapp;end`;
      window.location.href = intentUrl;
    } else if (isIOS) {
      // For iOS, try to open using universal links
      const gpayUrl = `gpay://upi/pay?pa=${upiId}&pn=CampusCart&am=${amount}&cu=INR&tn=Order%20Payment`;
      const phonePeUrl = `phonepe://pay?pa=${upiId}&pn=CampusCart&am=${amount}&cu=INR&tn=Order%20Payment`;
      
      // Try to open Google Pay first, then PhonePe
      window.location.href = gpayUrl;
      setTimeout(() => {
        window.location.href = phonePeUrl;
      }, 1000);
    } else {
      // For desktop/laptop users, show QR code
      setShowQR(true);
    }
  };

  return (
    <div className="space-y-6">
      {!showQR ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <button
            onClick={handleUPIPayment}
            className="flex items-center justify-center space-x-2 bg-spotify-green text-black px-6 py-3 rounded-full hover:bg-green-400 transition-all duration-300 font-semibold"
          >
            <Smartphone size={20} />
            <span>Pay Online Via UPI</span>
          </button>
          
          <button
            onClick={() => setShowQR(true)}
            className="flex items-center justify-center space-x-2 border border-spotify-green text-spotify-green px-6 py-3 rounded-full hover:bg-spotify-green hover:text-black transition-all duration-300 font-semibold"
          >
            <QrCode size={20} />
            <span>Pay Via QR Code</span>
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center space-y-4">
          <p className="text-white mb-4">Scan with any UPI payment app</p>
          <div className="bg-white p-4 rounded-lg">
            <QRCode value={upiUrl} size={200} />
          </div>
          <p className="text-spotify-lightgray text-sm mt-2">UPI ID: {upiId}</p>
          <button
            onClick={() => setShowQR(false)}
            className="text-spotify-green hover:text-white transition-colors"
          >
            Back to payment options
          </button>
        </div>
      )}
    </div>
  );
}