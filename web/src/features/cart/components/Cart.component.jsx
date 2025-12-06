import { useContext } from 'react';

import { Link as LinkIcon, ShoppingCart, Trash2 } from 'react-feather';
import { Link } from 'react-router-dom';

import { trimString } from '../../../utils/string.utils';
import { CartContext } from '../CartContext';
import styles from './Cart.module.css';

export default function Cart() {
    const { cart, removeFromCart, emptyCart, getTotal, getTotalItems } = useContext(CartContext);

    return (
        <div>
            <h3>Productos en tu carrito: {getTotalItems()}</h3>
            <div className={styles['cart-info']}>
                <p className={styles.price}>Total: ${getTotal().toFixed(2)}</p>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button>
                        <ShoppingCart /> Pagar
                    </button>
                </div>
            </div>
            {!getTotalItems() && (
                <div className="image-container">
                    <ShoppingCart size={72} />
                    <p>No hay productos en tu carrito.</p>
                </div>
            )}
            <ul className={styles['cart-list']}>
                {cart.map((product) => (
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
                            <button onClick={() => removeFromCart(product.id)}>
                                <Trash2 className="delete" />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <div className={styles['cart-info']}>
                <div></div>
                <button className="outline" onClick={emptyCart} style={{ display: getTotalItems() !== 0 ? '' : 'none' }}>
                    <Trash2 className="delete" /> Vaciar
                </button>
            </div>
        </div>
    );
}
