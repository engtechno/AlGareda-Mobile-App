import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTranslation} from '../../../node_modules/react-i18next';

// Store
import {useAppSelector} from '../../store/hooks';

const Tab = createBottomTabNavigator();

// Assets
import NewsIcon from '../../assets/media/svg/news-icon.svg';
import SettingsIcon from '../../assets/media/svg/settings-icon.svg';

// Screens
import NewsScreen from '../../screens/News';
import SettingsScreen from '../../screens/Settings';

// Styles
import useStyles from './useStyles';
import useGlobalStyle from '../../hooks/useGlobalStyle';

const BottomNavigation = () => {
  const {t} = useTranslation();
  const {Colors} = useGlobalStyle();
  const {styles} = useStyles();
  const {mode} = useAppSelector(state => state.app);

  const getIconColor = (focused: boolean, mode: 'light' | 'dark') => {
    if (!focused) return '#8F8F8F';
    return mode === 'light' ? Colors.primary : '#427fdb';
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarActiveTintColor: mode === 'light' ? Colors.primary : '#427fdb',
        tabBarInactiveTintColor:
          mode === 'light' ? '#636363' : Colors.dark.text,
      }}>
      <Tab.Screen
        name="News"
        component={NewsScreen}
        options={{
          title: t('NEWS_PAGE_TITLE'),
          tabBarIcon: ({focused}) => (
            <NewsIcon
              width={24}
              height={24}
              fill={getIconColor(focused, mode)}
              style={styles.tabBarIcon}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: t('SETTINGS_PAGE_TITLE'),
          tabBarIcon: ({focused}) => (
            <SettingsIcon
              width={24}
              height={24}
              fill={getIconColor(focused, mode)}
              style={styles.tabBarIcon}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
