import React, {useState, useEffect, createRef} from 'react';
import {View, Text, FlatList, Image, Dimensions} from 'react-native';
import styles from './styles';
import {MainMenu} from '@data';
import Ripple from 'react-native-material-ripple';
import {useNavigation} from '@react-navigation/native';
import AntDesign  from 'react-native-vector-icons/AntDesign';
import Foundation  from 'react-native-vector-icons/Foundation';

const Reward = (props) => {
  const navigation = useNavigation();
  const [menu, setMenu] = useState(MainMenu);
  
  const goToNextPage = () => {
   
    flatList?.current?.scrollToIndex({
      index: 1,
      animated: false,
    });
  };
  useEffect(() => {
    setMenu(MainMenu);
    const interval = setInterval(() => {
      goToNextPage();
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  const onPressDetail = (item) => {
    navigation.navigate('DetailScreen', {item});
  };
  const onPressMore = () => {
    navigation.navigate('FeedScreen');
  };
  const renderItem = ({item, index}) => {
    return (
      <Ripple  onPress={() => onPressDetail(item)}>
        <Image source={require('../../../Assets/images/banner.png')} style={styles.sliderItems}/>
        <View style={{backgroundColor:'#ffdd61',borderRadius:5, position:'absolute', right:20, top:10, padding:5,}}>
          <Text style={{color:'#fff'}}>100 Points</Text>
        </View>
      </Ripple>
    );
  };
  
  const keyExtractor = (item, index) => {
    return index.toString();
  };
  const flatList = createRef();

  return (
    <View style={styles.container}>
      <View style={styles.rowTitle}>
        <Text style={styles.titlePri}>{props.title}</Text>
        <Text style={styles.titleGreen}>Lihat Semua</Text>
      </View>
      <FlatList
        keyExtractor={keyExtractor}
        snapToAlignment={'start'}
        data={menu}
        renderItem={renderItem}
        flatListRef={React.createRef()}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Reward;
