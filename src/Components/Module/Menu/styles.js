import {StyleSheet, Dimensions} from 'react-native';
import {responsiveFont, colorTheme} from '@util';
import { color } from 'react-native-reanimated';
const WIDTH = Dimensions.get('window').width;
const shadow ={
  shadowColor:  colorTheme.disableColor,
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.29,
  shadowRadius: 4.65,
  elevation: 7,
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  font: {
    fontSize: responsiveFont(9.5),
  },
  fontGray: {
    fontSize: responsiveFont(9.5),
    color: '#ccc',
  },
  fontPercent: {
    fontSize: responsiveFont(9.5),
    color: '#f2000c',
    fontWeight: 'bold',
  },
  fontPrice: {
    fontSize: responsiveFont(15),
    fontWeight: 'bold',
  },
  fontFreeShipping: {
    fontSize: responsiveFont(11),
    fontWeight: 'bold',
    color: colorTheme.primaryColor,
    marginLeft: 10,
  },
  title: {
    fontSize: responsiveFont(15),
    fontWeight: 'bold',
    marginLeft: 10,
    marginBottom: 10,
    color:colorTheme.disableColor
  },
  titleGreen: {
    fontSize: responsiveFont(13),
    fontWeight: 'bold',
    marginTop:5,
    color: colorTheme.primaryColor,
  },
  subtitle: {
    fontSize: responsiveFont(10),
    marginLeft: 10,
  },
  item: {
    width: WIDTH * 0.23,
    height: WIDTH * 0.23,
    marginHorizontal:17,
    backgroundColor:'#fff',
    borderRadius:10,
    ...shadow,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    marginBottom:5
  },
  itemBigger: {
    width: WIDTH * 0.27,
    height: WIDTH * 0.27,
    marginHorizontal:12,
    backgroundColor:'#fff',
    borderRadius:10,
    ...shadow,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
    marginBottom:5
  },
  itemPrice: {
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    // alignItems: 'center',
  },
  rowTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
  },
  percent: {
    padding: 5,
    backgroundColor: '#ffc4c7',
    borderRadius: 5,
    marginRight: 5,
  },
  img:{
    width:50,
    height:50
  }
});

export default styles;
