import React, {useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';

// Navigation
import BottomNavigation from './navigator/BottomNavigation';

const App = () => {
  const onLoaded = async () => {
    await BootSplash.hide({fade: true});
  };

  useEffect(() => {
    onLoaded();
  }, []);

  return (
    <NavigationContainer>
      <BottomNavigation />
    </NavigationContainer>
  );
};

export default App;
