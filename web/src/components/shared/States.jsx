import ReturnHome from './ReturnHome';
import ErrorPage from '../../pages/ErrorPage';
import NoResultsPage from '../../pages/NoResultsPage';
import Loader from '../Loader/Loader.component';
import styles from '../Product/Product.module.css';

export const States = ({ loading, error, items }) => {
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
            <div className="container">
                <ReturnHome />
                <ErrorPage error={error} />
            </div>
        );
    }

    if (!hasItems) {
        return (
            <div className="container">
                <ReturnHome />
                <NoResultsPage />
            </div>
        );
    }

    return null;
};
