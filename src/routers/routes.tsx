import { Navigate } from 'react-router-dom';
import type { RouteObject } from 'react-router-dom';

import PublicRoute from '../components/PublicRoute';

import HomePage from '../pages/HomePage';
import ProfilePage from '../pages/ProfilePage';
import GalleryPage from '../pages/GalleryPage';
import NewsPage from '../pages/NewsPage';
import ShoppingPage from '../pages/ShoppingPage';

const routes: RouteObject[] = [
  {
    path: '/',
    element: (
      <PublicRoute>
        <HomePage />
      </PublicRoute>
    ),
  },
  {
    path: '/profile',
    element: (
      <PublicRoute>
        <ProfilePage />
      </PublicRoute>
    ),
  },
  {
    path: '/gallery',
    element: (
      <PublicRoute>
        <GalleryPage />
      </PublicRoute>
    ),
  },
  {
    path: '/news',
    element: (
      <PublicRoute>
        <NewsPage />
      </PublicRoute>
    ),
  },
  {
    path: '/shopping',
    element: (
      <PublicRoute>
        <ShoppingPage />
      </PublicRoute>
    ),
  },
  {
    path: '*',
    element: <Navigate to="/" replace />,
  },
];

export default routes;
