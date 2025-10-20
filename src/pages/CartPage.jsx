
import Cart from '../components/Cart/Cart.component';
import ReturnHome from '../components/ReturnHome';

export default function CartPage({ cartProducts = [] }) {
    return (
        <div className='container'>
            <ReturnHome />
            <Cart cartProducts={cartProducts} />
        </div>
    );
}