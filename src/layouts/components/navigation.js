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
    return (React.createElement("div", { className: "wrapper" },
        React.createElement("nav", { className: "navigation" },
            React.createElement(NavLink, { to: "/", className: ({ isActive }) => (isActive ? 'active' : 'navlink') }, "Home"),
            React.createElement(NavLink, { to: "/calendar1", className: ({ isActive }) => (isActive ? 'active' : 'navlink') }, "Calander_1"),
            React.createElement(NavLink, { to: "/calendar2", className: ({ isActive }) => (isActive ? 'active' : 'navlink') }, "Calander_2"))));
};
