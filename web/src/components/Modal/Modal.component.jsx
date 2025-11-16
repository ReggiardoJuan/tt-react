export default function Modal({ open, onClose, children }) {
    if (!open) {
        return null;
    }

    return (
        <div style={styles.overlay} onClick={onClose}>
            <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
                {children}
                <button onClick={onClose} style={styles.closeButton}>
                    Cerrar
                </button>
            </div>
        </div>
    );
}

const styles = {
    overlay: {
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        background: '#fff',
        padding: '20px',
        borderRadius: '8px',
        minWidth: '300px',
    },
    closeButton: {
        marginTop: '10px',
    },
};
