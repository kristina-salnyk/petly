import React, { lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
import { NoticeCategoriesList } from './NoticesCategoriesList/NoticesCategoriesList';
import { PrivateRoute } from '../hooks/PrivateRoute';
import { RestrictedRoute } from '../hooks/RestrictedRoute';
import { VerifyPage } from '../pages/VerifyPage/VerifyPage';
import { useDispatch } from 'react-redux';
import { useAuth } from '../hooks/useAuth';
import { refreshUser } from '../redux/auth/operations';
import { GoogleAuthPage } from '../pages/GoogleAuthPage/GoogleAuthPage';

const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const NewsPage = lazy(() => import('../pages/NewsPage/NewsPage'));
const NoticesPage = lazy(() => import('../pages/NoticesPage/NoticesPage'));
const OurFriendsPage = lazy(() => import('../pages/OurFriendsPage/OurFriendsPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const UserPage = lazy(() => import('../pages/UserPage/UserPage'));

export function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {!isRefreshing ? (
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route
              path="/register"
              element={<RestrictedRoute component={<RegisterPage />} redirectTo="/user" />}
            />
            <Route
              path="/login"
              element={<RestrictedRoute component={<LoginPage />} redirectTo="/user" />}
            />
            <Route path="/notices" element={<NoticesPage />} />
            <Route path="/friends" element={<OurFriendsPage />} />
            <Route
              path="/user"
              element={<PrivateRoute component={<UserPage />} redirectTo="/login" />}
            />
            <Route path="/notices" element={<NoticesPage />}>
              <Route path="" element={<Navigate to="sell" replace />} />
              <Route path=":category" element={<NoticeCategoriesList />} />
            </Route>
            <Route path="/verify/:verificationToken" element={<VerifyPage />} />
            <Route path="/google-auth" element={<GoogleAuthPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      ) : null}
    </>
  );
}
