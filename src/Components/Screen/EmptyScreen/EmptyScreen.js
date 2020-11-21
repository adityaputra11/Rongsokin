import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const EmptyScreen = () => {
  return (
    <View style={styles.container}>
    
      <View style={styles.titleIcon}>
     
          <Text style={styles.textIcon}>Segera Hadir</Text>
      </View>
    
    </View>
  );
};

export default EmptyScreen;
