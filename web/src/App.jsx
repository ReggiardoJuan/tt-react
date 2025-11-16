import { useState } from 'react';
import './assets/styles/globals.css';

import CartSidebar from './components/Cart/CartSidebar.component';
import Footer from './components/Footer/Footer.component';
import Header from './components/Header/Header.component';
import Sidebar from './components/Sidebar/Sidebar.component';
import AppRoutes from './routes/App.routes';

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
