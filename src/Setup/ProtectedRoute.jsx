import React, { useEffect } from 'react';
import session from '../Store/Session';
import { useNavigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const isLogin = session.get('isLogin');

  useEffect(() => {
    if (!isLogin) {
      navigate('/auth-login');
    }
  }, [isLogin]); // Include isLogin in the dependency array

  return children; // Return children directly
}

export default ProtectedRoute;
