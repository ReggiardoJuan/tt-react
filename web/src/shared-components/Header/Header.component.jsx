import { useLocation } from 'react-router-dom';

import styles from './Header.module.css';
import Navbar from '../Navbar/Navbar.component';

function Header({ onOpenCart }) {
    const location = useLocation();
    const shouldShowNavbar = location.pathname !== '/login';

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <a href="/">
                    <img src="/src/assets/LOGO_TT.png" alt="Logo" />
                </a>
            </div>
            {shouldShowNavbar && <Navbar onOpenCart={onOpenCart} />}
        </header>
    );
}

export default Header;
