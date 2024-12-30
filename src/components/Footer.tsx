import React from 'react';
import { GraduationCap, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-black text-gray-300 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <GraduationCap size={28} className="text-green-500" />
              <span className="text-xl font-bold text-white">CampusCart</span>
            </Link>
            <p className="text-sm">Your one-stop shop for all campus essentials. Quality products at student-friendly prices.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/books" className="hover:text-green-500 transition-colors">Books</Link></li>
              <li><Link to="/clothing" className="hover:text-green-500 transition-colors">Clothing</Link></li>
              <li><Link to="#about" className="hover:text-green-500 transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span>campuscart99@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span>7037155173</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>UPES Bidholi</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} CampusCart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}