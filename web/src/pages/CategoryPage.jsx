import { useCallback } from 'react';

import { useParams } from 'react-router-dom';

import Store from '../features/store/Store';
import { getProductsByCategory } from '../features/store/services/products';
import { toTitleCase } from '../utils/string.utils';

export default function CategoryPage() {
    const { category } = useParams();

    const getProducts = useCallback(() => {
        return getProductsByCategory(category);
    }, [category]);

    return <Store fetchProducts={getProducts} title={toTitleCase(category)} />;
}
