import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import ExampleHomePage from '../ExampleHomePage';
import ExamplePrivatePage from '../ExamplePrivatePage';
import ExamplePublicPage from '../ExamplePublicPage';
import PrivateRoute from '../infrastructure/auth/PrivateRoute';

const AppRouter: FC = () => (
  <Routes>
    <Route
      path="/private"
      element={
        <PrivateRoute>
          <ExamplePrivatePage />
        </PrivateRoute>
      }
    />
    <Route path="/public" element={<ExamplePublicPage />} />
    <Route path="/" element={<ExampleHomePage />} />
  </Routes>
);

export default AppRouter;
