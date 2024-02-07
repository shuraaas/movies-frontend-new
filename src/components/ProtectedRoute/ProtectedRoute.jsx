import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js';

const ProtectedRoute = ({ element: Component, ...props }) => {
  const user = useContext(CurrentUserContext);
  return (
    props.loggedIn ? <Component {...props} user={user} /> : <Navigate to='/' replace />
)}

export default ProtectedRoute;