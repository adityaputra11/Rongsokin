import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
},
searchIcon: {
    padding: 10,
    backgroundColor:'#fff',
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,
},
input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    borderRadius:10,
    backgroundColor: '#fff',
    color: '#424242',
},
});

export default styles;
