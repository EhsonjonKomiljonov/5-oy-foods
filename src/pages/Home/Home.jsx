import React from 'react';
import { Outlet } from 'react-router-dom';
import { ChooseDishes } from '../../components/ChooseDishes/ChooseDishes';
import { HomeHeader } from '../../components/HomeHeader/HomeHeader';
import { Modal } from '../../components/Modal/Modal';
import { Orders } from '../../components/Orders/Orders';

export const Home = () => {
  return (
    <>
      <HomeHeader />
      <ChooseDishes />
      <Outlet />
      <Orders />
    </>
  );
};
