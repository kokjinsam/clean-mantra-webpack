import React from 'react';

import style from './style.import.css';

const condition = true;

const Hello = () => (
  <div className={style.hey}>
    <If condition={condition}>
      <p>Testing JSX control</p>
    </If>
    <p>Hello Component</p>
  </div>
);

export default Hello;
