import { useCallback } from 'react';

import { getProductsByCategory } from '../services/products';
import ProductsListPage from './ProductsList/ProductsListPage';

export default function Fashion() {
    const getFashionProducts = useCallback(() => {
        return getProductsByCategory('women\'s%20clothing');
    }, []);

    return <ProductsListPage fetchProducts={getFashionProducts} title="Moda Femenina" />;
}
