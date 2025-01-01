import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Cart } from './components/Cart';
import { FloatingCheckout } from './components/FloatingCheckout';
import { ScrollToTop } from './components/ScrollToTop';
import { CartProvider } from './context/CartContext';
import { HomePage } from './pages/HomePage';
import { ClothingPage } from './pages/ClothingPage';
import { AccessoriesPage } from './pages/AccessoriesPage';
import { AboutPage } from './pages/AboutPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { PolicyPages } from './pages/PolicyPages';

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ScrollToTop />
        <div className="min-h-screen bg-black flex flex-col">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/clothing" element={<ClothingPage />} />
              <Route path="/accessories" element={<AccessoriesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/privacy" element={<PolicyPages />} />
              <Route path="/terms" element={<PolicyPages />} />
              <Route path="/shipping" element={<PolicyPages />} />
              <Route path="/refund" element={<PolicyPages />} />
            </Routes>
          </div>
          <Footer />
          <FloatingCheckout />
          <Cart />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}