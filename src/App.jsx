import './assets/styles/globals.css';

import Footer from './components/Footer/Footer.component';
import Header from './components/Header/Header.component';
import AppRoutes from './routes/App.routes';

function App() {
    return (
        <div className="App">
            <Header />
            <main className="main-content">
                <AppRoutes />
            </main>
            <Footer />
        </div>
    );
}

export default App;
