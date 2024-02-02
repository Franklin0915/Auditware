import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from '../Pages/Auth/signIn'
import Private from './ProtectedRoute'
import Dashboard from '../Pages/Main/Dashboard/Dashboard'
import Projects from '../Pages/Main/Projects/Projects'
import Recents from '../Pages/Main/Recents/Recents'
import Members from '../Pages/Main/Members/Members'
import EmailVerification from '../Pages/Auth/emailVerification'
import ForgetPassword from '../Pages/Auth/forgetPassword'
import SignUp from '../Pages/Auth/signUp'
import ResetPassword from '../Pages/Auth/resetPassword'
import Payment from '../Pages/Auth/Payment'

function Routers() {
  return (
    <div className="w-screen h-screen">
        <Routes>
            {/* Main Pages Routes .................. */}
            <Route path='/' element={<Private><Dashboard/></Private>}/>
            <Route path='/projects' element={<Private><Projects/></Private>}/>
            <Route path='/recents' element={<Private><Recents/></Private>}/>
            <Route path='/members' element={<Private><Members/></Private>}/>
            

            {/* Auth Routes Here ................... */}
            <Route path='/auth-forget-password' element={<ForgetPassword/>}></Route>
            <Route path='/auth-email-verification' element={<EmailVerification/>}></Route>
            <Route path='/auth-login' element={<SignIn />} />
            <Route path='/auth-register' element={<SignUp/>} />
            <Route path='/auth-reset-password' element={<ResetPassword/>}></Route>
            <Route path='/auth-payment' element={<Payment/>}></Route>
        </Routes>
    </div>
  )
}

export default Routers