import { useCallback } from 'react';

import { useParams } from 'react-router-dom';

import ErrorPage from './ErrorPage';
import NoResultsPage from './NoResultsPage';
import Loader from '../components/Loader/Loader.component';
import Product from '../components/Product/ProductDetails.component';
import { useProducts } from '../hooks/useProducts';
import { getProductById } from '../services/products';
import styles from './ProductsList/ProductsList.module.css';

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

    if (loading) {
        return (
            <div className={styles.loader}>
                <Loader size={72} />
                <p>Cargando productos...</p>
            </div>
        );
    }

    if (error) {
        return <ErrorPage error={error} />;
    }

    if (!product) {
        return <NoResultsPage />;
    }

    return (
        <Product product={product} />
    );
}
