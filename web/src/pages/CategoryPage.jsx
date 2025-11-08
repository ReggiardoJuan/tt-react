import { useCallback } from 'react';

import { useParams } from 'react-router-dom';

import ECommerce from '../features/Ecommerce';
import { getProductsByCategory } from '../services/products';
import { toTitleCase } from '../utils/string.utils';

export default function CategoryPage() {
    const { category } = useParams();

    const getProducts = useCallback(() => {
        return getProductsByCategory(category);
    }, [category]);

    return <ECommerce fetchProducts={getProducts} title={toTitleCase(category)} />;
}
