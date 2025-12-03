import { useProductQuantity } from '../../hooks/useProductQuantity';
import styles from '../Product.module.css';

export default function ProductCardActions({ product, isAvailable }) {
    const { value, handleCart, handleChange, handleAdd, isDisabled } = useProductQuantity(product);

    return (
        <div className={styles.actions}>
            <div className={styles.quantity}>
                <button className="outline" onClick={() => handleAdd(-1)} disabled={isDisabled}>
                    −
                </button>
                <input type="number" value={value} onChange={handleChange} min="0" max="100" />
                <button className="outline" onClick={() => handleAdd(1)} disabled={!isAvailable}>
                    +
                </button>
            </div>
            <button aria-label="Agregar" disabled={isDisabled || !isAvailable} onClick={handleCart}>
                {isAvailable ? 'Agregar' : 'Agotado'}
            </button>
        </div>
    );
}
