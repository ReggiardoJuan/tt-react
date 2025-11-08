import styles from './Product.module.css';
import { useProductQuantity } from '../../hooks/useProductQuantity';

export default function ProductCardActions({ product }) {
    const { value, handleCart, handleChange, handleAdd, isDisabled } = useProductQuantity(product);

    return (
        <div className={styles.actions}>
            <div className={styles.quantity}>
                <button className="outline" onClick={() => handleAdd(-1)} disabled={isDisabled}>
                    −
                </button>
                <input type="number" value={value} onChange={handleChange} min="0" max="100" />
                <button className="outline" onClick={() => handleAdd(1)}>
                    +
                </button>
            </div>
            <button aria-label="Agregar" disabled={isDisabled} onClick={handleCart}>
                Agregar
            </button>
        </div>
    );
}
