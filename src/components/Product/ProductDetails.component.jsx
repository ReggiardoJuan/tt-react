import { ShoppingCart, Star } from 'react-feather';
import { Link } from 'react-router-dom';

import styles from './Product.module.css';

export default function ProductDetails({ product }) {
    return (
        <div className='container'>
            <div className={styles.product}>
                <img className={styles['product-image']} src={product.image} alt={product.title} />
                <div className={styles['product-info']}>
                    <h3 className={styles['product-title']}>{product.title}</h3>
                    <p>{product.description}</p>
                    <div className={styles['product-info-line']}>
                        <p className={styles['product-shop']}>
                            ${product.price.toFixed(2)}
                            <Link to={`/products/${product.category}`}>
                                <span className="pill">{product.category}</span>
                            </Link>
                            <span className="pill">
                                <Star /> {product.rating.rate}
                            </span>
                            <span className="pill">
                                <ShoppingCart /> {product.rating.count}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
