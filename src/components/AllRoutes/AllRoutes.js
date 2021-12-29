
import { Route, Routes } from 'react-router';

import Register from '../Register/Register';
import Login from '../Login/Login';
import Logout from '../Logout/Logout';
import RecipeDetails from '../RecipeDetails/RecipeDetails';
import AddRecipe from '../AddRecipe/AddRecipe';
import EditRecipe from '../EditRecipe/EditRecipe';
import UserArea from '../UserArea/UserArea';

import Homepage from '../Pages/Homepage';
import LoggedInUsersRoutes from '../Common/LoggedInUsersRoutes';

export default function AllRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/register" element={<Register />} />
            <Route path="recipe/:recipeId" element={<RecipeDetails />} />

            <Route element={<LoggedInUsersRoutes />}>
                <Route path="/user" element={< UserArea />} />
                <Route path="/addRecipe" element={<AddRecipe />} />
                <Route path="recipe/:recipeId/edit" element={<EditRecipe />} />
            </Route>

            <Route element={<Homepage />} path="*" />
        </Routes>
    )
}