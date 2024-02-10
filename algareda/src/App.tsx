import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BootSplash from 'react-native-bootsplash';
import {Provider} from 'react-redux';

// Store
import {store} from './store';

// Navigation
import MainNavigator from './navigator/MainNavigator';

const App = () => {
  const onLoaded = async () => {
    await BootSplash.hide({fade: true});
  };

  useEffect(() => {
    onLoaded();
  }, []);

  return (
    <NavigationContainer>
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
