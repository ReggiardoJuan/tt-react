import { useContext } from 'react';

import { ShoppingCart, Trash2 } from 'react-feather';
import { Link } from 'react-router-dom';

import styles from './Cart.module.css';
import { CartContext } from '../../context/CartContext';
import { trimString } from '../../utils/string.utils';

export default function CartSidebar({ onClose }) {
    const { cart, removeFromCart, getTotal, getTotalItems } = useContext(CartContext);

    return (
        <div className={styles['cart-wrapper']}>
            {
                !getTotalItems() &&
                <div className='image-container'>
                    <ShoppingCart size={72}/>
                    <p>No hay productos en tu carrito.</p>
                </div>
            }
            <ul className={styles['cart-list']}>
                {cart.map((product) => (
                    <li key={product.id} className={styles['cart-row']}>
                        <img src={product.image} alt={product.title} />
                        <div className={styles['cart-item-info-left']}>
                            <p>{`${product.quantity} x ${trimString(product.title, 20)}`}</p>
                            <p className={styles.price}>${product.price.toFixed(2)}</p>
                        </div>
                        <div className={styles['cart-item-info-right']}>
                            <button onClick={() => removeFromCart(product.id)}>
                                <Trash2 className={styles.delete} />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <hr />
            <div className={styles['cart-info']}>
                <p className={styles.price}>Total: ${getTotal().toFixed(2)}</p>
                <Link to={'/cart'}>
                    <button onClick={onClose} aria-label="Ver carrito">
                        Ver carrito
                    </button>
                </Link>
            </div>
        </div>
    );
}
