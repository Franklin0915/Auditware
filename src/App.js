// ./App.js

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignIn from './Pages/Auth/signIn'; 
// import SignUp from './Pages/signUp';
// import EmailVerification from './Pages/emailVerification';
// import ForgetPassword from './Pages/forgetPassword';
// import ResetPassword from './Pages/resetPassword';
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
