import Header from './components/Header/Header';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import SidebarFilters from './components/SideberFilters/SidebarFilters';
import RecepiesGrid from './components/RecepiesGrid/RecepiesGrid';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';
import AddRecipe from './components/AddRecipe/AddRecipe';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router';
import { Toaster } from 'react-hot-toast';
import { AuthContext } from './contexts/AuthContext';
import useLocalStorage from './hooks/useLocalStorage';

const initialAuthState = { 
    email: "", 
    uid: "" 
}

function App() {
    const [user, setUser] = useLocalStorage('user', initialAuthState);

    function login (authData){
        setUser(authData);
    }

    function logout(){
        setUser(initialAuthState);
    }

    return (
        <AuthContext.Provider value={user}>
            <div className="App">
                <div>
                    <Toaster />
                </div>

                <Header />

                <Routes>
                    <Route path="/" element={<RecepiesGrid />} />
                    <Route path="/recipes" element={<RecepiesGrid />} />
                    <Route path="/login" element={<Login login={login} />} />
                    <Route path="/logout" element={<Logout logout={logout} />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/addRecipe" element={<AddRecipe />} />
                    <Route path="/details/" element={<RecipeDetails />} />
                </Routes>

                <Footer />
                {/* <SidebarFilters/> */}
            </div>
        </AuthContext.Provider>
    );
}

export default App;
