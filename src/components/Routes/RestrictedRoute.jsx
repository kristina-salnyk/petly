import { useSelector } from 'react-redux';
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const PrivateRoute = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return !isLoggedIn ? <Outlet /> : <Navigate to="/user" />;
};

export default PrivateRoute;
