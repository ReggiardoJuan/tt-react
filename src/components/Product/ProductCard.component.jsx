import { useState } from 'react';

import { Link } from 'react-router-dom';

import styles from './Product.module.css';
import { trimString } from '../../utils/string.utils';

export default function ProductCard({ product, handleAddToCart }) {
    const [value, setValue] = useState(0);

    const handleCart = (product) => {
        handleAddToCart({
            ...product,
            quantity: value,
            total: value * product.price,
        });
        setValue(0);
    };

    const handleChange = (event) => {
        const newValue = Number(event.target.value);
        setValue(newValue);
    };

    const handleAdd = (amount) => {
        const newValue = value + amount;
        setValue(newValue);
    };

    const isDisabled = () => {
        return value <= 0;
    };

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
                <div className={styles.quantity}>
                    <button className="outline" onClick={() => handleAdd(-1)} disabled={isDisabled()}>
                        −
                    </button>
                    <input type="number" value={value} onChange={handleChange} min="0" max="100" />
                    <button className="outline" onClick={() => handleAdd(1)}>
                        +
                    </button>
                </div>
                <button aria-label="Agregar" disabled={isDisabled()} onClick={() => handleCart(product)}>
                    Agregar
                </button>
                <Link to={`/products/${product.category}/${product.id}`} state={product}>
                    <button className="outline" aria-label="Ver detalles">
                        Ver detalles
                    </button>
                </Link>
            </div>
        </div>
    );
}
