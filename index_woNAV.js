/** @format */
import React from 'react';
import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import App from './App';
import { name as appName } from './app.json';
import configureStore from './src/store/configureStore';


Navigation.registerComponent(`${appName}.WelcomeScreen`, () => () => (
  <Provider store={configureStore()}>
    <App />
  </Provider>
));

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      component: {
        name: `${appName}.WelcomeScreen`,
      },
    },
  });
});
