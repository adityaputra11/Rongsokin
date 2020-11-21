import CartScreen from '@screen/CartScreen';
import AccountScreen from '@screen/AccountScreen';
import OfficialStoreScreen from '@screen/OfficialStoreScreen';
import HomeScreen from '@screen/HomeScreen';
// import FeedStack from '@stack/FeedStack';
// import LoginScreen from '@screen/LoginScreen';
import HeaderRoot from '@screen/HeaderRoot';

export const BottomMenu = [
  {name: 'Home', label: 'Beranda', icon: 'home', component: HomeScreen},
  {
    name: 'Pesan',
    label: 'Pesan',
    icon: 'message-processing',
    component: OfficialStoreScreen,
  },
  {
    name: 'Transaksi',
    label: 'Transaksi',
    icon: 'sort-variant',
    component: OfficialStoreScreen,
  },
  {name: 'Account', label: 'Profil', icon: 'account', component: CartScreen},
];
