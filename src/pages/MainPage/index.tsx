import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'shared';

export const MainPage = () => (
  <div>
    <Link to={routes.breackingBad}>Breacking Bad</Link>
  </div>
  );
