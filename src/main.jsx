import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { FoodCardDataContextProvider } from './context/FoodCardDataContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <FoodCardDataContextProvider>
      <App />
    </FoodCardDataContextProvider>
  </BrowserRouter>
);