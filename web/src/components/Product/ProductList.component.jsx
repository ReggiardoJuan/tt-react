
import styles from './Product.module.css';
import ProductCard from './ProductCard.component';

function ProductsList({ title, products }) {
    return (
                <>
                    <h2>{title}</h2>
                    <ul className={styles['products-list']}>
                        {products.map((product) => (
                            <li key={product.id} className={styles['product-item']}>
                                <ProductCard product={product} />
                            </li>
                        ))}
                    </ul>
                </>
    );
}

export default ProductsList;
