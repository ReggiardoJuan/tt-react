import { useCallback } from 'react';

import { useParams } from 'react-router-dom';

import ProductDetails from '../components/Product/ProductDetails.component';
import ReturnHome from '../components/share/ReturnHome';
import { StateWrapper } from '../components/share/StateWrapper';
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

    return (
        <StateWrapper loading={loading} error={error} items={product}>
            <ReturnHome />
            <ProductDetails product={product} />
        </StateWrapper>
    );
}
