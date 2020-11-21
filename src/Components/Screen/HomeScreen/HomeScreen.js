import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import styles from './styles';
import Carousel from '@components/Module/Carousel';
import HeaderSearch from '@components/Module/HeaderSearch';
import Discount from '@components/Module/Discount';
import Menu from '@components/Module/Menu';
import {ScrollView} from 'react-native-gesture-handler';
import {StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const [headerScroll, setHeaderScroll] = useState(0);
  const navigation = useNavigation();
  //   const route = useRoute();
  const onPressMenu = () => {
    navigation.navigate('SearchScreen');
  };
  useEffect(() => {
    // setHeaderScroll(0);
    console.log(headerScroll);
    // return () => setHeaderScroll(0);
  }, [headerScroll]);

  return (
    <View style={styles.container}>
         <HeaderSearch scroll={headerScroll} color="transparent" />
      <ScrollView
        onScroll={(event) => {
          setHeaderScroll(event.nativeEvent.contentOffset.y);
        }}
        style={styles.position}>
        <Carousel key={'carousel'} />
        <Menu key={'promo'} title={'Terlaris Untukmu'} />
        <Discount key={'product'} title={'Produk Terbaru'} />
      </ScrollView>
    </View>
  );
};
HomeScreen.navigationOptions = {
  title: 'Home',
};

export default HomeScreen;
