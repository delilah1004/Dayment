import React from 'react';

import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import MainPage from '../pages/MainPage';
import AddPage from '../pages/AddPage';

const Tabs = createBottomTabNavigator();

const TabNavigator = ({ navigation }) => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName = Platform.OS === 'ios' ? 'ios-' : 'md-';

          if (route.name === 'MainPage') {
            iconName += 'apps-outline';
          } else if (route.name === 'AddPage') {
            iconName += 'add-circle-outline';
          }
          return (
            <Ionicons
              name={iconName}
              color={focused ? 'tomato' : 'grey'}
              size={26}
            />
          );
        },
      })}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: '#fff',
          borderTopColor: '#eee',
          height: 40,
          fontSize: 10,
        },
      }}
    >
      <Tabs.Screen name="MainPage" component={MainPage} />
      <Tabs.Screen name="AddPage" component={AddPage} />
    </Tabs.Navigator>
  );
};

export default TabNavigator;
