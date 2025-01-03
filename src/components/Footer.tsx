import React from 'react';
import { ShoppingBag, Mail, Phone, MapPin, Instagram, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-spotify-black text-spotify-lightgray">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Link to="/" className="inline-flex items-center justify-center space-x-2 mb-4">
            <div className="relative">
              <ShoppingBag size={32} className="text-spotify-green" />
              <span className="absolute -top-1 -right-1 bg-spotify-green text-black text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">C</span>
            </div>
            <span className="text-2xl font-bold text-white">CampusCart</span>
          </Link>
          <p className="text-base md:text-lg max-w-md mx-auto">
            Created by <u><a href="https://x.com/gosign1422" className="hover:text-spotify-green transition-colors">Gosign</a></u>.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-gray-800">
          <div className="text-center sm:text-left">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-spotify-green transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/clothing" className="hover:text-spotify-green transition-colors">Clothing</Link>
              </li>
              <li>
                <Link to="/room-decor" className="hover:text-spotify-green transition-colors">Room Decor</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-spotify-green transition-colors">About</Link>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-center sm:justify-start space-x-2">
                <Mail size={16} className="text-spotify-green flex-shrink-0" />
                <span className="break-all">campuscart99@gmail.com</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start space-x-2">
                <Phone size={16} className="text-spotify-green flex-shrink-0" />
                <span>+91 7906853634</span>
              </li>
              <li className="flex items-center justify-center sm:justify-start space-x-2">
                <MapPin size={16} className="text-spotify-green flex-shrink-0" />
                <span>UPES Bidholi, Dehradun</span>
              </li>
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-white font-semibold mb-4">Policies</h3>
            <ul className="space-y-2">
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

          <div className="text-center sm:text-left">
            <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
            <div className="flex items-center justify-center sm:justify-start space-x-4">
              <a
                href="https://www.instagram.com/upes_campuscart/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-gray-800 hover:border-spotify-green hover:text-spotify-green transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/917906853634"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full border border-gray-800 hover:border-spotify-green hover:text-spotify-green transition-all duration-300"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} CampusCart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}