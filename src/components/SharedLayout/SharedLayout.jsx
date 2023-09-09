import React, { Suspense } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import css from './SharedLayout.module.css';

export const SharedLayout = () => {
  const location = useLocation();

  return (
    <>
      <nav className={css.navigation}>
        <NavLink
          to="/"
          className={`${css.link} ${
            location.pathname === '/' ? css.active : ''
          }`}
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={`${css.link} ${
            location.pathname === '/movies' ? css.active : ''
          }`}
        >
          Movies
        </NavLink>
      </nav>
      <hr className={css.hr}/>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      
    </>
  );
};