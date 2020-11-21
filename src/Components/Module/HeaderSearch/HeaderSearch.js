import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ripple from 'react-native-material-ripple';
import {useNavigation} from '@react-navigation/native';
import {colorTheme} from '../../../Util';
// import {useRoute} from '@react-navigation/native';

const HeaderSearch = (props) => {
  const navigation = useNavigation();
  //   const route = useRoute();
  const onPressFav = () => {
    navigation.navigate('SearchScreen');
  };
  return (
    <View>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={styles.statusBar}
      />
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={styles.container}>
        <View style={styles.row}>
          <View>
          <Ripple style={styles.input} onPress={onPressFav}>
            <View style={styles.justRow}>
              <Text style={styles.smfont}>Lokasi anda</Text>
              <AntDesign
                name={'down'}
                color={'#fff'}
                size={10}
              />
            </View>
          </Ripple>
          <Ripple style={styles.input} onPress={onPressFav}>
            <View style={styles.justRow}>
              <Entypo
                name={'location-pin'}
                color={'#fff'}
                size={20}
              />
              <Text style={styles.font}>Kramat Pela</Text>
            </View>
          </Ripple>
          </View>
         
          <Ripple style={styles.padding} onPress={null}>
            <FontAwesome
              name={'bell'}
              color={'#fff'}
              size={25}
            />
            <View style={styles.notif}/>
          </Ripple>
        </View>
      </View>
    </View>
  );
};

export default HeaderSearch;
