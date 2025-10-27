import { useCallback, useState } from 'react';

export const useProductQuantity = (product, handleAddToCart) => {
    const [value, setValue] = useState(0);
    const handleCart = useCallback(() => {
        handleAddToCart({
            ...product,
            quantity: value,
            total: value * product.price,
        });
        setValue(0); // Reinicia la cantidad al agregar al carrito
    }, [product, value, handleAddToCart]);

    const handleChange = (event) => {
        const newValue = Number(event.target.value);
        setValue(newValue);
    };

    const handleAdd = (amount) => {
        setValue((prevValue) => prevValue + amount);
    };

    const isDisabled = value <= 0;

    return {
        value,
        handleCart,
        handleChange,
        handleAdd,
        isDisabled,
    };
};
