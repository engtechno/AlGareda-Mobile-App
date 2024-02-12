import React, {useEffect} from 'react';
import BootSplash from 'react-native-bootsplash';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Navigator
import BottomNavigation from '../BottomNavigation';

// Screens
import SingleNewsPage from '../../screens/SingleNewsPage';

// Models
import {RootStackParamList} from '../../models/navigation.model';

// Hooks
import useInit from '../../hooks/useInit';

const Stack = createNativeStackNavigator<RootStackParamList>();

const MainNavigator = () => {
  const {done} = useInit();

  const onLoaded = async () => {
    if (done) await BootSplash.hide({fade: true});
  };

  useEffect(() => {
    onLoaded();
  }, [done]);

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
