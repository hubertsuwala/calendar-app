import React from 'react';

import { Outlet } from 'react-router-dom';
import { Navigation } from './components/navigation';
import './mainLayout.css';
// import { Navigation } from './components/';

export const MainLayout = () => {
  return (
    <div className={'layout-wrapper'}>
      <div className={'nav-wrapper'}>
        <Navigation />
      </div>
      <div className={'outlet-wrapper'}>
        <Outlet />
      </div>
    </div>
  );
};
