import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const agregarAlCarrito = (producto) => {
        setCart([...cart, producto]);
    };

    const vaciarCarrito = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, agregarAlCarrito, vaciarCarrito }}>
            {children}
        </CartContext.Provider>
    );
}
