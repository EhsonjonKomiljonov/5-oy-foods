import Home from '../assets/images/home-iconactive.svg';
import Icon2 from '../assets/images/nav-icon2.svg';
import Icon3 from '../assets/images/nav-icon3.svg';
import Icon4 from '../assets/images/nav-icon4.svg';
import Icon5 from '../assets/images/nav-icon5.svg';
import settingIcon from '../assets/images/settings-icon.svg';
import exitIcon from '../assets/images/exit-icon.svg';

export const DataNavLink = [
  {
    id: 1,
    icon: Home,
    to: '/home',
  },
  {
    id: 2,
    icon: Icon2,
    to: '/shares',
  },
  {
    id: 3,
    icon: Icon3,
    to: '/dashboard',
  },
  {
    id: 4,
    icon: Icon4,
    to: '/messages',
  },
  {
    id: 5,
    icon: Icon5,
    to: '/notification',
  },
  {
    id: 6,
    icon: settingIcon,
    to: '/settings',
  },
  {
    id: 7,
    icon: exitIcon,
    to: '/exit'
  },
];
