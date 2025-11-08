import { Link as LinkIcon, ShoppingCart, Trash2 } from 'react-feather';
import { Link } from 'react-router-dom';

import styles from './Cart.module.css';
import { sumValuesFromItems } from '../../utils/objects.utils';
import { trimString } from '../../utils/string.utils';

export default function Cart({ cartProducts, setCartProducts }) {
    const handleRemove = (id) => {
        setCartProducts([...cartProducts.filter((product) => product.id !== id)]);
    };

    const emptyCart = () => {
        setCartProducts([]);
    };

    return (
        <div>
            <h3>Productos en tu carrito: {sumValuesFromItems(cartProducts, 'quantity')}</h3>
            <div className={styles['cart-info']}>
                <p className={styles.price}>Total: ${sumValuesFromItems(cartProducts, 'total').toFixed(2)}</p>
                <button
                    className="outline"
                    onClick={emptyCart}
                    style={{ display: cartProducts.length !== 0 ? '' : 'none' }}
                >
                    <Trash2 className={styles.delete} /> Vaciar
                </button>
            </div>
            {
                !cartProducts.length &&
                <div className='image-container'>
                    <ShoppingCart size={72}/>
                    <p>No hay productos en tu carrito.</p>
                </div>
            }
            <ul className={styles['cart-list']}>
                {cartProducts.map((product) => (
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
                            <button onClick={() => handleRemove(product.id)}>
                                <Trash2 className={styles.delete} />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
