import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

// Store
import {store} from './store';

// Navigation
import MainNavigator from './navigator/MainNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
