import ReturnHome from './ReturnHome';
import ErrorPage from '../../pages/ErrorPage';
import NoResultsPage from '../../pages/NoResultsPage';
import Loader from '../Loader/Loader.component';
import styles from '../Product/Product.module.css';

export const States = ({ loading, error, items }) => {
    const _errorComponent = (
        <>
            <ReturnHome />
            <ErrorPage error={error} />
        </>
    );

    const _noResultsComponent = (
        <>
            <ReturnHome />
            <NoResultsPage />
        </>
    );

    const _loadingComponent = (
        <div className={styles.loader}>
            <Loader size={72} />
            <p>Cargando productos...</p>
        </div>
    );

    const hasItems = !!items && (Array.isArray(items) ? items.length > 0 : Object.keys(items).length > 0);

    if (loading) {
        return _loadingComponent;
    }

    if (error) {
        return _errorComponent;
    }

    if (!hasItems) {
        return _noResultsComponent;
    }

    return null;
};
