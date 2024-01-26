import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './Pages/Auth/signIn'; // Adjust the file path and name
import SignUp from './Pages/Auth/signUp'; // Adjust the file path and name
import Dashboard from './Pages/Main/Dashboard/Dashboard';
import Routers from './Setup/routes';


function App() {
  return (
    <div className="App">
      <Routers/>
    </div>
  );
}

export default App;
