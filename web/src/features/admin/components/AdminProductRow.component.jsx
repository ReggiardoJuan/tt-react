
import { Edit, Trash2 } from 'react-feather';

import styles from './AdminProducts.module.css';
import { trimString } from '../../../utils/string.utils';

export default function AdminProductRow({ product }) {
    const handleEdit = (id) => {
        window.alert(`Editar producto ${id}`);
    };
    const handleDelete = (id) => {
        window.alert(`Borrar producto ${id}`);
    };

    return (
        <>
            <img src={product.image} alt={product.title} />
            <div className={styles['cart-item-info-left']}>
                <p><strong>{trimString(product.title, 50)}</strong></p>
                <p>Stock: {product.stock}</p>
                <p className={styles.price}>${product.price.toFixed(2)}</p>
            </div>
            <div className={styles['cart-item-info-right']}>
                <button onClick={() => handleDelete(product.id)}>
                    <Trash2 className="delete" />
                </button>
                <button onClick={() => handleEdit(product.id)}>
                    <Edit className="edit" />
                </button>
            </div>
        </>
    );
}
