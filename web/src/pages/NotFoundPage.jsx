import NotFoundImage from '../assets/notFoundImage';
import ReturnHome from '../components/share/ReturnHome';

export default function NotFoundPage() {
    return (
        <div className='container'>
            <ReturnHome />
            <div className="image-container">
                <NotFoundImage />
                <p>Lo sentimos, la página que buscas no existe.</p>
            </div>
        </div>
    );
}
