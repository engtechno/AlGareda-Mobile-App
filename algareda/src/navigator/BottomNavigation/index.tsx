import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

// Screens
import NewsScreen from '../../screens/News';
import SettingsScreen from '../../screens/Settings';

const BottomNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="News" component={NewsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
