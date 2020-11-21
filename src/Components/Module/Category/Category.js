import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, Image, Dimensions} from 'react-native';
import styles from './styles';
import {MainMenu} from '@data';
import Ripple from 'react-native-material-ripple';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Fontisto';
import LinearGradient from 'react-native-linear-gradient';

const Category = (props) => {
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
      <Ripple onPress={null}>
      <LinearGradient colors={['#3CB371','#3CB371', '#7eb54e']} style={styles.item}  start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
        <View style={{backgroundColor:'#fff', padding:26, borderRadius:5,}}>
          <Image source={{uri:item.image}} style={styles.img}/>
         </View>
        <Text style={{color:'#fff', marginTop:5,}}>{item.category} ></Text>
      </LinearGradient>
      </Ripple>
    );
  };
  const keyExtractor = (item, index) => {
    return index.toString();
  };

  return (
    <View style={styles.container}>
      <View style={styles.rowTitle}>
        <Text style={styles.titlePri}>{props.title}</Text>
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

export default Category;
