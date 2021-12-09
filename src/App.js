import Header from './components/Header/Header';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import SidebarFilters from './components/SideberFilters/SidebarFilters';
import RecepiesGrid from './components/RecepiesGrid/RecepiesGrid';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';
import AddRecipe from './components/AddRecipe/AddRecipe';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <Header/>
        <RecepiesGrid/>
        <Register/>
        <Login/>
        <SidebarFilters/>
        <RecipeDetails/>
        <AddRecipe/>
        <Footer/>
    </div>
  );
}

export default App;
