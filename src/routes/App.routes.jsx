import { Route, Routes } from 'react-router-dom';

import CartPage from '../pages/CartPage';
import Category from '../pages/Category';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products/:category" element={<Category />} />
            <Route path="/products/:category/:id" element={<ProductDetailsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    );
}