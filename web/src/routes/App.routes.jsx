import { Route, Routes } from 'react-router-dom';

import AboutPage from '../pages/AboutPage';
import CartPage from '../pages/CartPage';
import CategoryPage from '../pages/CategoryPage';
import ContactPage from '../pages/ContactPage/ContactPage';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import NotFoundPage from '../pages/NotFoundPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/products/:category" element={<CategoryPage />} />
            <Route path="/products/:category/:id" element={<ProductDetailsPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}