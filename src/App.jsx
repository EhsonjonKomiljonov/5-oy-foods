import { Header } from './components/Header/Header';
import { GlobalStyles } from './GlobalStyles';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Dashboard } from './pages/Dashboard/Dashboard';
import './assets/styles/fonts.css';
import { HotDishes } from './components/HotDishes/HotDishes';
import { Settings } from './pages/Settings/Settings';
import { Navigate } from 'react-router-dom';
import { ColdDishes } from './components/ColdDishes/ColdDishes';
import { HotDishesSetting } from './components/HotDishesSetting/HotDishesSetting';
import { ColdDishesSetting } from './components/ColdDishesSetting/ColdDishesSetting';

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route index element={<Navigate to="home" />} />
        <Route path="home/*" element={<Home />}>
          <Route index element={<Navigate to="hot-dishes" />} />
          <Route path="hot-dishes" element={<HotDishes />} />
          <Route path="cold-dishes" element={<ColdDishes />} />
        </Route>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="settings/*" element={<Settings />}>
          <Route index element={<Navigate to="hot-dishes-setting" />} />
          <Route path="hot-dishes-setting" element={<HotDishesSetting />} />
          <Route path="cold-dishes-setting" element={<ColdDishesSetting />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
