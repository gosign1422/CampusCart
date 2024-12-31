import React from 'react';
import { ShoppingBag, Mail, Phone, MapPin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-spotify-black text-spotify-lightgray">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <Link to="/" className="inline-flex items-center justify-center space-x-2 mb-4">
            <div className="relative">
              <ShoppingBag size={32} className="text-spotify-green" />
              <span className="absolute -top-1 -right-1 bg-spotify-green text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">C</span>
            </div>
            <span className="text-2xl font-bold text-white">CampusCart</span>
          </Link>
          <p className="text-sm max-w-md mx-auto">
            Your one-stop shop for all campus essentials. Quality products at student-friendly prices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-gray-800">
          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/clothing" className="hover:text-spotify-green transition-colors">Clothing</Link>
              </li>
              <li>
                <Link to="#about" className="hover:text-spotify-green transition-colors">About Us</Link>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center justify-center md:justify-start space-x-2">
                <Mail size={16} className="text-spotify-green" />
                <span>campuscart99@gmail.com</span>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-2">
                <Phone size={16} className="text-spotify-green" />
                <span>+91 7037155173</span>
              </li>
              <li className="flex items-center justify-center md:justify-start space-x-2">
                <MapPin size={16} className="text-spotify-green" />
                <span>UPES Bidholi</span>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold mb-6">Policies</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="hover:text-spotify-green transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-spotify-green transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link to="/shipping" className="hover:text-spotify-green transition-colors">Shipping Policy</Link>
              </li>
              <li>
                <Link to="/refund" className="hover:text-spotify-green transition-colors">Refund Policy</Link>
              </li>
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold mb-6">Connect With Us</h3>
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <a
                href="https://instagram.com/celestia.in"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-gray-800 hover:border-spotify-green hover:text-spotify-green transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} CampusCart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}