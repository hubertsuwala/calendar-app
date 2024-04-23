import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navigation } from './components/navigation';
import './mainLayout.css';
// import { Navigation } from './components/';
export const MainLayout = () => {
    return (React.createElement("div", { className: 'layout-wrapper' },
        React.createElement("div", { className: 'nav-wrapper' },
            React.createElement(Navigation, null)),
        React.createElement("div", { className: 'outlet-wrapper' },
            React.createElement(Outlet, null))));
};
