import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Cart } from './components/Cart';
import { FloatingCheckout } from './components/FloatingCheckout';
import { CartProvider } from './context/CartContext';
import { HomePage } from './pages/HomePage';
import { BooksPage } from './pages/BooksPage';
import { ClothingPage } from './pages/ClothingPage';

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="min-h-screen bg-black flex flex-col">
          <Navbar />
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/books" element={<BooksPage />} />
              <Route path="/clothing" element={<ClothingPage />} />
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