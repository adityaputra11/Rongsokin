import React from 'react';
import {BottomMenu} from '@data';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {responsiveFont, colorTheme} from '@util';

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator>
      {BottomMenu.map((item) => (
        <Tab.Screen
          key={item.name}
          name={item.name}
          component={item.component}
          options={{
            tabBarLabel: ({color, size, focused}) => (
              // eslint-disable-next-line react-native/no-inline-styles
              <Text
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  color: focused ? colorTheme.primaryColor :  colorTheme.disableColor,
                  fontSize: responsiveFont(10),
                  marginBottom: 5,
                }}>
                {item.label}
              </Text>
            ),
            tabBarIcon: ({color, size, focused}) => (
              <MaterialCommunityIcons
                name={item.icon}
                color={focused ? colorTheme.alternateColor : colorTheme.disableColor}
                size={size}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};
export default BottomTab;
