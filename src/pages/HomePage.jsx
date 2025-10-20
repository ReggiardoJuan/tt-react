import { useCallback } from 'react';

import { getProducts } from '../services/products';
import ProductsListPage from './ProductsList/ProductsListPage';

export default function HomePage() {

    const getAllProducts = useCallback(() => {
        return getProducts();
    }, []);


    return <ProductsListPage fetchProducts={getAllProducts} title="Todos los productos" />;
}