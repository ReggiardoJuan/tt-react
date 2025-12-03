import ProductListContainer from './components/ProductListContainer.component';
import { useProducts } from './hooks/useProducts';
import ReturnHome from '../../shared-components/ReturnHome';
import { States } from '../../shared-components/States';

export default function Store({ fetchProducts, title }) {
    const { availableProducts, loading, error } = useProducts (fetchProducts);

    const state = States({ loading, error, items: availableProducts });

    if (state) {
        return state;
    }

    return (
        <>
            <div className="container">
                <ReturnHome />
                <section id="products">
                    <ProductListContainer title={title} products={availableProducts} />
                </section>
            </div>
        </>
    );
}
