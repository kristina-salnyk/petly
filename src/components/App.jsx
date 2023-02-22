import React, { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
import { NoticeCategoriesList } from './NoticesCategoriesList/NoticesCategoriesList';
import PrivateRoute from './Routes/PrivateRoute';
import RestrictedRoute from './Routes/RestrictedRoute';

const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage'));
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const NewsPage = lazy(() => import('../pages/NewsPage/NewsPage'));
const NoticesPage = lazy(() => import('../pages/NoticesPage/NoticesPage'));
const OurFriendsPage = lazy(() => import('../pages/OurFriendsPage/OurFriendsPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage/RegisterPage'));

export function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/register" element={<RestrictedRoute />}>
          <Route index element={<RegisterPage />} />
        </Route>
        <Route path="/login" element={<RestrictedRoute />}>
          <Route index element={<LoginPage />} />
        </Route>
        <Route path="/notices" element={<NoticesPage />} />
        <Route path="/friends" element={<OurFriendsPage />} />
        <Route path="/user" element={<PrivateRoute />} />
        <Route path="/notices" element={<NoticesPage />}>
          <Route path="" element={<Navigate to="sell" replace />} />
          <Route path=":categoryName" element={<NoticeCategoriesList />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
