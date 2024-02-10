import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

// Assets
import NewsIcon from '../../assets/media/svg/news-icon.svg';
import SettingsIcon from '../../assets/media/svg/settings-icon.svg';

// Screens
import NewsScreen from '../../screens/News';
import SettingsScreen from '../../screens/Settings';

// Styles
import styles from './styles';
import {Colors} from '../../styles/global';

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarActiveTintColor: Colors.primary,
      }}>
      <Tab.Screen
        name="News"
        component={NewsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <NewsIcon
              width={24}
              height={24}
              fill={focused ? Colors.primary : '#8F8F8F'}
              style={styles.tabBarIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <SettingsIcon
              width={24}
              height={24}
              fill={focused ? Colors.primary : '#8F8F8F'}
              style={styles.tabBarIcon}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
