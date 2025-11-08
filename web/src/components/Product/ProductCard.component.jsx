
import { Link } from 'react-router-dom';

import styles from './Product.module.css';
import ProductCardActions from './ProductCardActions.component';
import { trimString } from '../../utils/string.utils';

export default function ProductCard({ product, handleAddToCart }) {
    return (
        <div className={styles.product}>
            <img className={styles['product-image']} src={product.image} alt={product.title} />
            <div className={styles['product-info']}>
                <h3 className={styles['product-title']}>{trimString(product.title, 75)}</h3>
                <p>{trimString(product.description, 75)}</p>
                <div className={styles['product-info-line']}>
                    <p className={styles['product-shop']}>
                        ${product.price.toFixed(2)}
                        <Link to={`/products/${product.category}`}>
                            <span className="pill">{product.category}</span>
                        </Link>
                    </p>
                </div>
            </div>
            <div className={styles.actions}>
                <ProductCardActions handleAddToCart={handleAddToCart} product={product} />
                <Link to={`/products/${product.category}/${product.id}`} state={product}>
                    <button className="outline" aria-label="Ver detalles">
                        Ver detalles
                    </button>
                </Link>
            </div>
        </div>
    );
}
