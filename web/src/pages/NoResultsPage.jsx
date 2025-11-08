import EmptyImage from '../assets/emptyImage';

export default function NoResultsPage({ message = 'No hay resultados disponibles.' }) {
    return (
        <div className="image-container">
            <EmptyImage />
            <p>{message}</p>
        </div>
    );
}
