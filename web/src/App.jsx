import { useState } from 'react';
import './assets/styles/globals.css';

import CartSidebar from './features/cart/components/CartSidebar.component';
import AppRoutes from './routes/App.routes';
import Footer from './shared-components/Footer/Footer.component';
import Header from './shared-components/Header/Header.component';
import Sidebar from './shared-components/Sidebar/Sidebar.component';

function App() {
    const [isCartOpen, setIsCartOpen] = useState(false);

    const handleOpenCart = () => {
        setIsCartOpen(prevIsCartOpen => !prevIsCartOpen);
    };
    const handleCloseCart = () => {
        setIsCartOpen(false);
    };

    return (
        <div className="App">
            <Header onOpenCart={handleOpenCart} />
            <main className="main-content">
                <AppRoutes />
                <Sidebar isOpen={isCartOpen} onClose={handleCloseCart}>
                    <CartSidebar onClose={handleCloseCart} />
                </Sidebar>
            </main>

            <Footer />
        </div>
    );
}

export default App;
