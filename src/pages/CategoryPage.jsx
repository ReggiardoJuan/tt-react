import { useCallback } from 'react';

import { useParams } from 'react-router-dom';

import { getProductsByCategory } from '../services/products';
import ProductsListPage from './ProductsList/ProductsListPage';
import { toTitleCase } from '../utils/string.utils';

export default function CategoryPage() {
    const { category } = useParams();

    const getProducts = useCallback(() => {
        return getProductsByCategory(category);
    }, [category]);

    return <ProductsListPage fetchProducts={getProducts} title={toTitleCase(category)} />;
}
