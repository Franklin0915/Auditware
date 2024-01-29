import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from '../Pages/Auth/signIn'
import Private from './ProtectedRoute'
import Dashboard from '../Pages/Main/Dashboard/Dashboard'
import EmailVerification from '../Pages/Auth/emailVerification'
import ForgetPassword from '../Pages/Auth/forgetPassword'
import SignUp from '../Pages/Auth/signUp'

function Routers() {
  return (
    <div className="w-screen h-screen">
        <Routes>
            <Route path='/' element={<Private><Dashboard/></Private>}/>
            <Route path='auth-email' element={<EmailVerification/>}></Route>
            <Route path='forget-password'element={<ForgetPassword/>}></Route>



            <Route path='/auth-login' element={<SignIn />} />
            <Route path='/auth-register' element={<SignUp/>} />
        </Routes>
    </div>
  )
}

export default Routers