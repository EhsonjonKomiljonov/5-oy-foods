import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { FoodCardDataContextProvider } from './context/FoodCardDataContext';
import { ModalProvider } from './context/ModalContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <FoodCardDataContextProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </FoodCardDataContextProvider>
  </BrowserRouter>
);
