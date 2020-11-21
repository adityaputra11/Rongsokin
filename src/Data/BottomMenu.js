import EmptyScreen from '@screen/EmptyScreen';
import HomeScreen from '@screen/HomeScreen';

export const BottomMenu = [
  {name: 'Home', label: 'Beranda', icon: 'home', component: HomeScreen},
  {
    name: 'Pesan',
    label: 'Pesan',
    icon: 'message-processing',
    component: EmptyScreen,
  },
  {
    name: 'Transaksi',
    label: 'Transaksi',
    icon: 'sort-variant',
    component: EmptyScreen,
  },
  {name: 'Account', label: 'Profil', icon: 'account', component: EmptyScreen},
];
