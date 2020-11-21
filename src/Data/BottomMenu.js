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
    name: 'Feed',
    label: 'Pesan',
    icon: 'signature-image',
    component: OfficialStoreScreen,
  },
  {
    name: 'OfficialStore',
    label: 'Transaksi',
    icon: 'store',
    component: OfficialStoreScreen,
  },
  {name: 'Cart', label: 'Profil', icon: 'cart', component: CartScreen},
];
