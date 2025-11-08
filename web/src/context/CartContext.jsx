import { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (product, quantity) => {
        const existingProduct = cart.find((cartProduct) => cartProduct.id === product.id);
        if (existingProduct) {
            setCart([
                ...cart.filter((cartProduct) => cartProduct.id !== product.id),
                {
                    ...existingProduct,
                    quantity: existingProduct.quantity + quantity,
                },
            ]);
            return;
        } else {
            setCart([...cart, { ...product, quantity }]);
        }
    };

    const removeFromCart = (id) => {
        setCart([...cart.filter((product) => product.id !== id)]);
    };

    const emptyCart = () => {
        setCart([]);
    };

    const getTotal = () => {
        return cart.reduce((acc, product) => acc + (product.price * product.quantity), 0);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, emptyCart, removeFromCart, getTotal }}>
            {children}
        </CartContext.Provider>
    );
}
