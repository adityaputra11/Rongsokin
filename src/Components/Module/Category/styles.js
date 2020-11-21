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
    padding: 0,
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
  titlePri: {
    fontSize: responsiveFont(15),
    fontWeight: 'bold',
    marginLeft: 20,
    marginBottom: 10,
    color:colorTheme.disableColor
  },
  titleGreen: {
    fontSize: responsiveFont(13),
    fontWeight: 'bold',
    color: colorTheme.primaryColor,
  },
  titleGreenSm: {
    fontSize: responsiveFont(13),
    fontWeight: 'bold',
    marginTop:5,
    color: colorTheme.primaryColor,
  },
  subtitle: {
    fontSize: responsiveFont(10),
  },
  item: {
    width: WIDTH * 0.25,
    height: WIDTH * 0.30,
    backgroundColor:colorTheme.secondaryColor,
    marginHorizontal:10,
    marginBottom:10,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    alignSelf:'center',
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
    width:25,
    height:25
  }
});

export default styles;
