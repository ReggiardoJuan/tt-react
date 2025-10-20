import { useCallback } from 'react';

import { getProductsByCategory } from '../services/products';
import ProductsListPage from './ProductsList/ProductsListPage';

export default function Technology() {
    const getTechnologyProducts = useCallback(() => {
        return getProductsByCategory('electronics');
    }, []);

    return <ProductsListPage fetchProducts={getTechnologyProducts} title="Tecnología" />;
}