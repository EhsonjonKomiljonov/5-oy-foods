import { createContext, useState } from 'react';

export const HowManyContext = createContext();

export const HowManyProvider = ({ children }) => {
  const [howMany, setHowMany] = useState(1);

  return (
    <HowManyContext.Provider value={{ howMany, setHowMany }}>
      {children}
    </HowManyContext.Provider>
  );
};
