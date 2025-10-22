import { useState } from 'react';

import Cart from '../../components/Cart/Cart.component';
import Loader from '../../components/Loader/Loader.component';
import ProductCard from '../../components/Product/ProductCard.component';
import ReturnHome from '../../components/ReturnHome';
import { useProducts } from '../../hooks/useProducts';
import ErrorPage from '../ErrorPage';
import NoResultsPage from '../NoResultsPage';
import styles from './ProductsList.module.css';

function ProductsListPage({ fetchProducts, title }) {
    const { availableProducts, loading, error } = useProducts(fetchProducts);
    const [cartProducts, setCartProducts] = useState([]);

    const handleAddToCart = (product) => {
        const existingProduct = cartProducts.find((cartProduct) => cartProduct.id === product.id);
        if (existingProduct) {
            setCartProducts([
                ...cartProducts.filter((cartProduct) => cartProduct.id !== product.id),
                {
                    ...existingProduct,
                    quantity: existingProduct.quantity + product.quantity,
                    total: existingProduct.total + product.total,
                },
            ]);
            return;
        } else {
            setCartProducts([...cartProducts, product]);
        }
    };

    if (loading) {
        return (
            <div className={styles.loader}>
                <Loader size={72} />
                <p>Cargando productos...</p>
            </div>
        );
    }

    if (error) {
        return <>
            <ReturnHome />
            <ErrorPage error={error} />;
        </>;
    }

    if (availableProducts.length === 0) {
        return <>
            <ReturnHome />
            <NoResultsPage />
        </>;
    }

    return (
        <div className='container'>
            <section id='products'>
                <ReturnHome />
                <h2>{title}</h2>
                <ul className={styles['products-list']}>
                    {availableProducts.map((product) => (
                        <li key={product.id} className={styles['product-item']}>
                            <ProductCard product={product} handleAddToCart={handleAddToCart} />
                        </li>
                    ))}
                </ul>
            </section>
            <section id='cart'>
                <hr />
                <Cart cartProducts={cartProducts} setCartProducts={setCartProducts} />
            </section>
        </div>
    );
}

export default ProductsListPage;
