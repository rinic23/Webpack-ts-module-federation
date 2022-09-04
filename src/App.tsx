import React from 'react';
import 'antd/dist/antd.css';
import { Route, Routes } from 'react-router-dom';
import { routes } from 'shared';
import { BreackingBad, MainPage } from 'pages';

export const App = () => (
  <Routes>
    <Route path={routes.breackingBad} element={<BreackingBad />} />
    <Route path={routes.main} element={<MainPage />} />
  </Routes>
);
