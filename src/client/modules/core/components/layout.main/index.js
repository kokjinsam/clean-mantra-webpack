import React from 'react';

import style from './style.import.css';

const MainLayout = ({ content = () => null }) => (
  <div>
    <header className={style.hey}>
    <h1>Easy Make</h1>
    </header>

    <div>
    {content()}
    </div>
  </div>
);

export default MainLayout;
