import AdminProductRow from './AdminProductRow.component';
import styles from './AdminProducts.module.css';

export default function AdminProducts({ products }) {
        return (
                    <>
                        <ul className={styles['products-list']}>
                            {products.map((product) => (
                                <li key={product.id} className={styles['product-item']}>
                                    <AdminProductRow product={product} />
                                </li>
                            ))}
                        </ul>
                    </>
        );
}