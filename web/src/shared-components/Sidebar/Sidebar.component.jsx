import { useEffect, useRef } from 'react';

import styles from './Sidebar.module.css';

const Sidebar = ({ isOpen, onClose, children }) => {
    const sidebarRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
                onClose();
            }
        }

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    if (!isOpen) {
        return null;
    }

    const sidebarClasses = `${styles.container} ${isOpen ? styles.open : styles.closed}`;

    return (
        <>
            <div className={styles.backdrop} onClick={onClose} />
            <div ref={sidebarRef} className={sidebarClasses}>
                <button className={styles.closeButton} onClick={onClose}>
                    &times;
                </button>
                <div className={styles.content}>{children}</div>
            </div>
        </>
    );
};

export default Sidebar;
