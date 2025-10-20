import { CornerUpLeft } from 'react-feather';
import { Link } from 'react-router-dom';

export default function ReturnHome() {
    return (
        <Link to="/" className="navigation">
            <span>
                <CornerUpLeft /> Volver
            </span>
        </Link>
    );
}
