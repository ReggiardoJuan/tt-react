import { Link } from 'react-router-dom';

import styles from './Footer.module.css';

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <ul className={styles.footer_links}>
                <li>
                    <Link to="/about">About Us</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <p>&copy; {year} Talento Tech. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
