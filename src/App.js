// ./App.js

import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import SignIn from './Pages/signIn'; 
// import SignUp from './Pages/signUp';
// import EmailVerification from './Pages/emailVerification';
// import ForgetPassword from './Pages/forgetPassword';
// import ResetPassword from './Pages/resetPassword';
import Dashboard from './Pages/Main/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Dashboard />} />
          {/* <Route path='SignIn' element={<SignIn />} />
          <Route path='SignUp' element={<SignUp/>}/>
          <Route path='EmailVerification' element={<EmailVerification/>}/>
          <Route path='ForgetPassword' element={<ForgetPassword/>}/>
          <Route path='ResetPassword' element={<ResetPassword/>}/>
          <Route path='Dashboard' element={<Dashboard/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
