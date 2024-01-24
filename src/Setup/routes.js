import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from '../Pages/Auth/signIn'
import Private from './ProtectedRoute'
import Dashboard from '../Pages/Main/Dashboard/Dashboard'

function Routers() {
  return (
    <div className="w-screen h-screen">
        <Routes>
            <Route path='/' element={<Private><Dashboard/></Private>}/>


            <Route path='/auth-login' element={<SignIn />} />
            <Route path='/auth-register' element={<h1>Register</h1>} />
        </Routes>
    </div>
  )
}

export default Routers