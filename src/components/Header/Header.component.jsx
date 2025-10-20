import styles from './Header.module.css';
import Navbar from '../Navbar/Navbar.component';

function Header() {
    return (
        <header className={styles.header}>
          <div className={styles.logo}>
            <img src="/src/assets/LOGO_TT.png" alt="Logo" />
          </div>
          <Navbar />
        </header>
    );
}

export default Header;
