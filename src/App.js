import { Toaster } from 'react-hot-toast';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AllRoutes from './components/AllRoutes/AllRoutes';

import { AuthProvider } from './contexts/AuthContext';

function App() {
    return (
        <AuthProvider>
            <div className="App">
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
