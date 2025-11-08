import { useContext } from 'react';

import { Link as LinkIcon, ShoppingCart, Trash2 } from 'react-feather';
import { Link } from 'react-router-dom';

import styles from './Cart.module.css';
import { CartContext } from '../../context/CartContext';
import { sumValuesFromItems } from '../../utils/objects.utils';
import { trimString } from '../../utils/string.utils';

export default function Cart() {
    const { cart, removeFromCart, emptyCart, getTotal } = useContext(CartContext);

    return (
        <div>
            <h3>Productos en tu carrito: {sumValuesFromItems(cart, 'quantity')}</h3>
            <div className={styles['cart-info']}>
                <p className={styles.price}>Total: ${getTotal().toFixed(2)}</p>
                <button
                    className="outline"
                    onClick={emptyCart}
                    style={{ display: cart.length !== 0 ? '' : 'none' }}
                >
                    <Trash2 className={styles.delete} /> Vaciar
                </button>
            </div>
            {
                !cart.length &&
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
                            <p>{trimString(product.title, 50)}</p>
                            <p className={styles.price}>{product.quantity}un. x ${product.price.toFixed(2)}</p>
                        </div>
                        <div className={styles['cart-item-info-right']}>
                            <Link to={`/products/${product.category}/${product.id}`} state={product}>
                                <LinkIcon />
                            </Link>
                            <button onClick={() => removeFromCart(product.id)}>
                                <Trash2 className={styles.delete} />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
