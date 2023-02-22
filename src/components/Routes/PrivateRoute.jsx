import { useSelector } from 'react-redux';
import React, { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

const UserPage = lazy(() => import('../../pages/UserPage/UserPage'));

const PrivateRoute = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? <UserPage /> : <Navigate to="/" />;
};

export default PrivateRoute;