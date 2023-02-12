import Coin from '../assets/images/CoinDashboard.svg';
import TopArrow from '../assets/images/ArrowUpDashboard.svg';
import Bookmark from '../assets/images/BookmarkDashboard.svg';
import DownArrow from '../assets/images/ArrowDownDashboard.svg';
import Customer from '../assets/images/CustomerDashboard.svg';

export const DataDashboardTotal = [
  {
    id: 1,
    icon: Coin,
    percent: '+32.40%',
    arrow: TopArrow,
    title: '$10,243.00',
    text: 'Total Revenue',
  },
  {
    id: 2,
    icon: Bookmark,
    percent: '-12.40%',
    arrow: DownArrow,
    title: '23,456',
    text: 'Total Dish Ordered',
  },
  {
    id: 3,
    icon: Customer,
    percent: '+2.40%',
    arrow: TopArrow,
    title: '1,234',
    text: 'Total Customer',
  },
];
