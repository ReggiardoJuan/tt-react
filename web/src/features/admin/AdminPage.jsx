import { useState } from 'react';

import { Link as LinkIcon, ShoppingCart } from 'react-feather';
import { Link } from 'react-router-dom';

import { trimString } from '../../utils/string.utils';
import styles from '../store/components/Product.module.css';

export default function AdminPage() {
    const [products, setProducts] = useState([
        {
            title: 'Some Product',
            description: 'Some description',
            category: 'Some category',
            image: '',
            price: 120.99,
            id: 1,
            owner_id: 1,
            rating: { rate: 4.2, count: 120 },
        },
        {
            title: 'Some Product',
            description: 'Some description',
            category: 'Some category',
            image: 'asd',
            price: 120.99,
            id: 3,
            owner_id: 1,
            rating: { rate: 4.2, count: 120 },
        },
    ]);

    return (
        <div className="container">
            <h1>Tus Productos</h1>
            {!products.length && (
                <div className="image-container">
                    <ShoppingCart size={72} />
                    <p>Todavia no creaste ningun producto.</p>
                </div>
            )}
            <ul className={styles['cart-list']}>
                {products.map((product) => (
                    <li key={product.id} className={styles['cart-row']}>
                        <img src={product.image} alt={product.title} />
                        <div className={styles['cart-item-info-left']}>
                            <p>{trimString(product.title, 50)}</p>
                            <p className={styles.price}>
                                {product.quantity}un. x ${product.price.toFixed(2)}
                            </p>
                        </div>
                        <div className={styles['cart-item-info-right']}>
                            <Link to={`/products/${product.category}/${product.id}`} state={product}>
                                <LinkIcon />
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
