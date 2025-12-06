import { useState } from 'react';

import { Plus, ShoppingCart } from 'react-feather';

import AdminProductRow from './components/AdminProductRow.component';
import styles from './components/AdminProducts.module.css';
import ProductCreationModal from './components/ProductCreationModal.component';

export default function AdminPage() {
    const [products, setProducts] = useState([
        {
            title: 'Some Product 1',
            description: 'Some description 1',
            category: 'Some category 1',
            image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png',
            price: 120.99,
            id: 1,
            owner_id: 1,
            stock: 10,
            rating: { rate: 4.2, count: 120 },
        },
        {
            title: 'Some Product 2',
            description: 'Some description 2',
            category: 'Some category 2',
            image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png',
            price: 120.99,
            id: 3,
            owner_id: 1,
            stock: 15,
            rating: { rate: 4.2, count: 120 },
        },
    ]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);
    const handleCreateProduct = (newProductData) => {
        // Aquí iría la llamada al servicio (service/products.js) para la API
        // Simulación: Añadir el producto al estado
        setProducts(prevProducts => [
            ...prevProducts,
            { ...newProductData, id: Date.now(), rating: { rate: 0, count: 0 } }
        ]);
    };

    const emptyState = (
        <div className="empty-state">
            <div className="image-container">
                <ShoppingCart size={72} />
                <p>Todavia no creaste ningun producto.</p>
                <button onClick={handleOpenModal}>
                    <Plus /> Empezar
                </button>
            </div>
        </div>
    );

    return (
        <div className="container">
            <h2>Tus Productos</h2>
            {!products.length ? (
                emptyState
            ) : (
                <div>
                    <div className={styles['cart-actions']}>
                        <input type="search" placeholder="Buscar" />
                        <button onClick={handleOpenModal}>
                            <Plus /> Crear
                        </button>
                    </div>
                    <ul className={styles['cart-list']}>
                        {products.map((product) => (
                            <li key={product.id} className={styles['cart-row']}>
                                <AdminProductRow product={product} />
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            <ProductCreationModal
                open={isModalOpen} // Controla si está abierto
                onClose={handleCloseModal} // Función para cerrarlo
                onSubmit={handleCreateProduct} // Función para enviar los datos
            />
        </div>
    );
}
