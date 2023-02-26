import { Navigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { verifyUser } from '../../redux/auth/operations';
import { selectIsLoading } from '../../redux/auth/selectors';
import Loader from '../../components/Loader/Loader';
import { useAuth } from '../../hooks/useAuth';

export const VerifyPage = () => {
  const dispatch = useDispatch();
  const { verificationToken } = useParams();

  const isLoading = useSelector(selectIsLoading);
  const isLoggedIn = useAuth();

  useEffect(() => {
    if (!verificationToken) return;

    dispatch(verifyUser(verificationToken));
  }, [verificationToken]);

  return (
    <>
      {isLoading && <Loader />}
      {isLoggedIn && <Navigate to="/user" />}
    </>
  );
};
