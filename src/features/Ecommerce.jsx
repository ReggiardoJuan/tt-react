import { useState } from 'react';

import Cart from '../components/Cart/Cart.component';
import ProductsList from '../components/Product/ProductList.component';
import ReturnHome from '../components/share/ReturnHome';
import { StateWrapper } from '../components/share/StateWrapper';
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

    return (
        <StateWrapper loading={loading} error={error} items={availableProducts}>
            <div className="container">
                <section id="products">
                    <ReturnHome />
                    <ProductsList title={title} products={availableProducts} handleAddToCart={handleAddToCart} />
                </section>
                <section id="cart">
                    <hr />
                    <Cart cartProducts={cartProducts} setCartProducts={setCartProducts} />
                </section>
            </div>
        </StateWrapper>
    );
}

export default ECommerce;
