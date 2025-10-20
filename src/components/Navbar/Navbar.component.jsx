import { Home, ShoppingBag, User } from 'react-feather';
import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navigation}>
            <ul className={styles.nav_links}>
                <li>
                    <Link to="/">
                        <Home />
                    </Link>
                </li>
                <li>
                    <Link to={'/products/women\'s clothing'}>Fashion</Link>
                </li>
                <li>
                    <Link to={'/products/electronics'}>Tecnologia</Link>
                </li>
                <li>
                    <Link to={'/products/nature'}>Naturaleza</Link>
                </li>
            </ul>
            <ul className={styles.nav_icons}>
                {/* <li>
                    <Link to="/login">
                        <User />
                    </Link>
                </li> */}
                <li>
                    <Link to={'/cart'}>
                        <ShoppingBag />
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
