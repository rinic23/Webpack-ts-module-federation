import React from 'react';
import { Button } from 'antd';
import img from './Vector.svg';
// import 'antd/dist/antd.css';
import style from './index.module.scss';

export const App = () => (
  <div>
    <h1 className={style.red}>React typescript222333</h1>
    <div>
      <img className={style.red} src={img} alt="" />
    </div>
    <Button> hi</Button>
  </div>
);
