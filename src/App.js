import Header from './components/Header/Header';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Logout from './components/Logout/Logout';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';
import AddRecipe from './components/AddRecipe/AddRecipe';
import EditRecipe from './components/EditRecipe/EditRecipe';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './contexts/AuthContext';
import Homepage from './components/Pages/Homepage';

import LoggedInUsersRoutes from './components/Common/LoggedInUsersRoutes';


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
                    <Route path="/login" element={<Login />} />
                    <Route path="/logout" element={<Logout />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="recipe/:recipeId" element={<RecipeDetails />} />

                    <Route element={<LoggedInUsersRoutes />}>
                        <Route path="/addRecipe" element={<AddRecipe />} />
                        <Route path="recipe/:recipeId/edit" element={<EditRecipe />} />
                    </Route>

                </Routes>

                <Footer />
            </div>
        </AuthProvider>
    );
}

export default App;
