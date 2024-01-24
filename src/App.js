import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './Pages/Auth/signIn'; // Adjust the file path and name
import SignUp from './Pages/Auth/signUp'; // Adjust the file path and name
import Dashboard from './Pages/Main/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<SignIn />} />
          <Route path='signin' element={<SignIn />} />
          <Route path='signup' element={<SignUp />} />
          {/* Add other routes as needed */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
