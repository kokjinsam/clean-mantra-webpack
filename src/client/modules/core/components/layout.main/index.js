import React from 'react';

import style from './style.import.css';

const propTypes = {
  content: React.propTypes.func,
};

const MainLayout = ({ content = () => null }) => (
  <div>
    <header className={style.hey}>
    <h1>Clean Project</h1>
    </header>

    <div>
    {content()}
    </div>
  </div>
);

MainLayout.propTypes = propTypes;

export default MainLayout;
