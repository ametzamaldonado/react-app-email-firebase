import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function ProtectedRoute(props) {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" /> ;
  }

  const { children } = props;
  return children;
}
