import React from 'react';
import { Outlet } from 'react-router-dom';
import { HomeHeader } from '../../components/HomeHeader/HomeHeader';

export const Home = () => {
  return (
    <>
      <HomeHeader />
      <Outlet />
    </>
  );
};
