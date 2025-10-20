import NotFoundImage from '../assets/notFoundImage';

export default function NotFoundPage() {
    return (
        <div className='image-container'>
            <NotFoundImage/>
            <p>Lo sentimos, la página que buscas no existe.</p>
        </div>
    );
}
