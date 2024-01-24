import React, { useEffect } from 'react'
import session from '../Store/Session'
import SignIn from '../Pages/Auth/signIn'
import { useNavigate } from 'react-router-dom'

const isLogin = session.get('isLogin')
function ProtectedRoute({children}) {
    const navigate = useNavigate()
    useEffect(()=>{
        if(!isLogin){
            navigate('/auth-login')
        }
    }, [])
    
    return <>{children}</>

}

export default ProtectedRoute