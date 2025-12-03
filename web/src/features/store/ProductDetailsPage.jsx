import { useCallback } from 'react';

import { useParams } from 'react-router-dom';

import ProductDetails from './components/ProductDetails.component';
import { useProducts } from './hooks/useProducts';
import { getProductById } from './services/products';
import ReturnHome from '../../shared-components/ReturnHome';
import { States } from '../../shared-components/States';

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
