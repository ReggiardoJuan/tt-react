import { useCallback } from 'react';

import ECommerce from '../features/Ecommerce';
import { getProducts } from '../services/products';

export default function HomePage() {

    const getAllProducts = useCallback(() => {
        return getProducts();
    }, []);


    return <ECommerce fetchProducts={getAllProducts} title="Todos los productos" />;
}