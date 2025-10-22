import { Home, ShoppingBag, User } from 'react-feather';
import { Link, NavLink } from 'react-router-dom';

import styles from './Navbar.module.css';

export default function Navbar() {
    const navLink = (props, title) => (
        <NavLink
            {...props}
            activeClassName={styles.active}
            className={({ isActive }) => (isActive ? styles.active : '')}
        >
            {title}
        </NavLink>
    );
    return (
        <nav className={styles.navigation}>
            <ul className={styles['nav-links']}>
                <li>
                    { navLink({ to: '/' }, <Home />) }
                </li>
                <li>
                    { navLink({ to: '/products/women\'s clothing' }, 'Fashion') }
                </li>
                <li>
                    { navLink({ to: '/products/electronics' }, 'Tecnologia') }
                </li>
                <li>
                    { navLink({ to: '/products/outdoor' }, 'Aire libre') }
                </li>
            </ul>
            <ul className={styles['nav-icons']}>
                {/* <li>
                    <Link to="/login">
                        <User />
                    </Link>
                </li> */}
                <li>
                    <NavLink to={'/cart'}>
                        <ShoppingBag />
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
