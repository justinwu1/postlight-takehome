import NavBar from "./components/NavBar";
import SearchBar from './components/SearchBar'
import { BrowserRouter, Route } from 'react-router-dom'
import EmployeeView from "./components/EmployeeView"


function App() {
  return (
    <div className="container">
      <BrowserRouter>
          <NavBar />
          <Route exact path="/" component={SearchBar} />
          <Route exact path="/employees" component={EmployeeView} />
      </BrowserRouter>
    </div>
  );
}

export default App;
