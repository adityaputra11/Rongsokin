import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BottomTab from '@components/Module/BottomTab';
import LoginScreen from '@screen/LoginScreen';

const Stack = createStackNavigator();
const Root = () => {
  return (
    <Stack.Navigator>
       <Stack.Screen
        name="LoginRoot"
        options={{
          headerShown: false,
        }}
        component={LoginScreen}
      />
      <Stack.Screen
        name="HomeRoot"
        options={{
          headerShown: false,
        }}
        component={BottomTab}
      />
    </Stack.Navigator>
  );
};

export default Root;
