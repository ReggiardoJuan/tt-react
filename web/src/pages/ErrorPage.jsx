// Manejo todo por 500 para simplificar

import ErrorImage from '../assets/errorImage';

export default function ErrorPage({ error }) {
    return (
        <div className='image-container'>
            <ErrorImage />
            <p>Lo sentimos, hubo un error: {error.message}</p>
        </div>
    );
}
