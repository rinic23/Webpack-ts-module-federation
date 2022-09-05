import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'shared';
import s from './index.module.scss';

type TProps = {
  children: React.ReactNode;
};

export const MainLayout = ({ children }: TProps) => (
  <div className={s.main_layout}>
    <header className={s.header}>
      <Link to={routes.main}>Главная</Link>
      <Link to={routes.breackingBad}>Во все тяжкие</Link>
    </header>
    <div className={s.content_wrapper}>{children}</div>
  </div>
);
