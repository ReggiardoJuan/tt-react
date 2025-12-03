import Cart from './components/Cart.component';
import ReturnHome from '../../shared-components/ReturnHome';

export default function CartPage({ cartProducts = [] }) {
    return (
        <div className='container'>
            <ReturnHome />
            <Cart cartProducts={cartProducts} />
        </div>
    );
}