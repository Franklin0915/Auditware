import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignIn from '../Pages/Auth/signIn'
import Private from './ProtectedRoute'
import Dashboard from '../Pages/Main/Dashboard/Dashboard'
import Projects from '../Pages/Main/Projects/Projects'
import Recents from '../Pages/Main/Recents/Recents'
import Members from '../Pages/Main/Members/Members'

function Routers() {
  return (
    <div className="w-screen h-screen">
        <Routes>
            <Route path='/' element={<Private><Dashboard/></Private>}/>
            <Route path='/projects' element={<Private><Projects/></Private>}/>
            <Route path='/recents' element={<Private><Recents/></Private>}/>
            <Route path='/members' element={<Private><Members/></Private>}/>


            <Route path='/auth-login' element={<SignIn />} />
            <Route path='/auth-register' element={<h1>Register</h1>} />
        </Routes>
    </div>
  )
}

export default Routers