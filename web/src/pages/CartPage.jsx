
import Cart from '../components/Cart/Cart.component';
import Sidebar from '../components/Sidebar/Sidebar.component';
import ReturnHome from '../components/shared/ReturnHome';

export default function CartPage({ cartProducts = [] }) {
    return (
        <div className='container'>
            <ReturnHome />
            <Cart cartProducts={cartProducts} />
            <Sidebar />
        </div>
    );
}