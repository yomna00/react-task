import React, { Suspense, lazy, useEffect } from 'react'; // ✅ أضف useEffect
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { LanguageProvider } from './components/Language';

const ProductsList = lazy(() => import('./pages/ProductsList'));
const ProductDetails = lazy(() => import('./pages/ProductDetails'));
const Cart = lazy(() => import('./pages/Cart'));
const NotFound = lazy(() => import('./pages/NotFound'));

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function App() {
  useEffect(() => {
    fetch(`${API_BASE_URL}/products`)
      .then(res => res.json())
      .then(data => console.log(data));
  }, []);

  return (
    <LanguageProvider>
      <Navbar />
      <div className="container mt-4">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<ProductsList />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </LanguageProvider>
  );
}

export default App;
