import { useCallback, useContext, useState } from 'react';

import { CartContext } from '../context/CartContext';

export const useProductQuantity = (product) => {
    const [value, setValue] = useState(0);
    const { addToCart } = useContext(CartContext);

    const handleCart = useCallback(() => {
        addToCart(product, value);
        setValue(0); // Reinicia la cantidad al agregar al carrito
    }, [product, value, addToCart]);

    const handleChange = (event) => {
        setValue(Number(event.target.value));
    };

    const handleAdd = (amount) => {
        setValue((prevValue) => prevValue + amount);
    };

    return {
        value,
        handleCart,
        handleChange,
        handleAdd,
        isDisabled: value <= 0,
    };
};
