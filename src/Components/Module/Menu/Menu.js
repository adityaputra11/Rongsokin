import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Image, Dimensions} from 'react-native';
import styles from './styles';
import {MainMenu} from '@data';
import Ripple from 'react-native-material-ripple';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Fontisto';

const Menu = (props) => {
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
      <Ripple style={index===1?styles.itemBigger:styles.item} onPress={() => onPressDetail(item)}>
         <Image source={{uri:item.image}} style={styles.img}/>
          <Text style={styles.titleGreen}>{item.label}</Text>
      </Ripple>
    );
  };
  const keyExtractor = (item, index) => {
    return index.toString();
  };

  return (
    <View style={styles.container}>
      <View style={styles.rowTitle}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
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

export default Menu;
