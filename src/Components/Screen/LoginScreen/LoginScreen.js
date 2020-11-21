import React from 'react';
import {View, Text, Image} from 'react-native';
import Ripple from 'react-native-material-ripple';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { colorTheme, responsiveFont } from '../../../Util';
import { TextInput } from 'react-native-gesture-handler';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const LoginScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
    
      <View style={{flex:2, justifyContent:'center', alignItems:'center'}}>
        <Image 
        source={{uri:'https://img.icons8.com/dusk/64/000000/donate.png'}}
        style={{width:100, height:100}}/>
          <Text style={{color:colorTheme.primaryColor, fontWeight:'bold', fontSize:responsiveFont(18)}}>Rongsokin</Text>
      </View>
      <View style={{flex:1, backgroundColor:colorTheme.primaryColor, padding:15, marginTop:10}}>
        <Text style={{color:'#fff', fontSize:responsiveFont(20), fontWeight:'bold'}}>Selamat Datang !</Text>
        <Text style={{color:'#fff', fontSize:responsiveFont(12)}}>Penyelamat Lingkungan</Text>
       
       <View style={{paddingHorizontal:20}}>   
           <TextInput style={{backgroundColor:'#fff', borderRadius:10,marginTop:20}} placeholder={"           Nomor Handphone"}/>
          <View style={{flexDirection:'row', justifyContent:"space-between", marginTop:20}}>
          <Ripple style={{paddingVertical:15, paddingHorizontal:55, backgroundColor:'#fff', borderRadius:10}} onPress={()=>navigation.navigate('HomeRoot')}>
              <Text style={{color:colorTheme.primaryColor, fontWeight:'bold'}}>Daftar</Text>
           </Ripple>
          <Ripple style={{paddingVertical:15, paddingHorizontal:55, backgroundColor:colorTheme.alternateColor, borderRadius:10}} onPress={()=>navigation.navigate('HomeRoot')}>
            <Text style={{color:colorTheme.disableColor, fontWeight:'bold'}}>Masuk</Text>
          </Ripple>
          </View>
          </View>
      </View>
    
    </View>
  );
};

export default LoginScreen;
