import React, { useEffect } from 'react'
import session from '../Store/Session'
import { useNavigate } from 'react-router-dom'

const isLogin = session.get('isLogin')
function ProtectedRoute({children}) {
    const navigate = useNavigate()
    useEffect(()=>{
        if(!isLogin){
            navigate('/auth-login')
        }
    }, [navigate])
    
    return <>{children}</>

}

export default ProtectedRoute