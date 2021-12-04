import Header from './components/Header/Header';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import SidebarFilters from './components/SideberFilters/SidebarFilters';
import RecepiesGrid from './components/RecepiesGrid/RecepiesGrid';
import RecipeDetails from './components/RecipeDetails/RecipeDetails';
import AddRecipe from './components/AddRecipe/AddRecipe';

function App() {
  return (
    <div className="App">
        <Header/>
        {/* <Register/> */}
        {/* <Login/> */}
        {/* <SidebarFilters/>
        <RecepiesGrid/>
        <RecipeDetails/> */}
        <AddRecipe/>
    </div>
  );
}

export default App;
