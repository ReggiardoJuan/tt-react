import ErrorPage from '../../pages/ErrorPage';
import NoResultsPage from '../../pages/NoResultsPage';
import Loader from '../Loader/Loader.component';
import styles from '../Product/Product.module.css';

export const StateWrapper = ({ loading, error, items, children }) => {
    const hasItems = !!items && (Array.isArray(items) ? items.length > 0 : Object.keys(items).length > 0);

    if (loading) {
        return (
            <div className={styles.loader}>
                <Loader size={72} />
                <p>Cargando productos...</p>
            </div>
        );
    }

    if (error) {
        return (
            <>
                <ErrorPage error={error} />
            </>
        );
    }

    if (!hasItems) {
        return (
            <>
                <NoResultsPage />
            </>
        );
    }

    return children;
};
