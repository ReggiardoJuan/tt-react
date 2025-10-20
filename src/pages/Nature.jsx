import { useCallback } from 'react';

import { getProductsByCategory } from '../services/products';
import ProductsListPage from './ProductsList/ProductsListPage';

export default function Nature() {
    const getNatureProducts = useCallback(() => {
        return getProductsByCategory('nature');
    }, []);

    return <ProductsListPage fetchProducts={getNatureProducts} title="Naturaleza" />;
}