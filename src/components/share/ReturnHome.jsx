import { CornerUpLeft } from 'react-feather';
import { Link, useLocation } from 'react-router-dom';

export default function ReturnHome() {
    const location = useLocation();

    return (
        <>
            {location.pathname !== '/' &&
            <Link to="/" className="navigation">
                <span>
                    <CornerUpLeft /> Volver
                </span>
            </Link>
            }
        </>
    );
}
