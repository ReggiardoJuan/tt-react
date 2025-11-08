import { useCallback } from 'react';

import { useParams } from 'react-router-dom';

import ProductDetails from '../components/Product/ProductDetails.component';
import ReturnHome from '../components/shared/ReturnHome';
import { States } from '../components/shared/States';
import { useProducts } from '../hooks/useProducts';
import { getProductById } from '../services/products';

export default function ProductDetailsPage() {
    const { id } = useParams();

    const getProduct = useCallback(() => {
        return getProductById(id);
    }, [id]);

    const {
        availableProducts: [product],
        loading,
        error,
    } = useProducts(getProduct);

    const state = States({ loading, error, items: product });

    if (state) {
        return state;
    }

    return (
        <div className="container">
            <ReturnHome />
            <ProductDetails product={product} />
        </div>
    );
}
