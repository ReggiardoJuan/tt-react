import { useState } from 'react';

import FormField from '../../../shared-components/FormField/FormField.component';
import { minLength, number, price, required } from '../../../shared-components/FormField/FormField.validation';
import Modal from '../../../shared-components/Modal/Modal.component';
import styles from './AdminProducts.module.css';
import { Save, X } from 'react-feather';

export default function ProductCreationModal({ open, onClose, onSubmit }) {
    const [productData, setProductData] = useState({
        title: '',
        price: 0,
        description: '',
        category: '',
        image: '',
        stock: 0,
    });

    const categories = [
        { value: 'Women\'s Clothing', label: 'Moda' },
        { value: 'Electronics', label: 'Tecnologia' },
        { value: 'Outdoor', label: 'Aire libre' },
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(productData);
        onClose();
    };

    return (
        <Modal title="Crear Nuevo Producto" open={open} onClose={onClose}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <FormField label="Título" name="title" validations={[required, minLength(5)]} placeholder="Título del producto" value={productData.title} />
                <FormField label="Descripción" name="description" validations={[required, minLength(10)]} placeholder="Descripción del producto" value={productData.description}/>
                <FormField label="Categoría" name="category" validations={[required, minLength(10)]} placeholder="Categoría del producto" value={productData.category} as="select" options={categories}/>   
                <FormField label="Imagen" name="image" validations={[required]} placeholder="Link a la imagen del producto" value={productData.image}/>
                <div className={styles['form-row']}>
                    <FormField label="Precio" name="price" validations={[required, price]} placeholder="Precio del producto" value={productData.price}/>
                    <FormField label="Stock" name="stock" validations={[required, number]} placeholder="Unidades del producto" value={productData.stock}/>
                </div>
                <div className={styles.actions}>
                    <button className='outline' type="button" onClick={onClose}> <X /> Cancelar</button>
                    <button type="submit"><Save/> Guardar</button>
                </div>
            </form>
        </Modal>
    );
}