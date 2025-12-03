import { Route, Routes } from 'react-router-dom';

import AdminPage from '../features/admin/AdminPage';
import LoginPage from '../features/auth/LoginPage';
import CartPage from '../features/cart/CartPage';
import AboutPage from '../features/content/AboutPage';
import ContactPage from '../features/content/Contact/ContactPage';
import ProductDetailsPage from '../features/store/ProductDetailsPage';
import CategoryPage from '../pages/CategoryPage';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/products/:category" element={<CategoryPage />} />
            <Route path="/products/:category/:id" element={<ProductDetailsPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}