import {StyleSheet, Dimensions} from 'react-native';
import {responsiveFont, colorTheme} from '@util';
import { color } from 'react-native-reanimated';
const WIDTH = Dimensions.get('window').width;
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
  img:{
      width:50,
      height:50,
  },
  title: {
    fontSize: responsiveFont(13),
    fontWeight: 'bold',
    color:colorTheme.secondaryColor
  },
  titleBig: {
    fontSize: responsiveFont(17),
    fontWeight: 'bold',
    color:colorTheme.secondaryColor
  },
  titlePri: {
    fontSize: responsiveFont(15),
    fontWeight: 'bold',
    marginBottom:10,
    marginLeft:10,
    color:colorTheme.disableColor
  },
  titleSec: {
    fontSize: responsiveFont(15),
    color:colorTheme.secondaryColor
  },
  titleSub: {
    fontSize: responsiveFont(15),
    fontWeight: 'bold',
    color:colorTheme.secondaryColor,
    marginLeft:5,
  },
  titleGreen: {
    fontSize: responsiveFont(11),
    fontWeight: 'bold',
    color: colorTheme.primaryColor,
    marginLeft: 10,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: responsiveFont(10),
    marginLeft: 10,
  },
  justRow:{
    flexDirection:'row',
  },
  justRowContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  sliderItems: {
    width: WIDTH * 0.8,
    borderRadius:10,
    backgroundColor:colorTheme.primaryColor,
    marginHorizontal:7,
    marginBottom:5,
    padding:15,
    alignSelf:'center'
  },
  sliderItemsBigger: {
    width: WIDTH * 0.8,
    borderRadius:10,
    backgroundColor:colorTheme.primaryColor,
    marginHorizontal:7,
    marginBottom:5,
    paddingLeft:15,
    paddingRight:15,
    paddingTop:25,
    paddingBottom:25,
    alignSelf:'center'
  },
  item: {
    margin: 5,
    paddingBottom: 5,
    borderWidth: 0.5,
    borderColor: '#ccc',
    width: WIDTH * 0.33,
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
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
});

export default styles;
