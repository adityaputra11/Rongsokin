import React, {useState, useEffect, createRef} from 'react';
import {View, Text, FlatList, Image, Dimensions} from 'react-native';
import styles from './styles';
import {MainMenu} from '@data';
import Ripple from 'react-native-material-ripple';
import {useNavigation} from '@react-navigation/native';

const Discount = (props) => {
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
    const slideItem = index===1?styles.sliderItemsBigger:styles.sliderItems
    return (
      <Ripple style={{...slideItem, backgroundColor:item.color}} onPress={null}>
          <View style={styles.justRowContainer}>
        <View>
         <Text style={styles.title}>Rongsokin</Text>
            <View style={{...styles.justRow, marginTop:10}}>
              <Text style={styles.titleSec}>Penjualan Rongsok</Text>
              <Text style={styles.titleSub}>{item.category}</Text>
            </View>
          <Text style={styles.titleBig}>{item.weight}</Text>
         </View>
         <View>
         <Image source={{uri:item.image}} style={styles.img}/>
         </View>
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
      </View>
      <FlatList
        keyExtractor={keyExtractor}
        horizontal
        snapToAlignment={'start'}
        data={menu}
        renderItem={renderItem}
        flatListRef={React.createRef()}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Discount;
