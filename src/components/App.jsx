import React, { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
import { NoticeCategoriesList } from './NoticesCategoriesList/NoticesCategoriesList';
import { PrivateRoute } from '../hooks/PrivateRoute';
import { RestrictedRoute } from '../hooks/RestrictedRoute';

const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const NewsPage = lazy(() => import('../pages/NewsPage/NewsPage'));
const NoticesPage = lazy(() => import('../pages/NoticesPage/NoticesPage'));
const OurFriendsPage = lazy(() => import('../pages/OurFriendsPage/OurFriendsPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));
const UserPage = lazy(() => import('../pages/UserPage/UserPage'));

export function App() {
  return (
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
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
