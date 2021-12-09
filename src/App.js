import Header from './components/Header/Header';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import SidebarFilters from './components/SideberFilters/SidebarFilters';
import RecepiesGrid from './components/RecepiesGrid/RecepiesGrid';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';
import AddRecipe from './components/AddRecipe/AddRecipe';
import Footer from './components/Footer/Footer';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <div className="App">
        <Header/>
        
        <Routes>
            <Route path="/" element={<RecepiesGrid/>} />
            <Route path="/recipes" element={<RecepiesGrid/>} />
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>} />
            <Route path="/addRecipe" element={<AddRecipe/>} />
            <Route path="/details/" element={<RecipeDetails/>} />
        </Routes>

        <Footer/>
        {/* <SidebarFilters/> */}
    </div>
  );
}

export default App;
