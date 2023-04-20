import { createContext, useState } from 'react';

export const ToOrder = createContext();

export const ToOrderPovider = ({ children }) => {
  const [foodOrder, setFoodOrder] = useState(
    JSON.parse(localStorage.getItem('food-info')) || []
  );

  localStorage.setItem('food-info', JSON.stringify(foodOrder) || []);

  return (
    <ToOrder.Provider value={{ foodOrder, setFoodOrder }}>
      {children}
    </ToOrder.Provider>
  );
};
