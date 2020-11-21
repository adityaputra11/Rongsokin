// In App.js in a new project

import * as React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Root from '@stack/Root';

function App() {
  return (
    <NavigationContainer>
       <StatusBar translucent backgroundColor={'transparent'} />
      <Root />
    </NavigationContainer>
  );
}

export default App;
