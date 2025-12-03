import ReturnHome from './ReturnHome';
import ErrorPage from '../pages/ErrorPage';
import NoResultsPage from '../pages/NoResultsPage';
import Loader from './Loader/Loader.component';

const loaderStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    gap: '30px',
    padding: '1.2em'
};

export const States = ({ loading, error, items }) => {
    const hasItems = !!items && (Array.isArray(items) ? items.length > 0 : Object.keys(items).length > 0);

    if (loading) {
        return (
            <div className='loader' style={loaderStyles}>
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
