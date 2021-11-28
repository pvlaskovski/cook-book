import Header from './components/Header/Header';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import SidebarFilters from './components/SideberFilters/SidebarFilters';

function App() {
  return (
    <div className="App">
        <Header/>
        {/* <Register/> */}
        {/* <Login/> */}
        <SidebarFilters/>
    </div>
  );
}

export default App;
