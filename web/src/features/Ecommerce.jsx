import { useState } from 'react';

import Cart from '../components/Cart/Cart.component';
import ProductsList from '../components/Product/ProductList.component';
import ReturnHome from '../components/shared/ReturnHome';
import { States } from '../components/shared/States';
import { useProducts } from '../hooks/useProducts';

function ECommerce({ fetchProducts, title }) {
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

    const state = States({ loading, error, items: availableProducts });

    if (state) {
        return state;
    }

    return (
        <>
            <div className="container">
                <ReturnHome />
                <section id="products">
                    <ProductsList title={title} products={availableProducts} handleAddToCart={handleAddToCart} />
                </section>
                <section id="cart">
                    <hr />
                    <Cart cartProducts={cartProducts} setCartProducts={setCartProducts} />
                </section>
            </div>
        </>
    );
}

export default ECommerce;
