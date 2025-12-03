import { useCallback } from 'react';

import Store from '../features/store/Store';
import { getProducts } from '../features/store/services/products';

export default function HomePage() {

    const getAllProducts = useCallback(() => {
        return getProducts();
    }, []);


    return <Store fetchProducts={getAllProducts} title="Todos los productos" />;
}