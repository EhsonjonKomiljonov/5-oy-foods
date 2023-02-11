import { createContext, useState } from 'react';

export const FoodCardDataContext = createContext();

export const FoodCardDataContextProvider = ({ children }) => {
  const [foodCardData, setFoodCardData] = useState([]);

  return (
    <FoodCardDataContext.Provider value={{ foodCardData, setFoodCardData }}>
      {children}
    </FoodCardDataContext.Provider>
  );
};
