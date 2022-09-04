import React from 'react';
import 'antd/dist/antd.css';
import { Route, Routes } from 'react-router-dom';
import { routes } from 'shared';
import { BreackingBad, MainPage } from 'pages';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnWindowFocus: false },
  },
});

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <Routes>
      <Route path={routes.breackingBad} element={<BreackingBad />} />
      <Route path={routes.main} element={<MainPage />} />
    </Routes>
  </QueryClientProvider>
);
