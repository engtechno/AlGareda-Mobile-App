import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Navigator
import BottomNavigation from '../BottomNavigation';

// Screens
import SingleNewsPage from '../../screens/SingleNewsPage';

// Models
import {RootStackParamList} from '../../models/navigation.model';

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
      <Stack.Screen name="SingleNews" component={SingleNewsPage} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
