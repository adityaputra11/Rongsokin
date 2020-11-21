import {StyleSheet, Dimensions} from 'react-native';
import {responsiveFont, colorTheme} from '@util';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sliderItems: {
    height: Dimensions.get('window').height * 0.175,
    width: Dimensions.get('window').width,
    padding:10,
    justifyContent:'flex-end'
  },
  textHead:{
    fontSize: responsiveFont(12),
    fontWeight:'bold',
    color:colorTheme.secondaryColor,
  },
  textSub:{
    fontSize: responsiveFont(10),
    color:colorTheme.alternateColor,
  },
  overlay:{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity:0.4,
    backgroundColor:colorTheme.primaryColor
  },
  overlay:{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity:0.2,
    backgroundColor:colorTheme.primaryColor
  },
  dot: {
    position: 'absolute',
  },
});

export default styles;
