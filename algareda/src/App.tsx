import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

// Store
import {store} from './store';

// Navigation
import MainNavigator from './navigator/MainNavigator';

const App = () => {
  const linking = {
    prefixes: ['algareda://'],
    config: {
      screens: {
        BottomNavigation: {
          path: 'main',
        },
        SingleNews: {
          path: 'single-news/:title',
          parse: {
            title: (title: string) => title.replaceAll('-', ' '),
          },
        },
      },
    },
  };

  return (
    <NavigationContainer linking={linking}>
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
