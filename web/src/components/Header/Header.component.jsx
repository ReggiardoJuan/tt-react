import { useLocation } from 'react-router-dom';

import styles from './Header.module.css';
import Navbar from '../Navbar/Navbar.component';

function Header() {
    const location = useLocation();
    const shouldShowNavbar = location.pathname !== '/login';

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <a href="/">
                    <img src="/src/assets/LOGO_TT.png" alt="Logo" />
                </a>
            </div>
            {shouldShowNavbar && <Navbar />}
        </header>
    );
}

export default Header;
