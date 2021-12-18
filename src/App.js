import Header from './components/Header/Header';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import SidebarFilters from './components/SideberFilters/SidebarFilters';
import RecepiesGrid from './components/RecipesGrid/RecipesGrid';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';
import AddRecipe from './components/AddRecipe/AddRecipe';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router';
import { Toaster } from 'react-hot-toast';
import { AuthContext } from './contexts/AuthContext';
import { AuthProvider } from './contexts/AuthContext';
import Homepage from './components/Pages/Homepage';


function App() {
    return (
        <AuthProvider>
            <div className="App">
                <div>
                    <Toaster />
                </div>

                <Header />

                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/recipes" element={<RecepiesGrid />} />
                    {/* URI Login shoudlnt be available for logged in customers!!! */}
                    <Route path="/login" element={<Login  />} />
                    <Route path="/logout" element={<Logout  />} />
                    <Route path="/register" element={<Register  />} />
                    <Route path="/addRecipe" element={<AddRecipe />} />
                    <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
                </Routes>

                <Footer />
                {/* <SidebarFilters/> */}
            </div>
        </AuthProvider>
    );
}

export default App;
