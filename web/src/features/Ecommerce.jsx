import Cart from '../components/Cart/Cart.component';
import ProductsList from '../components/Product/ProductList.component';
import ReturnHome from '../components/shared/ReturnHome';
import { States } from '../components/shared/States';
import { useProducts } from '../hooks/useProducts';

function ECommerce({ fetchProducts, title }) {
    const { availableProducts, loading, error } = useProducts(fetchProducts);

    const state = States({ loading, error, items: availableProducts });

    if (state) {
        return state;
    }

    return (
        <>
            <div className="container">
                <ReturnHome />
                <section id="products">
                    <ProductsList title={title} products={availableProducts} />
                </section>
                <section id="cart">
                    <hr />
                    <Cart />
                </section>
            </div>
        </>
    );
}

export default ECommerce;
