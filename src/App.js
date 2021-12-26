import { Toaster } from 'react-hot-toast';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AllRoutes from './components/AllRoutes/AllRoutes';

import { AuthProvider } from './contexts/AuthContext';

import './App.css';

function App() {
    return (
        <AuthProvider>
            <div className="app">
                <div>
                    <Toaster />
                </div>
                <Header />
                <AllRoutes />
                <Footer />
            </div>
        </AuthProvider>
    );
}

export default App;
