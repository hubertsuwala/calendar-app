import React from 'react';
import { NavLink } from 'react-router-dom';

import './navigation.css';

// import './navbar.scoped.scss';

// const getIcon = (icon: NavIconType) => {
//   if (icon === NavIconType.Contractors) return <Contractors colorType="" />;
//   if (icon === NavIconType.Invoices) return <Invoices colorType="" />;
//   if (icon === NavIconType.Taxes) return <Taxes colorType="" />;
//   if (icon === NavIconType.Inbox) return <Inbox colorType="" />;
//   if (icon === NavIconType.Home) return <HomeIcon colorType="" />;
//   if (icon === NavIconType.Costs) return <CostsIcon colorType="" />;
//   if (icon === NavIconType.Revenues) return <RevenuesIcon colorType="" />;
//   if (icon === NavIconType.Store) return <StoreIcon colorType="" />;
//   if (icon === NavIconType.Users) return <UsersIcon colorType="" />;
// };

export const Navigation = () => {
  return (
    <div className="wrapper">
      <nav className="navigation">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : 'navlink')}>
          Home
        </NavLink>
        <NavLink to="/calendar1" className={({ isActive }) => (isActive ? 'active' : 'navlink')}>
          Calander_1
        </NavLink>
        <NavLink to="/calendar2" className={({ isActive }) => (isActive ? 'active' : 'navlink')}>
          Calander_2
        </NavLink>
      </nav>
    </div>
  );
};
