import { Navigate, useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/auth/selectors';
import Loader from '../../components/Loader/Loader';
import { useAuth } from '../../hooks/useAuth';
import { refreshUser } from '../../redux/auth/operations';
import { Login } from '../../components/AuthNav/AuthNav.styled';

export const GoogleAuthPage = () => {
  const dispatch = useDispatch();

  const [searchParams] = useSearchParams();
  const token = searchParams.get('token') ?? '';

  const isLoading = useSelector(selectIsLoading);
  const isLoggedIn = useAuth();

  useEffect(() => {
    if (!token) return;

    dispatch(refreshUser(token));
  }, [token]);

  return (
    <>
      {isLoading && <Loader />}
      {isLoggedIn ? <Navigate to="/user" /> : <Login />}
    </>
  );
};
