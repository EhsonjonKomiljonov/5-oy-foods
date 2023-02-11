import { Header } from './components/Header/Header';
import { GlobalStyles } from './GlobalStyles';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Dashboard } from './pages/Dashboard/Dashboard';
import './assets/styles/fonts.css';
import { HotDishes } from './components/HotDishes/HotDishes';
import { Navigate } from 'react-router-dom';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route index element={<Navigate to='home' />} />
        <Route path="home/*" element={<Home />}>
          <Route index element={<Navigate to='hot-dishes' />} />
          <Route path="hot-dishes" element={<HotDishes />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
