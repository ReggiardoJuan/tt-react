import { Link } from 'react-router-dom';

import styles from './AdminProductRow.module.css';
import { trimString } from '../../../utils/string.utils';

export default function AdminProductRow({ product }) {
    const isAvailable = product.id % 2 === 0;
    const cardClasses = isAvailable ? styles.product : `${styles.product} ${styles.outOfStock}`;

    return (
        <div className={cardClasses}>
            <div className={styles['image-wrapper']}>
                <img className={styles['product-image']} src={product.image} alt={product.title} />
                {!isAvailable && (
                    <div className={styles.stockOverlay}>
                        <span >Agotado</span>
                    </div>
                )}
            </div>
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
            {/* <div className={styles.actions}>
                <AdminProductRowActions product={product} isAvailable={isAvailable} />
                <Link to={`/products/${product.category}/${product.id}`} state={product}>
                    <button className="outline" aria-label="Ver detalles">
                        Ver detalles
                    </button>
                </Link>
            </div> */}
        </div>
    );
}
