import React, { useContext, useEffect } from 'react';
import session from '../Store/Session';
import { useNavigate } from 'react-router-dom';
import Context from '../Store/Context/Context';

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const {store} = useContext(Context)

  useEffect(() => {
    if (!store.isLogin) {
      navigate('/auth-login');
    }
  }, [store.isLogin]); // Include isLogin in the dependency array

  return children; // Return children directly
}

export default ProtectedRoute;
