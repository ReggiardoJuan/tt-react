import { useContext } from 'react';

import { Settings, ShoppingBag } from 'react-feather';
import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.css';
import { CartContext } from '../../features/cart/CartContext';

export default function Navbar({ onOpenCart }) {
    const { getTotalItems } = useContext(CartContext);

    const shouldShowSettings = true;
    const shouldShowSidebar = location.pathname !== '/cart';

    const navLink = (props, title) => (
        <NavLink {...props} className={({ isActive }) => (isActive ? styles.active : '')}>
            {title}
        </NavLink>
    );

    return (
        <nav className={styles.navigation}>
            <ul className={styles['nav-links']}>
                <li>{navLink({ to: '/' }, 'Home')}</li>
                <li>{navLink({ to: '/products/women\'s clothing' }, 'Moda')}</li>
                <li>{navLink({ to: '/products/electronics' }, 'Tecnologia')}</li>
                <li>{navLink({ to: '/products/outdoor' }, 'Aire libre')}</li>
            </ul>
            <ul className={styles['nav-icons']}>
                <li>
                    {shouldShowSettings && navLink({ to: '/admin' }, <Settings />)}</li>
                <li>
                    <div
                        onClick={shouldShowSidebar && onOpenCart}
                        className={styles['cart-icon-container']}
                        role="button"
                        aria-label="Abrir Carrito de Compras"
                    >
                        <ShoppingBag />
                        <span className={styles.badge}>{getTotalItems() || ''}</span>
                    </div>
                </li>
            </ul>
        </nav>
    );
}
