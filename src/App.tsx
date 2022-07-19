import React from 'react';
import style from './index.module.scss';

export const App = () => {
  console.log(process.env.DB_HOST);

  return <h1 className={style.red}>React typescript222333</h1>;
};
