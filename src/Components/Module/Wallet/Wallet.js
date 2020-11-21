import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Image, Dimensions} from 'react-native';
import styles from './styles';
import {MainMenu} from '@data';
import Ripple from 'react-native-material-ripple';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';

const Wallet = (props) => {
  const navigation = useNavigation();
  const [menu, setMenu] = useState(MainMenu);
  
  useEffect(() => {
    setMenu(MainMenu);
  }, []);
  const onPressDetail = (item) => {
    navigation.navigate('DetailScreen', {item});
  };
  const onPressMore = () => {
    navigation.navigate('FeedScreen');
  };
  const renderItem = ({item, index}) => {
    return (
      <Ripple onPress={() => onPressDetail(item)}>
      <View style={styles.item} >
         <Image source={{uri:item.walletIcon}} style={styles.img}/>
         <View style={{flexDirection:'row',justifyContent:'space-between'}}>
         <View>
            <Text style={styles.titleGreen}>{item.wallet}</Text>
            <Text style={styles.titleGreenSm}>{item.credit}</Text>
          </View>
            <Entypo name={"squared-plus"} color={"#f5d418"} size={15}/>
          </View>
      </View>
      </Ripple>
    );
  };
  const keyExtractor = (item, index) => {
    return index.toString();
  };

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={keyExtractor}
        horizontal
        snapToAlignment={'start'}
        snapToInterval={Dimensions.get('window').width * 0.27}
        data={menu}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Wallet;
